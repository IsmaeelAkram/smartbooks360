import Button from '@/components/button';
import Header from '@/components/header';
import PageContainer from '@/components/pageContainer';

export default function Home() {
	return (
		<PageContainer>
			<Header />
			<div className="grid grid-cols-12 mt-28">
				<div className="col-span-5">
					<h1>Your outsourced accounting and bookkeeping team</h1>
					<h3 className="mt-4">
						Modern outsourced accounting solutions for today's small businesses
					</h3>
					<Button className="mt-8">Get in touch</Button>
				</div>
				<div className="col-span-7 flex justify-center items-end">
					<img src="/hero-vector.svg" className="w-full" />
				</div>
			</div>

			{/* <Sponsors /> */}
		</PageContainer>
	);
}
