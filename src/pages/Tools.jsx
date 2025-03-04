import Contact from "../components/Contact";
import PreimumTool from "../components/PremiumTool";
function Tools() {
    return (
        <div className=" text-white text-center md:text-left p-2 md:p-0">
        
        {/* Tools I am Familiar with */}
        <div className="mt-10 lg:mt-6">
          <PreimumTool />
        </div>
        {/* Anyone can contact me */}
        <div className="mt-20">
          <Contact />
        </div>
      </div>
    );
}

export default Tools;
