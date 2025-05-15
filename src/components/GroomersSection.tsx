import React from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';

const GroomersSection: React.FC = () => {
    return (
        <div className="w-[95%] mx-auto flex justify-between h-full ">

            <Card className="bg-secondary-light overflow-hidden rounded-2xl border-0 max-w-[30%] " style={{
                background: "linear-gradient(161.56deg, #FFD15C -0.9%, #FF7058 100%)"
            }}>
                <CardContent
                    className="p-6 md:p-8 flex flex-col justify-between items-center text-center h-full ">
                    <div>
                        <h2 className="text-4xl font-normal text-white mb-6">
                            See Our Top <br/>
                            Groomers
                        </h2>
                        <p className="text-gray-700text-sm rounded-full shadow-md py-2 px-4 text-white" style={{
                            background: "linear-gradient(92.25deg, rgba(255, 255, 255, 0.2) 14.89%, rgba(255, 255, 255, 0.11) 67.29%, rgba(255, 255, 255, 0.2) 93.49%)"
                        }}> Experienced & Expert Groomers </p>
                        <img src="/public/groomers_img.png" alt="" className="-mb-4 mt-4"/>
                    </div>
                    <div className="w-full">
                        <Button className="rounded-full bg-black text-white hover:bg-gray-700 w-full">
                            Discover The Service
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-transparent overflow-hidden rounded-2xl border-0 ">
                <CardContent className="p-6 md:p-8 flex flex-col justify-evenly h-full ">
                    <h2 className="text-8xl letter font-bold text-[#5E5D5C] mb-4 tracking-widest ">
                        VETO EXPRESS
                    </h2>
                    <p className="text-gray-600 mb-8 text-xl">
                        The best care for your pets, from the comfort of your home.
                        Our expert veterinarians provide high quality care for your
                        beloved animals. Your pet's health is our top priority.
                    </p>
                    <div className="bg-black w-1/3 h-1 mb-3"></div>

                    <div className="grid grid-cols-2 gap-4 ">
                        <ConsultationCard
                            icon="/public/online_consulation.png"
                            title="Online Consultation"
                            description="Connect with our vets through video calls for quick advice"
                        />
                        <ConsultationCard
                            icon="/public/online_consulation.png"
                            title="In-Person Appointment"
                            description="Visit our clinic with your pet for a thorough examination"
                            whiteCta={true}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const ConsultationCard: React.FC<{
    icon: string;
    title: string;
    description: string;
    whiteCta?: boolean;

}> = ({icon, title, description, whiteCta = false}) => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg ">
            <span className="block mb-2"></span>
            <div className="w-16 h-16  bg-white  rounded-lg flex items-center justify-center border-primary border-2">

                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white">
                    {/* Icon placeholder - you'll add your own icon here */}
                    <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center ">
                        <img src={icon} alt="" className="w-6"/>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl text-[#484747] font-semibold my-2">{title}</h3>
            <p className="text-xl text-gray-600 mb-3">{description}</p>
            <Button variant="outline" className={`rounded-full text-xs h-8 py-5 pl-5 pr-1 ${
                whiteCta ? 'text-black bg-white' : 'text-white bg-primary border-primary '
            }`}>
                Book Now
                <img src="/public/link.png" alt="" className="h-8"/>
            </Button>
        </div>
    );
};

export default GroomersSection;
