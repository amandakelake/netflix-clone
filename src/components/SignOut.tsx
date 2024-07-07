'use server'
import { signOut } from "@/common/auth";
import { Button } from '@/components/ui/button';

export default async function SignOut() {
	return (
			<form action={async () => {
				"use server";
				await signOut()
			}}>
				<Button>Log Out</Button>
			</form>
	)
}
