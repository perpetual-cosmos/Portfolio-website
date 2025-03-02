const Sidebar = () => {
    return (
      <div className="fixed left-0 top-0 h-screen w-1/3 bg-gray-900 text-white p-8 flex flex-col justify-center">
        <div className="bg-white p-6 rounded-xl text-black text-center">
          <img
            src="#"
            alt="Profile"
            className="rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">Aabid Ahmed</h2>
          <p className="text-sm mt-2">
            A Software Engineer who has developed countless innovative solutions.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xl">
            <a href="#" className="text-gray-600 hover:text-black">🌐</a>
            <a href="#" className="text-gray-600 hover:text-black">🐦</a>
            <a href="#" className="text-gray-600 hover:text-black">📷</a>
            <a href="#" className="text-gray-600 hover:text-black">✉️</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  