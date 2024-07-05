import { auth } from '@/common/auth';
import { redirect } from 'next/navigation';
import UserAvatar from '@/components/UserAvatar';
import HomePage from '@/components/pages/home';

export default async function Page() {
	const session = await auth()
	if (!session) {
		return redirect("/login");
	}
	return (
		<main className="min-h-screen m-4">
			<HomePage />
		</main>
	);
}
