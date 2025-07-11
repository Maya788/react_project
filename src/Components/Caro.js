import { Carousel, IconButton } from "@material-tailwind/react";
 import ggg from './assets/ggg.jpg'
 import mainimg from './assets/mainimg.jpg'
 import puja from './assets/puja.jpg'
const Caro = () => {
  return (
    <Carousel autoplayDelay={2000} autoplay loop 
      className="rounded-xl mt-10 h-[600px] w-[1000px] ml-60 "
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={ggg} alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={mainimg}  alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={puja}  alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
export default Caro