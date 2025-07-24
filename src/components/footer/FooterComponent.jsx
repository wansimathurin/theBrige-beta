import React from 'react'

export default function FooterComponent() {
  return (
    <div className="bg-[#891ca4f1] overflow-hidden relative w-full h-[200px] flex items-center justify-center">
     <img src="/logoWhite.png" alt="" width={500} />
          <div className="flex flex-col items-center justify-center">
       
        <p className="text-white text-[20px]">© 2023 theBridge. All rights reserved.</p>
        <p className="text-white text-[20px]">Made with ❤️</p>
      </div>
      
    </div>
  )
}
