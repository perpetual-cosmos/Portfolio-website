import ToolsCard from "./ToolCard";

const PreimumTool = () => {
    return (
        <div className="text-white">
            <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">PREMIUM</h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">TOOLS</h1>
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-50">
                <ToolsCard image="/C++.png" title="C++" description="Language" />
                <ToolsCard image="/HTML.png" title="HTML" description="Language" />
                <ToolsCard image="/javascript.png" title="JavaScript" description="Language" />
                <ToolsCard image="/python.png" title="Python" description="Language" />
                <ToolsCard image="/reactjs.png" title="ReactJs" description="Language" />
                <ToolsCard image="/firebase.png" title="Firebase" description="Language" />
                <ToolsCard image="/postman.png" title="Postman" description="Language" />
                <ToolsCard image="/docker.png" title="Docker" description="Language" />
                <ToolsCard image="/mongodb.png" title="MongoDB" description="Language" />
                <ToolsCard image="/figma.png" title="Fingma" description="Language" />
            </div>

        </div>
    );
};

export default PreimumTool;
