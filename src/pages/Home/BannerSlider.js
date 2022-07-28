import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BankImg1 from "../../assets/images/bank-img-1.jpg";
import BankImg2 from "../../assets/images/bank-img-2.jpg";
import BankImg3 from "../../assets/images/bank-img-3.jpg";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className="w-full slide-img sm:h-48 lg:h-[65vh] mx-auto"
          src={BankImg1}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full slide-img  sm:h-48 lg:h-[65vh] mx-auto"
          src={BankImg2}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full slide-img  sm:h-48 lg:h-[65vh]  mx-auto"
          src={BankImg3}
          alt=""
        />
      </div>
    </Slider>
  );
};

export default BannerSlider;
