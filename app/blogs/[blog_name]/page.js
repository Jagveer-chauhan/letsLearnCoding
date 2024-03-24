import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import baseUrl from "@/app/constants/constants";

async function blogDetails(courseName)
{
  try
  {
    const res = await fetch(`${baseUrl}blogDetails?slug=${courseName}`);
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

export default async function BlogDetails(context) 
{
  const {blog_name} = context.params;
  const responseData= await blogDetails(blog_name);
  const blogData = responseData.data;
  if(responseData.error)
  {
    return (
      <>
        <h1>{blogData.data}</h1>
      </>
    );
  }
  
  return (
    <>
      <main className="bg-bg-blue text-white font-Poppins flex flex-col gap-6 capitalize py-8 px-8 md:px-20 text-left sm:py-10 sm:px-14">
        <span className="flex flex-row flex-wrap items-center gap-3">
          <Link href={"/"}>Home</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={'/blogs'}>Blogs</Link>
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <Link href={blogData.slug}>{blogData.title}</Link>
        </span>
          <h1 className="text-4xl md:text-4xl font-bold capitalize">{blogData.title}</h1>
      </main>
      <div className="flex flex-col md:flex-row gap-6 px-20 py-4">
        <div className="flex flex-col gap-6 w-11/12">
          <div className="w-full relative h-[60vh]">
            <Image src={blogData.image} fill={true}></Image>
          </div>
          <div className="font-Poppins text-white flex flex-col gap-4">
            <h2 className="font-semibold text-3xl">{blogData.title}</h2>
            <p className="text-neutral-200">{blogData.description}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold font-Poppins text-white py-5">Recent Blogs</p>
          <div className="flex flex-col gap-6">
            {blogData.recentBlogs?.map((blog,index)=>(
              <RecentBlogCard key={index} blog={blog}/>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-4 py-4 px-20">
          <Link className="max-w-xs flex flex-row gap-1 text-white" href={`/blogs/${blogData.previous_blog_link?.slug ?? '#'}`}>
            <FontAwesomeIcon className="text-2xl text-neutral-400  m-auto" icon={faAngleLeft}></FontAwesomeIcon>
            <span className="flex flex-col">
              <p className="capitalize text-sm font-medium text-white">Previous</p>
              <p className="capitalize text-xs text-neutral-200 line-clamp-1">{blogData.previous_blog_link?.title}</p>
            </span>
          </Link>
          <Link className="max-w-xs flex flex-row gap-1 text-white text-right" href={`/blogs/${blogData.next_blog_link?.slug ?? '#'}`}>
            <span className="flex flex-col">
              <p className="capitalize text-sm font-medium text-white">Next</p>
              <p className="capitalize text-xs text-neutral-200 line-clamp-1">{blogData.next_blog_link?.title}</p>
            </span>
            <FontAwesomeIcon className="text-2xl text-neutral-400  m-auto" icon={faAngleRight}></FontAwesomeIcon>
          </Link>
      </div>
    </>
  );
}
async function RecentBlogCard({blog}){
  const {title,slug} = blog;
  return(
    <>
    <span className="p-2 group border-2 rounded-md border-bg-blue hover:shadow-sm hover:shadow-white">
      <Link className="text-neutral-300 text-sm font-medium font-Poppins group-hover:text-white" href={`/blogs/${slug}`}>{title}</Link>
    </span>
    </>
  )
}