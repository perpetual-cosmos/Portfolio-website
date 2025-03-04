import { HiHome, HiFolder, HiBriefcase, HiCog, HiLightBulb } from "react-icons/hi";

const Navbar = ({ setActiveSection }) => {
  return (
    <div className="flex justify-center m-6">
      <div className="bg-[rgba(255,255,255,0.03)] rounded-[11px] px-0 md:px-2 w-fit">
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
              className="group relative text-white p-4 md:p-2  hover:text-[rgba(255,255,255,0.8)] transition-colors"
            >
              <div className="flex flex-col items-center">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 xl:w-5 xl:h-5 2xl:w-10 2xl:h-10 mb-1" />
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