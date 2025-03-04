const ToolsCard = ({ image, title, description }) => {
    return (
      <div className="mt-10 flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-900">
        <img src={image} alt={title} className="w-8 h-8 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-24 rounded-xl object-cover" />
        <div>
          <h3 className="text-white font-bold text-xl sm:text-4xl md:text-2xl">{title}</h3>
          <p className="text-gray-400 sm:text-xl">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ToolsCard;