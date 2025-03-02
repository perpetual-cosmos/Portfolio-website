import Navbar from "./components/Navbar";
import Content from "./components/Contentsection";
import { useState } from "react";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="bg-[#151312] ">
      <Navbar setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
};

export default App;