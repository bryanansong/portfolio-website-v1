import {
	linkedIn,
	github,
	fileRegular,
	musicSolid,
} from "../assets/icons";

export const navLinks = [
	{
		name: "linkedin",
		icon: linkedIn,
		link: "https://www.linkedin.com/in/bryanansong/",
	},
	{
		name: "spotify",
		icon: musicSolid,
		link: "/",
	},
	{
		name: "github",
		icon: github,
		link: "https://github.com/bryanansong",
	},
	{
		name: "resume",
		icon: fileRegular,
		link: "https://drive.google.com/file/d/1OodxB2_ie_by1qs53N_oI7zqxM8-5ZdT/view?usp=sharing",
	},
];

export const description =
	"🚀 CS student at UVA passionate about coding, fitness, and tech innovation.\n\
	💻 Currently mastering LeetCode, building project, and lifting at the gym.\n\
	🏋🏾‍♂️ I make fitness during my spare time. IG/Tiktok: @LiftsWithBryan.\n\
	🔗 Let's connect, collaborate, and shape the future together!\n\
	Feel free to say Hi!👋🏾";

export const experiences = [
	{
		title: "Undergraduate Teaching Assistant",
		company: "University of Virginia",
		duration: "August 2023 - Present",
		location: "Charlottesville, VA",
		description:
			"I delivered personalized guidance to 200+ students, cultivating critical thinking, troubleshooting, and a deeper grasp of fundamental programming concepts. Facilitated collaborative learning, forming groups for coding challenges, leading to a 60% enhancement in programming skills.",
	},
	{
		title: "Software Engineer",
		company: "Populus Trading",
		duration: "May 2023 - December 2023",
		location: "Remote",
		description:
			"Created and managed a React Native mobile app for virtual trading of NBA and FIFA athlete shares, surpassing project milestones, introducing a dynamic League Card feature through API integration and MongoDB, and enhancing user experience with an intuitive onboarding screen.",
	},
	// {
	// 	title: "Intramural Sports Supervisor",
	// 	company: "University of Virginia",
	// 	duration: "August 2022 - Present",
	// 	location: "Charlottesville, VA",
	// 	description:
	// 		"Oversaw new and engaging intramural sports, conducted daily quality assurance reports for 5 team sports, resulting in a 14% reduction in injury rates and a 95% student satisfaction rating.",
	// },
];

export const skills = [];

export const projects = [
	{
		title: "WhatsApp Clone",
		tools: "JavaScript | React Native | AWS Amplify",
		github: "https://github.com/bryanansong/Whatsapp-Clone",
		description:
			"• Developed a WhatsApp Clone using React Native with secure authentication using AWS Cognito for user privacy.\
• Implemented a responsive one-to-one chat screen with messaging features, utilizing Amazon Web Services DynamoDB and GraphQL for efficient data storage and retrieval.",
	},
	{
		title: "Picture Script",
		tools: "React | JavaScript | HTML | CSS",
		github: "https://github.com/bryanansong/Picture-Script",
		description:
			"• Developed a website using React, to enable real-time image generation with OpenAI's DALL-E API based on prompts.\
• Demonstrated strong frontend development skills, creative problem-solving, and integration of external APIs for a user-friendly image generation experience.\
",
	},
	{
		title: "PhotoFunktastic",
		tools: "React | JavaScript | HTML | CSS",
		github: "https://github.com/bryanansong/photofunktastic",
		description:
			"• Developed a user-friendly web application, PhotoFunktastic, using React, enabling users to effortlessly enhance and manipulate photos in real-time through an intuitive slider-based interface.\
• Implemented advanced image processing techniques, including brightness, saturation, sepia, hue rotation, contrast, and grayscale adjustments, providing users with a versatile tool for photo enhancement.",
	},
	// {
	// 	title: "",
	// 	tools: "",
	// 	github: "",
	// 	description: "",
	// },
];

export const lastUpdated = "January 2024";
