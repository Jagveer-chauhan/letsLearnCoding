import Image from "next/image";
import Link from "next/link";
import baseUrl from "@/app/constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

async function blogDetails(courseName)
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
  }
}

export default async function About(context) 
{
  const {course_name} = context.params;
  const responseData= await blogDetails(course_name);
  const courseData = responseData.data;
  if(responseData.error)
  {
    return (
      <>
        <h1>{courseData.data}</h1>
      </>
    );
  }

  return (
    <>
      <main className="bg-bg-blue text-white font-Poppins flex flex-col gap-10 capitalize py-8 px-10 text-left sm:py-10 sm:px-14">
        <span className="flex flex-row flex-wrap items-center gap-3">
          <Link href={"/"}>Home</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={'/courses'}>Courses</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={courseData.slug}>{courseData.title}</Link>
        </span>
          <h1 className="text-5xl font-bold capitalize">{courseData.title}</h1>
          <h2 className="text-xl font-medium">{courseData.tagline}</h2>
      </main>
      <div className="w-9/12 my-20 font-Poppins text-left flex flex-col gap-10 m-auto">
        <h3 className="text-4xl font-semibold capitalize text-white">{courseData.heading}</h3>
        <p className="text-sm text-white">{courseData.description}</p>
        <h4 className="text-4xl font-semibold text-white capitalize">Course Content</h4>
      </div>
    </>
  );
}

