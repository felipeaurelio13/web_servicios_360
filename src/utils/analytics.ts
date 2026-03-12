export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Initialize your analytics service here (e.g., Google Analytics, Mixpanel)
  if (typeof window !== 'undefined') {
    // Example with Google Analytics
    window.gtag?.('event', eventName, properties);
  }
}; 