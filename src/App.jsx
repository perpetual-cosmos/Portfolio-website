import Navbar from "./components/Navbar";
import Content from "./components/Contentsection";
import { useState } from "react";
import Footer from "./components/Footer";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
      <Footer/>
    </div>
  );
};

export default App;