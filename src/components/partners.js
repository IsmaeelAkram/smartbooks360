import Image from 'next/image';

export default function Partners() {
	return (
		<>
			<div className="flex justify-center items-center flex-row gap-10">
				<Image src="/partners/xero-logo.svg" width={75} height={75} alt="Xero" />
				<Image src="/partners/expensify-logo.svg" width={200} height={100} alt="Quickbooks" />
				<Image src="/partners/bill.com-logo.svg" width={200} height={100} alt="Bill.com" />
				<Image src="/partners/tsheets-logo.svg" width={200} height={100} alt="T-Sheets" />
				<Image
					src="/partners/intuit-quickbooks-logo.svg"
					width={200}
					height={100}
					alt="Quickbooks"
				/>
			</div>
		</>
	);
}
