// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Page view tracking
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-Y0KT5X1ZS1', {
      page_title: title,
      page_location: url,
    });
  }
};

// Custom event tracking
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// AI Project click tracking
export const trackProjectClick = (projectName: string, projectUrl?: string) => {
  trackEvent('project_click', {
    project_name: projectName,
    project_url: projectUrl,
    event_category: 'AI_Projects',
    event_label: projectName,
  });
};

// Coming soon modal tracking
export const trackComingSoonModal = (projectName: string) => {
  trackEvent('coming_soon_modal', {
    project_name: projectName,
    event_category: 'Modal_Interaction',
    event_label: `${projectName}_coming_soon`,
  });
};

// Contact/CTA tracking
export const trackCTAClick = (ctaType: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    cta_location: ctaLocation,
    event_category: 'CTA_Interactions',
    event_label: `${ctaType}_${ctaLocation}`,
  });
};

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    event_category: 'User_Engagement',
    event_label: `scroll_${depth}%`,
  });
};

// Time on page tracking
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('time_on_page', {
    time_seconds: timeInSeconds,
    event_category: 'User_Engagement',
    event_label: `time_${timeInSeconds}s`,
  });
};

// Search term tracking (if search functionality added)
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'Search',
    event_label: searchTerm,
  });
};

// External link tracking
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    event_category: 'External_Links',
    event_label: url,
  });
};

// Error tracking
export const trackError = (errorMessage: string, errorLocation: string) => {
  trackEvent('error', {
    error_message: errorMessage,
    error_location: errorLocation,
    event_category: 'Errors',
    event_label: errorMessage,
  });
}; 