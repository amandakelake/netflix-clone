"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from 'next-auth/react';

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn('google')} variant="outline" size="icon">
      <Image src={'/google.svg'} width={6} height={6} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}
