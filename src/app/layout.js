import './globals.css';

export const metadata = {
	title: 'Outsourced Accounting & Bookkeeping Services | Smartbooks360',
	description: "Modern outsourced accounting solutions for today's small businesses",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
			<script
				src="https://assets.calendly.com/assets/external/widget.js"
				type="text/javascript"
				async
			></script>
		</html>
	);
}
