"use client";

import React, { useEffect, useState } from "react";
import { SquarePlus } from "lucide-react";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import ParticlesComponent from "../../components/particles/ParticlesComponent";
import AddCampaign from "../../components/addCampaign/AddCampaign";
import { useStoreForm } from "../../store/formVisible.store";
import axios from "axios";
import Link from "next/link";

export default function PageClient({ user }) {
  const { isFormVisible, openForm } = useStoreForm();
  const [campaignsList, setCampaignsList] = useState([]);

  const getCampaigns = async () => {
    try {
      const res = await axios.get(`/api/campaigns`);
      console.log("Fetched Campaigns:", res.data);
      setCampaignsList(res.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <ParticlesComponent id="particles" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 pt-20">
        <div className="flex flex-col gap-2 px-10 py-5">
          <h1 className="text-3xl font-bold capitalize">
            Welcome, {user.username}
          </h1>
          <p className="text-gray-600">Here are the available campaigns</p>
        </div>
        <button
          onClick={() => openForm()}
          className="flex items-center gap-3 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-0 h-[40px] font-bold cursor-pointer mt-4 md:mt-0"
        >
          <SquarePlus /> Create a Campaign
        </button>
      </div>

      {/* Campaign List */}
      <div className="p-5 flex flex-wrap gap-5 items-center justify-center">
        {campaignsList?.map((campaign) => (
          <Link
            href={`/campaign/${campaign?._id}`}
            key={campaign?._id}
            className="rounded-md h-[400px] w-[320px] shadow-md hover:shadow-2xl bg-white"
          >
            {/* Image Section */}
            <div className="flex cursor-pointer items-start justify-center w-full overflow-hidden rounded-sm h-[250px]">
              <img src={campaign?.image} alt="campaign image" className="w-full h-full object-cover" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col p-3">
              <h1
                className="text-2xl text-gray-700 font-bold italic whitespace-nowrap overflow-hidden text-ellipsis"
                title={campaign.title}
              >
                {campaign.title}
              </h1>
              <p
                className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis"
                title={campaign.description}
              >
                {`${campaign.description.slice(0, 40)}...`}
              </p>
              <button className="cursor-pointer bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-white px-5 py-3 mt-5 font-bold">
                Apply for this campaign
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Campaign Form */}
      {isFormVisible && <AddCampaign />}
    </div>
  );
}