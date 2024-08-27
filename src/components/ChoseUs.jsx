import React from "react";
import seg01 from "../assets/seg01.jpg"
import seg02 from "../assets/seg02.jpg"
import seg03 from "../assets/seg03.jpg"
import seg04 from "../assets/seg04.jpg"
import seg05 from "../assets/seg05.jpg"
import bgcircl from "../assets/bgcircl.jpg"
import Ellipse4 from "../assets/Ellipse4.jpg"
import Ellipse7 from "../assets/Ellipse7.jpg"

const ChoseUs = () => {
   return (
      <div className="relative">
      <img src={bgcircl} className="absolute rounded-full z-0 left-[20%] top-[30%]"/>
      <div className="flex flex-col justify-center h-auto z-0 relative items-center m-32 overflow-hidden">
         <img src={Ellipse4} className="absolute rounded-full z-10 left-[10%] top-[95%]"/>
         <img src={Ellipse7} className="absolute rounded-full z-10 left-[95%] top-[95%]"/>
         <h1 className="text-3xl font-semibold">
            Why Choose US?
         </h1>
         <div className="w-full z-20">
            <img className="rounded-full relative left-[10%] top-[80px]" src={seg01}/>   
            <div className="w-[100%] bg-custom2 shadow-md rounded-lg text-start pl-[300px] p-3">
               <h1 className="m-2">Corporate Clients Customer Needs: Tailored staffing solutions for low-income businesses</h1>
               <h1 className="m-2">Demographics: Small to medium - sized companies in various industries </h1>
               <h1 className="m-2">Purchasing Behaviour: Value-driven, looking for cost-effective solutions</h1>
            </div>
         </div>
         <div className="w-full z-20">
            <img className="rounded-full  relative left-[80%] top-[80px]" src={seg02}/>   
            <div className="w-[100%] bg-custom2  shadow-md rounded-lg text-start pl-[100px] p-3">
               <h1 className="m-2">Educational Institutions Customer Needs: Assistance in organizing campus placement drives </h1>
               <h1 className="m-2">Demographics: Universities and colleges seeking job opportunities for their students </h1>
               <h1 className="m-2">Purchasing Behavior: Looking for reliable and efficient placement services</h1>
            </div>
         </div>
         <div className="w-full z-20">
            <img className="rounded-full  relative left-[10%] top-[80px]" src={seg03}/>   
            <div className="w-[100%] bg-custom2  shadow-md rounded-lg text-start pl-[300px] p-3">
               <h1 className="m-2">Experienced Professionals Customer Needs: Lateral hiring and career advancement opportunities </h1>
               <h1 className="m-2">Demographics: Individuals with 5+ years of work experience in IT and non-IT sectors salaries</h1>
               <h1 className="m-2">Purchasing Behaviour: Seeking challenging job roles with competitive </h1>
            </div>
         </div>
         <div className="w-full z-20">
            <img className="rounded-full  relative left-[80%] top-[80px]" src={seg04}/>   
            <div className="w-[100%] bg-custom2  shadow-md rounded-lg text-start pl-[100px] p-3">
               <h1 className="m-2">Start-up Companies Customer Needs: Quick and efficient recruitment process outsourcing</h1>
               <h1 className="m-2">Demographics: Emerging businesses looking to build their workforce rapidly </h1>
               <h1 className="m-2">Purchasing Behaviour: Seeking flexible and scalable staffing solutions </h1>
            </div>
         </div>
         <div className="w-full z-20">
            <img className="rounded-full relative left-[10%] top-[80px]" src={seg05}/>   
            <div className="w-[100%] bg-custom2 shadow-md rounded-lg text-start pl-[300px] p-3">
               <h1 className="m-2">Overseas Clients Customer Needs: International staffing and recruitment services</h1>
               <h1 className="m-2">Demographics: Companies based outside India looking for Indian talent</h1>
               <h1 className="m-2">Purchasing Behavior: Seeking cultural diversity and global expertise
</h1>
            </div>
         </div>
         <div className="h-[100px] -z-0"></div>
      </div>
      </div>
   );
}

export default ChoseUs;