'use client';

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HeartIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

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
      <div
        className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-green-100 hover:border-green-300 flex flex-col h-[420px] md:h-[480px] bg-white"
        style={{
          boxShadow:
            "0 4px 24px 0 rgba(34,197,94,0.10), 0 2px 8px 0 rgba(0,0,0,0.04)",
        }}
      >
        {/* Enhanced green gradient border effect */}
        <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 60% 30%, rgba(132, 225, 188, 0.22) 0%, rgba(34,197,94,0.10) 40%, rgba(255,255,255,0.85) 90%)",
            opacity: 0.85,
          }}
        />
        <div className="relative h-2/3 min-h-[180px] max-h-[320px]">
          <Image
            src={trek.imageUrl}
            alt={trek.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-3xl"
            style={{ objectPosition: 'center 60%' }}
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-3xl" />
          {/* State badge */}
          <span className="absolute top-4 left-4 bg-green-700/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow font-body tracking-wide z-10">
            {trek.state}
          </span>
          {/* Wishlist heart */}
          <button className="absolute top-4 right-4 bg-white/80 hover:bg-orange-100 rounded-full p-2 shadow transition-all z-10" title="Add to wishlist">
            <HeartIcon className="w-6 h-6 text-orange-500" />
          </button>
        </div>
        <div className="relative p-5 sm:p-6 flex flex-col gap-2 flex-1 z-10">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-heading font-bold text-green-900 group-hover:text-green-700 transition-colors">
              {trek.title}
            </h3>
            <span className="text-green-700 font-bold font-body text-lg bg-green-100 px-2 py-1 rounded-lg shadow-sm">₹{trek.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            {/* Rating */}
            {trek.rating && (
              <span className="flex items-center text-yellow-400 font-semibold text-sm bg-yellow-50 px-2 py-0.5 rounded-full">
                <StarIcon className="w-5 h-5 mr-1" />
                {trek.rating}
              </span>
            )}

            <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full font-body">
              <ClockIcon className="w-4 h-4" />
              {trek.duration}
            </span>
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full font-body ml-1">
              {trek.difficulty}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2 font-body italic flex-1">{trek.description}</p>
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:underline">
              View Details <ArrowRightIcon className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
} 