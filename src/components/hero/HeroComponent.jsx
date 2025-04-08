import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className="main-bg overflow-hidden">
    <div className="relative flex items-center justify-center min-h-screen p-10 bg-[#891ca4f1] overflow-hidden ">
    <img src="/logoWhite.png" alt="" width={500} className="absolute -top-5 -left-15" />
 <div className="flex flex-col  w-2/4 items-start">
            
        <h1 className="2xl:text-[70px] xl:text-[50px] font-bold  text-white">
          Welcome to theBridge
        </h1>
        <p className="text-[40px] xl:text-[25px] text-white w-[80%]  xl:max-w-[100%]">
          A simple, modern, and accessible bridge website. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Non corporis distinctio in,
          commodi at provident consectetur rerum aperiam tenetur enim.
        </p>
        <Link href='#getStarted' className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 xl:text-[20px]  text-2xl text-white px-5 py-3 cursor-pointer mt-3">Commencer</Link>
      </div>
       <Image src={'/bgbubble.png'} width={800} height={800} alt="buble image" className="image-animation" />
       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
    </div>
  </div>
  )
}
