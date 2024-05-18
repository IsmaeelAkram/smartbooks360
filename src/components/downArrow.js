'use client';

import { motion } from 'framer-motion';

export default function DownArrow() {
	return (
		<motion.img
			initial={{ y: 0 }}
			animate={{ y: 10 }}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 0.5,
			}}
			src="/chevron-down.svg"
		/>
	);
}
