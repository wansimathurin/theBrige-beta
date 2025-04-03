import GetStarted from "../components/getStartedComponent/GetStarted";



import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";
import FooterComponent from '../components/footer/FooterComponent';
import HeroComponent from '../components/hero/HeroComponent';




const Page = async() => {
   // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth()
  // if user id is full redirect to /home page
  if (userId) {
    redirect('/home')
  }
  return (
    <div>
   
       <HeroComponent />
      <GetStarted />
      <FooterComponent />
    </div>
  );
};
export default Page;
