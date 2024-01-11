import Nav from "./sections/Nav";
import Description from "./sections/Description";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export default function App() {
	return (
		<main className="relative flex flex-col justify-center items-center">
			<div className="w-full max-w-2xl">
				<section className="padding">
					<Nav />
				</section>
				<section className="padding ">
					<Description />
				</section>
				<section className="padding ">
					<Experience />
				</section>
				<section className="padding ">
					<Projects />
				</section>
				<section className="padding bg-slate-700">
					Footer
				</section>
			</div>
		</main>
	);
}
