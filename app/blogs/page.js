import Image from "next/image";
import Link from "next/link";
import baseUrl from "@/app/constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
async function getBlogsList()
{
  try
  {
    const res = await fetch(`${baseUrl}showBlogs`);
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
  const responseData= await getBlogsList();
  const blogsData = responseData.data;
  const firstBlog = blogsData[0];
  const blogsList = blogsData.slice(1);

  if(responseData.error)
  {
    return (
      <>
        <h1>{blogsData.data}</h1>
      </>
    );
  }
  return (
    <>
      <div className="p-3 sm:p-8 md:p-16 text-white">
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-Poppins text-center">Some Technology Thoughts</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 sm:p-10 gap-10 m-auto">
          <div className="m-auto overflow-hidden">
            <Link href={`/blogs/${firstBlog.slug}`}><Image className="rounded-2xl hover:scale-110 transition-all duration-500" src={firstBlog.image} height={300} width={500} alt={firstBlog.title} priority={true}></Image></Link>
          </div>
          <div className="flex flex-col font-Poppins justify-between text-white p-2">
            <span className="flex flex-row gap-2 py-1">
              <FontAwesomeIcon className="text-sm md:text-lg" icon={faCalendarDays}></FontAwesomeIcon>
              <p className="text-xs my-auto">{firstBlog.created_at}</p>
            </span>
            <span className="line-clamp-2">
            <Link href={`/blogs/${firstBlog.slug}`}><h2 className="text-2xl md:text-4xl font-medium py-1">{firstBlog.title}</h2></Link>
            </span>
            <span className="line-clamp-3">
              <h3 className="text-sm md:text-base py-1" dangerouslySetInnerHTML={{ __html:firstBlog.description}}></h3>
              {/* <h3 className="text-sm md:text-base py-1">{firstBlog.description}</h3> */}
            </span>
            <span className="flex flex-row gap-2 py-1">
              <FontAwesomeIcon className="text-sm md:text-lg" icon={faCommentAlt}></FontAwesomeIcon>
              <p className="text-xs my-auto">{`${firstBlog.comments} Comments`}</p>
            </span>
          </div>
        </div>
        <div className="px-3 py-10 sm:px-10 md:px-20 font-Poppins">
          <h3 className="text-xl sm:text-2xl md:text-3xl pb-10">Latest Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
          {blogsList?.map((item, index) => (
              <BlogCard key={index} blog={item}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const BlogCard = ({blog}) =>{
  const {image,title, slug,created_at,comments} = blog;
  return(
    <div className="flex flex-col justify-between gap-2 px-4">
      <div className="mx-auto py-4 overflow-hidden">
        <Link href={`/blogs/${slug}`}><Image className="rounded-lg hover:scale-110 transition-all duration-500 object-contain" src={image} alt={title} height={350} width={500}></Image></Link>
      </div> 
      <span className="flex flex-row gap-2 py-1">
        <FontAwesomeIcon className="text-base" icon={faCalendarDays}></FontAwesomeIcon>
        <p className="text-xs my-auto">{created_at}</p>
      </span>
      <span className="line-clamp-3 my-auto">
      <Link href={`/blogs/${slug}`}><p className="text-white capitalize text-base md:text-lg font-medium">{title}</p></Link>
      </span>
      <span className="flex flex-row gap-2 py-1">
        <FontAwesomeIcon className="text-base" icon={faCommentAlt}></FontAwesomeIcon>
        <p className="text-xs my-auto">{`${comments} Comments`}</p>
      </span>
    </div>
  );
};