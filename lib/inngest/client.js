import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-finance-platform", // Unique app ID
  name: "ai-finance-platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
