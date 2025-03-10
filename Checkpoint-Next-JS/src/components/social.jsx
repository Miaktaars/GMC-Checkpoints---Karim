import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

function Social(){
    return(
        <div className="flex space-x-3 text-2xl mt-9">
        <div className="bg-[#1DA1F2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://x.com/PapaMeissaMbay2" target="_blank"><FaTwitter className="text-4xl p-1" color="white"/></a>
        </div>
        <div className="bg-[#0a66c2] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://www.linkedin.com/in/papa-meissa-mbaye-a76ab4207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><CiLinkedin className="text-4xl p-1" color="white"/></a>
        </div>
        <div className="bg-[#ea4335] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="mailto:meissambaye09@gmail.com" target="_blank"><SiGmail color="white" className="text-4xl p-1"/></a>
        </div>
        <div className= "bg-[#181717] rounded-[7px] transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-150">
        <a href="https://github.com/BaayMeissa/" target="_blank"><FaGithub color="white" className="text-4xl p-1"/></a>
        </div>
        </div>
    )
}

export default Social;