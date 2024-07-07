import { ReactNode } from "react";
import { auth } from '@/common/auth';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: ReactNode }) {
	const session = await auth();
	if (!session) {
		return redirect("/login");
	}
	return children;
}
