import Button from '@/components/button';
import CalendlyButton from '@/components/calendly';
import DownArrow from '@/components/downArrow';
import Footer from '@/components/footer';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';
import Partners from '@/components/partners';
import WhyChooseUs from '@/components/whyChooseUs';

export default function Home() {
	return (
		<>
			<CalendlyButton />
			<PageContainer>
				<PaddingContainer>
					<Header />
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-5 flex justify-center items-start flex-col">
							<h1>Your outsourced accounting and bookkeeping team</h1>
							<h3 className="mt-4 gray">
								Modern outsourced accounting solutions for today&apos;s small businesses
							</h3>
							<Button className="mt-8">Get in touch</Button>
						</div>
						<div className="col-span-7 flex justify-center items-end">
							<img src="/hero-vector.svg" className="w-full select-none drop-shadow-xl" />
						</div>
					</div>

					<Partners />
					{/* <div className="w-full flex justify-center items-center">
					<DownArrow />
				</div> */}

					<div className="part-2 bg-black text-white mt-12">
						<h2>Are you feeling the burden of bookkeeping?</h2>
						<p className="mt-8">
							Don&apos;t worry.{' '}
							<strong>
								Smartbooks<span class="orange">360</span>
							</strong>{' '}
							is here to help.
						</p>
						<p className="mt-8">
							We are a team of experts that provide outsourced accounting & bookkeeping services to
							small businesses. For us, there is no such thing as a silly question. Let&apos;s have
							a conversation about your company&apos;s finances without the jargon or judgment.
						</p>
					</div>

					<div className="mt-12 grid grid-cols-6">
						<div className="col-span-4 flex justify-center items-start flex-col mx-10">
							<h2>Concentrate on your business</h2>
							<p>
								You didn&apos;t start your small business to run an accounting department. Let us
								handle everything you need to succeed with our outsourced accounting team of
								specialists.
							</p>
						</div>
						<div className="col-span-2">
							<img src="/concentrate.svg" className="w-full drop-shadow-xl" />
						</div>
					</div>
					<div className="mt-12 grid grid-cols-6">
						<div className="col-span-2">
							<img src="/yay.svg" className="w-full drop-shadow-xl" />
						</div>
						<div className="col-span-4 flex justify-center items-start flex-col mx-10">
							<h2>Stress-free and effortless</h2>
							<p>
								Get rid of the frustrations and cash surprises that come with messy books. Let our
								team of expert outsourced accountants give you accurate and timely financial
								information about your small business.
							</p>
						</div>
					</div>
					<div className="mt-12 grid grid-cols-6">
						<div className="col-span-4 flex justify-center items-start flex-col mx-10">
							<h2>
								Customizing your bookkeeping
								<br />
								to fit your business needs
							</h2>
							<p>
								You didn&apos;t start your small business to run an accounting department. Let us
								handle everything you need to succeed with our outsourced accounting team of
								specialists.
							</p>
						</div>
						<div className="col-span-2">
							<img src="/sheets.svg" className="w-full drop-shadow-xl" />
						</div>
					</div>
				</PaddingContainer>

				<WhyChooseUs />

				<PaddingContainer>
					<div className="mt-12 faqs">
						<h2 className="mb-8">Bookkeeping FAQs</h2>
						<div>
							<h3>What are outsourced accounting and bookkeeping services?</h3>
							<p>
								Outsourced accounting means hiring a third-party accounting team to handle all or
								some of your accounting functions for you. This team handles the daily transaction
								coding, accounts payable and receivable, payroll, and many other services.
							</p>
						</div>
						<div>
							<h3>Why should you outsource your accounting?</h3>
							<p>
								There are numerous reasons why you should outsource your accounting and bookkeeping.
								Most importantly, saving oneself the time, money, and stress of hiring an in-house
								full or part-time employee.
							</p>
						</div>
						<div>
							<h3>Is it cheaper to outsource accounting and bookkeeping?</h3>
							<p>
								Yes, hiring an outsourced accountant is often cheaper and more cost-effective.
								Potentially, saving you 50-70% compared to hiring full or part-time employees.
							</p>
						</div>
						<div>
							<h3>What do outsourced bookkeepers do?</h3>
							<p>
								As a business owner, you should be familiar with the following financial statements:
								cash flow statements, income statements, and balance sheets. With outsourced
								bookkeeping, you have access to these statements on a regular basis. Your tax filing
								process is expedited when you hire a professional to handle your bookkeeping.
							</p>
						</div>
						<Button>Get in touch</Button>
					</div>
				</PaddingContainer>

				<Footer />
			</PageContainer>
		</>
	);
}
