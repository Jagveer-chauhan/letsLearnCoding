import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <main className="bg-[url('/images/backgroundImage.png')] text-neutral-50 hero">
    <div className="hero-overlay bg-opacity-40"></div>
     <div className='hero-content flex flex-col h-[80vh] justify-center items-center font-Poppins font-normal text-center'>
      <h1 className='text-4xl px-2 font-medium sm:text-5xl md:text-6xl lg:text-7xl'>Find Better Software <br/> Service Company</h1>
      <h2 className='text-xl font-medium pt-6 px-2 sm:text-2xl md:text-2xl lg:text-3xl'>We will help you to feel better and enjoy every single day of your life</h2>
     </div>
    </main>
    <div className='flex flex-col justify-center items-center bg-bg-blue py-3 px-6 font-Poppins md:flex-row text-neutral-50'>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (5).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Get Achieve New Level</span>
          <span className='text-xs pt-2'>It is a longe established factey that reader will be follow readae cin page</span>
        </div> 
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (6).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Get Achieve New Level</span>
          <span className='text-xs pt-2'>It is a longe established factey that reader will be follow readae cin page</span>
        </div> 
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (7).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Get Achieve New Level</span>
          <span className='text-xs pt-2'>It is a longe established factey that reader will be follow readae cin page</span>
        </div> 
      </div>
    </div>
    <div className='flex flex-col text-neutral-50 font-Poppins p-5'>
      <div className='flex flex-row sm:justify-between p-5 justify-center'>
        <span className='text-3xl sm:px-7 font-medium'>Popular Courses</span>
        <Link className='hidden sm:block px-7 py-2 rounded-md bg-btn-bg' href={'#'}>View all Courses</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between px-12 py-4'>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
        <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
          <span className='justify-start pr-7'>
            <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
            <p className='text-start text-sm font-medium ps-2'>Featured</p>
          </span>
          <span className='text-start pt-3 pb-5 pr-7 ps-2'>
            <p className='text-xs'>02 Courses</p>
          </span>
        </div>
      </div>
        <Link className='sm:hidden px-7 py-2 mt-4 rounded-md bg-btn-bg text-center mx-10' href={'#'}>View all Courses</Link>
    </div>
    <div className='relative grid grid-col-1 sm:grid-cols-2 content-center p-10 sm:p-2 font-Poppins text-neutral-50'>
      <div className='xs:pl-16 xs:py-6 sm:m-auto'>
        <p className='text-sm py-2'>Create Your Success</p>
        <h3 className='text-3xl font-medium'>Best IT Courses<br/>& Upgrade Your Skills</h3>
        <p className='text-xs py-4 pb-10'>Choose from 15+ IT courses additions published <br/> Every month & upgrade your skills. Get started with us.</p>
        <span className='flex justify-between'>
        <Link  className='text-xs px-7 py-2 btn btn-primary border-none bg-dark-blue' href={'#'}>Get Started</Link>
        <Image className='mt-[-22px]' src={"/images/icons/6.png"} width={150} height={150} alt='icon'></Image>
        </span>
      </div>
      <div className='p-1 sm:px-10 m-auto'>
        <span className='flex flex-row bg-dark-blue pt-1 px-2 w-28 -translate-x-8 translate-y-4  rounded-t-lg rounded-bl-lg z-10'>
        <Image src={"/images/icons/marketing.png"} width={40} height={40} alt='icon'></Image>
        <p className='ps-2 text-xs'>15+ Courses</p>
        </span>
        <Image className=' ms-0 mt-0' src={'/images/4.png'} height={280} width={240} alt='image'></Image>
        <Image className ='translate-x-[6.5rem] -translate-y-14' src={'/images/5.png'} height={200} width={160} alt='image'></Image>
        <span className='flex flex-row bg-dark-blue pt-1 px-2 -translate-y-32 translate-x-2 w-28 rounded-tl-lg rounded-b-lg'>
        <Image src={"/images/icons/marketing.png"} width={40} height={40} alt='icon'></Image>
        <p className='ps-2 text-xs'>Expert Teachers</p>
        </span>
      </div>
    </div>
    <span className='absolute -ms-80 -mt-52'>
    <Image src={"/images/icons/Path 62.png"} height={400} width={400} alt='design'></Image>
    </span>
    <div className="text-center font-Poppins relative text-neutral-50">
      <h4 className='text-4xl'>Explore Our Popular Courses</h4>
      <p className='text-sm pt-4 px-10'>Jeffrey crikey victoria sponge mush spiffing super arse over tit matie boy smashing. The little rotter off his nut codswallop.!</p>
      <div className='px-5 py-10 lg:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-auto'>
        <div className='rounded-xl overflow-hidden m-auto bg-dark-blue'>
          <img className='object-cover' src='/images/6.png' width="100%" height="auto" alt='course image'/>
          <p className='bg-bg-blue rounded-full m-auto text-sm w-fit py-px px-4 -translate-y-3'>Development</p>
          <div className='px-5 py-4 text-left'>
            <div className='font-medium text-xl mb-2'>Full Stack Development Course</div>
            <p className='text-sm'>(4.5 ratings)</p>
            <hr className='my-2'></hr>
            <div className='flex flex-row justify-between'>
              <p className='text-xs'>20+ Students</p>
              <p className='text-xs'>Enroll Now</p>
            </div>
          </div>
        </div>
        <div className='rounded-xl overflow-hidden m-auto bg-dark-blue'>
          <img className='object-cover' src='/images/6.png' width="100%" height="auto" alt='course image'/>
          <p className='bg-bg-blue rounded-full m-auto text-sm w-fit py-px px-4 -translate-y-3'>Development</p>
          <div className='px-5 py-4 text-left'>
            <div className='font-medium text-xl mb-2'>Full Stack Development Course</div>
            <p className='text-sm'>(4.5 ratings)</p>
            <hr className='my-2'></hr>
            <div className='flex flex-row justify-between'>
              <p className='text-xs'>20+ Students</p>
              <p className='text-xs'>Enroll Now</p>
            </div>
          </div>
        </div>
        <div className='rounded-xl overflow-hidden m-auto bg-dark-blue'>
          <img className='object-cover' src='/images/6.png' width="100%" height="auto" alt='course image'/>
          <p className='bg-bg-blue rounded-full m-auto text-sm w-fit py-px px-4 -translate-y-3'>Development</p>
          <div className='px-5 py-4 text-left'>
            <div className='font-medium text-xl mb-2'>Full Stack Development Course</div>
            <p className='text-sm'>(4.5 ratings)</p>
            <hr className='my-2'></hr>
            <div className='flex flex-row justify-between'>
              <p className='text-xs'>20+ Students</p>
              <p className='text-xs'>Enroll Now</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    {/* <span className='absolute -right-40'>
    <Image src={"/images/3.png"} height={400} width={400} alt='design'></Image>
    </span> */}
    <div className="relative text-center font-Poppins text-neutral-50 z-10">
      <h4 className='text-4xl'>Explore Our Blogs</h4>
      <p className='text-sm pt-4 px-10'>I am glad that you have made it here to send a distress signal, & inform the Senate that all on board</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-auto px-5 py-10 lg:px-20'>
        <div className='flex flex-row bg-neutral-50'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-neutral-50'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-neutral-50'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2  items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-neutral-50'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
    <span className='absolute -mt-40 -ml-60 overflow-hidden'>
    <Image src={"/images/3.png"} height={400} width={400} alt='design'></Image>
    </span>
    <div className="relative p-4 md:p-20 flex flex-col gap-4 md:flex-row font-Poppins">
    <img className="h-64" src="/images/1212.png" alt="image"></img>
    <div className="flex flex-col text-xs text-neutral-50 justify-between min-w-fit">
      <span className="border border-bg-blue px-4 py-2 flex flex-row gap-4 justify-between">
        <p className="ps-2">01 What We Do</p>
        <span className='mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
      </span>
      <span className="border border-bg-blue px-4 py-2 flex flex-row gap-4 justify-between">
        <p className="ps-2">01 What We Do</p>
        <span className='mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
      </span>
      <span className="border border-bg-blue px-4 py-2 flex flex-row gap-4 justify-between">
        <p className="ps-2">01 What We Do</p>
        <span className='mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
      </span>
      <span className="border border-bg-blue px-4 py-2 flex flex-row gap-4 justify-between">
        <p className="ps-2">01 What We Do</p>
        <span className='mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
      </span>
      <span className="border border-bg-blue px-4 py-2 flex flex-row gap-4 justify-between">
        <p className="ps-2">01 What We Do</p>
        <span className='mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
      </span>
    </div>
    <div className="flex flex-col px-2 py-1 text-neutral-50 text-left">
     <p className="text-sm">Education System</p>
     <p className="font-bold text-2xl py-2">Consulting Approch to Problem Solving Successful</p>
     <p className="text-xs py-2">I am glad that you have made it here to send a distress signal, & inform the Senate that all on board were killed. Dantooine. I’m not going to Alderaan. I really got to go. But that to me.</p>
     <div className="pt-4">
      <ul className="list-none text-xs grid grid-cols-2 gap-3">
        <li className="">Time Management Mastery</li>
        <li className="">The Business Intelligence</li>
        <li className="">Do More, Stress Less</li>
        <li className="">Analyst Course 2020</li>
      </ul>
     </div>
    </div>
    </div>
  </> 
  )
}
