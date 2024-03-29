'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar()
{
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [navbar, setNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 32) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return(
        <nav className={`w-full ${isHomePage ? "fixed" : "sticky"} z-50 ${!isHomePage || scrolled ? "top-0" : "top-0 sm:top-8"} transition-all duration-1000 ease-in-out`}>
          <div className={`justify-between font-Poppins font-medium  bg-bg-dark ${!isHomePage || scrolled ? "w-full" : " w-full sm:w-11/12"} transition-all duration-1000 ease-in-out px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}>
            <div>
              <div className="flex items-center justify-between md:block">
                <Link href="/">
                <Image src={'/images/logo.png'} width={150} height={70} alt='logo'></Image> 
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white">
                    <Link href="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/about">
                      About US
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/contact">
                    Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
    }