import Image from "next/image";
import Link from "next/link";
import baseUrl from "@/app/constants/constants";

async function getCourseList()
{
  try
  {
    const res = await fetch(`${baseUrl}showCourses`);
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

export default async function CourseList() {
  const responseData= await getCourseList();
  const coursesList = responseData.data;
  if(responseData.error)
  {
    return (
      <>
        <h1>{coursesList.data}</h1>
      </>
    );
  }
  return (
    <>
      <div className="p-4 sm:p-8 md:p-16 text-white">
        <div className="flex flex-col gap-5 pb-12">
          <h1 className="font-semibold text-5xl font-Poppins">Our Professional Courses</h1>
          <p className="text-sm">Welcome to our courses, where innovation meets opportunity! Dive into the dynamic world of technology with our comprehensive range of IT courses designed to equip you with the skills and knowledge needed to thrive in the digital age. Whether you&apos;re a beginner looking to learn the basics of programming or an experienced professional aiming to specialize in cybersecurity or data science, we have something for everyone.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 p-9 sm:p-8 md:p-4 lg:p-0">
        {coursesList?.map((item, index) => (
            <CourseCard key={index} course={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

const CourseCard = ({course}) =>{
  // console.log(course)
  const {image,title, category_name, slug} = course;
  return(
    <Link className="group flex flex-col font-Poppin rounded-md bg-white justify-between hover:-translate-y-2 hover:shadow-md hover:shadow-neutral-500 transition-all" href={`/courses/${slug}`}>
      <div className="px-2 pt-2">
        <div className="relative h-40 overflow-hidden">
          <Image className="object-cover rounded-md group-hover:scale-110 transition-all" src={image} alt={"title"} fill={true}></Image>
        </div> 
        <p className="py-2 capitalize rounded-lg -translate-y-4 bg-light-blue text-center text-xs font-medium w-fit px-4 m-auto">{category_name}</p>
      </div>
      <p className="text-neutral-700 capitalize text-lg font-semibold px-4 pb-2">{title}</p>
      {/* <hr className='text-black'></hr> */}
      <p className="text-base font-bold text-neutral-700 text-center p-2 border-t-[1px] group-hover:text-white group-hover:bg-light-blue group-hover:rounded-md">View Course</p>
    </Link>
  );
};