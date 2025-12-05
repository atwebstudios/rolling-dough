import { Resend } from 'resend';

const rateLimitStore = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }
  
  const requests = rateLimitStore.get(ip);
  const recentRequests = requests.filter(time => now - time < hour);
  rateLimitStore.set(ip, recentRequests);
  
  if (recentRequests.length >= 20) {
    return { limited: true };
  }
  
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  
  return { limited: false };
}

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
  const rateLimitCheck = checkRateLimit(ip);
  
  if (rateLimitCheck.limited) {
    return res.status(429).json({
      success: false,
      message: 'You have submitted too many inquiries. Please wait an hour before submitting another inquiry. We appreciate your interest!'
    });
  }
  
  await handleEmailRequest(req, res);
}

async function handleEmailRequest(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      res.status(500).json({ error: 'Server configuration error: Missing API key' });
      return;
    }

    const { name, email, phone, eventDate, guestCount, package: packageType, message, addOns = [] } = req.body;

    if (!name || !email || !phone || !eventDate || !guestCount || !packageType || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const businessEmail = process.env.RESEND_BUSINESS_EMAIL;
    const businessPhone = '0478 540 160';
    const businessPhone2 =  '0433 770 065';

    if (!businessEmail) {
      console.error('RESEND_BUSINESS_EMAIL is not configured');
      res.status(500).json({ error: 'Server configuration error: Missing business email' });
      return;
    }

    const submissionTime = new Date().toISOString();

    const businessEmailResponse = await resend.emails.send({
      from: senderEmail,
      to: businessEmail,
      subject: `New Event Inquiry from ${name}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Package:</strong> ${packageType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Number of Guests:</strong> ${guestCount}</p>
        <p><strong>Add-ons:</strong> ${Array.isArray(addOns) && addOns.length ? addOns.join(', ') : 'None'}</p>
        <p><strong>Business Contact:</strong> ${businessPhone}${businessPhone2 ? ' / ' + businessPhone2 : ''}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (businessEmailResponse.error) {
      console.error('Error sending business email:', businessEmailResponse.error);
      res.status(500).json({ error: 'Failed to send business email', details: businessEmailResponse.error });
      return;
    }

    try {
      await resend.emails.send({
        from: senderEmail,
        to: email,
        subject: 'We Received Your Event Inquiry - Rolling Dough',
        html: `
          <h2>Thank You for Your Inquiry!</h2>
          <p>Hi ${name},</p>
          <p>We've received your event inquiry for <strong>${eventDate}</strong> with <strong>${guestCount} guests</strong>.</p>
          <p>Our team will review your request and get back to you within 24 hours.</p>
          <p><strong>Event Details:</strong></p>
          <ul>
            <li>Package: ${packageType}</li>
            <li>Add-ons: ${Array.isArray(addOns) && addOns.length ? addOns.join(', ') : 'None'}</li>
            <li>Date: ${eventDate}</li>
            <li>Guests: ${guestCount}</li>
          </ul>
          <p>If you need to reach us directly, please call: <strong>${businessPhone}${businessPhone2 ? ' / ' + businessPhone2 : ''}</strong></p>
          <p>Best regards,<br>Rolling Dough Team</p>
        `
      });
    } catch (customerEmailError) {
      console.warn('Warning: Could not send customer confirmation email:', customerEmailError.message);
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry received. We will contact you shortly.',
      businessEmailId: businessEmailResponse.data.id
    });
  } catch (error) {
    console.error('Error in send-email handler:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
