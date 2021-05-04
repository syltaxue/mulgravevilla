
import React from 'react';

class Header extends React.Component {
    render() {
          return (
                <div id="sticketHeader" className="sticky top-0 header">
                    <div>
                        <div className="w-full flex-shrink-0">

                            <img className="h-10" src="/assets/img/MulgraveVilla01.png" alt="MulgraveVilla01"/>
                        </div>
                    </div>
                </div>
                )
        }
};

export default Header;