import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function NavbarComponent() {
  return (
    <div className='flex cursor-pointer items-center justify-between p-5 py-7 bg-[#891ca4] h-[70px] w-full shadow-md'>
      <img src="/logoWhite.png" alt="" width="250px" />
    
      <UserButton />
    </div>
  )
}
