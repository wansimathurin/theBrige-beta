'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className="main-bg overflow-hidden">
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 md:px-10 py-16 bg-[#891ca4f1] overflow-hidden">

        {/* Top Left Logo */}
        <img
          src="/logoWhite.png"
          alt="Logo"
          className="absolute top-4 left-4 w-[150px] md:w-[200px] lg:w-[250px]"
        />

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[70px] font-bold text-white">
            Welcome to theBridge
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-[20px] xl:text-[25px] text-white max-w-[90%] mx-auto md:mx-0">
            A simple, modern, and accessible bridge website. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Non corporis distinctio in,
            commodi at provident consectetur rerum aperiam tenetur enim.
          </p>

          <Link
            href="#getStarted"
            className="inline-block bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-lg md:text-xl px-6 py-3 text-white mt-6 rounded shadow-md hover:opacity-90 transition"
          >
            Commencer
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/bgbubble.png"
            width={600}
            height={600}
            alt="Bubble Image"
            className="image-animation max-w-full h-auto"
          />
        </div>

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}