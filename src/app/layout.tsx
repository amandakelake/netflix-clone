import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from '@/components/NextAuthProvider';
import UserAvatar from '@/components/UserAvatar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Next/Prisma/Supabase/Next-Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <UserAvatar />
        {children}
      </NextAuthProvider>
      </body>
    </html>
  );
}
