declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

async function sendCAPI(event_name: string, custom_data?: Record<string, any>) {
  try {
    await fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name,
        event_source_url: typeof window !== "undefined" ? window.location.href : "",
        custom_data,
      }),
    });
  } catch {
    // silencioso — el pixel del navegador ya capturó el evento
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
  sendCAPI("ViewContent", { content_name: contentName, content_category: contentCategory, currency: "COP", value });
}

export function trackLead(contentName: string, contentCategory: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: contentName,
      content_category: contentCategory,
    });
  }
  sendCAPI("Lead", { content_name: contentName, content_category: contentCategory });
}

export function trackPurchase(value: number, contentName: string, contentCategory: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", {
      currency: "COP",
      value,
      content_name: contentName,
      content_category: contentCategory,
    });
  }
  sendCAPI("Purchase", { currency: "COP", value, content_name: contentName, content_category: contentCategory });
}
