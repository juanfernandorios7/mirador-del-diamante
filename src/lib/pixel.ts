declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function trackViewContent(contentName: string, contentCategory: string, value: number) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
      currency: "COP",
      value,
    });
  }
}

export function trackLead(contentName: string, contentCategory: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: contentName,
      content_category: contentCategory,
    });
  }
}
