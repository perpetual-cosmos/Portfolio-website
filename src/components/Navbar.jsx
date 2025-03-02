import { HiHome, HiFolder, HiBriefcase, HiCog, HiLightBulb } from "react-icons/hi";

const Navbar = ({ setActiveSection }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 ">
      <div className="bg-[rgba(255,255,255,0.03)] rounded-[11px] px-0 md:px-5">
        <div className="flex gap-0 md:gap-2 flex-wrap justify-center">
          {[
            { icon: HiHome, label: "Home", section: "home" },
            { icon: HiFolder, label: "Projects", section: "projects" },
            { icon: HiBriefcase, label: "Experience", section: "experience" },
            { icon: HiCog, label: "Tools", section: "tools" },
            { icon: HiLightBulb, label: "Thoughts", section: "thoughts" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(item.section)}
              className="group relative text-white p-4 hover:text-[rgba(255,255,255,0.8)] transition-colors"
            >
              <div className="flex flex-col items-center">
                <item.icon className="w-7 h-7 mb-1" />
                <span className="absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 text-xl">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;