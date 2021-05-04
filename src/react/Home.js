
import React from 'react';

class Home extends React.Component {
    render() {
          return (
                <div id="Home" className="relative ">
                      <img src="/assets/img/Banner.jpg" className="z-0"></img>
                      <div className="absolute top-24 left-10 lg:top-56 lg:left-28 z-10">
                            <div className="relative">
                              <div className="absolute -left-4 -top-8 lg:-left-8 lg:-top-16 z-20">
                                    <p className="lg:text-xlarge text-regularView-xlarge">21</p>
                                    <p className="lg:text-regular text-regularView-regular">Ocean View</p>
                                    <p className="lg:text-regular text-regularView-regular">Homes</p>
                              </div>
                              <div className="absolute bg-mulgrave-orange h-20 w-20 lg:h-40 lg:w-40 z-30"></div>
                            </div>
                      </div>
                      <div className="absolute bottom-12 right-5 lg:bottom-24 lg:right-20 z-10"></div>
                </div>
                )
        }
};

export default Home;