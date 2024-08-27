import React from 'react';
import FeaturesCards from './Cards/FeatureCard';
import Feature1 from '../../Images/Feature1.jpeg';
import Feature2 from '../../Images/Feature2.jpeg';
import Feature3 from '../../Images/Feature3.jpeg';
import profile1 from '../../Images/Profile1.jpeg'
import profile2 from '../../Images/Profile2.jpeg'
import profile3 from '../../Images/Profile3.jpeg'


function Features() {

  return (
    <>
      <div className="w-full h-auto flex flex-col px-[70px] py-8 " style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex text-3xl font-normal pt-5 pb-10" >
          Featured Blog
        </div>
        
          <div className="flex md:flex-row  w-full flex-col justify-between">
            <FeaturesCards
              image={Feature3}
              name="Alec Whitten"
              date="17 Jan 2022"
              type="Management"
              description="Like to know the secrets of transforming a
                             2-14 team into a 3x Super Bowl winning Dynasty?"
              heading="Bill Walsh leadership lessons"
              profile={profile1}
            />

            <FeaturesCards
              image={Feature2}
              name="Demi WIlkinson"
              date="16 Jan 2022"
              type="Product"
              heading="PM mental models lessons"
              description="Mental models are simple expressions of complex processes or relationships 
              Learn from the best in the industry."
              profile={profile2}
            />

            <FeaturesCards
              image={Feature1}
              name="Candice Wu"
              date="15 Jan 2022"
              type="Design"
              description="Introduction to Wireframing and its Principles. 
              Learn from the best in the industry."
              heading="What is Wireframing?"
              profile={profile3}
            />
          </div>

     
      </div>

    </>
  );
}

export default Features;
