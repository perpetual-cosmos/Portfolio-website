import Contact from "../components/Contact";
import DesignThought from "../components/DesignThought";
import ExperienceNumber from "../components/ExperienceNumber";
import HomeProjectCard from "../components/HomeProjectCart";
import RecentProject from "../components/RecentProject";
import PreimumTool from "../components/PremiumTool";

function Home() {
  return (
    <div className=" text-white text-center md:text-left p-4 md:p-0 lg:mt-6">
      {/* Home Button Personal Home Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">SOFTWARE</h1>
      <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">
        ENGINEER
      </h1>
      <p className="mt-2 md:mt-4 text-xl 2xl:text-3xl text-gray-400 w-[90%] max-w-[500px] mx-auto md:mx-0 ">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      {/* Experience Number of project */}
      <div className="mt-10 lg:ml-10">
        <ExperienceNumber />
      </div>
      <div className="flex flex-col sm:flex-row gap-10 mt-20 sm:mx-10">
        {/* Dynamic Animation Card */}
        <HomeProjectCard
          title="REACTJS NEXT.JS REDUX TAILWIND CSS"
          bgColor="#FF5722"
          icon="📦"
          textcolor="white"
          cardwidth="30%"
        />
        <HomeProjectCard
          title="NODE.JS EXPRESS MONGODB FIREBASE API"
          bgColor="#CCFF00"
          icon="📁"
          textcolor="black"
          cardwidth="40%"
        />
      </div>
      {/* Recent Project Completed Recently */}
      <div className="mt-20 text-white">
        <RecentProject />
      </div>
      {/* Tools I am Familiar with */}
      <div className="mt-20">
        <PreimumTool />
      </div>
      {/* Project added in my experience */}
      <div className="mt-20">
        <DesignThought />
      </div>
      {/* Anyone can contact me */}
      <div className="mt-20">
        <Contact />
      </div>
    </div>
  );
}

export default Home;