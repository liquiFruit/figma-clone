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
		<html lang="en" className="text-light bg-dark-700">
			<body className="min-h-screen">{children}</body>
		</html>
	);
}
