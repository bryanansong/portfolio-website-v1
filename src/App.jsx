import Nav from "./sections/Nav";
import Description from "./sections/Description";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

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
				<section className="padding">
					<Footer />
				</section>
			</div>
		</main>
	);
}
