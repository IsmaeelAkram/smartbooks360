'use client';

import CalendlyButton from '@/components/calendly';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';
import { useEffect } from 'react';

export default function ContactPage() {
	useEffect(() => {
		window.Calendly.initInlineWidget({
			url: 'https://calendly.com/aakram10',
			parentElement: document.getElementById('calendly-embed'),
		});
	}, []);
	return (
		<>
			<CalendlyButton />
			<PageContainer>
				<PaddingContainer>
					<Header />
					<h1 className="my-10">Contact us</h1>
					<div className="flex flex-col justify-center items-center w-full">
						<h3 className="text-center mb-10">
							Email us at{' '}
							<a
								href="mailto:akram@smartbooks360.com"
								className="font-bold underline underline-offset-4"
							>
								akram@smartbooks360.com
							</a>{' '}
							<br />
							<br />
							<span className="orange">OR </span>
							schedule a meeting:
						</h3>
					</div>
					<div id="calendly-embed" style={{ minWidth: '320px', height: '700px' }}></div>
				</PaddingContainer>
			</PageContainer>
		</>
	);
}
