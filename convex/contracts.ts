import { mutation, action, query } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const saveContract = mutation({
  args: {
    convexSignature: v.string(),
    nuraSignature: v.string(),
    convexName: v.string(),
    nuraName: v.string(),
  },
  handler: async (ctx, args) => {
    const contractId = await ctx.db.insert("contracts", {
      convexSignature: args.convexSignature,
      nuraSignature: args.nuraSignature,
      convexName: args.convexName,
      nuraName: args.nuraName,
      signedAt: Date.now(),
      emailSent: false,
    });
    return contractId;
  },
});

export const getContract = query({
  args: {
    contractId: v.id("contracts"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contractId);
  },
});

export const markEmailSent = mutation({
  args: {
    contractId: v.id("contracts"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.contractId, { emailSent: true });
  },
});

export const sendContractEmail = action({
  args: {
    contractId: v.id("contracts"),
  },
  handler: async (ctx, args) => {
    const contract = await ctx.runQuery(api.contracts.getContract, {
      contractId: args.contractId,
    });

    if (!contract) {
      throw new Error("Contract not found");
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${appUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        convexSignature: contract.convexSignature,
        nuraSignature: contract.nuraSignature,
        convexName: contract.convexName,
        nuraName: contract.nuraName,
        nuraPersonalId: contract.nuraName,
        signedAt: contract.signedAt,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    await ctx.runMutation(api.contracts.markEmailSent, {
      contractId: args.contractId,
    });

    return { success: true };
  },
});
