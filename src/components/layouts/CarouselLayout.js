import React from "react";
import Slider from "react-slick";
import ImageOne from '../../images/Johanna 1.png';
import ImageTwo from '../../images/Katusza 1.png';
import ImageThree from '../../images/Merry 1.png';
import ImageFour from '../../images/Merry 2.png';

const Carousel = () => {
    return (
        <div
        id="carouselDarkVariant"
        class="carousel justify-center flex slide carousel-fade m-3"
        data-bs-ride="carousel"
    >
        <div className="flex w-4/5 md:w-4/5">
            <div className="w-1/2 md:w-1/4 px-2">
            <img src={ImageOne} alt="Image 1" className="h-129 md:h-320 w-full object-cover" />
            </div>
            <div className="w-1/2 md:w-1/4 px-2">
            <img src={ImageTwo} alt="Image 2" className="h-129 md:h-320 w-full object-cover" />
            </div>
            <div className="w-1/2 md:w-1/4 px-2">
            <img src={ImageThree} alt="Image 3" className="h-129 md:h-320 w-full object-cover" />
            </div>
            <div className="w-1/2 md:w-1/4 px-2">
            <img src={ImageFour} alt="Image 4" className="h-129 md:h-320 w-full object-cover" />
            </div>
        </div>
    </div>
    );
  };
  
  export default Carousel;