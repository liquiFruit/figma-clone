import TaskGroup from "@/components/dashboard/task-group";
import SideNav from "@/components/sidebar";
const Dashboard: React.FC = () => {
	return (
		<>
			<SideNav />
			<TaskGroup />
		</>
	);
};

export default Dashboard;
