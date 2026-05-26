import CancelButton from '@/components/CancelButton';
import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';

const MybookingsPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
const user = session?.user;
const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
const Bookings = await res.json();
    return (
        <div className='w-11/12 mx-auto pb-10 md:pb-16'>
            <h1 className='text-2xl md:text-3xl font-bold text-center text-cyan-600 border-b pb-4 mb-6 pt-4'>My Booking</h1>
<div className="space-y-5">
  {Bookings.map((booking) => (
    <div
      key={booking._id}
      className="flex flex-col md:flex-row gap-4 border p-4 md:p-5 items-start md:items-center rounded"
    >
      <div className="w-full md:w-[120px] h-[180px] md:h-[100px] relative shrink-0">
        <Image
          src={booking.imageUrl}
          alt="facility"
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-3 md:gap-0">
        <div className="space-y-1">
  <h1 className="font-semibold text-lg md:text-xl">
    Category:{" "}
    <span className="text-gray-600">{booking.category}</span>
  </h1>

  <p className="text-sm md:text-base text-gray-500">
    Booking Date:{" "}
    <span className="text-gray-700">
      {new Date(booking.departureDate).toLocaleDateString("en-BD")}
    </span>
  </p>

  <p className="font-semibold text-lg md:text-xl">
    Total Price:{" "}
    <span className="text-cyan-600">${booking.totalPrice}</span>
  </p>
</div>
    
<div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">

  <Button className="rounded-md border border-green-500 text-green-600 w-full md:w-auto cursor-default"
    variant="outline"
    disabled
  >
    Booking Confirmed
  </Button>
  <CancelButton bookingId={booking._id}></CancelButton>

</div>
      </div>
    </div>
  ))}
</div>       
        </div>
    );
};

export default MybookingsPage;