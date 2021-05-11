
import React from 'react';

class Team extends React.Component {
    render() {
          return (
                <div className="w-full grid lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-1">
                    <div className="col-span-2"><img src="./assets/img/Team01.jpg"></img></div>
                    <div className="lg:pl-16 lg:py-20 lg:w-4/5 lg:m-auto">
                        <p className="text-mv-regular lg:text-regular font-bebas font-nomral text-black">TEAM</p>
                        <div className="mt-10 lg:w-5/6 font-roboto text-black">
                            <p className="text-mv-xtiny lg:text-xxsmall font-medium">Development Partner /</p>
                            <div className="text-mv-xtiny lg:text-tiny font-medium">
                                <p>LQ Fairview Holding LTD.</p>
                                <p>Vansoho Development Corporation.</p>
                                <p>Marine Vista Homes.</p>
                            </div>
                            <p className="lg:text-xxsmall font-medium">Architect /</p>
                            <p className="lg:text-tiny font-light">Ekistics Architecture</p><br/><br/>
                            <p className="lg:text-xxsmall font-medium">Landscaping Architect /</p>
                            <p className="lg:text-tiny font-light">Forma Design</p><br/><br/>
                            <p className="lg:text-xxsmall font-medium">Structural Engineer /</p>
                            <p className="lg:text-tiny font-light">Allester Engineering</p><br/><br/>
                            <p className="lg:text-xxsmall font-medium">Geotechnical Engineer /</p>
                            <p className="lg:text-tiny font-light">GVH Consulting</p>
                        </div>
                        <div className="mt-10 lg:mt-20">
                            <img className="w-32 lg:w-44" src="./assets/img/logo-LQ.png" alt="logo-LQ"></img>
                            <img className="w-32 lg:w-44" src="./assets/img/logo-Vansoho.png" alt="logo-Vansoho"></img>
                        </div>
                    </div>
                </div>
                )
        }
};

export default Team;