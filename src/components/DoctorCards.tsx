import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import CategoryCarousel from "@/components/CategoryCarousel.tsx";

type Doctor = {
    id: number;
    name: string;
    specialty: string;
    image: string;
};

const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Michael',
        specialty: 'MBBS, MS',
        image: "/doctof.jpg",
    },
    {
        id: 2,
        name: 'Dr. William',
        specialty: 'MBBS, MS',
        image: "/doctof.jpg",
    },
    {
        id: 3,
        name: 'Dr. Smith',
        specialty: 'MBBS, MS',
        image: "/doctof.jpg",
    },
    {
        id: 4,
        name: 'Dr. Robert',
        specialty: 'MBBS, MS',
        image: "/doctof.jpg",
    }
];

const DoctorCards: React.FC = () => {
    return (
        <div className=" p-4 md:px-0 my-6  flex items-center flex-col w-[95%] mx-auto rounded-tl-[40px] rounded-tr-[40px]" style={{
            background: "linear-gradient(180deg, #205781 0%, rgba(0, 48, 146, 0.933333) 15.5%, rgba(217, 217, 217, 0) 100%)"}} >
                <CategoryCarousel/>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4 scrollbar-hide max-w-min">
                {doctors.map((doctor) => (
                    <Card key={doctor.id} className="flex-shrink-0 bg-transparent border-none  rounded-3xl w-56 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex flex-row  justify-between items-center mt-2">
                                <div className="flex flex-col  justify-between items-center mt-2">
                                <h3 className="font-medium">{doctor.name}</h3>
                                <p className="text-sm text-gray-500">{doctor.specialty}</p>
                                </div>

                                    <Button variant="outline"
                                            className="text-xs h-8 px-3 rounded-full border-[#635B5B] bg-[#635B5B] text-white">
                                        Available
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DoctorCards;
