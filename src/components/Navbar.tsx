import Image from "next/image";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import SignOut from '@/components/SignOut';
import { auth } from '@/common/auth';

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Tv Shows", href: "/home/movie/shows" },
  { name: "Movies", href: "/home/movie/movies" },
  { name: "Recently Added", href: "/home/movie/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default async function Navbar() {
  const session = await auth()
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={'/netflix_logo.svg'} width={56} height={56} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => <li key={idx}><Link className="text-gray-300 font-normal text-sm" href={link.href}>{link.name}</Link></li>)}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback className="rounded-sm">NF</AvatarFallback>
          </Avatar>
        </Button>
        <SignOut />
      </div>
    </div>
  );
}
