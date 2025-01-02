import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    role: "Software Engineer",
    quote: "FitCoach Pro's structured approach helped me balance my desk job with fitness. I've never felt better!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emma L.",
    role: "Teacher",
    quote: "The personalized nutrition plan made all the difference. I finally understand how to eat for my goals.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David K.",
    role: "Business Owner",
    quote: "Despite my busy schedule, FitCoach Pro helped me stay consistent and achieve results I never thought possible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

export function SuccessStories() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Client Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <Quote className="h-8 w-8 text-blue-600 mb-4" />
            <p className="text-gray-600 mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}