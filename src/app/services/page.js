import CalendlyButton from '@/components/calendly';
import Footer from '@/components/footer';
import GetInTouch from '@/components/getInTouch';
import Header from '@/components/header';
import PaddingContainer from '@/components/paddingContainer';
import PageContainer from '@/components/pageContainer';

export const metadata = {
	title: 'Services | Smartbooks360',
	description: "Modern outsourced accounting solutions for today's small businesses",
};

export default function ServicesPage() {
	return (
		<>
			<CalendlyButton />
			<PageContainer>
				<PaddingContainer>
					<Header />
					{/* <h1 className="mt-10">Services</h1> */}
				</PaddingContainer>
				{/* <div className="sm:px-20 sm:pb-12 px-5 pb-16">
					<h2>Bookkeeping</h2>
					<p>
						Let our team of experts at{' '}
						<strong>
							Smartbooks<span className="orange">360</span>
						</strong>{' '}
						be your outsourced accounting department. You won&apos;t have to worry about keeping
						track of your finances, getting vendors paid, or chasing down clients for payment any
						more. As your Trusted Advisor, we can also offer you the financial insight you need to
						develop your business. Concentrate on running your business and know that a team of
						experts is keeping track of your finances.
					</p>
				</div> */}
				<div className="bg-yellow text-black sm:px-20 sm:py-12 px-5 py-16">
					<h2>Plans</h2>
					<div className="grid auto-rows-auto sm:grid-cols-3 gap-5 mt-5">
						<div className="flex flex-col p-10 bg-white mr-10 rounded-3xl w-full drop-shadow-2xl">
							<h2>Starter</h2>
							<ul className="list-disc">
								<li>Account set up and monthly subscription in QBO</li>
								<li>Up to 3 bank/credit card accounts</li>
								<li>Up to 100 transactions</li>
								<li>Monthly account reconciliation</li>
								<li>3 monthly financial reports</li>
								<li>Unlimited email support</li>
							</ul>
						</div>
						<div className="flex flex-col p-10 bg-white mr-10 rounded-3xl w-full drop-shadow-2xl">
							<h2>Standard</h2>
							<ul className="list-disc">
								<li>Account set up and monthly subscription in QBO</li>
								<li>Up to 4 bank/credit card accounts</li>
								<li>Up to 200 transactions</li>
								<li>Monthly account reconciliation</li>
								<li>3 monthly financial reports</li>
								<li>Unlimited email support</li>
							</ul>
						</div>
						<div className="flex flex-col p-10 bg-white mr-10 rounded-3xl w-full drop-shadow-2xl">
							<h2>Premium</h2>
							<ul className="list-disc">
								<li>Account set up and monthly subscription in QBO</li>
								<li>Up to 6 bank/credit card accounts</li>
								<li>Monthly account reconciliation</li>
								<li>3 monthly financial reports</li>
								<li>Monthly live call</li>
								<li>Unlimited email support</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg-black text-white sm:px-20 sm:py-12 px-5 py-16">
					<h2>Clean up</h2>
					<p className="mb-5">
						If you need to fix, update and organize your books we can help you prices vary depending
						on how extensive the clean up is. Once done, we can help you maintain your books.
					</p>
					<GetInTouch />
				</div>
				<div className="bg-white text-black sm:px-20 sm:py-12 px-5 py-16">
					<h2>Start up</h2>
					<p className="mb-5">
						Don&apos;t have a QBO account and don&apos;t know where to start? We can help you set up
						your account.
					</p>
					<GetInTouch />
				</div>
				<div className="bg-yellow text-black sm:px-20 sm:py-12 px-5 py-16">
					<h2>CFO & Advisory</h2>
					<p className="mb-5">
						Our CFO & Advisory services provide an in-depth analysis of all three financial
						statements, as well as guidance on how to interpret them. Every business is different
						and can be complex. Understanding where your money is coming from and where its going in
						your business is critical to its growth. We take the time to learn about your business,
						create a plan, set goals and determine a strategy to execute. We also offer insight into
						customized reporting tailored to your individual business needs, such as profitability
						analysis, cash flow optimization, growth strategy, cost analysis, KPIs, and more! Our
						CFO & Advisory services are often delivered in conjunction with monthly bookkeeping.
					</p>
				</div>
				<Footer />
			</PageContainer>
		</>
	);
}
