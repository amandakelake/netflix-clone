import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen m-4">
        <h1 className="mb-1">hello home page</h1>
        <Link href={'/sign-up'}>
            <Button>Sign Up</Button>
        </Link>
        <Link href={'/login'} className="m-1">
            <Button>Login</Button>
        </Link>
    </main>
  );
}
