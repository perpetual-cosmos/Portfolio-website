import ToolsCard from "./ToolCard";

const PreimumTool = () => {
    return (
        <div className="text-white">
            <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">PREMIUM</h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">TOOLS</h1>
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-50">
                <ToolsCard image="/C++.png" title="C++" description="System Programming Expert" />
                <ToolsCard image="/HTML.png" title="HTML" description="Web Structure Wizard" />
                <ToolsCard image="/javascript.png" title="JavaScript" description="Full-Stack Powerhouse" />
                <ToolsCard image="/python.png" title="Python" description="Automation Maestro" />
                <ToolsCard image="/reactjs.png" title="ReactJs" description="Interactive UI Specialist" />
                <ToolsCard image="/firebase.png" title="Firebase" description="Real-Time Backend Guru" />
                <ToolsCard image="/postman.png" title="Postman" description="API Testing Pro" />
                <ToolsCard image="/docker.png" title="Docker" description="Containerization Ninja" />
                <ToolsCard image="/mongodb.png" title="MongoDB" description="Database Architect" />
                <ToolsCard image="/figma.png" title="Fingma" description="Visual Prototyping Pro" />
            </div>

        </div>
    );
};

export default PreimumTool;
