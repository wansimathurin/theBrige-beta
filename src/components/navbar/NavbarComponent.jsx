import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

export default function NavbarComponent() {
  return (
    <div className='flex fixed z-20 cursor-pointer items-center justify-between p-5 py-7 bg-[#891ca4] h-[70px] w-full shadow-md'>
     <Link href="/"><img src="/logoWhite.png" alt="" width="250px" /></Link> 
    
      <UserButton />
    </div>
  )
}
