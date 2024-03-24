import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowAltCircleLeft, faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import baseUrl from "@/app/constants/constants";
import AccordionComponent from "@/app/components/accordion";
import ReviewSlider from "@/app/components/carousel"

async function courseDetails(courseName)
{
  try
  {
      const res = await fetch(`${baseUrl}coursedetail?slug=${courseName}`);
    const data= await res.json();
    if(data.status==200)
    {
      return {data:data.data,error:false};
    }
    return {data:data.message,error:true};
  }
  catch(error)
  {
    console.log(error);
    return {data:"Something Went Wrong",error:true}; 
  }
}

export default async function CourseDetails(context) 
{
  const {course_name} = context.params;
  const responseData= await courseDetails(course_name);
  const courseData = responseData.data;
  if(responseData.error)
  {
    return (
      <>
        <h1>{courseData.data}</h1>
      </>
    );
  }

  const courseContent = courseData.course_content?.map((item) => ({
    title: item.heading,
    content: item.pointers,
    expanded: false,
  }));
  
  return (
    <>
      <main className="bg-bg-blue text-white font-Poppins flex flex-col gap-6 capitalize py-8 px-8 md:px-20 text-left sm:py-10 sm:px-14">
        <span className="flex flex-row flex-wrap items-center gap-3">
          <Link href={"/"}>Home</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={'/courses'}>Courses</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={courseData.slug}>{courseData.title}</Link>
        </span>
          <h1 className="text-4xl md:text-4xl font-bold capitalize">{courseData.title}</h1>
          <h2 className="text-xl font-medium">{courseData.tagline}</h2>
      </main>
      <div className="w-9/12 my-20 font-Poppins text-left flex flex-col gap-10 m-auto">
        <h3 className="text-4xl font-semibold capitalize text-white">{courseData.heading}</h3>
        <p className="text-sm text-white">{courseData.description}</p>
        <h4 className="text-4xl font-semibold text-white capitalize">Course Content</h4>
        <div className="">
            {courseContent?.map((item, index) => (
            <AccordionComponent key={index} {...item} />
          ))}
        </div>
      </div>
      <ReviewSlider reviews= {courseData.reviews}/>
    </>
  );
}

