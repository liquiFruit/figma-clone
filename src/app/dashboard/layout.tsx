export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="p-2 flex flex-col h-screen">{children}</div>;
}
