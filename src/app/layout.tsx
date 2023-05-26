import "@unocss/reset/tailwind.css";
import "./globals.css";

export const metadata = {
	title: "/\\",
	description: "Next.js 13.4",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-dark">
			<body>{children}</body>
		</html>
	);
}
