
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-primary-light rounded-2xl overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl text-primary font-semibold mb-2">
            Comprehensive
            <br />
            <span className="font-bold">Pet Solutions</span> for
            <br />
            Pet Parents
          </h1>
          <p className="text-gray-600 mb-6">
            We care for your pets like you do
          </p>
          <div className="flex space-x-4">
            <Button className="bg-primary text-white rounded-full px-8">
              Book Now
            </Button>
            <Button variant="outline" className="border-primary text-primary rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/c2f8f12a-c72b-4568-8cfd-aa27604f579b.png" 
            alt="Cat Hero" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
