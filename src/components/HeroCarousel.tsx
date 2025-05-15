import React, {useEffect, useState, useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {DotButton, PrevButton, NextButton} from './CarouselArrowsDots'; // We'll create this file next

const HeroCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="relative overflow-hidden rounded-lg mt-4   p-0 w-[95%] mx-auto  rounded-[40px]">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex ">
                    <div className="embla__slide flex-shrink-0 w-full relative min-h-[791px]">

                        <div className="min-h-full  !bg-[#205781] flex items-center rounded-lg">
                            <div className="text-white p-8 md:p-16 max-w-3xl">
                                <div className="border-l-4 border-white pl-4">
                                    <h1 className="text-7xl font-light mb-4 ">
                                       Comprehensive<br/>  <span className="font-bold">Pet Solutions</span> for<br/> Pet Parents.
                                    </h1>
                                    <p className="text-lg mb-6">
                                        One-stop hub for complete solutions
                                    </p>
                                </div>
                                <a href="#" className="flex items-center text-white hover:underline mt-4">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Emergency Support
                                </a>
                            </div>
                        </div>
                        {/* Cat Images (right side) - with smooth transitions between slides */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                            {/* Slide 1 Image */}
                            <img
                                src="/hero_img.png"
                                alt="Siamese cat with blue eyes"
                                className={`object-cover h-full  absolute transition-opacity duration-500 `}
                            />
                        </div>
                    </div>
                    <div className="embla__slide flex-shrink-0 w-full relative min-h-[791px]">

                        <div className="min-h-full  bg-[#205781] bg-opacity-75 flex items-center rounded-lg">
                            <div className="text-white p-8 md:p-16 max-w-md">
                                <div className="border-l-4 border-white pl-4">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
                                        Comprehensive Pet Solutions for Pet Parents.
                                    </h1>
                                    <p className="text-lg mb-6">
                                        One-stop hub for complete solutions
                                    </p>
                                </div>
                                <a href="#" className="flex items-center text-white hover:underline mt-4">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Emergency Support
                                </a>
                            </div>
                        </div>
                        {/* Cat Images (right side) - with smooth transitions between slides */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                            {/* Slide 1 Image */}
                            <img
                                src="/hero_img.png"
                                alt="Siamese cat with blue eyes"
                                className={`object-cover h-full  absolute transition-opacity duration-500 `}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="embla__dots absolute bottom-4 right-4 flex space-x-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-red-400' : 'bg-gray-400'}`}
                    />
                ))}
            </div>


        </div>
    );
};

export default HeroCarousel;