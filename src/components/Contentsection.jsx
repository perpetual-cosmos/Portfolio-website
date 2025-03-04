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
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%]"> 
        <Profile />
        <div className="md:h-[90vh] md:overflow-y-auto">
          {renderContent()}</div>
        
    </div>
  );
};

export default Content;
