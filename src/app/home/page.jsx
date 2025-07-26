import { currentUser } from "@clerk/nextjs/server";
import PageClient from "./PageClient";

export default async function HomePage() {
  const user = await currentUser();
  console.log('current user',user)
  return <PageClient user={{
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    imageUrl: user?.imageUrl,
    email: user?.emailAddresses[0]?.emailAddress,
  }} />;
}