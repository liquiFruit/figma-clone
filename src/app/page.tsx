import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen">
			<main className="children:w-full w-full my-auto flex flex-row">
				<div className="grid place-items-center py-24 lt-md:px-12">
					<form className="max-w-3xl">
						<h1 className="text-h-xl mb-6">
							Start tracking your
							<span className="g-tr-600 bg-clip-text text-transparent font-bold">
								{" "}
								progress.
							</span>
						</h1>

						<p className="mb-16 text-dark-300 font-medium text-b-xl">
							Log into NextTask to begin.
						</p>

						<div className="mb-6 p-0.25 focus-within:g-tr-500 rounded-2 focus-within:ring-4 transition-all ring-teal-500/30">
							<div className="focus-within:outline-none outline outline-dark-500 bg-dark-600 text-b-lg rounded-2 flex flex-row items-center px-4 py-2 gap-4">
								<div className="i-email text-8" />
								<input
									type="text"
									className="outline-none w-full bg-transparent"
									placeholder="test-user@gmail.co.xh"
								/>
							</div>
						</div>

						<div className="p-0.25 focus-within:g-tr-500 rounded-2 focus-within:ring-4 transition-all ring-teal-500/30">
							<div className="focus-within:outline-none outline outline-dark-500 bg-dark-600 text-b-lg rounded-2 flex flex-row items-center px-4 py-2 gap-4">
								<div className="i-lock text-8" />
								<input
									type="password"
									className="outline-none w-full bg-transparent"
									placeholder="•••••••••••••••"
								/>
							</div>
						</div>

						<div className="my-12 flex flex-row items-center">
							<div className="h-6 aspect-square bg-dark-600 rounded-1 outline outline-dark-500" />
							<p className="text-b-lg font-medium ml-4">
								Remember me
							</p>
							<p className="g-s-tr-500 bg-clip-text text-transparent text-b-lg font-semibold ml-auto">
								Forgot password?
							</p>
						</div>

						<div className="hover:scale-105 cursor-pointer transition-all bg-green-500 text-blue-900 text-center rounded-3 text-b-lg font-semibold py-3">
							Log in
						</div>
					</form>
				</div>
				<div className="grow-1 relative">
					<Image
						src={"/abstract-01.png"}
						width={2048}
						height={2048}
						alt="abstract image"
						className="absolute w-full h-full object-cover rounded-l-16"
					/>
				</div>
			</main>
		</div>
	);
}
