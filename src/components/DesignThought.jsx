import DesignCard from "./DesignCard"
const DesignThought = () => {
    return <div className="text-white">
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">3 YEARS OF</h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">EXPERIENCE</h1>
         <DesignCard
            title="Blockchain Enthusiast | Smart Contracts & Web3 Basics"
            description="Explored blockchain development by building decentralized applications and smart contracts. Worked on Ethereum-based voting systems and Web3 integrations, ensuring security and transparency in transactions."
            startDate="Mar 2023 – Present"
            endDate="Present"
        />
         <DesignCard
            title="Full-Stack Web Developer | MERN"
            description="Designed and developed full-stack applications with React.js, Node.js, and MongoDB. Built real-time chat apps, task management tools, and AI-driven applications with authentication, database optimization, and cloud deployment."
            startDate="Jan 2022"
            endDate="Present"
        />
        <DesignCard
            title="Frontend Developer | React & WordPress"
            description="Developed dynamic and responsive web applications using React.js, Next.js, and WordPress. Built e-commerce platforms, portfolio websites, and interactive dashboards with optimized performance and SEO. Skilled in integrating APIs, customizing themes, and enhancing UI/UX for high engagement."
            startDate="Jan 2022"
            endDate="Present"
        />
    </div>

}
export default DesignThought