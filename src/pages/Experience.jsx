import Contact from "../components/Contact";
import ExperienceComponent from "../components/ExperienceComponent";


function Experience() {
    return (
        <div className=" text-white text-center md:text-left p-4 md:p-0">
            {/* Project added in my experience */}
            <div className="md:mt-3 lg:mt-6">
                <ExperienceComponent />
            </div>
            {/* Anyone can contact me */}
            <div className="mt-20">
                <Contact />
            </div>
        </div>
    );
}

export default Experience;
