import React from "react";
import herobgimage from "../assets/herobgimage.jpg"

const Herosection = () => {
   return (
      <div className=" bg-custom1">
         <div className=" flex flex-row  m-32 bg-custom1">
         <div className="w-[55%] py-20">
            <div className="flex flex-row">
               <h1 className="px-1 text-[50px] font-semibold">Welcome to </h1>
               <h1 className="px-1 text-[50px] font-semibold text-yellow-600"> The Interns</h1>
            </div>
            <h3 className="m-2 text-3xl">Your one-stop staffing solution for dream carrers and perfect hiers!</h3>
            <p className="w-[80%] mx-2 my-6 text-sm">
               A leading provider of comprehensive staffing solutions for companies of all sizes. With a strong online and physical presence, we offer a range of services including job placement, recruitment process outsourcing, campus placement drives, staffing solutions, and tailor- made services. Our team of experienced professionals is dedicated to connecting candidates with their dream jobs and helping businesses find the perfect fit for their staffing needs
            </p>
            <div className="m-1">
               <button className="rounded-2xl font-medium p-2 w-[30%] border border-yellow-600 text-yellow-50 bg-yellow-600 m-2">Schedule a call</button>
               <button className="rounded-2xl font-medium p-2 w-[30%] border border-yellow-600 text-yellow-600 bg-yellow-50 m-2">Contact us</button>
            </div>
         </div>
         <div className="w-[45%]">
            <div className="absolute z-10 top-[90%] left-[60%] flex flex-row">
               <div className="p-2 border border-yellow-600 rounded-xl m-2 text-yellow-600 bg-yellow-100 w-32 text-center"><h1 className="text-lg font-semibold">1020+</h1> <h1 className="text-xs">Active Users</h1> </div>
               <div className="p-2 border border-yellow-600 rounded-xl m-2 text-yellow-600 bg-yellow-50 w-32 text-center"><h1 className="text-lg font-semibold">1980+</h1> <h1 className="text-xs">Support Done</h1> </div>
               <div className="p-2 border border-yellow-600 rounded-xl m-2 text-yellow-600 bg-yellow-50 w-32 text-center"><h1 className="text-lg font-semibold">2020+</h1> <h1 className="text-xs">Call Receive</h1> </div>
            </div>
         
            <img className="mix-blend-multiply w-[100%]" src={herobgimage} />
         </div>
      </div> 
      </div>
   );
}

export default Herosection;