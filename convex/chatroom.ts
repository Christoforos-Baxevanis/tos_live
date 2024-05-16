import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const sendMessage = mutation({
  args: { 
    text: v.string() 
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("chatroom", { 
        text: args.text 
    });
  },
});

export const getMessages = query({
  handler:async (ctx) => {
    return ctx.db.query("chatroom").collect();
  }
})