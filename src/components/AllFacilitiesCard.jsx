import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllFacilitiesCard = ({allFacilitie}) => {
    const {_id,facilityname,category,imageUrl,country,price,Time,description} = allFacilitie;
    return (
<div className="card bg-base-100 w-full max-w-75 shadow-sm">
  <figure className='w-full h-55 relative'>
  <Image
    src={imageUrl}
    fill
    alt="facilityname"
    className="object-cover rounded-xl"
  />
  </figure>
  <div className="card-body">
<div className="flex justify-between items-center w-full mb-2">
      <h2 className="text-lg font-semibold text-gray-800 m-0 flex-1 text-left">
        {category}
      </h2>
      <span className="badge badge-outline badge-success text-green-500 font-semibold px-4 py-3 whitespace-nowrap">
        ${price}
      </span>
    </div>
    <p className="text-sm text-gray-600 line-clamp-3">{description} </p>
    <div className="card-actions justify-center mt-2">
   <Link href={`/all-facilities/${_id}`}>   <button className="btn bg-[#00b562] border-none hover:bg-[#00994f] text-white">
        View Details
      </button></Link>
    </div>
  </div>
</div>
    );
};

export default AllFacilitiesCard;