import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/common/db';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

/**
 * https://authjs.dev/getting-started/providers/github
 * https://authjs.dev/getting-started/providers/google
 * https://authjs.dev/getting-started/providers/nodemailer
 */
export const AuthConfig = {
	adapter: PrismaAdapter(prisma),
	// NextAuth provider默认会读取对应的环境变量，见.env里的AUTH_GITHUB_ID、AUTH_GITHUB_SECRET等
	providers: [
		GitHubProvider({
			client: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string
		} as any),
		GoogleProvider({
			client: process.env.AUTH_GOOGLE_ID as string,
			clientSecret: process.env.AUTH_GOOGLE_SECRET as string
		} as any),
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
} as AuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(AuthConfig)
