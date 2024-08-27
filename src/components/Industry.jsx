import Industry_Img from "../assets/Industry_Img1.png";
import Ind_Vert_Img1 from "../assets/Ind_Vert_Img1.png";
import Ind_Vert_Img2 from "../assets/Ind_Vert_Img2.png";
import Ind_Vert_Img3 from "../assets/Ind_Vert_Img3.png";
import Ind_Vert_Img4 from "../assets/Ind_Vert_Img4.png";
import Ind_Vert_Img5 from "../assets/Ind_Vert_Img5.png";
import Ind_Vert_Img6 from "../assets/Ind_Vert_Img6.png";
import Ind_Vert_Img7 from "../assets/Ind_Vert_Img7.png";
import Ind_Vert_Img8 from "../assets/Ind_Vert_Img8.png";
import Ind_Vert_Img9 from "../assets/Ind_Vert_Img9.png";
import Ind_Vert_Img10 from "../assets/Ind_Vert_Img10.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import circle from "../assets/circle.png";
import ellipse3 from "../assets/Ellipse 3.png";

const Industry = () => {
  return (
    <div className="bg-[#FCF9EE] h-[797px] w-full py-8 px-28 ">
   
      <p className="text-4xl font-semibold tracking-wide text-black text-center pt-10 pb-2">
        Industry Verticals
      </p>
      <div className="grid grid-cols-3 relative w-[1228px] h-[495px] place-items-center">
        <div className="text-2xl font-semibold ">
          <p className="absolute  flex text-center justify-center   gap-3.5 left-[177px] top-[104px] bg-[#F1EBDB] px-6 py-3 rounded-xl ">
            <img src={Ind_Vert_Img1} alt="image" className="h-[35px]" />
            Goverment
          </p>
          <p className="absolute  flex text-center justify-center   gap-3.5 left-[98px] top-[211px] bg-[#F1EBDB] px-6 py-3 rounded-xl ">
            <img src={Ind_Vert_Img2} alt="image" className="h-[35px]" />
            Transportation
          </p>
          <p className="absolute  flex text-center justify-center   gap-3.5 left-[47px] top-[318px] bg-[#F1EBDB] px-6 py-3 rounded-xl ">
            <img src={Ind_Vert_Img3} alt="image" className="h-[35px]" />
            Finance
          </p>
          <p className="absolute  flex text-center justify-center   gap-3.5 left-[0px] top-[425px] bg-[#F1EBDB] px-6 py-3 rounded-xl ">
            <img src={Ind_Vert_Img4} alt="image" className="h-[35px]" />
            Retail
          </p>
          <p className="absolute  flex text-center justify-center   gap-3.5 left-[64px] top-[532px] bg-[#F1EBDB] px-6 py-3 rounded-xl ">
            <img src={Ind_Vert_Img5} alt="image" className="h-[35px]" />
            HealthCare
          </p>
        </div>

        <div className="relative right-[160px]">
          <img
            src={Ellipse2}
            alt="Ellipse Image"
            className="absolute inset-y-[150px] inset-x-[200px] w-[450px] h-[450px]"
          />
          <img
            src={ellipse3}
            alt="ellipse 3"
            className="absolute inset-x-[210px] inset-y-[210px]  w-[387px] h-[387px]"
          />
          <img
            src={Industry_Img}
            alt="Industry Image"
            className="ml-[250px]  mt-[80px] w-[399px] h-[481px] relative z-10"
          />
          <img
            src={circle}
            alt="circle"
            className="absolute top-[200px] left-[520px] "
          />

          <div className="relative">
            <img
              src={circle}
              alt="circle"
              className="absolute -top-11 left-36"
            />
            <img
              src={circle}
              alt="circle"
              className="absolute -top-8 left-[600px] h-8"
            />
          </div>
        </div>

        <div className="text-2xl font-semibold ">
          <p className="absolute flex text-center justify-center gap-3.5 left-[869px] top-[104px] bg-[#F1EBDB] px-4 py-4 rounded-xl">
            <img src={Ind_Vert_Img6} alt="image" className="h-[35px]" />
            Food and Beverage
          </p>
          <p className="absolute flex text-center justify-center gap-3.5 left-[982px] top-[211px] bg-[#F1EBDB] px-4 py-4 rounded-xl">
            <img src={Ind_Vert_Img7} alt="image" className="h-[35px]" />
            Logistics
          </p>
          <p className="absolute flex text-center justify-center gap-3.5 left-[1030px] top-[328px] bg-[#F1EBDB] px-4 py-4 rounded-xl">
            <img src={Ind_Vert_Img8} alt="image" className="h-[35px]" />
            Tech
          </p>
          <p className="absolute flex text-center justify-center gap-3.5 left-[1060px] top-[435px] bg-[#F1EBDB] px-3 py-4 rounded-xl">
            <img src={Ind_Vert_Img9} alt="image" className="h-[35px]" />
            Ed Tech
          </p>
          <p className="absolute flex text-center justify-center gap-3.5 left-[905px] top-[532px] bg-[#F1EBDB] px-4 py-4 rounded-xl">
            <img src={Ind_Vert_Img10} alt="image" className="h-[35px]" />
            E-commerce
          </p>
        </div>
      </div>
      </div>
   
  );
};

export default Industry;
