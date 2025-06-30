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
    <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto animate-fadein">
      {/* Testimonial Content */}
      <div className="relative flex flex-col items-center text-center">
        <div className="flex items-center mb-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-green-500 shadow-lg mr-4">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-heading font-bold text-green-900 flex items-center gap-2">
              {testimonials[currentIndex].name}
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full ml-2">Real Student</span>
            </h3>
            <p className="text-sm text-gray-600 font-body">{testimonials[currentIndex].location}</p>
            {/* Instagram handle (mocked for now) */}
            <a href={`https://instagram.com/${testimonials[currentIndex].name.replace(/\s+/g, '').toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 font-body">
              @{testimonials[currentIndex].name.replace(/\s+/g, '').toLowerCase()}
            </a>
          </div>
        </div>

        <div className="flex mb-4 justify-center">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>

        <blockquote className="text-gray-700 mb-4 text-lg font-body italic animate-fadein">
          &ldquo;{testimonials[currentIndex].text}&rdquo;
        </blockquote>

        <p className="text-xs text-gray-400 font-body">{testimonials[currentIndex].date}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6 text-green-600" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6 text-green-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
              index === currentIndex ? 'bg-green-600' : 'bg-green-200'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 