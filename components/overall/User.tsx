import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { UserType } from '@/types/session';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

function AvatarProfile(session: UserType) {
  return (
    <Avatar>
      <AvatarImage
        className="mt-2 h-8 w-8 rounded-full"
        src={session.image}
        alt={session.name}
      />
      <AvatarFallback className="mt-2 h-8 w-8 rounded-full">
        {session.name
          .split(' ')
          .map((name) => name[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}

export default function UserDropdown(session: UserType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarProfile {...session} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="font-semibold">{session.name}</div>
          <div className="text-xs text-gray-500">{session.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${session.id}`}>Mon profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/profile">Parametre</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
        >
          Se Déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
