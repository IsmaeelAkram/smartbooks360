'use client';

import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Partners() {
	const { width, height } = useWindowSize();
	if (width > 640) {
		return (
			<div className="flex justify-center items-center flex-row gap-10">
				<Image
					src="/partners/fence_appeal.avif"
					width={120}
					height={120}
					alt="Fence Appeal"
					className="cursor-pointer"
					onClick={() => window.open('https://www.fenceappealct.com/', '_blank')}
				/>
				<Image
					src="/partners/valueprop.webp"
					width={120}
					height={120}
					alt="ValueProp"
					className="cursor-pointer"
					onClick={() => window.open('https://www.valueprop.com/', '_blank')}
				/>
				<Image
					src="/partners/superdank.svg"
					width={42}
					height={42}
					alt="SuperDank"
					className="cursor-pointer"
					onClick={() => window.open('https://www.superdankmedia.com/', '_blank')}
				/>
				<Image
					src="/partners/contractor_growth_strategy.webp"
					width={78}
					height={78}
					alt="Contractor Growth Strategy"
					className="cursor-pointer"
					onClick={() => window.open('https://contractorgrowthstrategy.com/', '_blank')}
				/>
				<Image
					src="/partners/PCS_edited.avif"
					width={60}
					height={60}
					alt="PCS"
					className="cursor-pointer"
					onClick={() => window.open('https://www.professionalchartersolutions.org/', '_blank')}
				/>
				<Image
					src="/partners/browne.webp"
					width={120}
					height={120}
					alt="Browne"
					className="cursor-pointer"
					onClick={() => window.open('https://www.browneins.com/', '_blank')}
				/>
				<Image
					src="/partners/center_stage_cinema.avif"
					width={120}
					height={120}
					alt="Center Stage Cinema"
					className="cursor-pointer invert"
					onClick={() => window.open('https://www.centerstagecinema.com/', '_blank')}
				/>
			</div>
		);
	} else {
		return (
			<motion.div
				className="flex justify-center items-center flex-row gap-10"
				animate={[{ translateX: 0 }, { translateX: -210 }]}
				initial={{ translateX: 210 }}
				transition={{
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'linear',
					duration: 10,
				}}
			>
				<Image
					src="/partners/fence_appeal.avif"
					width={120}
					height={120}
					alt="Fence Appeal"
					className="cursor-pointer"
					onClick={() => window.open('https://www.fenceappealct.com/', '_blank')}
				/>
				<Image
					src="/partners/valueprop.webp"
					width={120}
					height={120}
					alt="ValueProp"
					className="cursor-pointer"
					onClick={() => window.open('https://www.valueprop.com/', '_blank')}
				/>
				<Image
					src="/partners/superdank.svg"
					width={42}
					height={42}
					alt="SuperDank"
					className="cursor-pointer"
					onClick={() => window.open('https://www.superdankmedia.com/', '_blank')}
				/>
				<Image
					src="/partners/contractor_growth_strategy.webp"
					width={78}
					height={78}
					alt="Contractor Growth Strategy"
					className="cursor-pointer"
					onClick={() => window.open('https://contractorgrowthstrategy.com/', '_blank')}
				/>
				<Image
					src="/partners/PCS_edited.avif"
					width={60}
					height={60}
					alt="PCS"
					className="cursor-pointer"
					onClick={() => window.open('https://www.professionalchartersolutions.org/', '_blank')}
				/>
				<Image
					src="/partners/browne.webp"
					width={120}
					height={120}
					alt="Browne"
					className="cursor-pointer"
					onClick={() => window.open('https://www.browneins.com/', '_blank')}
				/>
				<Image
					src="/partners/center_stage_cinema.avif"
					width={120}
					height={120}
					alt="Center Stage Cinema"
					className="cursor-pointer invert"
					onClick={() => window.open('https://www.centerstagecinema.com/', '_blank')}
				/>
			</motion.div>
		);
	}
}
