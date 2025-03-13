const ProjectCard = ({ image, title, description,url }) => {
    return (
      <div className="bg-[#125d75] sm:mr-20 md:mr-40 mt-10 flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl hover:bg-[#0f4557] md:w-[90%] lg:w-[70%]">
        <img src={image} alt={title} className="w-28 h-24 object-cover rounded-lg " />
        <div>
          <h3 className="text-white text-xl sm:text-3xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-md sm:text-lg">{description}</p>
        </div>
        <a href={url} className="text-orange-400 hover:text-orange-500 text-xl ml-auto">
          ↗
        </a>
      </div>
    );
  };
  export default ProjectCard;
  