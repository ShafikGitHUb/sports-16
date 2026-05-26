import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllFacilitiesCard = ({ allFacilitie }) => {
  const { _id, facilityname, category, imageUrl, country, price, description } =
    allFacilitie;

  return (
    <div className="card bg-base-100 w-full shadow-md rounded-xl overflow-hidden">
      <figure className="relative w-full h-52 rounded-2xl">
        <Image
          src={imageUrl}
          alt={facilityname}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body p-4">

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">
            {category}
          </h2>

          <span className="badge badge-success text-white px-3 py-2">
            ${price}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="card-actions justify-center mt-4">
          <Link href={`/all-facilities/${_id}`}>
            <button className="btn bg-[#00b562] hover:bg-[#00994f] text-white w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllFacilitiesCard;