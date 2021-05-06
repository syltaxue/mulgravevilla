
import React from 'react';

class ProjectDescriptionItem extends React.Component {
    render() {
          return (
                <div className="w-full">
                    <hr className="border-t-3 border-black"></hr>
                    <div className="my-12 font-roboto">
                        <p className="text-mv-xsmall lg:text-xsmall font-bold">{this.props.sizeInformation} <span className="text-mv-xtiny lg:text-xtiny float-right font-normal">{this.props.itemName}</span></p>
                        <div className="my-12 text-mv-xxsmall lg:text-xxsmall">{this.props.description}</div>
                    </div>
                </div>
                )
        }
};

export default ProjectDescriptionItem;