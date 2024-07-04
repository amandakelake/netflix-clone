import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
	return (
		<main className="min-h-screen m-4">
			<Link href={'/sign-up'}>
				<Button>Sign Up</Button>
			</Link>
			<Link href={'/login'} className="m-1">
				<Button>Login</Button>
			</Link>
		</main>
	);
}
