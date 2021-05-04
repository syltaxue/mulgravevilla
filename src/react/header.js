
import React from 'react';

class Header extends React.Component {
    render() {
          return (
              <div>
                <div id="sticketHeader" className="sticky top-0 bg-white text-black font-bebas font-normal">
                    <div className="w-full">
                        <div className="flex-shrink-0 float-left">
                            <img className="h-10" src="/assets/img/MulgraveVilla01.png" alt="MulgraveVilla01"/>
                        </div>
                        <div className="float-right text-black">
                            <a className="no-underline hover:underline"><button type="button">Home</button></a>
                            <a className="no-underline hover:underline">Neighbourhood</a>
                            <a className="no-underline hover:underline">Opportunity</a>
                            <a className="no-underline hover:underline">Floorplans</a>
                            <a className="no-underline hover:underline">Team</a>
                            <a className="no-underline hover:underline">Contact</a>
                            <a className="no-underline hover:underline">Register</a>
                        </div>
                    </div>
                </div>
              </div>
                )
        }
};

export default Header;