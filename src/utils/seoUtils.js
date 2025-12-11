/**
 * Utility functions for managing SEO meta tags dynamically
 */

export const updateMetaTags = (config) => {
  const {
    title,
    description,
    image = 'https://rollingdough.com.au/hero.png',
    url = 'https://rollingdough.com.au/',
    type = 'website',
    keywords = 'woodfire pizza catering, Perth events, corporate catering, wedding catering'
  } = config;

  // Update title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywords;

  // Update Open Graph tags
  updateOrCreateMetaTag('property', 'og:title', title);
  updateOrCreateMetaTag('property', 'og:description', description);
  updateOrCreateMetaTag('property', 'og:image', image);
  updateOrCreateMetaTag('property', 'og:url', url);
  updateOrCreateMetaTag('property', 'og:type', type);

  // Update Twitter Card tags
  updateOrCreateMetaTag('name', 'twitter:title', title);
  updateOrCreateMetaTag('name', 'twitter:description', description);
  updateOrCreateMetaTag('name', 'twitter:image', image);

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

const updateOrCreateMetaTag = (attr, attrValue, content) => {
  let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, attrValue);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

// Scroll to top when page changes
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
