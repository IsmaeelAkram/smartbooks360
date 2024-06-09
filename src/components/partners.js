'use client';

import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Partners() {
	const { width, height } = useWindowSize();
	return (
		<>
			<motion.div
				className="flex justify-center items-center flex-row gap-10"
				animate={[{ translateX: 0 }, { translateX: -420 }, { translateX: -840 }]}
				transition={{
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'linear',
					duration: 20,
				}}
			>
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
			</motion.div>
		</>
	);
}
