import Contact from "../components/Contact";
import DesignThought from "../components/DesignThought";
import ExperienceNumber from "../components/ExperienceNumber";
import HomeProjectCard from "../components/HomeProjectCart";
import RecentProject from "../components/RecentProject";
import PreimumTool from "../components/PremiumTool";
function Thought() {
    return (
        <div className="mx-10 text-white">
            
            <DesignThought/>
            <div className="mt-20">
                <Contact />
            </div>

        </div>
    );
}

export default Thought;
