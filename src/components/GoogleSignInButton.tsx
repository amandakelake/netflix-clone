import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from '@/common/auth';
export default function GoogleSignInButton() {
  return (
    <form action={async () => {
        'use server'
        await signIn('google')
    }}>
        <Button variant="outline" size="icon">
            <Image src={'/google.svg'} width={6} height={6} alt="Google icon" className="w-6 h-6" />
        </Button>
    </form>
  );
}
