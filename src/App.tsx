// import React from 'react';
import TickIcon from '../src/assets/TickIcon.svg';
import Icon1 from '../src/assets/Icon1.svg';
import Icon2 from '../src/assets/Icon2.svg';
import Icon3 from '../src/assets/Icon3.svg';


import './App.css';

function App() {
  return (
    <>
      <div className='bg-purple-700 pt-10 lg:pt-24  lg:h-96 p-5 min-h-[397px]  '>

        <h1 className='text-3xl lg:text-5xl font-extrabold lg:text-center text-white my-5'>
          Simple pricing for your business
        </h1>
        <p className='lg:text-center text-white text-lg lg:text-2xl font-medium mt-4 '>
          Plans that are carefully crafted to suit your business.
        </p>
      </div>

      <div className='flex justify-center flex-col lg:flex-row -mt-32 mr-6 ml-5  '>
        {/* Left side box */}
        <div className='flex flex-col justify-center items-center gap-y-3 lg:rounded-r-none  bg-gray-200 pt-5  text-center  rounded-xl lg:rounded-l-xl shadow-lg lg:min-w-[378px]'>

          <div className='text-2xl font-extrabold text-gray-900'>Premium PRO</div>
          <div className='text-6xl lg:text-5xl font-extrabold text-gray-900'>$329</div>
          <div className='text-gray-900 font-medium text-lg lg:mt-8'>billed just once</div>
          <button className='bg-purple-800  text-base min-w-[250px] lg:px-12 py-2 font-bold text-white rounded-lg m-4'>
            Get Started
          </button>
        </div>

        {/* Right side box */}
        <div className=' p-11 max-w-[550px]  bg-white shadow-lg  lg:rounded-r-xl '>
          <p className=' text-gray-900 '>
            Access these features when you get this pricing package for your business.
          </p>
          <div className='flex flex-col'>
            <div className='flex gap-x-3 items-center my-4'>
              <img src={TickIcon} alt='tickicon' />
              <p className='  text-gray-900 mt-2  '>
                International calling and messaging API
              </p>
            </div>
            
            <div className='flex gap-x-3 items-center my-4'>
              <img src={TickIcon} alt='img' />
              <p className='  text-gray-900 '>
                Additional phone numbers
              </p>
            </div>
            <div className='flex gap-x-3 items-center my-4 '>
              <img src={TickIcon} alt='img' />
              <p className='text-gray-900 mt-2'>
                Automated messages via Zapier
              </p>
            </div>
            <div className='flex gap-x-3 items-center my-4 '>
              <img src={TickIcon} alt='img' />
              <p className='text-gray-900 mt-2'>
                24/7 support and consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last box */}

      <div className= 'flex justify-center  items-center flex-col min-h-44 lg:flex-row '>

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