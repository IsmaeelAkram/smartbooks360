'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect } from 'react';

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

const StyledLink = styled(Link)`
	padding: 5px 10px;
	border-radius: 10px;
	transition: background-color 0.3s;
	background-color: ${({ isActive }) => (isActive ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
	color: ${({ isActive }) => (isActive ? 'white' : 'inherit')};
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default function Nav({ className }) {
	const pathname = usePathname();
	useEffect(() => {
		console.log('pathname: ', pathname);
	}, [pathname]);
	return (
		<div className={className + ' nav flex justify-center items-center h-full gap-1'}>
			{navLinks.map((link) => (
				<StyledLink key={link.href} href={link.href} isActive={pathname === link.href}>
					{link.label}
				</StyledLink>
			))}
		</div>
	);
}
