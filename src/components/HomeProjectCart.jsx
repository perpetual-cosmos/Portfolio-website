const HomeProjectCard = ({ title, bgColor, icon , textcolor,cardwidth}) => {
    return (
        <div
        className={`w-${cardwidth} h-auto p-4 md:h-[15rem] rounded-lg flex flex-col justify-between `}
        style={{ backgroundColor: bgColor, color:textcolor }}
      >
        {/* Icon */}
        <div className="text-3xl">{icon}</div>
  
        {/* Title */}
        <div className="text-2xl font-bold">{title}</div>
  
        {/* Arrow Button */}
        <div className="self-end text-2xl">➡️</div>
      </div>
    )
  };
  
  export default HomeProjectCard;