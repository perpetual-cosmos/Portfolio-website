import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Profile = () => {
    return (
        <div className="bg-white mx-36 md:mx-16 items-center m-3 text-center rounded-2xl p-6 mt-40 md:mt-10 md:mr-20 md:w-[380px] md:h-[720px]  md:shadow-lg md:flex md:flex-col">
            {/* Profile Image */}
            <img 
                src="/tarun photo freelancer.jpg" 
                alt="profile image" 
                className="rounded-[50px] px-6 py-4"
            />
            
            {/* Name */}
            <div className="text-5xl font-bold mt-4">Tarun Singh</div>

            {/* Bio */}
            <p className="text-2xl mt-6 md:mt-16 px-4">
                A Software Engineer who has developed countless innovative solutions.
            </p>
            <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-[#f97316] hover:text-black text-2xl"><FaInstagram /></a>
            <a href="#" className="text-[#f97316] hover:text-black text-2xl"><FaGithub /></a>
            <a href="#" className="text-[#f97316] hover:text-black text-2xl"><SiGmail /></a>
            <a href="#" className="text-[#f97316] hover:text-black text-2xl"><FaLinkedin /></a>
          </div>
        </div>
    );
}

export default Profile;
