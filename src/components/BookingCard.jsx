"use client"
import { authClient } from '@/lib/auth-client';
import { DateField, Description, Input, Label, TextField, TimeField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const BookingCard = ({facilitiesDetails}) => {
     const {_id,facilityname,category,imageUrl,country,price,Time,description} = facilitiesDetails;
    const [departureDate, setDepartureDate] = useState(null); 
    const {data: session} = authClient.useSession();
    const user = session?.user;
    // console.log(user);
 const handleBooking = async()=>{
     const bookingInformation = {
      userId:user.id,
      userName:user.name,
      facilityId:_id,
      departureDate: new Date (departureDate)
    }
 }
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
    <span className="text-sm font-medium text-success">Price:</span>
    <span className="text-lg font-extrabold text-success">${price}</span>
  </div>
</div>
<TextField className="w-full" name="username">
      <Label>Name</Label>
      <Input placeholder="Enter username" />
    </TextField>
  <DateField onChange={setDepartureDate} className="w-full rounded-none" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
 <TimeField className="w-full" name="time">
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
      </TimeField.Group>
    </TimeField>

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