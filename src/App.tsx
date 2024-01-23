import React from 'react';
import TickIcon from '../src/assets/TickIcon.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='bg-purple-700 pt-16 lg:pt-24 h-96 px-6'>
        <h1 className='text-3xl lg:text-5xl font-extrabold lg:text-center text-white'>
          Simple pricing for your business
        </h1>
        <p className='lg:text-center text-white text-lg lg:text-2xl font-medium mt-4'>
          Plans that are carefully crafted to suit your business.
        </p>
      </div>

      <div className='flex justify-center flex-col lg:flex-row -mt-32'>
        {/* Left side box */}
        <div className='flex flex-col justify-center pt-16 pb-20 bg-gray-200 max-w-[378px] text-center px-12 rounded-l-xl shadow-lg'>
          <div className='text-2xl font-extrabold text-gray-900'>Premium PRO</div>
          <div className='text-6xl lg:text-5xl font-extrabold text-gray-900'>$329</div>
          <div className='text-gray-900 font-medium text-lg lg:mt-8'>billed just once</div>
          <button className='bg-purple-800 px-12 py-3 font-bold text-white rounded-lg mt-4'>
            Get Started
          </button>
        </div>

        {/* Right side box */}
        <div className='p-12 bg-white shadow-lg rounded-r-xl'>
          <p className='text-lg leading-7 text-gray-900 break-words'>
            Access these features when you get this pricing package for<br/>your business.
          </p>
          <div className='flex flex-col gap-5 mt-7'>
            <div className='flex gap-5'>
              <img src={TickIcon} alt='tickicon' />
              <p className='text-lg leading-7 text-gray-900 mt-2'>
                International calling and messaging API
              </p>
            </div>
            
            <div className='flex gap-5'>
              <img src={TickIcon} alt='img' />
              <p className='text-lg leading-7 text-gray-900 mt-2'>
                Additional phone numbers
              </p>
            </div>
            <div className='flex gap-5'>
              <img src={TickIcon} alt='img' />
              <p className='text-lg leading-7 text-gray-900 mt-2'>
                Automated messages via Zapier
              </p>
            </div>
            <div className='flex gap-5'>
              <img src={TickIcon} alt='img' />
              <p className='text-lg leading-7 text-gray-900 mt-2'>
                24/7 support and consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last box */}
      <div className='flex flex-row justify-center bg-white mb-28 mt-8 mr-12 ml-20 gap-10 '>
        <div className='flex '>
          <p className='font-bold text-lg text-[#171923] '>30 days money back<br/>Guarantree</p>
        </div>
        <div>
          <p className='font-bold text-lg text-[#171923] '>No setup fees<br/>100% hassle-free</p>
        </div>
        <div>
          <p className='font-bold text-lg text-[#171923]'>No monthly subscription<br/> Pay once and for all</p>
        </div>
      </div>
    </>
  );
}

export default App;
