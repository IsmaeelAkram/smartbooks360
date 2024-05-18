'use client';
import Button from './button';

export default function CalendlyButton() {
	return (
		<Button
			className="fixed z-20 bottom-5 right-8"
			dark
			onClick={() => window.Calendly.showPopupWidget('https://calendly.com/aakram10')}
		>
			Schedule your call
		</Button>
	);
}
