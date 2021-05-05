
import React from 'react';

class Home extends React.Component {
    render() {
          return (
                <div id="Home" className="relative text-white font-bebas home-margin">
                      <img src="/assets/img/Banner.jpg" className="z-0"></img>
                      <div className="absolute top-24 left-10 lg:top-56 lg:left-28 z-10">
                            <div className="relative">
                              <div className="absolute -left-4 -top-8 lg:-left-8 lg:-top-16 z-30 whitespace-nowrap">
                                    <p className="lg:text-xlarge text-regularView-xlarge">21</p>
                                    <p className="lg:text-regular text-regularView-regular">OCEAN VIEW</p>
                                    <p className="lg:text-regular text-regularView-regular">HOMES</p>
                              </div>
                              <div className="absolute bg-mulgrave-orange h-20 w-20 lg:h-40 lg:w-40 z-20"></div>
                            </div>
                      </div>
                      <div className="absolute bottom-12 right-5 lg:bottom-24 lg:right-20 z-10">
                            <div className="relative">
                              <div className="absolute top-10 right-3 md:top-6 md:right-6 lg:top-12 lg:right-12 z-30 whitespace-nowrap text-right">
                                    <p className="lg:text-large text-regularView-large">IN WEST</p>
                                    <p className="lg:text-large text-regularView-large">VANCOUVER</p>
                              </div>
                              <div className="bg-mulgrave-gray h-20 w-64 md:h-28 md:w-96 lg:h-56 lg:w-192"></div>
                            </div>
                      </div>
                </div>
                )
        }
};

export default Home;