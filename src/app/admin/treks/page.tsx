'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import TrekList from '@/components/admin/TrekList';
import { PlusIcon } from '@heroicons/react/24/outline';

// Sample data - replace with actual data from your backend
const sampleTreks = [
  {
    id: '1',
    title: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers-trek',
    description: 'A beautiful trek through the Valley of Flowers National Park in Uttarakhand.',
    location: 'Govindghat',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: 12999,
    imageUrl: '/images/treks/valley-of-flowers.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 12,
    bestTime: [],
    elevation: '3,658m',
    distance: '38km',
  },
  {
    id: '2',
    title: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    description: 'A winter trek to the Kedarkantha peak in Uttarakhand.',
    location: 'Sankri',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Easy',
    price: 14999,
    imageUrl: '/images/treks/kedarkantha.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 12,
    bestTime: [],
    elevation: '3,810m',
    distance: '20km',
  },
  {
    id: '3',
    title: 'Roopkund Trek',
    slug: 'roopkund-trek',
    description: 'A challenging trek to the mysterious Roopkund Lake in Uttarakhand.',
    location: 'Lohajung',
    state: 'Uttarakhand',
    duration: '8 Days',
    difficulty: 'Challenging',
    price: 16999,
    imageUrl: '/images/treks/roopkund.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 14,
    bestTime: [],
    elevation: '5,029m',
    distance: '53km',
  },
];

export default function AdminTreks() {
  const [treks, setTreks] = useState(sampleTreks);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this trek?')) {
      // TODO: Implement actual deletion logic with your backend
      setTreks((prevTreks) => prevTreks.filter((trek) => trek.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Treks</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your trekking packages and itineraries.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/admin/treks/new"
              className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add New Trek
            </Link>
          </div>
        </div>

        {/* Trek List */}
        <TrekList treks={treks} onDelete={handleDelete} />
      </div>
    </AdminLayout>
  );
} 