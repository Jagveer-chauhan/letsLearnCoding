import baseUrl from "@/app/constants/constants";
import Image from 'next/image'
import Link from 'next/link'
import CategoryCards from '@/app/components/categoryCards';
import CourseCards from "@/app/components/courseCards";
import BlogCards from "./components/blogsCards";
import { Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

async function HomePageContent(courseName)
{
  try
  {
    const res = await fetch(`${baseUrl}homePageContent`);
    const data= await res.json();
    if(data.status==200)
    {
      return data.data;
    }
  }
  catch(error)
  {
    console.log(error);
  }
}

export default async function Home() {
  const responseData = await HomePageContent();
  const categoryWiseCourse = responseData?.cateoryWiseCourseCount;
  const courses = responseData?.courses;
  const blogsData = responseData?.blogs;
  // console.log(categoryWiseCourse);

  return (
    <>
    <main className="bg-[url('/images/backgroundImage.png')] text-white hero">
    <div className="hero-overlay bg-opacity-40"></div>
     <div className='hero-content flex flex-col h-[80vh] justify-center items-center font-Poppins font-normal text-center pt-12'>
      <h1 className='text-4xl px-2 font-medium sm:text-5xl md:text-6xl lg:text-7xl'>Empowering Students<br/>For a Bighter Tomorrow</h1>
      <h2 className='text-xl font-medium pt-6 px-2 sm:text-2xl md:text-2xl lg:text-3xl'>Discover potential, shape a brighter future through quality education and innovation</h2>
     </div>
    </main>
    <div className='flex flex-col justify-evenly items-center bg-bg-blue py-3 px-6 font-Poppins md:flex-row text-white'>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (5).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Shape Futures</span>
          <span className='text-xs pt-2'>Forge success with a strong foundation. Chart your journey towards achievement and fulfillment</span>
        </div> 
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (6).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Spark Innovation</span>
          <span className='text-xs pt-2'>Explore ideas between open books, lighting up your learning with innovation and forward-thinking</span>
        </div> 
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <div className='image-full'>
          <Image src="/images/icons/icons (7).png" width={110} height={110} alt="image"></Image>
        </div>
        <div className='flex flex-col ps-2 text-center md:text-left'>
          <span className='font-semibold text-sm'>Tech-Ready Graduates</span>
          <span className='text-xs pt-2'>Tech-infused learning for tomorrow&apos;s leaders, connecting education and technology seamlessly</span>
        </div> 
      </div>
    </div>
    <div className='flex flex-col text-white font-Poppins p-5'>
      <div className='flex flex-row sm:justify-between sm:p-5 justify-center'>
        <span className='text-3xl sm:px-7 font-medium'>Popular Courses</span>
        <Link className='hidden sm:block px-7 py-2 rounded-md font-semibold bg-white hover:bg-btn-bg text-bg-blue hover:text-white' href={'/courses'}>View all Courses</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between px-12 py-4'>
        <CategoryCards categoryData ={categoryWiseCourse} />
      </div>
        <Link className='sm:hidden px-7 py-2 mt-4 rounded-md text-center mx-auto font-semibold bg-white hover:bg-btn-bg text-bg-blue hover:text-white' href={'/courses'}>View all Courses</Link>
    </div>
    <div className='relative grid grid-col-1 sm:grid-cols-2 content-center p-10 sm:p-2 font-Poppins text-white'>
      <div className='xs:pl-16 xs:py-6 sm:m-auto'>
        <p className='text-sm py-2'>Create Your Success</p>
        <h3 className='text-3xl font-medium'>Best IT Courses<br/>& Upgrade Your Skills</h3>
        <p className='text-xs py-4 pb-10'>Choose from 10+ IT courses additions published <br/> Every month & upgrade your skills. Get started with us.</p>
        <span className='flex justify-between'>
        <Link  className='text-xs px-7 py-2 btn font-bold bg-white hover:bg-btn-bg text-bg-blue hover:text-white border-none' href={'/contact'}>Get Started</Link>
        <Image className='mt-[-22px]' src={"/images/icons/6.png"} width={150} height={150} alt='icon'></Image>
        </span>
      </div>
      <div className='p-1 sm:px-10 m-auto'>
        <span className='flex flex-row bg-dark-blue pt-1 px-2 w-28 -translate-x-8 translate-y-4  rounded-t-lg rounded-bl-lg z-10'>
        <Image src={"/images/icons/marketing.png"} width={40} height={40} alt='icon'></Image>
        <p className='ps-2 text-xs'>10+ Courses</p>
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
    <div className="text-center font-Poppins relative text-white">
      <h4 className='text-4xl'>Explore Our Popular Courses</h4>
      <p className='text-sm pt-4 px-5 sm:px-10 md:px-20'>Embark on a learning journey that aligns with your goals. Our popular courses offer diverse opportunities, empowering you to acquire skills, gain knowledge, and pave your way to success</p>
      <div className='px-5 py-10 lg:py-20 md:px-14 lg:px-28 xl:px-44'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-auto'>
        <CourseCards coursesData={courses}/>
        {/* <div className='rounded-xl overflow-hidden m-auto bg-dark-blue'>
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
        </div> */}
      </div>
      </div>
    </div>
    {/* <span className='absolute -right-40'>
    <Image src={"/images/3.png"} height={400} width={400} alt='design'></Image>
    </span> */}
    <div className="relative text-center font-Poppins text-white z-10">
      <h4 className='text-4xl'>Explore Our Blogs</h4>
      <p className='text-sm pt-4 px-10'>Dive into a world of insightful content. Our blogs cover a spectrum of topics, providing valuable perspectives, practical advice, and engaging narratives to enrich your knowledge and experience</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-auto px-5 py-10 lg:px-20'>
        <BlogCards blogsData={blogsData}/>
        {/* <div className='flex flex-row bg-white'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='w-full pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-white'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='w-full pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-white'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='w-full pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2  items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div>
        <div className='flex flex-row bg-white'>
          <Image src={'/images/5.png'} width={130} height={160} alt='blog Image'></Image> 
          <span className='w-full pl-4 py-4 text-left'>
            <p className='text-base uppercase font-semibold text-blue-text'>Language</p>
            <p className='text-base font-normal capitalize text-neutral-950'>how to crack interviews</p>
            <p className='text-xs py-5 text-neutral-600'>Fresh food directly from our restaurant ready coocked for you and you familly</p>
          </span>
          <span className='flex p-2 items-center justify-center bg-blue-text mt-auto'>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </div> */}
      </div>
      <Link className='px-8 py-3 mt-6 text-sm rounded-md bg-white hover:bg-btn-bg text-bg-blue hover:text-white text-center font-semibold mx-10 transition-all duration-300 ease-in-out' href={'/blogs'}>View More</Link>
    </div>
    <span className='absolute -mt-40 -ml-60 overflow-hidden'>
    <Image src={"/images/3.png"} height={400} width={400} alt='design'></Image>
    </span>
    <div className="px-4 pt-10 md:pt-20 md:px-20 lg:40 font-Poppins text-white relative">
      <h4 className='text-2xl md:text-4xl text-center'>Frequently Asked Questions (FAQs)</h4>
    </div>
    <div className="relative p-4 lg:px-20 lg:py-10 flex flex-col justify-center gap-4 md:flex-row font-Poppins">
      <img className="h-80 px-4 md:px-0" src="/images/1212.png" alt="image"></img>
      <div className="px-4 pb-10 lg:40">
        <Accordion className='mb-2'>
          <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-dark text-white border-[1.5px] border-solid border-white'>
            <Typography className='text-lg font-bold font-Poppins ps-2'>Why choose Lets Learn Coding.</Typography>
          </AccordionSummary>
          <AccordionDetails className='font-Poppins bg-bg-dark text-white'>
            <div className="flex flex-col px-2 py-1 text-white text-left">
            <p className="text-sm">Here&apos;s why you should choose us:</p>
            <p className="font-bold text-2xl py-2">Pick us for our focus on practical skills and real-world applications.</p>
            <p className="text-xs py-2">At Lets Learn Coding, we pride ourselves on offering a unique blend of quality education, industry expertise, and personalized support to help our students succeed in their IT careers.</p>
            <div className="pt-4">
              <ul className="list-none text-xs grid grid-cols-2 gap-3">
                <li className="">Expert Instructors</li>
                <li className="">Hands-On Learning</li>
                <li className="">Career-Oriented Curriculum</li>
                <li className="">Flexible Learning Options</li>
                <li className="">Supportive Community</li>
                <li className="">Proven Track Record</li>
              </ul>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-2'>
          <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-dark text-white border-[1.5px] border-solid border-white'>
            <Typography className='text-lg font-bold font-Poppins ps-2'>What IT courses do you offer.</Typography>
          </AccordionSummary>
          <AccordionDetails className='font-Poppins bg-bg-dark text-white'>
            <div className="flex flex-col px-2 py-1 text-white text-left">
            <p className="text-sm">Here&apos;s the scoop!</p>
            <p className="font-bold text-2xl py-2">Explore excited domains we provide.</p>
            <p className="text-xs py-2">We offer a comprehensive menu of IT programs and courses designed to launch your tech career.</p>
            <div className="pt-4">
              <ul className="list-none text-xs grid grid-cols-2 gap-3">
                <li className="">Front End Development</li>
                <li className="">Backend Deveopment</li>
                <li className="">Full Stack Devellopment</li>
              </ul>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-2'>
          <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-dark text-white border-[1.5px] border-solid border-white'>
            <Typography className='text-lg font-bold font-Poppins ps-2'>What are the prerequisites for enrolling in your programs.</Typography>
          </AccordionSummary>
          <AccordionDetails className='font-Poppins bg-bg-dark text-white'>
            <div className="flex flex-col px-2 py-1 text-white text-left">
            <p className="text-sm">Ready to Set Sail?</p>
            <p className="font-bold text-2xl py-2">Prerequisites vary depending on the program you choose.</p>
            <p className="text-xs py-2">We don&apos;t have any specific prerequisites for enrolling in our programs. However, if you have some basic computer knowledge, it will be beneficial for your learning experience.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-2'>
          <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-dark text-white border-[1.5px] border-solid border-white'>
            <Typography className='text-lg font-bold font-Poppins ps-2'>What are the career opportunities after completing your programs.</Typography>
          </AccordionSummary>
          <AccordionDetails className='font-Poppins bg-bg-dark text-white'>
            <div className="flex flex-col px-2 py-1 text-white text-left">
            <p className="text-sm">Gear Up for Success!</p>
            <p className="font-bold text-2xl py-2">Our programs open doors to exciting IT careers.</p>
            <p className="text-xs py-2">Launch your IT career with our programs!  We&apos;ll equip you with the skills for high-demand jobs in areas like website development, software development, advanced Excel and more.</p>
            <div className="pt-4">
              <ul className="list-none text-xs grid grid-cols-2 gap-3">
                <li className="">Website Development</li>
                <li className="">Software Deveopment</li>
                <li className="">Application Devellopment</li>
                <li className="">IT Professional</li>
              </ul>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-2'>
          <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-dark text-white border-[1.5px] border-solid border-white'>
            <Typography className='text-lg font-bold font-Poppins ps-2'>What are the career opportunities after completing your programs.</Typography>
          </AccordionSummary>
          <AccordionDetails className='font-Poppins bg-bg-dark text-white'>
            <div className="flex flex-col px-2 py-1 text-white text-left">
            <p className="text-sm">Your Career Launchpad!</p>
            <p className="font-bold text-2xl py-2">Your success is our priority.</p>
            <p className="text-xs py-2">We have internship opportunities with local companies, depending on the program.We also offer a comprehensive suite of career services to help you land your dream IT job This includes:</p>
            <div className="pt-4">
              <ul className="list-none text-xs grid grid-cols-2 gap-3">
                <li className="">Resume writing workshops</li>
                <li className="">Interview skills training</li>
                <li className="">Job placement assistance</li>
              </ul>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    {/* <div className="relative p-4 md:p-20 flex flex-col justify-center gap-4 md:flex-row font-Poppins">
    <img className="h-64" src="/images/1212.png" alt="image"></img>
    <div className="flex flex-col text-xs text-white justify-between min-w-fit">
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
    <div className="flex flex-col px-2 py-1 text-white text-left">
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
    </div> */}
  </> 
  )
}
