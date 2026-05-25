"use client"
import { authClient } from '@/lib/auth-client';
import { DateField, Description, Input, Label, TextField, TimeField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({facilitiesDetails}) => {
      const [departureDate, setDepartureDate] = useState(null);
    const [hours, setHours] = useState(1);
   // DATA LOAD CHECK
  // if (!facilitiesDetails) {
  //   return <p>Loading...</p>;
  // }
     const {_id,facilityname,category,imageUrl,country,price,Time,description} = facilitiesDetails;
    const {data: session} = authClient.useSession();
    const user = session?.user;
    // console.log(user);
 const handleBooking = async()=>{
  const totalPrice = price * hours;
     const bookingInformation = {
         userId: user?.id,
    userName: user?.name,
    facilityId: _id,
    departureDate: new Date(departureDate),
    hours,
    totalPrice:totalPrice,
    image:user?.image,
    imageUrl
    }
    const res = await fetch("http://localhost:5000/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingInformation)
  });

  const data = await res.json();
  toast.success('Booking Succefully')
};

 
    return (
       <div className="lg:col-span-2 w-full order-2 lg:order-1 flex justify-center lg:justify-start">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl border border-base-300">
          <div className="card-body gap-4 p-6 md:p-8">
            <h3 className="text-xl font-bold text-base-content border-b pb-2 mb-2">Booking Information</h3>

<div className="space-y-3 bg-base-200/50 p-4 rounded-xl border border-base-300 mt-2">

  <div className="flex justify-between items-center">
    <span className="text-sm opacity-70">Category:</span>
    <span className="text-sm font-semibold badge badge-ghost">{category}</span>
  </div>

  <div className="flex justify-between items-center border-t border-base-300/60 pt-2 mt-2">
    <span className="text-sm font-medium text-success">Price Per Hour:</span>
    <span className="text-lg font-extrabold text-success">${price}</span>
  </div>
</div>
  <DateField onChange={setDepartureDate} className="w-full rounded-none" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <div className="space-y-2">
  <Label>Hours</Label>
  <Input
    type="number"
    min={1}
    value={hours}
    onChange={(e) => setHours(Number(e.target.value))}
    className="w-full"
    placeholder="Enter hours"
  />
</div>
<div className="flex justify-between items-center border-t border-base-300/60 pt-2 mt-2">
  <span className="text-sm font-medium text-success">Total Price:</span>
  <span className="text-lg font-extrabold text-success">
    ${price * hours}
  </span>
</div>
<div className="relative flex py-2 items-center justify-center my-2">
  <div className="flex-grow border-t border-base-300"></div>
  <span className="flex-shrink mx-3 text-[10px] font-bold uppercase tracking-widest opacity-40">
    Ready to Book 
  </span>
  <div className="flex-grow border-t border-base-300"></div>
</div>
            <button onClick={handleBooking} className="btn py-4 w-full badge badge-outline badge-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
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
    );
};

export default BookingCard;