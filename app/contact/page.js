'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faF, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import {faFacebookF, faInstagram, faTelegram, faTelegramPlane, faThreads, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isQueryFocused, setQueryFocused] = useState(false);
  return (
    <>
      <div className="p-10 pt-16 md:p-16 lg:px-40 lg:py-16 font-Poppins">
        <div className="p-6 sm:p-12 flex flex-col justify-center bg-white rounded-md">
          <h1 className="text-xl text-bg-blue font-bold underline underline-offset-8 text-center">Get In Touch</h1>
          <p className="text-lg font-semibold text-neutral-800 py-5">Leave us a message</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <form>
              <div className="flex flex-col gap-4 justify-between">
                <div className='my-2 relative w-full'>
                  <label className={`absolute transition-all duration-300 ${isNameFocused ? 'text-xs text-black -m-3 ms-3 p-1 bg-white' : 'text-base text-neutral-400 ms-3 mt-2'}`}>{isNameFocused ? 'Name' :'Enter Your Name'}</label>
                  <input type="text" className={`w-full py-2 px-4 border-neutral-400 border-[1.5px] rounded-md focus:outline-none`}
                  onFocus={() => setNameFocused(true)} onBlur={(e) => !e.target.value && setNameFocused(false)}/>
                </div>
                <div className='my-2 relative w-full'>
                  <label className={`absolute transition-all duration-300 ${isEmailFocused ? 'text-xs text-black -m-3 ms-3 p-1 bg-white' : 'text-base text-neutral-400 ms-3 mt-2'}`}>{isEmailFocused ? 'Email' :'Enter Your Email Address'}</label>
                  <input type="email" className={`w-full py-2 px-4 border-neutral-400 border-[1.5px] rounded-md focus:outline-none`}
                    onFocus={() => setEmailFocused(true)} onBlur={(e) => !e.target.value && setEmailFocused(false)}/>
                </div>
                <div className='my-2 relative w-full'>
                  <label className={`absolute transition-all duration-300 ${isQueryFocused ? 'text-xs text-black -m-3 ms-3 p-1 bg-white' : 'text-base text-neutral-400 ms-3 mt-2'}`}>{isQueryFocused ? 'Message' :'Enter Your Message'}</label>
                  <textarea className={`w-full py-2 px-4 border-neutral-400 border-[1.5px] rounded-md focus:outline-none`} rows={5}
                    onFocus={() => setQueryFocused(true)} onBlur={(e) => !e.target.value && setQueryFocused(false)}/>
                </div>
                <button type='submit' className='w-full bg-bg-blue text-white p-2 font-semibold'>Send</button>
              </div>
            </form>
          <div className='flex flex-col gap-4 md:px-4 pt-2'>
            <span className='flex flex-row gap-2'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-xl text-neutral-400'></FontAwesomeIcon>
              <p className='text-sm text-neutral-900 '>Tigaon Road, Near Aggarwal College, Ambedkar Chowk, Ballabgarh</p>
            </span>
            <span className='flex flex-row gap-2'>
              <FontAwesomeIcon icon={faPhone} className='text-xl text-neutral-400'></FontAwesomeIcon>
              <p className='text-sm text-neutral-900 '>+91 8076492601</p>
            </span>
            <span className='flex flex-row gap-2'>
              <FontAwesomeIcon icon={faEnvelope} className='text-xl text-neutral-400'></FontAwesomeIcon>
              <p className='text-sm text-neutral-900 '>letslearncoding07@gmail.com</p>
            </span>
            <span className='flex flex-row gap-5'>
              <Link href={'#'}><FontAwesomeIcon icon={faYoutube} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
              <Link href={'https://www.facebook.com/profile.php?id=61552354815748&mibextid=ZbWKwL'}><FontAwesomeIcon icon={faFacebookF} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
              <Link href={'https://www.instagram.com/letslearncoding2023?igsh=Z3JiMTZnZWRldnB1'}><FontAwesomeIcon icon={faInstagram} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
              <Link href={'https://www.threads.net/@letslearncoding2023'}><FontAwesomeIcon icon={faThreads} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
              <Link href={'https://whatsapp.com/channel/0029VaBDK9TGU3BT9FDczM3B'}><FontAwesomeIcon icon={faWhatsapp} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
              <Link href={'https://t.me/letslearncoding2023'}><FontAwesomeIcon icon={faTelegramPlane} className='text-xl text-neutral-900'></FontAwesomeIcon></Link>
            </span>
            <div className='w-full h-full pt-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.619623024172!2d77.31963067408114!3d28.340110797302334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbca9fd8f1c5%3A0xa193201971bbe020!2sLetsLearnCoding!5e0!3m2!1sen!2sin!4v1705594066276!5m2!1sen!2sin" width={"100%"} height={"100%"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}


