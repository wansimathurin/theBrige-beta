

import { auth, currentUser } from '@clerk/nextjs/server'
import { SquarePlus } from 'lucide-react'
import React from 'react'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import ParticlesComponent from '../../components/particles/ParticlesComponent'

const page = async() => {
  const user = await currentUser()
  // console.log(user);
  
  const campaigns = [
    {
      id:0,
      title: "Influenceur Mtn Cameroun",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum lectus.",
      image:"/mtn-camer.jpg",
      budget:"300,000",
    },
    {
      id:1,
      title: "Promotion de Taptap Send",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum lectus.",
      image:"/taptapSend.png",
      budget:"350,000",
    },
    {
      id:2,
      title: "Mega Chalenge",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in interdum lectus.",
      image:"/mtn-fingon.jpg",
      budget:"350,000",
    },
  ]
  return (
    <div>
     <NavbarComponent />
     <ParticlesComponent id="particles"/>
      <div className='flex justify-between items-center p-5'>
          <div className='flex flex-col gap-2 p-5'>
          <h1 className='text-3xl font-bold capitalize '>Bienvenue {user.username}</h1>
          <p className='text-gray-600'>Voici les campagnes disponibles</p>
        </div>
        <button className='flex items-center gap-3 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-0 h-[40px] font-bold cursor-pointer'>
        <SquarePlus /> Creer une campagne
         </button>
        </div>
      <div className='p-5 flex flex-wrap gap-5 '>
        {/* welcome */}
       
        {/* post cards */}
        {campaigns.map((campaign) => (
           <div key={campaign.id} className="rounded-md h-[590px] w-[400px] shadow-md hover:shadow-2xl bg-white">
           {/* image area */}
           <div className="flex cursor-pointer items-start justify-center w-full overflow-hidden rounded-sm">
               <img src={campaign.image} alt="influence" width="100%" />
           </div>
           {/* text area */}
           <div className="flex flex-col p-3 ">
             <h1 className="text-2xl text-gray-700 font-bold italic">
              {campaign.title}
             </h1>
             <p className="text-gray-600">
             {campaign.description}
             </p>
             <button className="cursor-pointer bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-3 mt-5 font-bold">
                 Candidater Pour la campagne
               </button>
           </div>
         </div>
        ))}
       
        
      </div>
    </div>
  )
}

export default page;
