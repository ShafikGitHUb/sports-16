import Link from 'next/link';
import React from 'react';
import logoimg from "@/assets/sports16.png"
import Image from 'next/image';
import NavLink from './NavLink';

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
     <NavLink href="/">Home</NavLink>
            <NavLink href="/all-facilities">All Facilities</NavLink>
            <NavLink href="/my-bookings">My Bookings</NavLink>
            <NavLink href="/add-facility">Add Facility</NavLink>
            <NavLink href="/manage-facilities">Manage Facilities</NavLink>
      </ul>
  </div>

  <div className="navbar-end">
 <NavLink href="/login" className="btn">Login</NavLink>
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
     <NavLink href="/">Home</NavLink>
            <NavLink href="/all-facilities">All Facilities</NavLink>
            <NavLink href="/my-bookings">My Bookings</NavLink>
            <NavLink href="/add-facility">Add Facility</NavLink>
            <NavLink href="/manage-facilities">Manage Facilities</NavLink>
    </ul>
  </div>
</div>
</div>
</div>
    );
};

export default Navbar;