export const trackEvent = (eventName: string, eventData: any) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }

  // Hotjar
  if (window.hj) {
    window.hj('event', eventName, eventData);
  }
};

export const trackChatEvent = (eventType: string, data: any) => {
  trackEvent(`chat_${eventType}`, {
    ...data,
    timestamp: new Date().toISOString()
  });
};

export const trackConversion = (type: string, value: any) => {
  trackEvent('conversion', {
    type,
    value,
    timestamp: new Date().toISOString()
  });
};

// Add to window object for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
  }
} 