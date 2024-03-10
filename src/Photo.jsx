import React from 'react'

export default function Photo() {
  return (
    <div className='flex gap-2 justify-around items-center'>
      <section className='flex-col items-center justify-evenly w-[400px] h-[5 00px] border-2 border-gray-700 bg-blue-950 p-5 rounded-md  '>
        <img src="src\assets\ronaldo.png" alt="" />
        <h1 className='text-3xl text-center my-4 ' >Cristiano Ronaldo</h1>
        <p className='text-xl text-center my-4 '>
            Create Realistic images of celebrity using DCGAN AI Model
        </p>

      </section>
      <section className='flex-col items-center justify-evenly w-[400px] h-[5 00px] border-2 border-gray-700 bg-blue-950 p-5 rounded-md  '>
        <img src="https://www.voicify.ai/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2F5a15dc54-9ec9-40c8-981c-c03d9b32bd0e.png&w=3840&q=100" alt="" />
        <h1 className='text-3xl text-center my-4 ' >Narendra Modi</h1>
        <p className='text-xl text-center my-4 '>
            Create Realistic images of celebrity using DCGAN AI Model
        </p>

      </section>
      <section className='flex-col items-center justify-evenly w-[400px] h-[5 00px] border-2 border-gray-700 bg-blue-950 p-5 rounded-md  '>
        <img src="https://img.freepik.com/premium-photo/salman-khan-indian-actor-generated-by-ai_942243-6497.jpg" alt="" />
        <h1 className='text-3xl text-center my-4 ' >Cristiano Ronaldo</h1>
        <p className='text-xl text-center my-4 '>
            Create Realistic images of celebrity using DCGAN AI Model
        </p>

      </section>

    </div>
  )
}
