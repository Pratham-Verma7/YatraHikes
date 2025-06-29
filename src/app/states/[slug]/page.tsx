'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Trek } from '@/types'
import TrekCard from '@/components/TrekCard'

// Sample data - replace with actual data from your backend
const sampleTreks = [
  {
    id: '1',
    title: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers-trek',
    description: 'A beautiful trek through the Valley of Flowers National Park, known for its stunning alpine flowers.',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: 14999,
    imageUrl: '/images/valley-of-flowers.jpg',
    location: 'Govindghat',
    state: 'Uttarakhand',
  },
  {
    id: '2',
    title: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    description: 'A winter trek to the Kedarkantha peak, offering panoramic views of the Himalayas.',
    duration: '6 Days',
    difficulty: 'Easy to Moderate',
    price: 12999,
    imageUrl: '/images/kedarkantha.jpg',
    location: 'Sankri',
    state: 'Uttarakhand',
  },
  // Add more sample treks as needed
];

interface StatePageProps {
  params: {
    slug: string;
  };
}

export default function StatePage({ params }: StatePageProps) {
  const [stateName, setStateName] = useState('');
  const [treks, setTreks] = useState(sampleTreks);

  useEffect(() => {
    // Format state name from slug
    const formattedName = params.slug.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    setStateName(formattedName);

    // Filter treks for this state
    const stateTreks = sampleTreks.filter(trek => 
      trek.state.toLowerCase() === formattedName.toLowerCase()
    );
    setTreks(stateTreks);
  }, [params.slug]);

  if (!stateName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src={`/images/${params.slug}.jpg`}
          alt={stateName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trek in {stateName}</h1>
            <p className="text-xl text-gray-100">
              Discover the best trekking experiences in {stateName}
            </p>
          </div>
        </div>
      </div>

      {/* Treks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
        {treks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No treks found</h3>
            <p className="text-gray-600">
              We don't have any treks in {stateName} at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 