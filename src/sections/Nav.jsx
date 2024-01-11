import Button from "../components/Button";
import Icon from "../components/Icon";
import { navLinks } from "../constants/index";

const Nav = () => {
	return (
		<header className=" mt-[-30px]">
			<div
				className="flex items-center flex-1 justify-between
				py-4"
			>
				<div className="flex items-center max-container w-30 h-30 gap-6">
					{navLinks.map((link) => (
						<Icon
							name={link.name}
							icon={link.icon}
							link={link.link}
						/>
					))}
				</div>

				<Button
					label="Projects"
					href="#projects"
				/>
			</div>
		</header>
	);
};

export default Nav;
