
import React from 'react';

class Contact extends React.Component {
    render() {
        var contactForm = [
            {
                title: "Name",
                type: "text",
                name: "name",
            },
            {
                title: "Email",
                type: "email",
                name: "_replyto",
            },
            {
                title: "Phone Number",
                type: "text",
                name: "phone",
            },
            {
                title: "Message",
                type: "text",
                name: "message",
            },
        ];
        return (
            <div className="w-full mt-32 lg:mt-64 grid lg:grid-flow-row lg:grid-cols-4 lg:grid-rows-1">
                <div className="grid-span-1">
                    <img src="/assets/img/PualPhoto.jpg" alt="PualPhoto"></img>
                    <div className="px-10 py-16">
                        <p className="p-2 lg:p-4 text-mv-xsmall lg:text-xsmall font-bebas font-normal text-black">PAUL TAN</p>
                        <p className="p-2 lg:p-4 text-mv-tiny lg:text-xtiny font-roboto font-normal text-black">PHONE / 7789986870<br></br>EMAIL / info@paultanhomes.com</p>
                        <img className="px-2 py-4 lg:p-4 ml-0 w-56" src="/assets/img/MarineVistaRealtyLogo.png" alt="MarineVistaRealtyLogo"></img>
                    </div>
                </div>
                <div className="grid-span-1 bg-mulgrave-gray text-white justify-center flex">
                    <div className="h-full relative">
                        <p className="pt-44 text-mv-regular lg:text-xxsmall xl:text-small 2xl:text-regular font-bebas">CONTACT US</p>
                        <p className="absolute whitespace-nowrap bottom-1 md:bottom-10 text-mv-xtiny lg:text-xtiny font-roboto">© 2021 mulgrave villa. All rights reserved.</p>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-mulgrave-gray">
                    <div className="w-full h-full relative">
                        <form className="w-4/5 m-auto" action="https://formspree.io/f/xyybqzbg" method="POST">
                            <div className="pt-20 lg:pt-44 pb-20 grid grid-cols-1 gap-6">
                                {contactForm.map((line) => {
                                    return (
                                        <label className="block" key={line.title}>
                                            <span className="text-mv-xxtiny lg:text-xxtiny font-roboto font-normal text-white">
                                                {line.title}
                                            </span>
                                            <input
                                                className="mt-0 block w-full bg-mulgrave-gray px-0.5 border-0 border-b-2 text-white border-white focus:ring-0 duration-500 focus:border-mulgrave-orange"
                                                type={line.type}
                                                name={line.name}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <button type="submit" value="Send" className="py-1 mb-14">
                                <span className="text-xtiny lg:text-xtiny font-bebas font-normal text-white px-10 py-1 border border-white duration-300 hover:bg-mulgrave-orange hover:border-mulgrave-gray">
                                    SEND
                                </span>
                            </button>
                        </form>
                        <div className="absolute bottom-0 right-0 h-40 w-96 bg-mulgrave-orange ">
                            <p className="p-12 text-xxsmall font-thin text-black justify-self-center self-center font-bebas">PRESENTATION GALLERY<br></br> Available By Appointment Only</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;