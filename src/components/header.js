'use client';

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
				<img src="/logo-contact.svg" className="mb-2 !w-full" />
				{/* <p>support@smartbooks360.com &bull; (347) 470-9069</p> */}
			</LogoContainer>
			{/* <div className="sm:col-span-4 flex items-end justify-center gap-10"></div> */}
		</div>
	);
}
