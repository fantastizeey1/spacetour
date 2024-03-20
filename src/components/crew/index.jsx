import React, { useEffect, useState } from 'react'
import mobileImage from '/src/assets/crew/background-crew-mobile.jpg';
import tabletImage from '/src/assets/crew/background-crew-tablet.jpg';
import desktopImage from '/src/assets/crew/background-crew-desktop.jpg';
import Douglas from '/src/assets/crew/image-douglas-hurley.png'
import Mark from '/src/assets/crew/image-mark-shuttleworth.png'
import Victor from '/src/assets/crew/image-victor-glover.png'
import Anousheh from '/src/assets/crew/image-anousheh-ansari.png'
import data from '../../../data';
import '/src/index.css';

const Crew = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const determineBackgroundImage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      return mobileImage;
    } else if (screenWidth < 900) {
      return tabletImage;
    } else {
      return desktopImage;
    }
  };

  useEffect(() => {
    setBackgroundImage(determineBackgroundImage());
  }, []); // Run only once on mount

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(determineBackgroundImage());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Add and remove resize event listener
 // Run only once on mount
 const [crewNumber, setCrewNumber] = React.useState(0);
 let crewImages = [
  Douglas,
  Mark,
  Victor,
  Anousheh
 ]
 const handleCrewChange = (index) => {
   setCrewNumber(index);
 };
  return (
    <div className='h-screen flex-wrap flex flex-col items-center justify-center w-full bg-cover lg:justify-start lg:items-start overflow-hidden'
    style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className='flex flex-col justify-start  items-center text-white text-center p-5 md:items-start md:-mt-80 lg:mt-10 lg:mx-auto lg:items-start lg:justify-start lg:ml-20 '>
      <h1 className='p-4 mt-10 md:text-[20px] font-condensed md:mb-8'>MEET YOUR CREW</h1>
      <div className='flex flex-col-reverse justify-center items-center md:flex-col lg:flex-row lg:gap-[30px] lg:items-start lg:justify-around'>
        <div className='flex flex-col-reverse justify-center items-center md:flex-col lg:justify-start lg:w-[50%] lg:items-start' 
        >
          <div className='flex flex-col mt-6'>
        <h2 className='uppercase font-bellefair text-[#88898a] my-2 md:text-[24px] md: lg:text-[32px] lg:text-start'>{data.crew[crewNumber].role}</h2>
        <h1 className='uppercase mb-4 font-bellefair  text-[30px] items-center md:text-[40px] lg:text-start lg:text-[50px]'>{data.crew[crewNumber].name}
        </h1>
            <p className='text-[15px] font-barlow text-[#d0d6f9] items-center text-center px-8 md:px-24 md: md:text-[16px]  lg:text-start lg:p-0 lg:my-10 lg:mt-3 lg:text-[18px]'>{data.crew[crewNumber].bio}</p>
          </div>

          <div className='flex flex-row items-center justify-center mt-10 lg:items-start lg:m-0 lg:'>
         <div onClick={() => handleCrewChange(0)} className={`crew-tab w-3 h-3 bg-transparent rounded-full border-2 border-[#707070] hover:border-white cursor-pointer mr-3 ${crewNumber === 0 ? 'active' : ''}`}></div> 
         <div onClick={() => handleCrewChange(1)} className={`crew-tab w-3 h-3 bg-transparent rounded-full border-2 border-[#707070] hover:border-white cursor-pointer mr-3 ${crewNumber === 1 ? 'active' : ''}`}></div> 
         <div onClick={() => handleCrewChange(2)} className={`crew-tab w-3 h-3 bg-transparent rounded-full border-2 border-[#707070] hover:border-white cursor-pointer mr-3 ${crewNumber === 2 ? 'active' : ''}`}></div> 
         <div onClick={() => handleCrewChange(3)} className={`crew-tab w-3 h-3 bg-transparent rounded-full border-2 border-[#707070] hover:border-white cursor-pointer ${crewNumber === 3 ? 'active' : ''}`}></div> 
          </div>
        </div>
       
        <div className='lg:w-[40%] border-b-[1px] border-[#707070] w-[80%] flex items-center justify-center md:border-none mx-2 md:-mb-96 md:mt-14 lg:-mt-16 lg:mx-0 lg:border-b-[1px] lg:border-[#707070]' >
        <img src={crewImages[crewNumber]}   alt="" className='w-[170px] md:w-[450px] lg:w-[70%] lg:h-[90%]  ' 
        />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Crew
