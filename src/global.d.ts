type GtagEvent = (
  command: "event",
  eventName: string,
  params?: Record<string, string | number | boolean>
) => void;

declare global {
  interface Window {
    gtag: GtagEvent;
  }
}

export {};
