import Contact from "../components/Contact";
import RecentProject from "../components/RecentProject";

function Project() {
    return (
        <div className="sm:w-1/2">  
            <div className="text-white h-100 ">
            <RecentProject />
            </div>
            <div className="mt-20">
                <Contact />
            </div>
        </div>
    );
}

export default Project;
