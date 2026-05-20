import AllFacilitiesCard from '@/components/AllFacilitiesCard';
import React from 'react';

const AllfacilitesPage = async() => {
    const res = await fetch("http://localhost:5000/all-facilities")
    const allFacilities = await res.json()
    console.log(allFacilities);
    return (
        <div className='w-11/12 mx-auto'>
  <h1 className='font-semibold text-2xl text-center mt-5 mb-5'>All Facilities</h1>
<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7 place-items-center'>
      {
    allFacilities.map((allFacilitie)=> <AllFacilitiesCard  key={allFacilitie._id} allFacilitie={allFacilitie}></AllFacilitiesCard> )    
  }
</div>
</div>
    );
};

export default AllfacilitesPage;