import NextAuth from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Check if the email domain is 'beloit.edu'
      if (user.email && user.email.endsWith("@beloit.edu")) {
        return true;
      } else {
        // If the email is not from 'beloit.edu', deny access
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return "http://localhost:3000/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
