import React from 'react';

const PetHelp: React.FC = () => {
    const help = [{
        id: 1,
        title: "Here Goes the title",
        description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
        {
            id: 2,
            title: "Here Goes the title",
            description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
        },
        {
            id: 3,
            title: "Here Goes the title",
            description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
        }
    ]
    return (
        <div className=" mx-auto p-4 -mb-44 z-10">
            <div className="flex flex-row flex-wrap justify-between items-center mb-4">
                <img src="/public/left_circle.png" alt="Download App" className=" h-20 aspect-square"/>
                <h2 className="text-5xl  text-center mb-8 font-light">How to help your <span
                    className="font-bold ">Pet?</span></h2>
                <img src="/public/right_circle.png" alt="Download App" className=" h-20 aspect-square"/>
            </div>

            <div className="flex flex-row flex-wrap justify-between items-center mb-4 w-full">

                <div className="max-w-lg mx-auto p-6 bg-white">
                    {help.map((item) => (
                        <div key={item.id} className="mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-gray-700 font-medium text-xl">{item.id}.</span>
                                <div>
                                    <h2 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img className="z-10" src="/footer_dog_big.png" alt=""/>
                <div className="max-w-lg mx-auto p-6 bg-white">
                    {help.map((item) => (
                        <div key={item.id} className="mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-gray-700 font-medium text-xl">{item.id}.</span>
                                <div>
                                    <h2 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};


export default PetHelp;
