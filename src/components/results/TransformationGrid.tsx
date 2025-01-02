import React from 'react';

interface Transformation {
  name: string;
  duration: string;
  achievement: string;
  imageBefore: string;
  imageAfter: string;
}

const transformations: Transformation[] = [
  {
    name: "Sarah M.",
    duration: "6 months",
    achievement: "Lost 30lbs and completed her first marathon",
    imageBefore: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "John D.",
    duration: "4 months",
    achievement: "Gained 15lbs of muscle and doubled strength",
    imageBefore: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export function TransformationGrid() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Transformations</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {transformations.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              <img src={item.imageBefore} alt="Before" className="w-full h-64 object-cover" />
              <img src={item.imageAfter} alt="After" className="w-full h-64 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.duration}</p>
              <p className="text-gray-800">{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}