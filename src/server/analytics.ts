import { PostHog } from "posthog-node";

export function serverSideAnalytics() {

  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,             //The number of events to queue before sending to PostHog (flushing)
    flushInterval: 0,       //The interval in milliseconds between periodic flushes
  });

  return posthogClient;
}

const analyticsServerClient = serverSideAnalytics();

export default analyticsServerClient;