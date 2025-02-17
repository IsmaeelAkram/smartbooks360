'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './nav';

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
		<div className="grid grid-cols-6 mb-4 sm:mb-0">
			<LogoContainer className="col-span-2 flex flex-col items-start justify-center select-none">
				<Link href="/" className="sm:mb-2 sm:w-2/3 w-full">
					<img src="/big-logo.svg" alt="Smartbooks360" className="w-full" />
				</Link>
				{/* <p>support@smartbooks360.com &bull; (347) 470-9069</p> */}
			</LogoContainer>
			<div className="col-span-4 flex sm:flex-row sm:gap-0 gap-2 flex-col items-start justify-end">
				<Nav className="sm:ml-0 ml-auto" />
				<div className="sm:ml-10 ml-auto flex justify-center items-center h-full gap-3">
					<a
						href="https://www.linkedin.com/company/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/linkedin.svg" width={25} height={25} className="orange-svg" />
					</a>
					<a
						href="https://www.instagram.com/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/instagram.svg" width={25} height={25} className="orange-svg" />
					</a>
					<a
						href="https://www.facebook.com/smartbooks360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/facebook.svg" width={25} height={25} className="orange-svg" />
					</a>
				</div>
			</div>
		</div>
	);
}
