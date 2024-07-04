"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => {}} variant="outline" size="icon">
      <Image src={'/google.svg'} width={6} height={6} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}
