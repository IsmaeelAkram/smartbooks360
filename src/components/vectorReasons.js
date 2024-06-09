'use client';

import useWindowSize from '@/hooks/useWindowSize';
import PaddingContainer from './paddingContainer';

export default function VectorReasons() {
	const { width, height } = useWindowSize();
	return (
		<PaddingContainer>
			<div className="mt-12 grid auto-rows-auto sm:grid-cols-6">
				<div className="sm:col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>Concentrate on your business</h2>
					<p>
						You didn&apos;t start your small business to run an accounting department. Let us handle
						everything you need to succeed with our outsourced accounting team of specialists.
					</p>
				</div>
				<div className="sm:col-span-2 flex justify-center items-center">
					<img src="/concentrate.svg" className="w-full drop-shadow-xl" />
				</div>
			</div>
			<div className="mt-12 grid auto-rows-auto sm:grid-cols-6">
				{width > 640 ? (
					<>
						<div className="sm:col-span-2 flex justify-center items-center">
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
					</>
				) : (
					<>
						<div className="sm:col-span-4 flex justify-center items-start flex-col mx-10">
							<h2>Stress-free and effortless</h2>
							<p>
								Get rid of the frustrations and cash surprises that come with messy books. Let our
								team of expert outsourced accountants give you accurate and timely financial
								information about your small business.
							</p>
						</div>
						<div className="col-span-4 sm:col-span-2 flex justify-center items-center">
							<img src="/yay.svg" className="w-full drop-shadow-xl" />
						</div>
					</>
				)}
			</div>
			<div className="mt-12 grid auto-rows-auto sm:grid-cols-6">
				<div className="sm:col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>
						Customizing your bookkeeping
						<br />
						to fit your business needs
					</h2>
					<ul className="list-disc">
						<li>P&L, Balance Sheet, Cash Flow Statements</li>
						<li>Standard or Custom Chart of Accounts</li>
						<li>Transaction Categorization</li>
						<li>Payroll accounting</li>
					</ul>
				</div>
				<div className="sm:col-span-2 flex justify-center items-center">
					<img src="/sheets.svg" className="w-full drop-shadow-xl" />
				</div>
			</div>
		</PaddingContainer>
	);
}
