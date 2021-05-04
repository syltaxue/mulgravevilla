
import React from 'react';
import MenuOption from './menuOption';

class Header extends React.Component {
    render() {
          return (
              <div>
                <div id="sticketHeader" className="sticky top-0 bg-white text-black font-bebas font-normal">
                    <div className="py-9 xl:py-6 flex flex-col w-full items-center">
                        <div className="w-4/5 lg:w-11/12 justify-between items-center flex">
                            <div className="flex-shrink-0 float-left">
                                <img className="h-10 xl:h-16" src="/assets/img/MulgraveVilla01.png" alt="MulgraveVilla01"/>
                            </div>
                            <div className="flex-1"></div>
                            <div className="float-right text-black">
                                <MenuOption OptionName="Home"></MenuOption>
                                <MenuOption OptionName="Neighbourhood"></MenuOption>
                                <MenuOption OptionName="Opportunity"></MenuOption>
                                <MenuOption OptionName="Floorplans"></MenuOption>
                                <MenuOption OptionName="Team"></MenuOption>
                                <MenuOption OptionName="Contact"></MenuOption>
                                <MenuOption OptionName="Register"></MenuOption>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                )
        }
};

export default Header;