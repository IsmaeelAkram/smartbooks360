'use client';
import Button from './button';

export default function GetInTouch() {
	return (
		<Button onClick={() => window.Calendly.showPopupWidget('https://calendly.com/aakram10')}>
			Get in touch
		</Button>
	);
}
