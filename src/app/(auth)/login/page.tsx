import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
      <div className="m-4">
          <h1>Login page</h1>
          <Link href={'/sign-up'}>
              <Button>
                  Sign Up
              </Button>
          </Link>
      </div>
  );
}
