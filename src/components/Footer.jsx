import React from 'react'
import img from '../assets/Vector.png'
import img1 from '../assets/Vector1.png'
import phone from '../assets/Phoneimg.png'
import logo from '../assets/Link → the-interns-logo-A3QpxOVw7XfxgN1M.png.png'
const Footer = () => {
  return (
    <>
    <div className=" ">
    {/* main div */}
     <div className="h-[398px] w-[100%]  top-[6348.65px] bg-[#fcf9ee]"> 
      <div className="w-[100%] h-[340px] gap-[113px] flex bg-[#fcf9ee] relative">
      <div  className="w-[587.5px] h-[270px] top-[57px] left-[133px] gap-6 relative mb-8">
          <div className="w-[587.5px] h-[84px] gap-[9px] flex mb-4">
          
            <div className="w-[84px] h-[84px] bg-[#ffffff] ">
             <img   src={logo} alt="" srcset="" />
            </div>
           <div className=" w-[257px] h-[24px] gap-[9px]  ">
           <h1 className="col-start-1     "><span className="text-[48px] text-black">The </span><span className="text-[48px]  leading-6 text-[#BFA55B] ">Interns</span></h1>
          
           </div>
          
          </div>
          <p className="font-medium text-[#232323] fontFamily: Mulish leading-8  ">THE INTERNS is founded with the vision of bridging the gap between job seekers and  employers. Our focus on providing top-notch staffing and recruitment services has allowed us to establish a strong presence both locally and internationally. With acustomer base spread across PAN INDIA & OVERSEAS, we are committed to                       
          helping businesses thrive by finding the right talent for their teams.</p>
        </div>
        
     <div className=" w-[505px] h-[77px] gap-6 absolute bottom-[5px] right-10">
       <div className="w-[502px] h-[24px] flex right-0">
       <a className="w-[135px] h-[24px] font-[600] size-24  leading-{24px} .item-center text-[#000000] gap-6" href="/Home">Home</a>

       <a className="w-[137px] h-[24px] font-[600] size-24  leading-{24px} .item-center text-[#000000] gap-6" href="/Corporate">Corporate</a>

       <a className="w-[137px] h-[24px] font-[600] size-24  leading-{24px} .item-center text-[#000000] gap-6" href="/Student">Student</a>

       <a className="w-[135px] h-[24px] font-[600] size-24  leading-{24px} .item-center text-[#000000] gap-6" href="/Blog">Blog</a>
       </div>
         

         <div className="w-[237px] h-[33px] gap-[20px] flex flex-row items-center absolute right-16 top-8 ">
            <h5 className="w-[133px] h-[33px] text-[#232323] leading-{33px} size-24 font-[700] ">Contact us at:</h5>
            <div className="flex w-[84px] h-[20px] gap-[12px]  mr-8 ">
               <img className="w-[15px] h-[15px] text-[#0A1015]" src={img} alt="" srcset="" />
                <img className="w-[15px] h-[15px] top-2.5px text-[#0A1015]" src={img1} alt="" />
                <img className="w-[15px] h-[15px] text-[#0A1015]" src={phone} alt="" />
            </div>
         
    
     
       </div>

     
      
 

     </div>
      </div>

        
     <div className="w-[100%] h-[58.5px]  bg-[#BFA55B] absolute mt-8 ">
     <h5 className=" w-[220.79px] h-[24px]  absolute text-[#ffffff]  flex items-center justify-center content-center top-4 opacity-100 font-semibold text-base leading-6 left-[48%]">Copyright 2024 - The Interns</h5>    
     </div>
        
     </div>
     </div>

     
    </>
  )
}

export default Footer