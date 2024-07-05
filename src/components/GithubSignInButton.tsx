import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from '@/common/auth';

export default function GithubSignInButton() {
  return (
      <form action={async () => {
          'use server'
          await signIn('github')
      }}>
          <Button variant="outline" size="icon">
              <GithubIcon className="w-4 h-4" />
          </Button>
      </form>
  );
}
