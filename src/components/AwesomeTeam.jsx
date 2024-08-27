import Awesome_Img1 from "../assets/Awesome_Img1.png";
import Awesome_Img2 from "../assets/Awesome_Img2.png";
import Awesome_Img3 from "../assets/Awesome_Img3.png";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import eclipse from "../assets/eclipse.png";

const AwesomeTeam = () => {
  return (
    <div className="pt-10">
      <p className="text-4xl text-center font-semibold pb-4">
        Our Awesome Team
      </p>
      <p className="text-2xl text-center text-black/85 font-semibold">
        Creating Connections, Shaping Tomorrow
      </p>

      <div className="flex justify-center gap-10 text-center pt-10 pb-28">
        <div className="flex  items-center ">
          <FaAngleLeft className="text-4xl " />
        </div>
        <div className="border-2 border-black/10 rounded-xl mb-6 shadow-xl">
          <img src={Awesome_Img1} alt="Awesome_Img1" />
          <p className="text-xl font-semibold py-1.5">Meriga Linga</p>
          <p className="text-black/40 font-medium">CEO/Developer</p>

          <div className="flex items-center justify-center gap-6 pt-2 mb-4">
            <FaInstagram className="text-2xl  " />
            <FaFacebook className="text-2xl  " />
            <FaLinkedinIn className="text-2xl  " />
            <CiYoutube className="text-2xl " />
          </div>
        </div>
        <div className="border-2 border-black/10 rounded-xl mb-6 shadow-xl">
          <img src={Awesome_Img2} alt="Awesome_Img2" />
          <p className="text-xl font-semibold py-1.5">John Smith</p>
          <p className="text-black/40 font-medium">CFO/Developer</p>

          <div className="flex items-center justify-center gap-6 pt-2 mb-4">
            <FaInstagram className="text-2xl  " />
            <FaFacebook className="text-2xl  " />
            <FaLinkedinIn className="text-2xl  " />
            <CiYoutube className="text-2xl  " />
          </div>
        </div>
        <div className="border-2 border-black/10 rounded-xl mb-6 shadow-xl">
          <img src={Awesome_Img3} alt="Awesome_Img3" />
          <p className="text-xl font-semibold py-1.5">Meriga Linga</p>
          <p className="text-black/40 font-medium">CTO/Developer</p>

          <div className="flex items-center justify-center gap-6 pt-2 mb-4">
            <FaInstagram className="text-2xl  " />
            <FaFacebook className="text-2xl  " />
            <FaLinkedinIn className="text-2xl  " />
            <CiYoutube className="text-2xl  " />
          </div>
        </div>

        <div className="flex items-center">
          <FaChevronRight className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default AwesomeTeam;

{
  /* <div className=""> */
}
{
  /* <img src={eclipse} alt="eclipse" className="h-[650px] w-[650px]" /> */
}
// </div>;
