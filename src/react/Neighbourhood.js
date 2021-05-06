
import React from 'react';

class Neighbourhood extends React.Component {
    render() {
          return (
                <div className="lg:mt-24 relative">
                    <div className="w-4/5 lg:w-112 lg:absolute lg:py-0 lg:left-1/24 lg:top-44">
                        <p className="text-regularView-regular lg:text-regular font-bebas">NEIGHBOURHOOD</p>
                        <p className="text-mv-xxsmall lg:text-tiny font-roboto mt-5 lg:mt-10">The site offers breathtaking, sweeping ocean views from Downtown Vancouver to Georgia Strait.</p>
                    </div>
                    <div className="hidden lg:block lg:w-full lg:h-full"> <img src="/assets/img/Neighbourhood-desktop.jpg"></img></div>
                </div>
                )
        }
};

export default Neighbourhood;