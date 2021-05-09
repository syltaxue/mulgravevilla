import React from 'react';
import Slider from "react-slick";


class UnitCarousel extends React.Component {
      render() {
            var carouselSettings = {
                  dots: true,
                  infinite: true,
                  swipeToSlide: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  speed: 500,
                  cssEase: "linear",
            };

            var carouselItems = [
                  {
                        src: "/assets/img/Carousel01.jpg",
                        alt: "Carousel01",
                        id: 1,
                  },
                  {
                        src: "/assets/img/Carousel02.jpg",
                        alt: "Carousel02",
                        id:2,
                  },
                  {
                        src: "/assets/img/Carousel03.jpg",
                        alt: "Carousel03",
                        id:3,
                  },
                  {
                        src: "/assets/img/Carousel01.jpg",
                        alt: "Carousel01",
                        id:4,
                  },
                  {
                        src: "/assets/img/Carousel02.jpg",
                        alt: "Carousel02",
                        id:5,
                  },
                  {
                        src: "/assets/img/Carousel03.jpg",
                        alt: "Carousel03",
                        id:6,
                  },
            ];
            return (

                  <div className="bg-mulgrave-unitbackground py-20 mt-32" style={{height: "fit-content"}}>
                        <Slider className="w-4/5 lg:w-11/12 m-auto" {...carouselSettings}>
                              {carouselItems.map((carouselItem) => {
                                    return (
                                          <div className="px-0.5 lg:px-5" key={carouselItem.id}>
                                                <img src={carouselItem.src} alt={carouselItem.alt} />
                                          </div>
                                    );
                              })}
                        </Slider>
                  </div>

            )
      }
};

export default UnitCarousel;