import Link from 'next/link';
import React from 'react';
import logoimg from "@/assets/sports16.png"
import Image from 'next/image';

const Navbar = () => {
    return (
<div className='bg-base-100 shadow-sm'>
 <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
   <Link href="/">
    <Image className='bg-slate-600 rounded-xl'
      src={logoimg}
      alt="Logo"
      width={60}
      height={120}
    />
  </Link>

  </div>
  <div className="navbar-center hidden md:flex">
   <ul className="flex justify-center items-center gap-6 font-heading">
     <Link href={"/"}>Home</Link>
     <Link href={"/all-facilities"}>All Facilities</Link>
     <Link href={"/my-bookings"}>My Bookings</Link>
     <Link href={"/add-facility"}>Add Facility</Link>
     <Link href={"/manage-facilities"}>Manage Facilities</Link>
      </ul>
  </div>

  <div className="navbar-end">
  <Link href={"/login"}><button className="btn btn-ghost">Login</button></Link>
  <div className="dropdown dropdown-end md:hidden">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </div>

    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-2 w-40 px-4 pt-4 pb-10 shadow gap-2"
    >
    <Link href={"/"}>Home</Link>
     <Link href={"/all-facilities"}>All Facilities</Link>
     <Link href={"/my-bookings"}>My Bookings</Link>
     <Link href={"/add-facility"}>Add Facility</Link>
     <Link href={"/manage-facilities"}>Manage Facilities</Link>
    </ul>
  </div>

</div>
</div>
</div>
    );
};

export default Navbar;