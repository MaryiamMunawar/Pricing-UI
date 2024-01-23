import './App.css';
import StarICon from '/Group 172.svg';

function App() {
  return(
    <>
    <div className='bg-[#6846C1]  max-w-[1440px] h-96 shrink-0 pt-[56px] lg:pt-[88px]'>
      <h1 className='text-3xl lg:text-5xl font-extrabold lg:text-center text-[#F7FAFC]   '>
        Simple pricing for your business</h1>
      <p className='lg:text-center text-[#F7FAFC] text-lg lg:text-2xl font-medium mt-4'>
        Plans that are carefully crafted to suit your business.</p>     
    </div>

    <div className='flex justify-center bg-white max-w-[994px] rounded xl max-h-80 shrink-0  shadow-md -mt-36 mr-56 ml-56'>
      {/* left side box */}
      <div  className='flex justify-center flex-col pt-[57px] pb-[60px] bg-gray-200 max-w-[378px] text-center rounded-l-xl'>
        <div className='text-2xl font-extrabold text-[#171923]'>
          Premium PRO
        </div>
        <div className='text-6xl font-extrabold text-[#171923]'>
          $329
        </div>
        <div className='text-[#171923] font-medium text-lg'>
          billed just once
        </div>
        <button className='bg-[#805AD5] px-[75px] py-3 font-bold text-[#F7FAFC] rounded-lg pt-3 '>
          Get Started
        </button>
      </div>
      
      {/* Right side box */}
      <div className='p-12 max-w-[560px]'>
      <div className='flex '>
        <p className='text-lg leading-7 text-listColor break-words'>
          Access these features when you get this pricing package for your business.
        </p>
      </div>

      <div className='flex gap-5'>
      <img src={StarICon} alt="img" /> 
        <p className='text-lg leading-7 text-listColor mt-2'>
          International calling and messaging API
        </p>
      </div>

      <div className='flex gap-5'>
        <img src={StarICon} alt="img" /> 
        <p className='text-lg leading-7 text-listColor mt-2'>
          Additional phone numbers
        </p>
      </div>

      <div className='flex gap-5'>
        <img src={StarICon} alt="img" /> 
        <p className='text-lg leading-7 text-listColor mt-2'>
         Automated messages via Zapier
        </p>
      </div>

      <div className='flex gap-5'>
        <img src={StarICon} alt="img" /> 
        <p className='text-lg leading-7 text-listColor mt-2'>
          24/7 support and consulting
        </p>   
      </div>
      </div>
    </div>

    {/* Last box */}

    <div className='flex  bg-white max-w-[1440px] max-h-[832px] shrink-0 mt-10 mb-32'>
      <div className='flex mt-12 ml-44 '>
        <p className='font-bold text-lg text-[#171923]  break-words '>30 days money back <br />Guarantee</p>
      </div>
      <div className='flex mt-12 items-center ml-72'>
        <p className='font-bold text-lg text-[#171923] break-words'>No setup fees <br /> 100% hassle-free</p>
      </div>
      <div className='flex ml-64 mt-12 gap-5'>
        <p className='font-bold text-lg text-[#171923] break-words'>No monthly subscription <br />Pay once and for all</p>
      </div>
    </div>



   
    </>
  
  );

}

export default App