'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-8">
      {/* Testimonial Content */}
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>

        <blockquote className="text-gray-600 mb-4">
          "{testimonials[currentIndex].text}"
        </blockquote>

        <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 