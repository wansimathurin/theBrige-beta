import connectDB from "../../../../db/ connectDB";
import Campaign from "../../../../model/Campaign";
import { NextResponse } from "next/server";


export const POST = async (req, { params }) => {
    const { id } = await params;
    const {
        name,
        email,
        phone,
        socialMediaProfile,
        message,
        campaignId,
        ApplicantId
  } = await request.json();
    
    try {
        await connectDB();
    
        const campaign = await Campaign.findById(id);
    
        if (!campaign) {
        return new NextResponse(
            JSON.stringify({ message: "Campaign not found" }),
            { status: 404 }
        );
        }
    
        return new NextResponse(JSON.stringify(campaign), { status: 200 });
    } catch (error) {
        console.error("Error fetching campaign by ID:", error);
        return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        });
    }
}