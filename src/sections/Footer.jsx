import { lastUpdated } from "../constants";

const Footer = () => {
	return (
		<footer className="mb-10">
			<div className="flex justify-between">
				<div>Last update on: {lastUpdated}</div>
				<div>Made with 🫶🏾 by Bryan</div>
			</div>
		</footer>
	);
};

export default Footer;
