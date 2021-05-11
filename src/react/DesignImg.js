
import React from 'react';

class DesignImg extends React.Component {
    render() {
          return (
                <div className="relative w-full grid grid-flow-row grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                    <img src="./assets/img/Design01.jpg"></img>
                    <img src="./assets/img/Design02.jpg"></img>
                    <img src="./assets/img/Design03.jpg"></img>
                    <img src="./assets/img/Design04.jpg"></img>
                </div>
                )
        }
};

export default DesignImg;