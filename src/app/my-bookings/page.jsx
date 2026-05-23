import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MybookingsPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
const user = session?.user;
const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
const data = await res.json();
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-4'>My Booking</h1>

            
        </div>
    );
};

export default MybookingsPage;