'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const texts = [
	'Are you feeling the burden of bookkeeping?',
	"Is it difficult to keep track of your company's finances?",
];

export default function TextSwitcher() {
	// Create an h2 with a typing effect that switches between the text
	// in the texts array every 3 seconds
	const [textIndex, setTextIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((textIndex + 1) % texts.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [textIndex]);

	return (
		<motion.h2
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{texts[textIndex]}
		</motion.h2>
	);
}
