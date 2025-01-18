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
							<h3 className="font-bold">$249/mo</h3>
							<div className="my-3"></div>
							<ul className="list-disc">
								<li>
									Monthly recording, classifying and reconciling of up to 3 bank/credit card
									accounts
								</li>
								<li>Up to 200 transactions</li>
								<li>Monthly financial reports</li>
								<li>Unlimited email support</li>
								<li>No contract (30 days notice required to cancel)</li>
							</ul>
							<div className="mt-auto">
								<GetInTouch />
							</div>
						</div>
						<div className="flex flex-col p-10 bg-white mr-10 rounded-3xl w-full drop-shadow-2xl">
							<h2>Standard</h2>
							<h3 className="font-bold">$549/mo</h3>
							<div className="my-3"></div>
							<ul className="list-disc">
								<li>
									Monthly recording, classifying and reconciling of up to 5 bank/credit card
									accounts
								</li>
								<li>Up to 350 transactions</li>
								<li>Monthly financial reports</li>
								<li>Unlimited email support</li>
								<li>No contract (30 days notice required to cancel)</li>
							</ul>
							<div className="mt-auto">
								<GetInTouch />
							</div>
						</div>
						<div className="flex flex-col p-10 bg-white mr-10 rounded-3xl w-full drop-shadow-2xl">
							<h2>Premium</h2>
							<h3 className="font-bold">$979/mo</h3>
							<div className="my-3"></div>
							<ul className="list-disc">
								<li>
									Monthly recording, classifying and reconciling of up to 8 bank/credit card
									accounts
								</li>
								<li>Unlimited transactions</li>
								<li>Monthly financial reports</li>
								<li>Unlimited email support</li>
								<li>No contract (30 days notice required to cancel)</li>
								<li>A/P and A/R</li>
							</ul>
							<div className="mt-5">
								<GetInTouch />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="bg-black text-white sm:px-20 sm:py-12 px-5 py-16">
					<h2>Clean up</h2>
					<p className="mb-5">
						If you need to fix, update and organize your books we can help you prices vary depending
						on how extensive the clean up is. Once done, we can help you maintain your books.
					</p>
					<GetInTouch />
				</div> */}
				<div className="bg-white text-black sm:px-20 sm:py-12 px-5 py-16  flex flex-col justify-center items-center">
					<div className="w-1/2 flex flex-col justify-center items-center">
						<h2 className="underline">One Time Cleanup Service</h2>
						<img src="/folder.png" className="my-2 invert" />
						<p className="text-center">
							If you need to fix, update and organize your books we can help you. <br />
							Prices vary depending on how extensive the clean up is. Once done, we can help you
							maintain your books.
						</p>
					</div>
					<h2 className="mt-16 underline">Monthly Recurring Service</h2>
					<div className="flex flex-row justify-center items-start gap-24 mt-2 mb-16">
						<div>
							<div className="flex justify-center items-center">
								<img src="/folder_switch.png" className="my-2 invert" />
							</div>

							<ul className="list-disc">
								<li>Customize Chart of Accounts</li>
								<li>Reconcile Account Balances</li>
							</ul>
						</div>

						<div>
							<div className="flex justify-center items-center">
								<img src="/payroll.png" className="my-2 invert" />
							</div>
							<ul className="list-disc">
								<li>Accounts Payable</li>
								<li>Accounts Receivable</li>
								<li>Payroll</li>
							</ul>
						</div>
						<div>
							<div className="flex justify-center items-center">
								<img src="/book.png" className="my-2 invert" />
							</div>
							<ul className="list-disc">
								<li>Record Transactions</li>
								<li>Adjusting Journal Entries</li>
							</ul>
						</div>
						<div>
							<div className="flex justify-center items-center">
								<img src="/statement.png" className="my-2 invert" />
							</div>
							<ul className="list-disc">
								<li>Financial Statements</li>
								<li>Advisory</li>
							</ul>
						</div>
					</div>
					<GetInTouch />
				</div>
				<div className="bg-black text-white sm:px-20 sm:py-12 px-5 py-16">
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
