const ToolsCard = ({ image, title, description }) => {
    return (
      <div className="mt-10 flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-900">
        <img src={image} alt={title} className="w-24 h-22 rounded-xl object-cover" />
        <div>
          <h3 className="text-white font-bold text-4xl ">{title}</h3>
          <p className="text-gray-400 text-xl">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ToolsCard;