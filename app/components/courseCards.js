import Image from "next/image";
import Link from "next/link";
const CourseCards = (data) => {
  const {coursesData} = data;
    return (
      coursesData.map((course, index) => (
          <CourseCard key={index} courseData ={course} />
        ))
    );
  };
  
const CourseCard =({courseData}) =>{
  const {title, image,slug,category_name} = courseData;
  return (
    <Link className="group flex flex-col font-Poppins rounded-xl bg-dark-blue justify-between hover:-translate-y-2 transition-all" href={`/courses/${slug}`}>
      <div className="">
        <div className="relative h-44 overflow-hidden rounded-t-xl group-hover:rounded-t-xl">
          <Image className="object-cover rounded-t-xl group-hover:rounded-t-xl group-hover:scale-110 transition-all" src={image} alt={"title"} fill={true}></Image>
        </div> 
        <p className="bg-bg-blue rounded-full m-auto text-sm w-fit py-px px-4 -translate-y-3">{category_name}</p>
      </div>
      <p className="text-left font-medium text-xl capitalize px-4 pb-2">{title}</p>
      {/* <hr className='text-black'></hr> */}
      <p className="text-base font-bold text-center p-2 border-t-[1px] group-hover:text-white group-hover:bg-bg-blue group-hover:rounded-md">View Course</p>
    </Link>
  );
}
export default CourseCards;
