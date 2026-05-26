import AllFacilitiesCard from "@/components/AllFacilitiesCard";
import FaqSection from "@/components/FaqSection";
import HeroSlider from "@/components/HeroSlider";
import ReviewSection from "@/components/ReviewSection";
import getAddFacility from "@/lib/getAddFacility";
import { Button } from "@heroui/react";
import Link from "next/link";


export default async function Home () {
const fetchData = await getAddFacility();
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center mt-14'>
      {
    fetchData.slice(0, 6).map((allFacilitie)=> <AllFacilitiesCard  key={allFacilitie._id} allFacilitie={allFacilitie}></AllFacilitiesCard> )    
  }
</div>
  <div className="w-11/12 mx-auto flex justify-center m-10">
       <Link href={"/all-facilities"}> <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
  View All
</Button></Link>
      </div>

      <ReviewSection></ReviewSection>
      <FaqSection></FaqSection>
    </div>
  );
}
