import Contact from "../components/Contact";
import DesignThought from "../components/DesignThought";

function Thought() {
    return (
        <div className=" text-white text-center md:text-left p-4 md:p-0">
            {/* Project added in my experience */}
            <div className="md:mt-3 lg:mt-6">
                <DesignThought />
            </div>
            {/* Anyone can contact me */}
            <div className="mt-20">
                <Contact />
            </div>
        </div>
    );
}

export default Thought;
