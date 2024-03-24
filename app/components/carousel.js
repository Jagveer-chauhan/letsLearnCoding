'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faArrowCircleRight,faUserCircle} from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

function ReviewSlider (studentReviews)
{
  const {reviews} = studentReviews;
  const sliderRef = React.useRef();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
      }
  }, 
  {
      breakpoint: 860,
      settings: {
          slidesToShow: 2,
          slidesToScroll:2
      }
  }, 
  {
      breakpoint: 580,
      settings: {
          slidesToShow:1,
          slidesToScroll:1
      }
  }, 
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }]
  };
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="md:p-10 bg-bg-blue">
          <div className="flex flex-row p-10 justify-between gap-2">
            <p className="text-3xl font-Poppins text-white max-w-screen-sm">An enterprise template to ramp up your company website</p>
            <div className="flex flex-col justify-end">
              <div className=" flex justify-end gap-8">
                <button className="hidden md:block" onClick={goToPrev}><FontAwesomeIcon icon={faArrowCircleLeft} className="text-white text-5xl"></FontAwesomeIcon></button>
                <button className="hidden md:block" onClick={goToNext}><FontAwesomeIcon icon={faArrowCircleRight} className="text-white text-5xl"></FontAwesomeIcon></button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <Slider ref={sliderRef} {...settings}>
              {
                reviews?.map((element, index) => (
                  <StudentReview key={index} review={element} />
                  ))
              }
            </Slider>
          </div>
        </div>
    </>
  );
}
const StudentReview = ({ review }) => {
  const {name, description} = review;
  return (
    <div className="bg-white flex flex-col gap-2 p-4 m-2 text-left justify-center rounded-lg font-Poppins">
      <div className="p-3 text-lg text-black">&quot;{description}&quot;</div>
      <div className="flex flex-row gap-2 ps-4 justify-start">
        <span className="my-auto">
        <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-neutral-500"></FontAwesomeIcon>
        </span>
        <span className="text-lg font-semibold capitalize my-auto">{name}</span>
      </div>
    </div>
  );
};

export default ReviewSlider;