import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contracts: defineTable({
    convexSignature: v.string(),
    nuraSignature: v.string(),
    convexName: v.string(),
    nuraName: v.string(),
    signedAt: v.number(),
    emailSent: v.boolean(),
  }),
});
