import { v2 as cloudinary } from "cloudinary";
import connectDB from "../../../db/ connectDB";
import Campaign from "../../../model/Campaign";
import { NextResponse } from "next/server";

import { auth, currentUser } from "@clerk/nextjs/server";

export const GET = async () => {
  try {
    // connect to the database
    await connectDB();
    // get all users from the database
    const campaigns = await Campaign.find().sort({ createdAt: -1 });
    //return users as a JSON response with status code 200

    return new NextResponse(JSON.stringify(campaigns), { status: 200 });
  } catch (error) {
    //return error as a JSON response with status code 500
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};


export const POST = async (request) => {
  const {
    title,
    budget,
    target,
    image,
    description,
    slug,
    startDate,
    endDate,
    enterpriseId,
  } = await request.json();

  try {
    await connectDB();

    // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY, // Click 'View API Keys' above to copy your API secret
  });
  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(image, {
      public_id: title.split(" ").join("-").trim(),
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("after:", uploadResult?.secure_url);
  // creating new product with the data sent by the user
  const { userId } = await auth()
    const newCampaign = new Campaign({
      title,
      budget,
      target,
      image: uploadResult?.secure_url,
      description,
      slug,
      startDate,
      endDate,
      enterpriseId: userId,
    });

    await newCampaign.save();

    return new NextResponse(JSON.stringify(newCampaign), { status: 201 });
  } catch (error) {
    console.error("POST /api/campaigns error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error", error }),
      {
        status: 500,
      }
    );
  }
};
