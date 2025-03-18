import ThoughtCard from "./ThoughtCard"
const DesignThought = () => {
    return <div className="text-white">
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">Blogs</h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">Documentation</h1>
         <ThoughtCard
            title="Why Your React App is Slow: 3 Uncommon Performance Fixes I Learned the Hard Way"
            description="After optimizing 10+ production React apps, I discovered most tutorials miss these critical bottlenecks. Learn how memoization patterns, Webpack chunking, and Intersection Observer can reduce load times by 40% (with code snippets from real client projects)"
            Url="#"
        />
         <ThoughtCard
            title="AI-Powered Apps on a Budget: How I Built a Resume Analyzer for $0"
            description="You don’t need a $10k GPU cluster to leverage AI. See how I combined OpenAI’s API, Firebase, and clever prompt engineering to create a resume optimization tool – perfect for bootstrapped startups wanting smart features."
            Url="#"
        />
        <ThoughtCard
            title="Blockchain for Beginners: How I Built a Voting dApp Without the Crypto Hype"
            description="Blockchain isn’t just for cryptocurrencies. I’ll break down how I used Solidity and React to create a tamper-proof voting system for a local NGO – minus the buzzwords. Perfect for devs curious about Web3’s practical side."
            Url="#"
        />
    </div>

}
export default DesignThought