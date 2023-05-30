const TaskGroup: React.FC = () => {
	const tasks: string[] = ["Brush teeth", "Pack bag", "Do laundry"];

	return (
		<div className="p-2 bg-dark-800 w-sm rounded-3">
			<div className="text-h-md font-semibold p-4 glass rounded-2">
				Current Tasks
			</div>
			<hr className="border-dark-700" />

			{tasks.map((task) => (
				<div className="m-2 p-4 outline outline-1 outline-dark-400/20 transition-all hover:outline-teal-400/60 hover:glow-lg-teal-800/50 rounded-2 text-h-sm">
					{task}
				</div>
			))}
		</div>
	);
};

export default TaskGroup;
