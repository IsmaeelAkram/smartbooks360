'use client';

import { motion } from 'framer-motion';

const reasons = [
	{
		title: 'Save time and work smarter',
		text: 'Work on your business while we handle your accounting through the use of secured cloud-based accounting solutions; which enable you to have access to analytics on cash flow, profit margins, expenses and much more from anywhere in the world at any time.',
	},
	{
		title: 'Cut costs',
		text: 'Hiring, training, and maintaining an accounting department is costly. Outsourcing the accounting function to Smartbooks360 eliminates hiring and training costs.',
	},
	{
		title: 'Ensure compliance',
		text: 'Make sure all compliances are met across all financial platforms without worrying about losing money in penalties.',
	},
	{
		title: 'Financial reports',
		text: "Get timely financial data on your business's performance from month to month and quarter to quarter with our up-to-date reports. Simply obtain the most essential information for your small business. You won't have to wait any longer for overworked accounting firms to respond to you or for impersonal bookkeeping applications.",
	},
	{
		title: 'Dedicated team',
		text: 'You aren’t just a number to us. It’s about more than just your month-end close. We as your outsourced bookkeeping team work with you and ensure your expectations are met and exceeded daily.',
	},
];

export default function WhyChooseUs() {
	return (
		<div className="mt-12 bg-black text-white p-12">
			<h2>Why choose us as your bookkeeper?</h2>
			{/* 0, -420, -840, -1260, -1680, -2100 */}
			<motion.div
				animate={[{ translateX: 0 }, { translateX: -420 }, { translateX: -840 }]}
				transition={{
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'linear',
					duration: 20,
				}}
				className="flex flex-row cards mt-12 py-3"
			>
				{reasons.map((reason, index) => (
					<div key={index} className="flex flex-col p-5 bg-light-black mr-10 rounded-3xl card">
						<h3 className="text-white mb-3 font-medium">{reason.title}</h3>
						<p className="gray">{reason.text}</p>
					</div>
				))}
			</motion.div>
		</div>
	);
}
