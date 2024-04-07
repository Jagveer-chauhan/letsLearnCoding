import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas, faBookBible, faBookBookmark, faBookDead, faBookOpen, faBookReader } from "@fortawesome/free-solid-svg-icons";
const CategoryCards = (data) => {
  const {categoryData} = data;
    return (
        categoryData?.map((category, index) => (
          <CourseCard key={index} name={category.name} count ={category.count} />
        ))
    );
  };
  
const CourseCard =({name,count}) =>{
  return (
    <div className='flex flex-col bg-bg-dark pt-5 pl-4 shadow-black shadow-md hover:shadow-black hover:shadow-xl'>
      <span className='justify-start text-center md:text-start'>
        {/* <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image> */}
        <FontAwesomeIcon icon={faBookOpen} className="text-white text-6xl ps-2" />
        <p className='text-center md:text-start text-sm font-medium ps-2'>{name}</p>
      </span>
      <span className='text-center md:text-start pt-3 pb-5 pr-7 ps-2'>
        <p className='text-xs'>{`${count} Courses`}</p>
      </span>
    </div>
  );
}
export default CategoryCards;
