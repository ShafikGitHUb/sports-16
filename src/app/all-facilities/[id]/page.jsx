import BookingCard from "@/components/BookingCard";
import Image from "next/image";
import Link from "next/link";

const AllFacilitesDetails = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/all-facilities/${id}`)
    const facilitiesDetails = await res.json();
  const {_id,facilityname,category,imageUrl,country,price,Time,description} = facilitiesDetails;
return (
  <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto my-6 rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full max-w-6xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      {/* LEFT SIDE: Form */}
   <BookingCard facilitiesDetails={facilitiesDetails}></BookingCard>
      {/* RIGHT SIDE: Image */}
      <div className="lg:col-span-3 w-full order-1 lg:order-2 space-y-4 md:space-y-4">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-base-300 group"> 
          <Image 
            src={imageUrl} 
            alt={facilityname} 
            fill 
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
            priority
          />
        </div>
                 <span className="badge badge-primary badge-outline font-semibold uppercase tracking-wider text-xs px-3  mb-2">
            Category:{category}
          </span>
        <div className="bg-base-100 p-5 md:p-6 rounded-2xl shadow-sm border border-base-300">
          <h4 className="font-bold text-lg mb-2 text-base-content">About this facility</h4>
          <p className="text-base-content/80 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

    </div>
  </div>
);
};

export default AllFacilitesDetails;