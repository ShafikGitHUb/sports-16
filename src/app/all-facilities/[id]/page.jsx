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
      <div className="lg:col-span-2 w-full order-2 lg:order-1 flex justify-center lg:justify-start">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl border border-base-300">
          <div className="card-body gap-4 p-6 md:p-8">
            <h3 className="text-xl font-bold text-base-content border-b pb-2 mb-2">Booking Information</h3>
            
            {/* Facility Name Input */}
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Your Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Facility Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter facility name" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Category</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter category" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Country</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter country name" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Price ($)</span>
              </label>
              <input 
                type="number" 
                placeholder="0.00" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-medium text-sm">Preferred Time</span>
              </label>
              <input 
                type="time" 
                className="input input-bordered w-full focus:input-primary bg-base-50" 
              />
            </div>
            <button className="btn py-4 w-full badge badge-outline badge-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
              Book Now
            </button>
            <Link href={"/all-facilities"}> 
  <div className="w-full py-4 badge badge-outline badge-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
    Cancel
  </div>
</Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="lg:col-span-3 w-full order-1 lg:order-2 space-y-4 md:space-y-4">
       <div className="flex justify-between items-center">
           <h2 className="font-semibold text-2xl">
            Name:{facilityname}
          </h2>
   <Link href={"/all-facilities"}> 
  <div className="badge badge-outline badge-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
    Cancel
  </div>
</Link>
       </div>
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