import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DoctorCards from '@/components/DoctorCards';
import GroomersSection from '@/components/GroomersSection';
import ServicesGrid from '@/components/ServicesGrid';
import DeliveryPartners from '@/components/DeliveryPartners';
import Testimonials from '@/components/Testimonials';
import AppDownload from '@/components/AppDownload';
import PetHelp from '@/components/PetHelp';
import Footer from '@/components/Footer';
import HeroCarousel from "@/components/HeroCarousel.tsx";
import PetServicesBanner from "@/components/PetServicesBanner.tsx";


const Index: React.FC = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-center ">
            <Navbar/>
            <HeroCarousel/>
            <DoctorCards/>
            <GroomersSection/>
            <ServicesGrid/>
            <DeliveryPartners/>
            <Testimonials/>
            <PetServicesBanner/>
            <AppDownload/>
            <PetHelp/>
            <Footer/>
        </div>
    );
};

export default Index;
