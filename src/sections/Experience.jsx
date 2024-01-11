import { experiences } from "../constants";

const Experience = () => {
	return (
		<section>
			<div className="heading-text">Experience</div>
			<div className="">
				{experiences.map((experience) => {
					return (
						<div className="mb-4">
							<div className="sub-heading">
								{experience.title}
							</div>
							<div className="flex justify-between">
								<div className="text-sm font-palanquin tracking-wider font-semibold">
									{experience.company}
								</div>
								<div className="text-sm">
									{experience.duration}
								</div>
							</div>
							<div className="text-sm font-thin">
								{experience.location}
							</div>
							<div className="text-sm info-text">
								{experience.description}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Experience;
