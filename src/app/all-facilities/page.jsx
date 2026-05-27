import AllFacilitiesCard from '@/components/AllFacilitiesCard';
import getAddFacility from '@/lib/getAddFacility';
import React from 'react';

const AllfacilitesPage = async() => {
     const allFacilities = await getAddFacility();
    return (
        <div className='w-11/12 mx-auto'>
  <h1 className='text-2xl md:text-3xl font-bold text-center text-cyan-600 border-b pb-4 mb-6 pt-4'>All Facilities</h1>
<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7 place-items-center mb-10'>
      {
    allFacilities.map((allFacilitie)=> <AllFacilitiesCard  key={allFacilitie._id} allFacilitie={allFacilitie}></AllFacilitiesCard> )    
  }
</div>
</div>
    );
};

export default AllfacilitesPage;