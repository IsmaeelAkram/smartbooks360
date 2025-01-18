import Link from 'next/link';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

export default function Nav() {
	return (
		<div className="nav flex justify-center items-start h-full gap-5">
			{navLinks.map((link) => (
				<Link key={link.href} href={link.href}>
					{link.label}
				</Link>
			))}
		</div>
	);
}
