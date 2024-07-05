import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/common/db';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

/**
 * https://authjs.dev/getting-started/installation
 * https://authjs.dev/getting-started/providers/github
 * https://authjs.dev/getting-started/providers/google
 * https://authjs.dev/getting-started/providers/nodemailer
 */
export const AuthConfig: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	// NextAuth provider默认会读取对应的环境变量，见.env里的AUTH_GITHUB_ID、AUTH_GITHUB_SECRET等
	providers: [GitHubProvider, GoogleProvider],
};

export const { handlers, signIn, signOut, auth } = NextAuth(AuthConfig)
