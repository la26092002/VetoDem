import React from 'react';
import {Link} from 'react-router-dom';
import {Facebook, Instagram, Linkedin, Music, Twitter} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1C1C1C] text-gray-300 py-16 px-6  m-4 grid grid-cols-4 rounded-3xl gap-4 relative z-0">
            <img className="absolute  -top-20 left-20 w-60 " src="/dog_fotter-right.png" alt=""/>
            <img className="absolute -top-20 right-20 w-60 " src="/cat_fotter-left.png" alt=""/>

            <div className="flex flex-col gap-4  w-full md:w-auto bg-[#333] p-14 h-full  rounded-3xl ">
                <div className="text-white text-2xl font-bold">Veto Express</div>
                <p className="text-lg leading-relaxed ">Scale efficiently with every workload efficiently with every
                    work
                    cale
                    efficiently with every workload with every workload</p>
            </div>

            <div
                className="flex flex-1 flex-wrap justify-between w-full bg-[#333] p-14  gap-8 md:gap-12 h-full rounded-3xl col-span-3">

                <div className="w-1/2 md:w-auto">
                    <h3 className=" font-semibold mb-4 text-[#EDEDED]">Service</h3>
                    <ul className="text-sm space-y-2">
                        <li>Pet Buy & Sell</li>
                        <li>Pet Profile</li>
                        <li>Virtual Consultations</li>
                    </ul>
                </div>

                <div className="w-1/2 md:w-auto">
                    <h3 className="text-[#EDEDED] font-semibold mb-4">Service</h3>
                    <ul className="text-sm space-y-2">
                        <li>Pet Medicine & Accessories</li>
                        <li>Veterinary</li>
                        <li>Services/Veterinary</li>
                    </ul>
                </div>

                <div className="w-1/2 md:w-auto">
                    <h3 className="text-[#EDEDED] font-semibold mb-4">Company</h3>
                    <ul className="text-sm space-y-2">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Career</li>
                        <li>Press Release</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-[#EDEDED]">Social Media</h2>
                    <div className="flex space-x-4">
                        <Button variant="ghost" size="icon"
                                className="rounded-full h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700">
                            <Facebook className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" size="icon"
                                className="rounded-full h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700">
                            <Twitter className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" size="icon"
                                className="rounded-full h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700">
                            <Linkedin className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" size="icon"
                                className="rounded-full h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700">
                            <Instagram className="h-4 w-4"/>
                        </Button>
                        <Button variant="ghost" size="icon"
                                className="rounded-full h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700">
                            <Music className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>

        </footer>
    );
};


export default Footer;
