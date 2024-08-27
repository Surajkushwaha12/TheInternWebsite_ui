import React from "react";



const FeaturesCards = ({ image, heading, name,date,profile, type, description }) => {
    return (
        <>
            <div className="flex flex-col justify-start w-[350px] py-3 px-4 border shadow-lg shadow-[rgba(16, 24, 40, 0.03)] ">


                <img src={image} alt="Product image" srcset="" />

                <div className="my-6 px-3 ">
                    <h1 className="text-md " style={{ color: 'rgba(105, 65, 198, 1)' }}>{type}</h1>
                    <div className="flex flex-row justify-between py-5" >
                        <h1 className="text-3xl" style={{color:"#101828"}}>{heading}</h1>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>

                    <div className=" pb-8">
                        <p style={{ color: '#475467' }}>{description}</p>

                    </div>
                    <div className="flex flex-row gap-5 py-5">
                       <img className="w-12 h-12" src= {profile} alt="Profile Image" srcset="" />
                        <div className="flex flex-col ">
                            <p className="font-semibold text-lg" style={{color:"#101828"}}>{name}</p>
                            <p style={{color:'#475467'}}>{date}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default FeaturesCards;