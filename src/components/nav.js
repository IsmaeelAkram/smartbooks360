'use client';
import Link from 'next/link';
import styled from 'styled-components';

const navLinks = [
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

const StyledLink = styled(Link)`
	padding: 5px 10px;
	border-radius: 10px;
	transition: background-color 0.3s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export default function Nav() {
	return (
		<div className="nav flex justify-center items-start h-full">
			{navLinks.map((link) => (
				<StyledLink key={link.href} href={link.href}>
					{link.label}
				</StyledLink>
			))}
		</div>
	);
}
