import CalendlyButton from '@/components/calendly';
import CalendlyInline from '@/components/calendlyInline';
import Footer from '@/components/footer';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';

export const metadata = {
	title: 'Contact Us | Smartbooks360',
	description: "Modern outsourced accounting solutions for today's small businesses",
};

export default function ContactPage() {
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
					<CalendlyInline />
				</PaddingContainer>
				<Footer />
			</PageContainer>
		</>
	);
}
