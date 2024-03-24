import Image from "next/image";
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
    <div className='flex flex-col bg-dark-blue pt-5 pl-4 '>
      <span className='justify-start'>
        <Image src={"/images/icons/courses.png"} width={75} height={75} alt="icon"></Image>
        <p className='text-start text-sm font-medium ps-2'>{name}</p>
      </span>
      <span className='text-start pt-3 pb-5 pr-7 ps-2'>
        <p className='text-xs'>{`${count} Courses`}</p>
      </span>
    </div>
  );
}
export default CategoryCards;
