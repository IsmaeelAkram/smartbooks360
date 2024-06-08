import Button from '@/components/button';
import CalendlyButton from '@/components/calendly';
import DownArrow from '@/components/downArrow';
import Footer from '@/components/footer';
import GetInTouch from '@/components/getInTouch';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';
import Partners from '@/components/partners';
import TextSwitcher from '@/components/textSwitcher';
import VectorReasons from '@/components/vectorReasons';
import WhyChooseUs from '@/components/whyChooseUs';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<CalendlyButton />
			<PageContainer>
				<PaddingContainer>
					<Header />
					<div className="grid grid-cols-0 sm:grid-cols-12 gap-5">
						<div className="col-span-5 flex justify-center items-start flex-col">
							<h1>The best online bookkeeping solution for small businesses</h1>
							<h3 className="mt-4 gray">
								Modern outsourced accounting solutions for business owners and entrepreneurs across
								the country
							</h3>
							<div className="mt-8">
								<GetInTouch />
							</div>
						</div>
						<div className="col-span-7 flex justify-center items-start sm:items-end mt-4 sm:mt-0">
							<img src="/hero-vector.svg" className="w-full select-none drop-shadow-xl" />
						</div>
					</div>

					<Partners />
					{/* <div className="w-full flex justify-center items-center">
					<DownArrow />
				</div> */}
				</PaddingContainer>

				<div className="part-2 bg-black text-white sm:px-20 sm:py-32 px-5 py-16">
					<TextSwitcher />
					<p className="mt-8">
						Don&apos;t worry.{' '}
						<strong>
							Smartbooks<span class="orange">360</span>
						</strong>{' '}
						is here to help.
					</p>
					<p className="mt-8">
						We are a team of experts that provide outsourced accounting & bookkeeping services to
						small businesses. For us, there is no such thing as a silly question. Let&apos;s have a
						conversation about your company&apos;s finances without the financial jargon.
					</p>
				</div>
				<VectorReasons />

				<WhyChooseUs />

				<PaddingContainer>
					<div className="faqs">
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
						<GetInTouch />
					</div>
				</PaddingContainer>

				<div className="w-full bg-gray-100 mt-12 sm:px-20 sm:py-32 px-5 py-16 flex justify-center items-center flex-col">
					<h2 className="mb-10">We ❤️ working with you</h2>
					<div className="w-full sm:w-3/4 clients grid grid-rows-6 sm:grid-rows-2 sm:grid-cols-3 gap-2 sm:gap-10">
						<div>
							<h3 className="mb-10 font-medium">Veterinary</h3>
							<Image src="/veterinary.png" width={250} height={250} />
						</div>
						<div>
							<h3 className="mb-10 font-medium">Therapists</h3>
							<Image src="/therapists.png" width={250} height={250} />
						</div>
						<div>
							<h3 className="mb-10 font-medium">Small businesses</h3>
							<Image src="/small-businesses.png" width={250} height={250} />
						</div>
						<div>
							<h3 className="mb-10 font-medium">Dentists</h3>
							<Image src="/dentists.jpeg" width={250} height={250} />
						</div>
						<div>
							<h3 className="mb-10 font-medium">Chiropractors</h3>
							<Image src="/chiropractors.jpeg" width={250} height={250} />
						</div>
						<div>
							<h3 className="mb-10 font-medium">Coaches and Consultants</h3>
							<Image src="/coaches.jpeg" width={250} height={250} />
						</div>
					</div>
				</div>

				<Footer />
			</PageContainer>
		</>
	);
}
