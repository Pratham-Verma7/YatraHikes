'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  ShareIcon,
  StarIcon,
  HeartIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { Trek } from '@/types';
import { useParams } from 'next/navigation';
import { treks } from '@/data/treks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Get trek by slug from params
function getTrekBySlug(slug: string): Trek | undefined {
  // Accept both 'valley-of-flowers' and 'valley-of-flowers-trek' style slugs
  return treks.find(
    (t) => t.slug === slug || t.slug === slug.replace(/-trek$/, '')
  );
}

const similarTreks: Trek[] = [
  {
    id: '2',
    title: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    description: 'A winter wonderland trek with stunning views of the Garhwal Himalayas.',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Easy',
    price: 12999,
    imageUrl: '/images/kedarkantha.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    mapUrl: '',
    maxParticipants: 15,
    minAge: 12,
    bestTime: ['December', 'January', 'February'],
    elevation: '3,810m',
    distance: '20km',
  },
  // Add more similar treks...
];

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Amazing experience! The Valley of Flowers was breathtaking. Our guide was very knowledgeable and helpful.',
    date: 'August 2023',
    image: '/images/testimonials/user1.jpg',
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Mumbai',
    rating: 5,
    text: 'Best trek I\'ve ever done. The flowers were in full bloom and the views were spectacular.',
    date: 'July 2023',
    image: '/images/testimonials/user2.jpg',
  },
];

export default function TrekDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
  const trek = getTrekBySlug(slug);
  const [isWishlist, setIsWishlist] = useState(false);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Trek Not Found</h1>
          <p className="text-gray-700 mb-6">The trek you are looking for does not exist or has been removed.</p>
          <Link href="/treks" className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">Back to Treks</Link>
        </div>
      </div>
    );
  }

  // Fallbacks for missing fields
  const gallery = trek.gallery && trek.gallery.length > 0 ? trek.gallery : [trek.imageUrl];
  const itinerary = trek.itinerary || [];
  const highlights = trek.highlights || [];
  const inclusions = trek.inclusions || [];
  const exclusions = trek.exclusions || [];
  const bestTime = trek.bestTime || [];
  const elevation = trek.elevation || '-';
  const distance = trek.distance || '-';
  const maxParticipants = trek.maxParticipants || 15;
  const minAge = trek.minAge || 12;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section with Gallery */}
      <div className="relative h-[60vh] bg-black overflow-hidden shadow-2xl rounded-b-3xl">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {gallery.map((img, idx) => (
            <SwiperSlide key={img}>
              <Image
                src={img}
                alt={`${trek.title} image ${idx + 1}`}
                fill
                className="object-cover w-full h-full"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="max-w-5xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading drop-shadow-lg">{trek.title}</h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full font-semibold text-base backdrop-blur-sm">
                      <MapPinIcon className="w-5 h-5 text-orange-400" /> {trek.location}
                    </span>
                    <span className="flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full font-semibold text-base backdrop-blur-sm">
                      <ClockIcon className="w-5 h-5 text-orange-400" /> {trek.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full font-semibold text-base backdrop-blur-sm">
                      <UserGroupIcon className="w-5 h-5 text-orange-400" /> Max {maxParticipants} people
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Difficulty</h3>
                  <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${trek.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : trek.difficulty === 'Moderate' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>{trek.difficulty}</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Elevation</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">{elevation}</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Distance</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">{distance}</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Best Time</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">{bestTime.length > 0 ? bestTime.join(', ') : '-'}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-900 font-heading">About the Trek</h2>
              <p className="text-gray-800 mb-6 text-lg font-body">{trek.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-orange-600">Highlights</h3>
                  <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <StarIcon className="w-5 h-5 text-orange-400 mr-2 mt-1" />
                        <span className="text-gray-900 font-medium">{highlight}</span>
                      </li>
                ))}
              </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-700">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CalendarIcon className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-900 font-medium">Duration: {trek.duration}</span>
                    </li>
                    <li className="flex items-center">
                      <UserGroupIcon className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-900 font-medium">Min Age: {minAge} years</span>
                    </li>
                    <li className="flex items-center">
                      <MapPinIcon className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-900 font-medium">Location: {trek.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-green-900 font-heading">Itinerary</h2>
              <div className="space-y-6">
                {itinerary.length > 0 ? itinerary.map((day) => (
                  <div key={day.day} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 border-2 border-orange-400">
                      <span className="text-orange-600 font-bold text-lg">Day {day.day}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{day.title}</h3>
                      <p className="text-gray-800 font-body">{day.description}</p>
                    </div>
                  </div>
                )) : <p className="text-gray-500">Itinerary details coming soon.</p>}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-green-900 font-heading">Inclusions</h2>
                  <ul className="space-y-2">
                    {inclusions.length > 0 ? inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowPathIcon className="w-5 h-5 text-green-600 mr-2 mt-1" />
                        <span className="text-gray-900 font-medium">{item}</span>
                      </li>
                    )) : <li className="text-gray-500">Inclusion details coming soon.</li>}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600 font-heading">Exclusions</h2>
                  <ul className="space-y-2">
                    {exclusions.length > 0 ? exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowPathIcon className="w-5 h-5 text-red-500 mr-2 mt-1" />
                        <span className="text-gray-900 font-medium">{item}</span>
                      </li>
                    )) : <li className="text-gray-500">Exclusion details coming soon.</li>}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-green-900 font-heading">What Trekkers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border-2 border-orange-100 rounded-xl p-4 shadow group hover:shadow-lg transition-all bg-white">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-orange-400 group-hover:border-orange-500 transition-colors">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-orange-600 font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-orange-400" />
                      ))}
                    </div>
                    <p className="text-gray-800 mb-2 font-body">{testimonial.text}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Treks */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-green-900 font-heading">Similar Treks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarTreks.map((similarTrek) => (
                  <Link
                    key={similarTrek.id}
                    href={`/treks/${similarTrek.slug}`}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 border-2 border-orange-100 rounded-xl p-2 bg-white hover:shadow-lg transition-all">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-orange-400 group-hover:border-orange-500 transition-colors">
                        <Image
                          src={similarTrek.imageUrl}
                          alt={similarTrek.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {similarTrek.title}
                        </h3>
                        <p className="text-sm text-gray-800 font-semibold">{similarTrek.duration}</p>
                        <p className="text-orange-600 font-bold">₹{similarTrek.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-orange-600">₹{trek.price}</h2>
                  <button
                    onClick={() => setIsWishlist(!isWishlist)}
                    className={`p-2 rounded-full border-2 ${isWishlist ? 'text-orange-500 border-orange-500 bg-orange-50' : 'text-gray-400 border-gray-200'} hover:bg-orange-100 transition-all`}
                    title={isWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <HeartIcon className="w-6 h-6" />
                  </button>
              </div>
              <div className="space-y-4">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-colors shadow">
                    Book Now
                  </button>
                  <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-bold transition-colors shadow">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-bold mb-4 text-gray-900">Share this trek</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 border-2 border-orange-200" title="Share trek">
                      <ShareIcon className="w-5 h-5 text-orange-500" />
                    </button>
                    {/* Add more social sharing buttons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 