'use client';

import { useEffect } from 'react';

export default function CalendlyInline() {
	useEffect(() => {
		window.Calendly.initInlineWidget({
			url: 'https://calendly.com/aakram10',
			parentElement: document.getElementById('calendly-embed'),
		});
	}, []);
	return (
		<div
			id="calendly-embed"
			style={{ minWidth: '320px', height: '700px', position: 'relative' }}
		></div>
	);
}
