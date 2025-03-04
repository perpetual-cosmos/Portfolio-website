import Contact from "../components/Contact";
import RecentProject from "../components/RecentProject";

function Project() {
    return (
        <div className=" text-white text-center md:text-left p-4 md:p-0 lg:mt-2">
            {/* Recent Project Completed Recently */}
            <div className="md:mt-3 lg:mt-6 text-white">
                <RecentProject />
            </div>
            {/* Anyone can contact me */}
            <div className="mt-20">
                <Contact />
            </div>
        </div>
    );
}

export default Project;
