import { projects } from "../constants";

const Projects = () => {
	return (
		<section id="projects">
			<div className="heading-text">Projects</div>
			<div>
				{projects.map((project) => {
					return (
						<div
							className="mb-4 hover:cursor-pointer ring-1
						ring-sky-200 rounded-lg p-4 shadow-lg"
						>
							<a href={project.github}>
								<div className="flex justify-between">
									<div className="sub-heading">
										{project.title}
									</div>
									<div className="text-sm font-thin">
										{project.tools}
									</div>
								</div>
								<div className="text-sm info-text">
									{project.description}
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
