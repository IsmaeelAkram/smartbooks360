'use client';

import useWindowSize from '@/hooks/useWindowSize';
import PaddingContainer from './paddingContainer';

export default function VectorReasons() {
	const { width, height } = useWindowSize();
	return (
		<PaddingContainer>
			<div className="mt-12 grid auto-rows-auto sm:grid-cols-6">
				<div className="sm:col-span-4 flex justify-center items-start flex-col mx-10">
					<h2>Stop Overpaying on Taxes</h2>
					<p>
						Many businesses overpay simply due to disorganized books and missed deductions. At
						SmartBooks360, our meticulous bookkeeping ensures you&apos;re always tax-ready,
						maximizing savings and understand what your numbers really mean!
					</p>
				</div>
				<div className="sm:col-span-2 flex justify-center items-center">
					<img
						src="/concentrate.svg"
						className="w-full drop-shadow-xl"
						alt="Bookkeeping is the key to huge tax savings!"
					/>
				</div>
			</div>
			<div className="mt-12 grid auto-rows-auto sm:grid-cols-6">
				{width > 640 ? (
					<>
						<div className="sm:col-span-2 flex justify-center items-center">
							<img
								src="/yay.svg"
								className="w-full drop-shadow-xl"
								alt="Maximize Your Write-Offs, Simplify Your Books"
							/>
						</div>
						<div className="col-span-4 flex justify-center items-start flex-col mx-10">
							<h2>Tired of Being Ignored by Your Bookkeeper?</h2>
							<p>
								We understand how frustrating it is to feel like your bookkeeper or accountant is
								too busy for you. At SmartBooks360, we pride ourselves on prompt, clear
								communication—you’ll never feel left in the dark.
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
						Maximize your write-offs,
						<br />
						Simplify your books
					</h2>
					<ul className="list-disc">
						<li>
							<strong>Maximized Deductions:</strong> We track every eligible expense, so nothing is
							overlooked.
						</li>
						<li>
							<strong>Error-Free:</strong> Accurate books mean no penalties, missed opportunities,
							or costly mistakes.
						</li>
						<li>
							<strong>On-Time Filing:</strong> Avoid late fees and last-minute stress with
							organized, up-to-date books.
						</li>
					</ul>
				</div>
				<div className="sm:col-span-2 flex justify-center items-center">
					<img src="/sheets.svg" className="w-full drop-shadow-xl" />
				</div>
			</div>
		</PaddingContainer>
	);
}
