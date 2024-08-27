import React from "react";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"


const About = () => {
   return (
      <div className="flex flex-row m-32">
         <div className="relative w-[60%] h-[100%] m-2 ">
           <img className="w-[60%] rounded-full " src={about2}/>
            <img className="absolute top-[40%] left-[30%] w-[40%] z-10 rounded-full m-2" src={about1}/>
         </div>
         <div className="w-[30%] h-[100%] flex flex-col justify-between text-center">
            <h1 className="text-4xl font-medium">About</h1>
            <div className="text-start my-5"> THE INTERNS is founded with the vision of bridging the gap between job seekers and employers. Our focus on providing top-notch staffing and recruitment services has allowed us to establish a strong presence both locally and internationally. With a customer base spread across PAN INDIA & OVERSEAS we are commited to helping businesses thrive by finding the right talend team for their teams.</div>
            <div className="flex flex-row justify-between mr-5">
               <button className="w-[45%] p-1 bg-yellow-600 text-yellow-50 rounded-xl">Schedule a call</button>
               <button className="w-[45%] p-1 rounded-xl text-yellow-600 border border-yellow-600">Know more</button>
            </div>
         </div>
      </div>
   );
}

export default About;