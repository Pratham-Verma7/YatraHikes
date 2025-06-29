'use client';

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'

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
  rating?: number;
}

interface TrekCardProps {
  trek: Trek;
}

export default function TrekCard({ trek }: TrekCardProps) {
  if (!trek) return null;

  return (
    <Link href={`/treks/${trek.slug}`} className="group">
      <div className="card relative overflow-hidden group hover:shadow-xl transition-all">
        <div className="relative h-64">
          <Image
            src={trek.imageUrl}
            alt={trek.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* State badge */}
          <span className="absolute top-4 left-4 bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow font-body">
            {trek.state}
          </span>
          {/* Wishlist heart */}
          <button className="absolute top-4 right-4 bg-white/80 hover:bg-orange-100 rounded-full p-2 shadow transition-all" title="Add to wishlist">
            <HeartIcon className="w-6 h-6 text-orange-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-heading font-bold group-hover:text-green-700 transition-colors">
              {trek.title}
            </h3>
            <span className="text-green-700 font-bold font-body text-lg">₹{trek.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            {/* Rating */}
            {trek.rating && (
              <span className="flex items-center text-yellow-400 font-semibold text-sm">
                <StarIcon className="w-5 h-5 mr-1" />
                {trek.rating}
              </span>
            )}
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full font-body ml-2">
              {trek.difficulty}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-body">{trek.duration} • {trek.location}</p>
        </div>
      </div>
    </Link>
  )
} 