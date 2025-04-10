import React from "react";
import Image from "next/image";
import { format, isBefore, isAfter, isWithinInterval } from "date-fns";
import NavbarComponent from "../../../components/navbar/NavbarComponent";
import ParticlesComponent from "../../../components/particles/ParticlesComponent";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XAF",
    maximumFractionDigits: 0,
  }).format(amount);

const getCampaignById = async (id) => {
  try {
    const res = await fetch(`https://the-brige-beta.vercel.app/api/campaigns/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch campaign");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getStatus = (startDate, endDate) => {
  const now = new Date();
  if (isBefore(now, new Date(startDate))) return "Upcoming";
  if (isAfter(now, new Date(endDate))) return "Ended";
  if (isWithinInterval(now, { start: new Date(startDate), end: new Date(endDate) })) {
    return "Ongoing";
  }
  return "Unknown";
};

const statusColors = {
  Upcoming: "bg-yellow-100 text-yellow-800",
  Ongoing: "bg-green-100 text-green-800",
  Ended: "bg-red-100 text-red-800",
};

const Page = async ({ params }) => {
  const { id } = params;
  const campaign = await getCampaignById(id);

  if (!campaign) {
    return <div className="p-6 text-red-600">Campaign not found.</div>;
  }

  const {
    title,
    budget,
    image,
    description,
    slug,
    startDate,
    endDate,
    createdAt,
    enterpriseId,
  } = campaign;

  const status = getStatus(startDate, endDate);

  return (
    <>
     <NavbarComponent />
     <ParticlesComponent id="particles" />
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Full Image */}
      <div className="relative h-screen w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <span className={`px-4 py-2 text-sm font-semibold rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Campaign Details & Application Form */}
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Campaign Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
          <p className="text-xl text-green-700 font-semibold">
            Budget: {formatCurrency(budget)}
          </p>
          <div className="whitespace-pre-line text-gray-700 text-lg">{description}</div>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Start:</strong> {format(new Date(startDate), "PPP")}</p>
            <p><strong>End:</strong> {format(new Date(endDate), "PPP")}</p>
            <p><strong>Posted:</strong> {format(new Date(createdAt), "PPP")}</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Apply for this Campaign</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Social Media Profile</label>
              <input
                type="url"
                placeholder="https://instagram.com/yourhandle"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Why should we choose you?</label>
              <textarea
                rows="4"
                placeholder="Tell us why you're a great fit..."
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Page;