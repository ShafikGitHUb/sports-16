"use client"
import Link from 'next/link';
import Image from 'next/image';
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-[#0B131F] text-gray-400 font-sans pt-16 pb-8 border-t border-gray-900">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24 pb-12">
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-white flex items-center">
                                Sport<span className="text-[#10B981]">16</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm text-gray-400">
                            Book your perfect sports facility in seconds. From football turfs to swimming lanes, we have it all.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <a href="https://www.facebook.com/" className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/60 hover:bg-gray-800 text-gray-400 hover:text-white transition-all">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/feed/" className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/60 hover:bg-gray-800 text-gray-400 hover:text-white transition-all">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/all-facilities" className="hover:text-[#10B981] transition-colors">All Facilities</Link>
                            </li>
                            <li>
                                <Link href="/my-bookings" className="hover:text-[#10B981] transition-colors">My Bookings</Link>
                            </li>
                            <li>
                                <Link href="/add-facility" className="hover:text-[#10B981] transition-colors">Add Facility</Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:text-[#10B981] transition-colors">Login</Link>
                            </li>
                            <li>
                                <Link href="/signup" className="hover:text-[#10B981] transition-colors">Register</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                            Contact
                        </h3>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex items-center gap-3">
                                <IoMailOutline className="w-4 h-4 text-[#10B981]" />
                                <a className="hover:text-white transition-colors">
                                  princeshafik11@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCallOutline className="w-4 h-4 text-[#10B981]" />
                                <a className="hover:text-white transition-colors">
                                    +8801880811018
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <IoLocationOutline className="w-4 h-4 text-[#10B981]" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <p>© 2026 Sport16 by shafik</p>
                    <p className="flex items-center gap-1">
                        Built with <span className="text-red-500 text-sm"><FaHeart /></span> for sports lovers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;