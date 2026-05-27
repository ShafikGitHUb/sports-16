"use client"
import Link from 'next/link';
import logoimg from "@/assets/sports16.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { 
        data: session,
    } = authClient.useSession() 
    const user = session?.user

const handleSignout =async()=>{
  toast.success("Logout Successfully");
  await authClient.signOut();
   
}

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
  <div className="navbar-center hidden lg:flex">
   <ul className="flex justify-center items-center gap-6 font-heading">
     <NavLink href="/">Home</NavLink>
            <NavLink href="/all-facilities">All Facilities</NavLink>
            <NavLink href="/my-bookings">My Bookings</NavLink>
            <NavLink href="/add-facility">Add Facility</NavLink>
            <NavLink href="/manage-facilities">Manage Facilities</NavLink>
      </ul>
  </div>

  <div className="navbar-end">
<div className='flex items-center gap-5 md:gap-7'>
{ user? <> <ul className='flex items-center gap-5 md:gap-6'>
  <li><Avatar>
        <Avatar.Image referrerPolicy='no-referrerPolicy' alt="name" src={user?.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar></li>
      <li>
        <Button onClick={handleSignout} variant='danger' className={"rounded-none"}>Logout</Button>
      </li>
</ul>
</>:<> 
  <NavLink href="/login" className="btn">Login</NavLink>
<NavLink href="/signup" className="btn">Signup</NavLink>
</>}
</div>
  <div className="dropdown dropdown-end lg:hidden">
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