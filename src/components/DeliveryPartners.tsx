
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Partner = {
  id: number;
  name: string;
  logo: string;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Yellow Express",
    logo: "/public/yalidine.png"
  },
  {
    id: 2,
    name: "Red Express",
    logo: "/public/yalidine.png"
  },
  {
    id: 3,
    name: "ZX Express",
    logo: "/public/zr_express.png"
  },
  {
    id: 4,
    name: "WM Express",
    logo: "/public/zr_express.png"
  },
  {
    id: 1,
    name: "Yellow Express",
    logo: "/public/yalidine.png"
  },
  {
    id: 2,
    name: "Red Express",
    logo: "/public/yalidine.png"
  },
  {
    id: 3,
    name: "ZX Express",
    logo: "/public/zr_express.png"
  },
];

const DeliveryPartners: React.FC = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">Delivery Partners</h2>
        
        <div className="flex flex-row gap-10 overflow-x-scroll">
          {partners.map(partner => (
            <Card key={partner.id} className="border rounded-xl shadow-sm min-w-max relative">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="h-56 w-auto mb-4" />
                <h3 className="text-3xl font-medium text-gray-700">{partner.name}</h3>
                <button className="mt-10 text-gray-700 text-md border border-gray-700 rounded-full px-3 py-1 w-max">
                  SHOW MORE
                </button>
                <button className="absolute top-2 right-2">
                  <img src="/public/hearth.png" alt=""/>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartners;
