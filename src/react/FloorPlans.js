
import React from 'react';

class FloorPlans extends React.Component {
    render() {
        return (
            <div className="relative">
                <div className="lg:absolute lg:left-1/24 lg:bg-transparent lg:top-48">
                    <div className="font-bebas font-nomral text-mv-regular lg:text-regular">
                        <p>THE MASTER</p>
                        <p>- PLANNED</p>
                        <p>COMMUNITY</p>
                    </div>
                    <button className="mt-8 py-2"><a download href="./assets/MulgraveVilla_Floorplan.pdf" className="text-mv-tiny lg:text-tiny font-bebas font-normal px-4 lg:px-8 py-1 border border-black duration-300 hover:bg-mulgrave-orange hover:border-mulgrave-orange hover:text-white"><span>DOWNLOAD FLOORPLANS</span></a></button>
                </div>
                <img className="lg:w-full" src="./assets/img/Masterplanned.jpg" alt="Masterplanned"></img>
            </div>
        )
    }
};

export default FloorPlans;