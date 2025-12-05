/**
 * Validation utility functions for form inputs
 */

/**
 * Validates a name - must contain only letters and spaces
 * @param {string} name - The name to validate
 * @returns {string} - Error message if invalid, empty string if valid
 */
export const validateName = (name) => {
  if (!name.trim()) return 'Name is required';
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return 'Name can only contain letters and spaces';
  }
  return '';
};

/**
 * Validates an email address using RFC 5322 compliant pattern
 * @param {string} email - The email to validate
 * @returns {string} - Error message if invalid, empty string if valid
 */
export const validateEmail = (email) => {
  if (!email.trim()) return 'Email is required';
  // RFC 5322 compliant pattern
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

/**
 * Validates a phone number - must be 7-10 digits
 * @param {string} phone - The phone number to validate
 * @returns {string} - Error message if invalid, empty string if valid
 */
export const validatePhone = (phone) => {
  if (!phone.trim()) return 'Phone number is required';
  const digitsOnly = phone.replace(/\D/g, '');
  if (!/^\d+$/.test(digitsOnly)) {
    return 'Invalid phone number';
  }
  if (digitsOnly.length <= 7 || digitsOnly.length > 10) {
    return 'Invalid phone number';
  }
  return '';
};

/**
 * Validates guest count - must be between 30 and 500
 * @param {string|number} count - The guest count to validate
 * @returns {string} - Error message if invalid, empty string if valid
 */
export const validateGuestCount = (count) => {
  if (!count && count !== 0) return 'Number of guests is required';
  const num = parseInt(count, 10);
  if (num < 30) return 'Minimum 30 guests required';
  if (num > 500) return 'Maximum 500 guests allowed';
  return '';
};
