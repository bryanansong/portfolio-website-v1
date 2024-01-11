const Icon = ({ name, icon, link }) => {
	return (
		<>
			<button
				data-tooltip-target="tooltip-light"
				data-tooltip-style="light"
				type="button"
			>
				<a
					href={link}
					target="_blank"
				>
					<img
						src={icon}
						alt={name}
						width={30}
						height={30}
					/>
				</a>
			</button>

			<div
				id="tooltip-light"
				role="tooltip"
				class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium 
                text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm 
                opacity-0 tooltip"
			>
				{name}
				<div
					class="tooltip-arrow"
					data-popper-arrow
				></div>
			</div>

			{/* <button
				data-tooltip-target="tooltip-light"
				data-tooltip-style="light"
				type="button"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800"
			>
				Light tooltip
			</button> */}
		</>
	);
};

export default Icon;
