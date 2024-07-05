import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { auth } from '@/common/auth';

export const NextAuthProvider = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
};
