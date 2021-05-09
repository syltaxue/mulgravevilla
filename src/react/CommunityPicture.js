
import React from 'react';

class CommunityPicture extends React.Component {
    render() {
        return (
            <div className="relative">
                <div className="lg:block absolute -top-28 left-0">
                    <div className="relative w-144 h-96 bg-mulgrave-gray">
                        <p className="py-36 px-24 text-xxsmall font-bebas font-normal text-white">The RODGERS CREEK property truly exemplifies the understanding behind such a great opportunity in West Vancouver right beside Mulgrave Private School.</p>
                    </div>
                </div>
                <div className="absolute -bottom-10 lg:-bottom-80 right-0">
                    <img className="hidden lg:block" src="/assets/img/MulgraveSchool-Rec-Desktop.jpg"></img>
                    <img className="lg:hidden block" src="/assets/img/MulgraveSchool-Rec-Mobile.jpg"></img>
                </div>
                <img className="h-96 lg:h-auto" src="/assets/img/MulgraveSchool.jpg"></img>
            </div>
        )
    }
};

export default CommunityPicture;