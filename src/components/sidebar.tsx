import Image from "next/image";

import image from "../../public/abstract-01.png";
import avatar from "../../public/avatar.png";

import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
	return (
		<div className="bg-dark-800 rounded-5 flex flex-col w-xs grow">
			{/* Organisation */}
			<div className="flex flex-row items-center p-6 gap-4">
				<Image
					width={48}
					height={48}
					src={image}
					alt={image.src}
					className="rounded-full"
				/>
				<p className="text-b-lg font-semibold">LiquiFruit</p>
				<div className="i-arrow-down ml-auto text-b-lg text-dark-400 cursor-pointer" />
			</div>

			{/* break */}
			<div className="h-0.1 bg-dark-700" />

			{/* Hot actions */}
			<div className="flex flex-col p-6 gap-6">
				<p className="text-dark-400">GENERAL</p>

				<div className="flex flex-row gap-4 items-center">
					<div className="i-search text-dark-400" />
					<p className="text-b-md font-semibold">Search</p>
					<div className="ml-auto text-b-md text-dark-400 px-2 outline outline-1 rounded-2 flex flex-row items-center">
						<span className="text-inherit text-b-lg">⌘</span>K
					</div>
				</div>
			</div>

			{/* break */}
			<div className="h-0.1 bg-dark-700" />

			{/* Groups */}
			<div className="flex flex-col py-6 px-2 gap-6">
				<p className="text-dark-400 px-4">GROUPS</p>

				<div className={styles.flexBtn + " "}>
					<div className={styles.i + " outline-green-400"} />
					Personal
				</div>

				<div className={styles.flexBtn + " "}>
					<div className={styles.i + " outline-teal-400"} />
					Work
				</div>

				<div className={styles.flexBtn + " "}>
					<div className={styles.i + " outline-purple-300"} />
					Hustle
				</div>

				<div className={styles.flexBtn + " text-dark-400"}>
					<div className="i-add text-1rem"></div>
					Create new group
				</div>
			</div>

			{/* User card */}
			<div className="mt-auto glass m-2 rounded-4 p-4 flex flex-row gap-4 items-center">
				<div className="relative">
					<Image
						src={avatar}
						alt="avatar"
						className="rounded-5 w-12 aspect-square"
					/>
					<div className="absolute w-2 h-2 bg-success-500 top-0 right-0 rounded-full ring-4 ring-dark-700" />
				</div>

				<div>
					<p className="mb-1 text-b-lg font-semibold">LiquiFruit</p>
					<p className="text-b-sm font-medium text-green-500">
						Personal Account
					</p>
				</div>

				<div className="i-settings ml-auto text-6 text-dark-400" />
			</div>
		</div>
	);
};

export default Sidebar;
