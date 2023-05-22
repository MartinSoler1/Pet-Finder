import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

interface Image {
  url: string;
}

const ImagesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: Image[] = [
    {
      url: "https://antietamhumanesociety.org/wp-content/uploads/2021/08/lost-pets.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1283692900/photo/group-of-different-kind-of-pets-like-cat-dog-rabbit-mouse-chinchilla-guinea-pig-bird-and-fish.jpg?s=612x612&w=0&k=20&c=oRyN_o5XT6UYFtwidjPxYFN9T5v0dBvu4CCAZUUJtW4=",
    },
    {
      url: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/pets-cats-dog-rabbit.jpg",
    },
    {
      url: "https://albertaanimalservices.ca/wp-content/uploads/2018/02/lost_dog.gif",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imgIndex: number) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <>
      <div className="h-[520px] w-full m-auto py-16 px-4 overflow-hidden relative bg-white group shadow-md">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className="w-full h-[520px] rounded-2xl bg-fill bg-center bg-no-repeat opacity-70 duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 py-4 justify-center">
        {images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            onClick={() => goToSlide(imgIndex)}
            className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesSlider;
