import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const BlogCards = (data) => {
  const {blogsData} = data;
    return (
      blogsData?.map((BlogData, index) => (
          <BlogCard key={index} BlogData ={BlogData} />
        ))
    );
  };
  
const BlogCard =({BlogData}) =>{
  const {title, image,slug,description} = BlogData;
  return (
    <div className='flex flex-row bg-white'>
          <div className="h-auto w-44">
            <Image src={image} width={240} height={160} alt='blog Image' className="h-full w-full object-cover"></Image> 
          </div>
          <span className='w-full pl-4 py-4 text-left'>
            {/* <p className='text-base uppercase font-semibold text-blue-text'>Language</p> */}
            <Link href={`/blogs/${slug}`}>
              <p className='text-base font-semibold capitalize text-blue-text line-clamp-2'>{title}</p>
            </Link>
            <div className="py-3">
              <p className='text-xs text-neutral-600 line-clamp-3 capitalize'>{description}</p>
            </div>
          </span>
          <span className='flex px-2 py-1 items-center justify-center bg-blue-text mt-auto'>
            <Link href={`/blogs/${slug}`}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
          </span>
        </div>
  );
}
export default BlogCards;
