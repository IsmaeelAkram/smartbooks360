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
							<h1>
								Know your numbers.
								<br />
								Save big on taxes.
								<br />
								More profit, less stress.
							</h1>
							<h3 className="mt-4 gray">
								Modern accounting and bookkeeping solutions for agencies and entrepreneurs across
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

					{/* <Partners /> */}
					{/* <div className="w-full flex justify-center items-center">
					<DownArrow />
				</div> */}
				</PaddingContainer>

				<div className="flex flex-col bg-gray-100 text-black sm:px-12 sm:py-12 px-5 py-6">
					<div className="flex xl:flex-row flex-col justify-start items-center ">
						<div className="flex flex-col justify-center items-start w-full">
							<h4 className="uppercase mb-4 font-medium">Trusted by many</h4>
							<Partners />
						</div>
						<div className="flex md:flex-row flex-col xl:justify-end justify-center items-center gap-4 mt-8 xl:h-56 md:w-1/3 h-fit w-full z-10">
							<video
								controls
								controlsList="nofullscreen nodownload noremoteplayback"
								className="xl:w-full w-1/3 h-full object-cover rounded-xl"
							>
								<source src="/vid/testimonial_2.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<video
								controls
								controlsList="nofullscreen nodownload noremoteplayback"
								className="w-full h-full object-cover rounded-xl"
							>
								<source src="/vid/testimonial_pcs.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<video
								controls
								controlsList="nofullscreen nodownload noremoteplayback"
								className="w-full h-full object-cover rounded-xl"
							>
								<source src="/vid/testimonial_agency.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<div
						class="review-widget_net mt-5"
						data-uuid="9dfff837-9467-4df8-b364-3462ef756065"
						data-template="2"
						data-lang="en"
						data-theme="light"
					></div>
				</div>
				<VectorReasons />

				<WhyChooseUs />

				<PaddingContainer>
					<div className="faqs">
						<h2 className="mb-8">Bookkeeping FAQs</h2>
						<div>
							<h3>How does the monthly bookkeeping process work?</h3>
							<p>
								We use QuickBooks to analyze and record all of your business activities in order to
								provide monthly financial statements such as the profit and loss statement and the
								balance sheet.
							</p>
						</div>
						<div>
							<h3>What are the fees?</h3>
							<p>
								We use a flat rate fee per month. We can talk about what your business needs and
								figure out how we can help you to succeed.
							</p>
						</div>
						<div>
							<h3>How can I know if smartbooks360 is a good fit for my business?</h3>
							<p>
								If you are tired of spending all of your time handling your own accounting, love the
								concept of having a professional set of eyes on your books, we may be a good fit for
								you.
							</p>
						</div>
						<div>
							<h3>How will you get access to my quickbooks file?</h3>
							<p>You will be requested to invite us as an accountant user.</p>
						</div>
						<div>
							<h3>How do I send my documents to you?</h3>
							<p>
								We&apos;ll need your bank statements every month. We can set up your bank statements
								to automatically sync with QuickBooks or you can also send us your documents if you
								like. We employ secure cloud-based technologies and email for documentation.
							</p>
						</div>
						<div>
							<h3>Do you also do clean ups?</h3>
							<p>
								Yes. We can assist you in cleaning up any messy transactions or erroneous records
								from the past.
							</p>
						</div>
						<GetInTouch />
					</div>
				</PaddingContainer>
				<PaddingContainer className="bg-gray-100">
					<div className="flex justify-center items-center mb-10">
						<h1 className="font-normal">How to get started:</h1>
					</div>
					<div className="grid md:grid-cols-4 grid-rows-auto gap-12">
						<div>
							<img src="/calendar.svg" className="mb-4" />
							<h3 className="font-medium">Schedule a Call</h3>
							<p className="mt-5">
								Here&apos;s where we&apos;ll get to know you, your business, and what services
								you&apos;re looking for. Ask us any questions you want!
							</p>
						</div>
						<div>
							<img src="/paper.svg" className="mb-4" />
							<h3 className="font-medium">Decision Time</h3>
							<p className="mt-5">
								If we&apos;re a fit, we&apos;ll craft a proposal to fit your business needs & goals.
							</p>
						</div>
						<div>
							<img src="/desktop.svg" className="mb-4" />
							<h3 className="font-medium">Onboarding</h3>
							<p className="mt-5">
								Collaborate with our onboarding team to get set up for success!
							</p>
						</div>
						<div>
							<img src="/handshake.svg" className="mb-4" />
							<h3 className="font-medium">Meet your Team</h3>
							<p className="mt-5">
								You&apos;ll work with a designated service team who will ensure your finances have
								you on the road to meet your goals.
							</p>
						</div>
					</div>
				</PaddingContainer>
				{/* <div className="w-full bg-gray-100 mt-12 sm:px-20 sm:py-32 px-5 py-16 flex justify-center items-center flex-col">
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
				</div> */}

				<Footer />
			</PageContainer>
		</>
	);
}
