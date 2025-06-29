'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

// Sample data - replace with actual data from your backend
const regionData = {
  uttarakhand: {
    name: 'Uttarakhand',
    description: 'Discover the majestic treks of Uttarakhand, home to some of the most beautiful Himalayan trails.',
    image: '/images/uttarakhand.jpg',
    treks: [
      {
        id: 1,
        title: 'Valley of Flowers Trek',
        slug: 'valley-of-flowers-trek',
        description: 'A mesmerizing trek through a valley carpeted with colorful alpine flowers.',
        duration: '6 days',
        difficulty: 'Moderate',
        price: 15999,
        image: '/images/valley-of-flowers.jpg',
        rating: 4.8,
        reviews: 128,
      },
      {
        id: 2,
        title: 'Kedarkantha Trek',
        slug: 'kedarkantha-trek',
        description: 'A winter wonderland trek offering panoramic views of the Garhwal Himalayas.',
        duration: '5 days',
        difficulty: 'Easy to Moderate',
        price: 12999,
        image: '/images/kedarkantha.jpg',
        rating: 4.7,
        reviews: 156,
      },
    ],
  },
  himachal: {
    name: 'Himachal Pradesh',
    description: 'Explore the stunning trails of Himachal Pradesh, from lush valleys to snow-capped peaks.',
    image: '/images/himachal.jpg',
    treks: [
      {
        id: 3,
        title: 'Hampta Pass Trek',
        slug: 'hampta-pass-trek',
        description: 'A dramatic crossover trek from the lush Kullu Valley to the arid Lahaul Valley.',
        duration: '5 days',
        difficulty: 'Moderate',
        price: 14999,
        image: '/images/hampta-pass.jpg',
        rating: 4.9,
        reviews: 142,
      },
    ],
  },
};

export default function RegionPage({ params }: { params: { region: string } }) {
  const region = params.region.toLowerCase();
  const data = regionData[region as keyof typeof regionData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Region not found</h1>
          <p className="mt-2 text-gray-600">The requested region does not exist.</p>
          <Link href="/treks" className="mt-4 inline-block text-green-600 hover:text-green-700">
            View all treks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Treks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.treks.map((trek) => (
            <Link
              key={trek.id}
              href={`/treks/${trek.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={trek.image}
                  alt={trek.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{trek.title}</h3>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{trek.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{trek.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{data.name}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-semibold">
                    <CurrencyRupeeIcon className="h-5 w-5 mr-1" />
                    <span>{trek.price.toLocaleString()}</span>
                  </div>
                  <span className="text-sm text-gray-500">{trek.reviews} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 