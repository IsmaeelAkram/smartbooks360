import CalendlyButton from '@/components/calendly';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';
import Image from 'next/image';

export const metadata = {
	title: 'About Us | Smartbooks360',
	description: "Modern outsourced accounting solutions for today's small businesses",
};

export default function AboutPage() {
	return (
		<>
			<CalendlyButton />
			<PageContainer>
				<PaddingContainer>
					<Header />
					<div className="mt-12"></div>
					<h1>About us</h1>
				</PaddingContainer>
				<div className="boxshadow grid auto-rows-auto sm:grid-cols-5 sm:px-20 sm:py-32 px-5 py-16 bg-yellow text-black">
					<div className="sm:col-span-1 flex justify-center items-center mb-3 sm:mb-0">
						<img
							src="/anees.jpeg"
							alt="Anees Akram"
							className="w-1/2 sm:w-full rounded-2xl drop-shadow-2xl"
						/>
					</div>
					<div className="sm:col-span-4 px-10 flex justify-center items-start flex-col">
						<h1>Anees Akram</h1>
						<h3 className="mb-5">Founder & CEO</h3>
						<p>
							After several years of owning a small business, Anees started an outsourced
							bookkeeping company to help entrepreneurs get their time back so they could focus on
							their business growth and spend time with their families. He and his team help
							entrepreneurs set up accounting systems that take over the bookkeeping grunt work,
							saving them valuable time. He&apos;s a native New Yorker and currently lives in
							Queens, NY. He, besides helping entrepreneurs, enjoys time with his two kids and wife,
							as well as making friends from all walks of life.
						</p>
					</div>
				</div>

				<div className="grid auto-rows-auto sm:grid-cols-5 sm:px-20 sm:py-32 px-5 py-16 bg-black text-white">
					<div className="sm:col-span-1 flex justify-center items-center mb-3 sm:mb-0">
						<img
							src="/nas.jpeg"
							alt="Nas"
							className="w-1/2 sm:w-full rounded-2xl drop-shadow-2xl"
						/>
					</div>
					<div className="sm:col-span-4 px-10 flex justify-center items-start flex-col">
						<h1>Nas Arif</h1>
						<h3 className="mb-5">Director of accounting</h3>
						<p>
							Nas has an MBA and a strong background in taxation, audit, accounting and financial
							modeling. He brings a healthy range of financial knowledge and a keen eye for detail
							to them team. He loves to cook, travel and considers himself a digital nomad.
						</p>
					</div>
				</div>

				<div className="boxshadow grid auto-rows-auto sm:grid-cols-5 sm:px-20 sm:py-32 px-5 py-16 text-black">
					<div className="sm:col-span-1 flex justify-center items-center mb-3 sm:mb-0">
						<img
							src="/chris.jpeg"
							alt="Chris Stewart"
							className="w-1/2 sm:w-full rounded-2xl drop-shadow-2xl"
						/>
					</div>
					<div className="sm:col-span-4 px-10 flex justify-center items-start flex-col">
						<h1>Chris Stewart</h1>
						<h3 className="mb-5">Senior bookkeeping specialist</h3>
						<p>
							Chris has a degree in Business Administration with a concentration in Finance and an
							Economics degree. He has previously worked closely with entrepreneurs in multiple
							industries including residential construction. Oil and gas and SMMAs. He loves to
							travel and currently lives in Columbus, Ohio.
						</p>
					</div>
				</div>
			</PageContainer>
		</>
	);
}
