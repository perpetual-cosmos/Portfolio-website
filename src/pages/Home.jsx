// import Contact from "../components/Contact";
// import DesignThought from "../components/DesignThought";
// import ExperienceNumber from "../components/ExperienceNumber";
// import HomeProjectCard from "../components/HomeProjectCart";
// import RecentProject from "../components/RecentProject";
// import PreimumTool from "../components/PremiumTool";
// function Home() {
//     return (
//         <div className="text-white text-center md:text-left p-4 md:p-0">
//     {/* Home Button Personal Home Heading */}
//     <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">SOFTWARE</h1>
//     <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-600">ENGINEER</h1>
    
//     <p className="mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl text-gray-400 w-[90%] max-w-[500px] mx-auto md:mx-0">
//         Passionate about creating intuitive and engaging user experiences.
//         Specialize in transforming ideas into beautifully crafted products.
//     </p>
//              {/* Experience Number of project */}
//             <div className="mt-10">
//                 <ExperienceNumber />
//             </div>
//             <div className="flex gap-10 mt-20">
//                 {/* Dynamic Animation Card */}
//                 <HomeProjectCard
//                     title="DYNAMIC ANIMATION, MOTION DESIGN"
//                     bgColor="#FF5722" 
//                     icon="📦"
//                     textcolor="white"
//                 />
//                 <HomeProjectCard
//                     title="FRAMER, FIGMA, WORDPRESS, REACTJS"
//                     bgColor="#CCFF00" 
//                     icon="📁"
//                     textcolor="black"
//                 />
//             </div>

//              {/* Recent Project Completed Recently*/}
//             <div className="mt-20 text-white h-100 ">
//             <RecentProject />
//             </div>

//              {/* Tools I am Famlier with */}
//             <div className="mt-20 ">
//             <PreimumTool/>
//             </div>
            
//              {/* Project added in my experience */}
//             <div className="mt-20">
//             <DesignThought/>
//             </div>
            
//              {/* Anyone can contact me */}
//             <div className="mt-20">
//                 <Contact />
//             </div>

//         </div>
//     );
// }

// export default Home;
import Contact from "../components/Contact";
import DesignThought from "../components/DesignThought";
import ExperienceNumber from "../components/ExperienceNumber";
import HomeProjectCard from "../components/HomeProjectCart";
import RecentProject from "../components/RecentProject";
import PreimumTool from "../components/PremiumTool";

function Home() {
  return (
    <div className="text-white text-center md:text-left p-4 md:p-0 sm:w-1/2">
      {/* Home Button Personal Home Heading */}
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold md:ml-20">SOFTWARE</h1>
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-gray-600 md:ml-20">
        ENGINEER
      </h1>
      <p className="mt-2 md:mt-4 text-xl lg:text-2xl text-gray-400 w-[90%] max-w-[500px] mx-auto md:mx-0 md:ml-20">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      {/* Experience Number of project */}
      <div className="mt-10 md:ml-20">
        <ExperienceNumber />
      </div>
      <div className="flex gap-10 m-20 md:mt-20">
        {/* Dynamic Animation Card */}
        <HomeProjectCard
          title="DYNAMIC ANIMATION, MOTION DESIGN"
          bgColor="#FF5722"
          icon="📦"
          textcolor="white"
          cardwidth="1/3"
        />
        <HomeProjectCard
          title="FRAMER, FIGMA, WORDPRESS, REACTJS"
          bgColor="#CCFF00"
          icon="📁"
          textcolor="black"
          cardwidth="1/4"
        />
      </div>
      {/* Recent Project Completed Recently */}
      <div className="m-20 md:mt-20 text-white h-100">
        <RecentProject />
      </div>
      {/* Tools I am Familiar with */}
      <div className="m-20 md:mt-20">
        <PreimumTool />
      </div>
      {/* Project added in my experience */}
      <div className="m-20 md:mt-20">
        <DesignThought />
      </div>
      {/* Anyone can contact me */}
      <div className="m-20 md:mt-20">
        <Contact />
      </div>
    </div>
  );
}

export default Home;