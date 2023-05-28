import "@unocss/reset/tailwind.css";
import "@/styles/main.css";

export const metadata = {
	title: "_",
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
