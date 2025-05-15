
import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Pet Owner",
    avatar: "/public/testimonial.png",
    quote: "The veterinary services provided were exceptional. My dog received the best care possible and recovered quickly."
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Cat Owner",
    avatar: "/public/testimonial.png",
    quote: "I'm very impressed with the online consultation. It was convenient and the vet was very knowledgeable and helpful."
  },
  {
    id: 3,
    name: "John Doe",
    role: "Pet Owner",
    avatar: "/public/testimonial.png",
    quote: "The grooming services were excellent. My dog looks amazing and the staff was very friendly and professional."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full my-44 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  text-center mb-8 font-light">What They <span className="font-bold ">Say</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="flex flex-col">
             <div>
               <img src="/public/say.png" alt="sayicon" className="h-10 my-5" />
             </div>
              <p className="text-gray-600 mb-6 text-sm">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
