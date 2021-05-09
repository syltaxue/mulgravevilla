
import React from 'react';

class Design extends React.Component {
    render() {
          return (
                <div className="w-4/5 lg:w-11/12 m-auto mt-24 lg:mt-60">
                    <div><p className="underline text-mv-regular lg:text-xsmall xl:text-regular font-bebas font-normal text-black">THOUGHTFUL DESIGN</p></div>
                    <div className="w-11/12 lg:w-full lg:grid grid-flow-row grid-cols-4 grid-rows-1">
                        <div className="hidden lg:block"></div>
                        <div className="hidden lg:block"></div>
                        <div className="mt-20 lg:mt-14 h-48 w-full lg:w-96">
                            <p className="text-mv-tiny lg:text-tiny font-roboto font-light text-black">By minimizing visual impact through SENSITIVE, LOW-PROFILE BUILT FORMS, the Executive Homes at Rodgers Creek Lane COMPLEMENT the topography and landscape of their surroundings.</p>
                        </div>
                        <div className="hidden lg:block"></div>
                    </div>
                    <div className="w-full mt-6 lg:mt-24 grid grid-flow-col grid-rows-2 grid-cols-1 lg:grid-flow-row lg:grid-cols-4 lg:grid-rows-1">
                        <div className="lg:h-96"><p className="text-mv-tiny lg:text-tiny font-roboto font-light text-black">Buildings step up and 'CASCADE' down to follow the natural cross-slope topography of the site, as well as MINIMIZE cuts and fills. The development RESPECTS the mountain forest character of Rodgers Creek through the extensive use of NATURAL MATERIALS such as wood and LOCALLY-SOURCED stone.</p></div>
                        <div className="hidden lg:block"></div>
                        <div className="lg:col-span-2 relative">
                            <div className="absolute z-10 left-10 xl:left-20"><p className="underline text-mv-regular lg:text-xsmall xl:text-regular font-bebas font-normal text-black">LOW-PROFILE BUILT FORMS</p></div>
                            <div className="absolute z-0 bg-mulgrave-orange h-20 w-20 xl:h-40 xl:w-40"></div>
                        </div>
                    </div>
                    <div className="w-11/12 mt-20 h-80 lg:mt-0"><p className="uppercase text-mv-xxsmall lg:text-xsmall font-roboto font-normal text-black">IN COMBINATION WITH CAREFULLY-SELECTED GLASS, STUCCO, AND METAL CLADDING, THESE MATERIALS WORK IN HARMONY WITH THE FOREST SETTING.</p></div>
                </div>
                )
        }
};

export default Design;