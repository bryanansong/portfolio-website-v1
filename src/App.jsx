import Nav from "./sections/Nav";

// .padding {
// 		@apply sm:px-16 px-8 sm:py-24 py-12 w-full lg:max-w-2xl;
// 	}

export default function App() {
	return (
		<main className="relative flex flex-col items-center">
			<div className="w-full max-w-2xl">
				<section className="mt-12 py-6 w-full lg:max-w-2xl">
					<Nav />
				</section>
				<section className="padding bg-yellow-300">
					Not Description
				</section>
				<section className="padding bg-green-300">
					Experience
				</section>
				<section className="padding bg-purple-600">
					Projects
				</section>
				<section className="padding bg-slate-700">
					Footer
				</section>
			</div>
		</main>
	);
}
