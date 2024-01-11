const Button = ({ label, href }) => {
	return (
		<div
			className=" rounded-md
				ring-1 ring-blue-950/50 hover:bg-gray-700 hover:cursor-pointer"
		>
			<a href={href}>
				<p className="m-0 px-5 py-2 hover:text-white text-gray-900 font-semibold">
					{label}
				</p>
			</a>
		</div>
	);
};

export default Button;
