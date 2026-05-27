import DeleteButton from "@/components/DeleteButton";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";

const ManageFacility = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const {token} = await auth.api.getToken({
      headers: await headers()
    })
    

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
     {
      headers:{
        authorization:`Bearer ${token}`
      }
    }
  );
  const Bookings = await res.json();

  return (
    <div className="w-11/12 mx-auto pb-10 md:pb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-cyan-600 border-b pb-4 mb-6 pt-4">
        Manage Bookings
      </h1>

      <div className="bg-white shadow-sm border rounded-xl overflow-hidden">

        <div className="hidden md:block">
          <table className="w-full">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Booking Date</th>
                <th className="p-4 font-semibold">Hour</th>
                <th className="p-4 font-semibold">Total Price</th>
                <th className="p-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {Bookings?.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-t hover:bg-gray-50 transition"
                >
               
                  <td className="p-4 font-medium">
                    {booking.category}
                  </td>

                  <td className="p-4 text-gray-600">
                    {new Date(booking.departureDate).toLocaleDateString("en-BD")}
                  </td>

       
                  <td className="p-4 text-gray-600">
                    {booking.hours} {booking.hours <= 1 ? "hour" : "hours"}
                  </td>

           
                  <td className="p-4 font-semibold text-cyan-600">
                    ${booking.totalPrice}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2 justify-center">
       <DeleteButton bookingId={booking._id}></DeleteButton>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4 p-4 bg-gray-50">
          {Bookings?.map((booking) => (
            <div
              key={booking._id}
              className="border bg-white rounded-xl p-4 shadow-sm"
            >
              <h2 className="font-semibold text-lg">
                {booking.category}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                Date:{" "}
                {new Date(booking.departureDate).toLocaleDateString("en-BD")}
              </p>

              {/* HOUR */}
              <p className="text-sm text-gray-600">
                Hour: {booking.hours} {booking.hours <= 1 ? "hour" : "hours"}
              </p>

              <p className="font-bold text-cyan-600 mt-1">
                ${booking.totalPrice}
              </p>

              <div className="flex gap-2 mt-3">
                <Button
                  className="border border-red-500 text-red-500 w-full"
                  variant="outline"
                >
                  <TrashBin />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ManageFacility;