import Button from '@/components/button';
import Header from '@/components/header';
import PageContainer from '@/components/pageContainer';
import Sponsors from '@/components/sponsors';

export default function Home() {
	return (
		<PageContainer>
			<Header />
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-5 flex justify-center items-start flex-col">
					<h1>Your outsourced accounting and bookkeeping team</h1>
					<h3 className="mt-4">
						Modern outsourced accounting solutions for today's small businesses
					</h3>
					<Button className="mt-8">Get in touch</Button>
				</div>
				<div className="col-span-7 flex justify-center items-end">
					<img src="/hero-vector.svg" className="w-full -translate-y-12 select-none" />
				</div>
			</div>

			<Sponsors />

			<div className="part-2 bg-black text-white mt-12">
				<h2>Are you feeling the burden of bookkeeping?</h2>
				<p className="mt-8">
					Don't worry.{' '}
					<strong>
						Smartbooks<span class="orange">360</span>
					</strong>{' '}
					is here to help.
				</p>
				<p className="mt-8">
					We are a team of experts that provide outsourced accounting & bookkeeping services to
					small businesses. For us, there is no such thing as a silly question. Let's have a
					conversation about your company's finances without the jargon or judgment.
				</p>
			</div>

			<div className="mt-12 grid grid-cols-6">
				<div className="col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>Concentrate on your business</h2>
					<p>
						You didn't start your small business to run an accounting department. Let us handle
						everything you need to succeed with our outsourced accounting team of specialists.
					</p>
				</div>
				<div className="col-span-2">
					<img src="/concentrate.svg" className="w-full" />
				</div>
			</div>
			<div className="mt-12 grid grid-cols-6">
				<div className="col-span-2">
					<img src="/yay.svg" className="w-full" />
				</div>
				<div className="col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>Stress-free and effortless</h2>
					<p>
						Get rid of the frustrations and cash surprises that come with messy books. Let our team
						of expert outsourced accountants give you accurate and timely financial information
						about your small business.
					</p>
				</div>
			</div>
			<div className="mt-12 grid grid-cols-6">
				<div className="col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>Customizing your bookkeeping to fit your business needs</h2>
					<p>
						You didn't start your small business to run an accounting department. Let us handle
						everything you need to succeed with our outsourced accounting team of specialists.
					</p>
				</div>
				<div className="col-span-2">
					<img src="/sheets.svg" className="w-full" />
				</div>
			</div>
		</PageContainer>
	);
}
