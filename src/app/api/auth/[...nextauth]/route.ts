import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/common/db';

/**
 * https://authjs.dev/getting-started/providers/github
 * https://authjs.dev/getting-started/providers/google
 * https://authjs.dev/getting-started/providers/nodemailer
 */
const handler = NextAuth({
	adapter: PrismaAdapter(prisma),
	// NextAuth provider默认会读取对应的环境变量，见.env里的AUTH_GITHUB_ID、AUTH_GITHUB_SECRET等
	providers: [
		GitHubProvider,
		GoogleProvider,
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM
		})
	],
} as AuthOptions)

export { handler as GET, handler as POST }
