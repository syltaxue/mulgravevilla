
import React from 'react';

class Opportunity extends React.Component {
    render() {
          return (
                <div className="relative w-4/5 m-auto mt-24 lg:mt-32">
                    <div className="font-roboto font-light text-mv-xxsmall lg:text-xxsmall">
                        <p>The site offers breathtaking, sweeping ocean views from Downtown Vancouver to Georgia Strait. Surrounded by recently built and sold luxury multi-family and single family product, this is an RARE opportunity to capitalize on creating a legacy in the mid-size home category.</p>
                    </div>
                    <div className="mt-24 lg:mt-72 flex lg:flex-row">
                        <div className="lg:w-2/3">
                            <hr className="border-t-3 border-black"></hr>
                            <p className="text-mv-regular lg:text-regular font-bebas mt-10">Opportunity</p>
                        </div>
                        <div className="lg:w-1/3 lg:pl-24">
                            <p className="text-mv-tiny lg:text-tiny font-roboto font-light mb-20">Mid Size definition of 3300-4100 square feet on 6900-9100 square foot lots. The site is fully serviced and subdivided with active DP on 21 homes in place in which vendor holds an active BP on Lot 21 for construction of a show home.</p>
                            <a><button className="py-1"><span>CONTACT US</span></button></a>
                            <p className="text-mv-xtiny lg:text-xxtiny font-roboto font-nomal mt-5">Please feel free to call one of the partners associated with this opportunity.</p>
                        </div>
                    </div>
                </div>
                )
        }
};

export default Opportunity;