import { Truck, Users, Stethoscope, Pill } from "lucide-react";

export default function PetServicesBanner() {
    const services = [
        {
            icon: <Truck className="w-8 h-8 text-white" />,
            title: "24hr Delivery",
            subtitle: "In 24 cities"
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "150,000+",
            subtitle: "Happy pet parents"
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-white" />,
            title: "Complimentary vet Consult",
            subtitle: "For every new member"
        },
        {
            icon: <Pill className="w-8 h-8 text-white" />,
            title: "Pet Pharmacy",
            subtitle: "Exclusive"
        }
    ];

    return (
        <div className="w-full" style={{
            background: "linear-gradient(90.41deg, rgba(0, 48, 146, 0.933333) 0.57%, #5A6ACF 48.9%, #205781 101.27%)"
        }}>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-wrap items-center justify-around">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center p-4">
                            <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                                {service.icon}
                            </div>
                            <div className="text-white">
                                <h3 className="font-medium text-lg">{service.title}</h3>
                                <p className="text-sm opacity-90">{service.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}