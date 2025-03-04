const DesignCard = ({ title, description, startDate, endDate }) => {
    return (
        <div className="mt-10 hover:bg-[#1a1a1a] text-white  rounded-lg  w-auto">
            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-bold">{title}</h2>

            {/* Description */}
            <p className="mt-3 text-md sm:text-xl text-gray-400 ">{description}</p>

            {/* Date */}
            <p className="text-gray-500 mt-4">
                {startDate} - {endDate}
            </p>
            <a href="#" className="text-orange-400 hover:text-orange-500 text-xl ml-auto">
          ↗
        </a>
        </div>
    );
};

export default DesignCard;
