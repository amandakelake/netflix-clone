import { auth, signOut } from "@/common/auth";
import { Button } from '@/components/ui/button';

export default async function UserAvatar() {
	const session = await auth()

	if (!session) return <div>Not authenticated</div>

	return (
		<div>
			<h1>Hello {session.user?.name}</h1>
			{session?.user?.image && <img src={session.user.image} alt="User Avatar" />}
			<form action={async () => {
				"use server";
				await signOut()
			}}>
				<Button>Log Out</Button>
			</form>
		</div>
	)
}
