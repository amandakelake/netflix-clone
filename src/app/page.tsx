import { auth } from '@/common/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
	const session = await auth()
	if (!session) {
		return redirect("/login");
	} else {
		return redirect('/home/movie/shows')
	}
}
