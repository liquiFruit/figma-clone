export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="flex flex-row gap-2 p-2 h-screen">{children}</div>;
}
