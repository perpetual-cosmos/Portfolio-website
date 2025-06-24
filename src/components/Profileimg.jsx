import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
    return (
        <div className="md:sticky md:top-0 md:h-[90vh]">
        <div className="bg-white items-center m-4 text-center rounded-2xl p-6 md:p-2  w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] lg:mt-10 h-fit  md:flex md:flex-col md:translate-x-10 lg:translate-x-40 xl:translate-x-60">
            {/* Profile Image */}
            <img
                src="/tarun photo freelancer.jpg"
                alt="profile image"
                className="rounded-[50px] px-6 py-4 md:px-2 2xl:px-8"
            />

            {/* Name */}
            <div className="text-2xl md:text-2xl font-bold mt-4 2xl:text-5xl">Tarun Singh</div>

            {/* Bio */}
            <p className="sm:text-2xl md:text-sm mt-6 2xl:text-4xl">
                A Software Engineer who has developed countless innovative solutions.
            </p>
            <div className="flex justify-center gap-3 mt-4">
                <a href="https://x.com/perpetualCosmo_" className="text-[#f97316] hover:text-black text-2xl 2xl:text-4xl" target="_blank"><FaXTwitter /></a>
                <a href="https://github.com/perpetual-cosmos" className="text-[#f97316] hover:text-black text-2xl 2xl:text-4xl" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/tarunsingh241/" className="text-[#f97316] hover:text-black text-2xl 2xl:text-4xl" target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/perpetualcosmos_/" className="text-[#f97316] hover:text-black text-2xl 2xl:text-4xl" target="_blank"><FaInstagram /></a>
                <a href="mailto:prataptarunsingh241@gmail.com" className="text-[#f97316] hover:text-black text-2xl 2xl:text-4xl" target="_blank"><SiGmail /></a>
            </div>
        </div>
        </div>
    );
}

export default Profile;