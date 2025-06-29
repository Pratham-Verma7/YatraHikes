'use client';

import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

interface Trek {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  state: string;
  duration: string;
  difficulty: string;
  price: number;
  imageUrl: string;
}

interface TrekCardProps {
  trek: Trek;
}

export default function TrekCard({ trek }: TrekCardProps) {
  if (!trek) {
    return null; // or return a loading/error state
  }

  return (
    <Link href={`/treks/${trek.slug}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative h-48">
          <Image
            src={trek.imageUrl}
            alt={trek.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              {trek.difficulty}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
              {trek.title}
            </h3>
            <span className="text-green-600 font-semibold">₹{trek.price.toLocaleString()}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trek.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>{trek.duration}</span>
              <span>•</span>
              <span className="capitalize">{trek.difficulty}</span>
            </div>
            <span>{trek.location}, {trek.state}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 