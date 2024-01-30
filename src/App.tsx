
// import React from 'react';
import TickIcon from '../src/assets/TickIcon.svg';
import Icon1 from '../src/assets/Icon1.svg';
import Icon2 from '../src/assets/Icon2.svg';
import Icon3 from '../src/assets/Icon3.svg';


import './App.css';

function App() {
  return (
    <>
      <div className='bg-purple-700 pt-[56px] lg:pt-[88px]  min-h-[397px] pl-[23px] '>

        <h1 className='text-3xl lg:text-5xl font-extrabold lg:text-center text-[#F7FAFC] leading-[39px]'>
          Simple pricing for your business
        </h1>
        <p className='lg:text-center text-[#F7FAFC] text-lg lg:text-2xl font-medium mt-5 leading-8 lg:pt-4'>
          Plans that are carefully crafted to suit your business.
        </p>
      </div>

      <div className='flex justify-center flex-col lg:flex-row -mt-32 mr-6 ml-5 '>
        {/* Left side box */}
        <div className='flex flex-col justify-center items-center shrink-0 lg:rounded-r-none  bg-gray-200 rounded-xl lg:rounded-l-xl shadow-lg lg:min-w-[300px] '>

          <div className='text-2xl font-extrabold text-[#171923] leading-8 pt-[35px] '>Premium PRO</div>
          <div className='text-5xl lg:text-5xl font-extrabold text-[#171923] leading-[48px] pt-4'>$329</div>
          <div className='text-[#171923] font-medium text-lg lg:pt-8 pt-3 leading-7'>billed just once</div>

          <button className='bg-purple-800 text-center text-base min-w-[250px] lg:px-12 py-2 font-bold text-[#F7FAFC] rounded-lg mt-[32px] mb-[29px]'>
            Get Started
          </button>
        </div>

        {/* Right side box */}
        <div className=' min-w-[262px] bg-white shadow-lg  lg:rounded-r-xl lg:min-w-[800px] lg:min-h-[300px] lg:pt-[57px]'>
          <p className=' text-[#2D3748] pt-[39px] min-w-[220px] pl-2 text-lg lg:pl-12 '>
            Access these features when you get this pricing package for your business.
          </p>
          <div className='flex flex-col'>
            <div className='flex gap-x-3 items-center my-4 '>
              <img className='pl-3 lg:pl-12' src={TickIcon} alt='tickicon' />
              <p className='  text-[#2D3748] mt-2 min-w-[28px] text-lg lg:font-normal'>
                International calling and messaging API
              </p>
            </div>
            
            <div className='flex gap-x-3 items-center my-4 '>
              <img className='pl-3 lg:pl-12' src={TickIcon} alt='img'  />
              <p className='  text-[#2D3748] min-w-[28px] text-lg'>
                Additional phone numbers
              </p>
            </div>
            <div className='flex gap-x-3 items-center my-4  '>
              <img className='pl-3 lg:pl-12' src={TickIcon} alt='img' />
              <p className='text-[#2D3748] mt-2 min-w-[28px] text-lg'>
                Automated messages via Zapier
              </p>
            </div>
            <div className='flex gap-x-3 items-center my-4 '>
              <img className='pl-3 lg:pl-12' src={TickIcon} alt='img' />
              <p className='text-[#2D3748] mt-2 min-w-[28px] text-lg'>
                24/7 support and consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last box */}

      <div className= 'flex justify-center  items-center flex-col min-h-44 lg:flex-row pt-[38px]'>

        <div className='flex gap-x-4 py-3 max-w-[300px] items-center justify-center font-bold lg:p-6'>
          <img className='max-w-100 h-auto' src={Icon3} alt="img3" />
          <p className='text-[#171923] '>30 days money back Guarantree</p>
        </div>
        <div className='flex gap-x-4 py-3 max-w-[300px] items-center justify-center font-bold lg:p-6'>
          <img className='max-w-100 h-auto' src={Icon2} alt="img2" />
          <p className=' text-[#171923]  '>No setup fees 100% hassle-free</p>
        </div>
        <div className='flex gap-x-4 py-3 max-w-[300px] items-center justify-center font-bold lg:p-6 '>
          <img className='max-w-100 h-auto' src={Icon1} alt="img1" />
          <p className= 'text-[#171923]'>No monthly subscription Pay once and for all</p>
        </div>
      </div>
      
    </>
  );
}

export default App;