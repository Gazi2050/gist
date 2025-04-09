'use client';

import { NavLinkProps } from '@/constants/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navLinkClass = 'hover:bg-gray-50/15 px-3 py-2 rounded-md duration-300';

export default function NavLink({ label, href }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${navLinkClass} ${isActive ? 'bg-gray-50/15' : ''}`}
        >
            {label}
        </Link>
    );
}
