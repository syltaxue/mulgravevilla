
import React from 'react';
import ProjectDescriptionItem from './ProjectDescriptionItem';

class SizeInfo extends React.Component {
    render() {
          return (

                <div className="mt-72 w-4/5 lg:w-11/12 m-auto">
                    <hr className="border-t-6 border-black"></hr>
                    <div className="flex my-10">
                        <div className="font-bebas text-mv-regular lg:text-regular">THOUGHTFUL <br/> SUSTAINABLE <br/>  FAMILY</div>
                        <div className="mx-40 font-roboto">Mulgrave Villa is a master-planned 21 homes situated along scenic miles of ocean view, green space and the most prestige institution in West Vancouver - Mulgrave School.</div>
                        <div className="whitespace-nowrap text-right">
                            <a><button><span>ASKING PRICE</span></button></a>
                            <p className="text-mv-xtiny lg:text-xxtiny font-roboto mt-5">*Contact agents personally for more detail</p>
                        </div>
                    </div>
                    <div className="flex xl:grid-cols-3 gap-24 mt-32">
                        <ProjectDescriptionItem sizeInformation="154,203 SF" itemName="SITE SIZE" description="154,203 sf (21 lots combined ranging from 6,975 to 9,139 sf)"></ProjectDescriptionItem>
                        <ProjectDescriptionItem sizeInformation="73,886 SF" itemName="BUILDABLE AREA" description="The site zoning allows for construction of 21 homes with total buildable area of 73,886 sf"></ProjectDescriptionItem>
                        <ProjectDescriptionItem sizeInformation="21 HOMES" itemName="LUXURIUOS RESIDENCES" description="SUBJECT PROPERTY 21 FULLY SERVICED LOTS CD3 (Rodgers Creek)"></ProjectDescriptionItem>
                    </div>
                </div>

                )
        }
};

export default SizeInfo;