import { useState } from 'react'
import Header from './Header'
import Photo from './Photo'
import FooterElem from './FooterElem'

function App() {
  

  return (
    <>
      <div className='w-screen h-screen bg-gradient-to-tr from-gray-900 to-teal-300 '>
        <div className='w-full mb-4' >
        <Header/>
        </div>
        <div className='w-screen mt-[80px] '>
        <Photo/>
        </div>
        
        <div className=' w-full h-[500px] p-[50px] bg-gradient-to-r from-slate-900 to-slate-700 ' >
        <div className='w-full flex items-center justify-center '>
        <button
  className="linear flex flex-row items-center rounded-xl bg-gradient-to-br from-brandLinear to-blueSecondary px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-brand-500/50"
  data-ripple-light
>
<img src="src\assets\github-mark-white.svg" alt="" width={`40px`} />
  <span className='mx-2'>Visit the Github</span>
</button>
        </div>
          <p className='text-4xl text-center font-semibold m-[20px] '>
          Introducing Celebrity Generator, the ultimate virtual assistant based in Kolkata, WB. Our cutting-edge technology and expertise in image creation will revolutionize your business's visual content. With Image Generator, you can effortlessly generate celebrity images offer a wide range of use cases across industries, enabling businesses to innovate, engage customers, and create compelling content more efficiently. , saving you time and resources.
          </p>
        </div>
        <FooterElem />

      </div>
    </>
  )
}

export default App
