'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LogoContainer = styled.div`
	& img {
		width: 23vw;
	}
	& p {
		font-size: 1.4vw;
		text-wrap: nowrap;
	}
`;

export default function Header() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-6 mb-4 sm:mb-0">
			<LogoContainer className="sm:col-span-2 flex flex-col items-start justify-center select-none">
				<img src="/big-logo.svg" className="mb-2 !w-full" />
				{/* <p>support@smartbooks360.com &bull; (347) 470-9069</p> */}
			</LogoContainer>
			<div className="sm:col-span-4 flex items-start justify-end gap-10">
				<div className="nav flex justify-center items-center h-full gap-5">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/services">Services</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<div className="flex justify-center items-center h-full gap-5">
					<a
						href="https://www.linkedin.com/company/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/linkedin.svg" width={30} height={30} className="orange-svg" />
					</a>
					<a
						href="https://www.instagram.com/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/instagram.svg" width={30} height={30} className="orange-svg" />
					</a>
					<a
						href="https://www.facebook.com/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/facebook.svg" width={30} height={30} className="orange-svg" />
					</a>
				</div>
			</div>
		</div>
	);
}
