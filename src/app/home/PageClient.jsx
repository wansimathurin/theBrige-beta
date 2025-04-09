"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { SquarePlus } from 'lucide-react';
import NavbarComponent from '../../components/navbar/NavbarComponent';
import ParticlesComponent from '../../components/particles/ParticlesComponent';
import AddCampaign from '../../components/addCampaign/AddCampaign';
import { useStoreForm } from '../../store/formVisible.store';
import axios from "axios";

export default function PageClient({ user }) {
    const { isFormVisible, openForm } = useStoreForm();
    const [campaignsList, setCampaignsList] = useState([]);
    
    const getCampaigns = async () => {
        try {
          const res = await axios.get('https://the-brige-beta.vercel.app/api/campaigns');
          console.log("Fetched Campaigns:", res.data);
          setCampaignsList(res.data);
        } catch (error) {
          console.error("Error fetching campaigns:", error);
        }
      };
    
   useEffect(() => {
    getCampaigns();
  }, []); // runs once on mount

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
            <button onClick={()=>openForm()} className='flex items-center gap-3 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-0 h-[40px] font-bold cursor-pointer'>
            <SquarePlus /> Creer une campagne
             </button>
            </div>
          <div className='p-5 flex flex-wrap gap-5 '>
            {/* welcome */}
           
            {/* post cards */}
            {campaignsList?.map((campaign) => (
               <div key={campaign?.id} className="rounded-md h-[590px] w-[400px] shadow-md hover:shadow-2xl bg-white">
               {/* image area */}
               <div className="flex cursor-pointer items-start justify-center w-full overflow-hidden rounded-sm">
                   <img src={campaign?.image} alt="influence" width="100%" />
               </div>
               {/* text area */}
               <div className="flex flex-col p-3 ">
                 <h1 className="text-2xl text-gray-700 font-bold italic">
                  {campaign.title}
                 </h1>
                 <p className="text-gray-600">
                 {`${campaign.description.slice(0,40)}...`}
                 </p>
                 <button className="cursor-pointer bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-3 mt-5 font-bold">
                     Candidater Pour la campagne
                   </button>
               </div>
             </div>
            ))}
           
            
          </div>
          {isFormVisible &&  <AddCampaign />}
        </div>
  );
}