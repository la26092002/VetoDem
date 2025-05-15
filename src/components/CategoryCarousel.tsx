import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryCarousel() {
    const categories = [
        'TOP PET DOCTORS',
        'TOP VETERINAIRES',
        'TOP PET-SITTER',
        'TOP PET-SITTER',
        'OTHER CATEGORY',
        'ANOTHER OPTION'
    ];

    const [activeCategory, setActiveCategory] = useState(0);

    const scroll = (direction) => {
        if (direction === 'left') {
            setActiveCategory(prev => (prev === 0 ? categories.length - 1 : prev - 1));
        } else {
            setActiveCategory(prev => (prev === categories.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div className=" flex items-center justify-center gap-4 p-4 max-w-min bg-white rounded-full mb-4">


            {/* Category Pills */}
            <div className="flex items-center space-x-4 overflow-hidden">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-colors
              ${index === activeCategory
                            ? 'bg-blue-800 text-white'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
                        onClick={() => setActiveCategory(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Left Navigation Button */}
            <button
                onClick={() => scroll('left')}
                className="rounded-full w-10 h-10 bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                aria-label="Previous category"
            >
                <ChevronLeft size={20} />
            </button>
            {/* Right Navigation Button */}
            <button
                onClick={() => scroll('right')}
                className="rounded-full w-10 h-10 bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                aria-label="Next category"
            >
                <ChevronRight size={20} />
            </button>


        </div>
    );
}