import ProjectCard from "./ProjectCard"

//project list
const aboutProject = [
    {
        img: "/ujmrd.jpg",
        url: "https://www.ujmrid.com",
        title: "UJMRID - Research Journal Website",
        description: "Built UJMRID using WordPress, supporting 1,000+ research papers and 500+ authors. Optimized performance, ensuring 40% faster load times and 99.9% uptime for seamless publishing and peer review."
    },
    {
        img: "/blockchainvs.jpg",
        url: "https://www.ujmrid.com",
        title: "Blockchain-Based Voting System",
        description: "Developed a secure blockchain-based voting platform to ensure transparency and integrity in elections. Designed smart contracts deployed on Ethereum and built a React.js frontend integrated with Web3.js."
    },
    {
        img: "/chatbot.jpg",
        url: "https://www.ujmrid.com",
        title: "AI-Powered Customer Support Chatbot",
        description: "Engineered an AI chatbot using OpenAI’s GPT model, improving response accuracy by 80%. Integrated it with a React.js frontend and a Node.js backend, ensuring seamless real-time interactions."
    },
    {
        img: "/ecommerce.jpg",
        url: "https://www.ujmrid.com",
        title: "Full-Stack E-Commerce Platform",
        description: "Designed a MERN-based e-commerce platform with Stripe payment integration. Built an admin dashboard for inventory management and analytics, optimizing queries to reduce load time by 40%."
    },
    {
        img: "/chatbot.jpg",
        url: "https://www.ujmrid.com",
        title: "Real-Time Chat Application",
        description: "Developed a real-time chat application using WebSockets and MongoDB. Implemented JWT authentication for secure user sessions and deployed on AWS with auto-scaling for high traffic handling."
    },
    {
        img: "/pythonattandence.jpg",
        url: "https://www.ujmrid.com",
        title: "Face Recognition-Based Attendance System",
        description: "Built an AI-powered face recognition system for automated attendance tracking. Integrated OpenCV and Python with a React.js dashboard, reducing manual attendance errors by 90%."
    },
    {
        img: "/dicegame.jpg",
        url: "https://www.ujmrid.com",
        title: "Two-Dice Game App",
        description: "Developed a fun and interactive two-dice game using JavaScript and React. Features multiplayer support, randomized dice rolls, and an engaging UI for an immersive gaming experience."
    }
];

const RecentProject = ({limit}) => {

    const displayedProjects = aboutProject.slice(0, limit);
    

    return <>
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">RECENT</h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">PROJECTS</h1>
        {displayedProjects.map((element, index) => (
                <ProjectCard
                    key={index}
                    image={element.img}
                    title={element.title}
                    description={element.description}
                    url={element.url}
                />
            ))}

    </>
}
export default RecentProject