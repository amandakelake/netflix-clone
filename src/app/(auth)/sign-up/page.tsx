import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="m-4">
            <h1>sign-up page</h1>
            <Link href={'/login'}>
                <Button>
                    Login
                </Button>
            </Link>
        </div>
    );
}
