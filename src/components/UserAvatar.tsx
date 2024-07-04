import { auth } from "@/common/auth";

export default async function UserAvatar() {
	const session: any = await auth()

	if (!session) return <div>Not authenticated</div>

	return (
		<div>
			<h1>Hello {session.user?.name}</h1>
			<img src={session.user?.image} alt="User Avatar" />
		</div>
	)
}
