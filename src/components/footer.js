import Image from 'next/image';

export default function Footer() {
	return (
		<div className="w-full p-10 bg-gray-100 flex flex-row items-center justify-start gap-2">
			<Image src="/icon.svg" width={35} height={35} />
			<p>
				&copy; 2024{' '}
				<strong>
					Smartbooks<span class="orange">360</span>
				</strong>
			</p>
		</div>
	);
}
