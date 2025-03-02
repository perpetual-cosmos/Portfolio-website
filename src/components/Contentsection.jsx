import Profile from "./Profileimg";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Experience from "../pages/Experience";
import Thought from "../pages/Thoughts";
import Tools from "../pages/Tools";

const Content = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "projects":
        return <Project />;
      case "experience":
        return <Experience />;
      case "tools":
        return <Tools />;
      case "thoughts":
        return <Thought />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col md:flex-row  md:items-start pt-[5%] gap-8">
      <Profile />
      {renderContent()}
    </div>

  );
};

export default Content;
