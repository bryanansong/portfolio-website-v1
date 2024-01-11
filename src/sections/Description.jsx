import { description } from "../constants";

const Description = () => {
	return (
		<section id="description">
			<div className=" heading-text  ">About me</div>
			<div className="info-text">
				<p>{description}</p>
			</div>
		</section>
	);
};

export default Description;
