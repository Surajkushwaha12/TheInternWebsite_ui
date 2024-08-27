import Service_Img1 from "../assets/Service_Img1.png";
import Service_Img2 from "../assets/Service_Img2.png";
import Service_Img3 from "../assets/Service_Img3.png";
import Service_Img4 from "../assets/Service_Img4.png";
import Service_Img5 from "../assets/Service_Img5.png";
import Service_Img6 from "../assets/Service_Img6.png";

const OurService = () => {
  return (
    <div className="bg-[#F6EECB]  h-[884px] ">
      <p className="text-4xl text-center  py-[30px] font-semibold tracking-wide">
        Our Services
      </p>
      <div className="grid grid-cols-3 mx-36">
        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            Talent Acquistion
          </p>
          <img src={Service_Img1} alt="image1" className="mx-auto" />
        </div>

        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            360 Recruitment
          </p>
          <img src={Service_Img2} alt="image1" className="mx-auto" />
        </div>
        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            Project Based Hiring
          </p>
          <img src={Service_Img3} alt="image1" className="mx-auto" />
        </div>
        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            Contractual Hiring
          </p>
          <img src={Service_Img4} alt="image1" className="mx-auto" />
        </div>
        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            Bulk Hiring
          </p>
          <img src={Service_Img5} alt="image1" className="mx-auto" />
        </div>
        <div className="bg-white mx-auto h-[292px] w-[388px] my-4 py-10 rounded-xl shadow-md shadow-black/60">
          <p className="text-center text-2xl font-semibold mb-4 tracking-wide">
            Payroll Service
          </p>
          <img src={Service_Img6} alt="image1" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default OurService;
