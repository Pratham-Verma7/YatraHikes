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
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Trek } from '@/types';

// Sample data - This would come from your backend
const trek: Trek = {
  id: '1',
  title: 'Valley of Flowers Trek',
  slug: 'valley-of-flowers-trek',
  description: 'Experience the magical Valley of Flowers, a UNESCO World Heritage Site in Uttarakhand. This moderate trek takes you through stunning alpine meadows filled with rare Himalayan flowers.',
  location: 'Uttarakhand',
  state: 'Uttarakhand',
  duration: '6 Days',
  difficulty: 'Moderate',
  price: 15999,
  imageUrl: '/images/treks/uttarakhand/valley-of-flowers.jpg',
  gallery: [
    '/images/treks/uttarakhand/valley-of-flowers.jpg',
    '/images/treks/uttarakhand/uttrakhand.jpg',
    '/images/treks/uttarakhand/kedarkantha1.jpg',
    '/images/treks/uttarakhand/kedarkantha-juda-ka-talab.jpg',
    '/images/treks/uttarakhand/kedarkantha3.jpg',
    '/images/treks/uttarakhand/kadarkantha-peak.jpg',
    '/images/treks/uttarakhand/kadarkantha4.jpg',
    '/images/treks/uttarakhand/kedarkanta2.jpg',
    '/images/treks/uttarakhand/kedarkantha-temple.jpg',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival at Haridwar',
      description: 'Arrive at Haridwar and transfer to hotel. Evening visit to Har Ki Pauri for Ganga Aarti.',
    },
    {
      day: 2,
      title: 'Drive to Govindghat',
      description: 'Early morning drive to Govindghat via Joshimath. Check-in at guest house.',
    },
    {
      day: 3,
      title: 'Trek to Ghangaria',
      description: 'Start trek to Ghangaria (14 km). Overnight stay at guest house.',
    },
    {
      day: 4,
      title: 'Valley of Flowers',
      description: 'Trek to Valley of Flowers (4 km). Explore the valley and return to Ghangaria.',
    },
    {
      day: 5,
      title: 'Hemkund Sahib',
      description: 'Trek to Hemkund Sahib (6 km). Visit the holy shrine and return to Ghangaria.',
    },
    {
      day: 6,
      title: 'Return Journey',
      description: 'Trek back to Govindghat and drive to Haridwar.',
    },
  ],
  highlights: [
    'UNESCO World Heritage Site',
    'Rare Himalayan flowers',
    'Stunning mountain views',
    'Hemkund Sahib visit',
    'Alpine meadows',
    'Photography opportunities',
  ],
  inclusions: [
    'Accommodation in hotels/guest houses',
    'All meals during the trek',
    'Trekking permits',
    'Expert trek leader',
    'First aid kit',
    'Transportation from Haridwar',
  ],
  exclusions: [
    'Personal expenses',
    'Travel insurance',
    'Any kind of emergency evacuation charges',
    'Tips for guides and porters',
    'Items not mentioned in inclusions',
  ],
  mapUrl: '/maps/valley-of-flowers.jpg',
  maxParticipants: 15,
  minAge: 12,
  bestTime: ['July', 'August', 'September'],
  elevation: '3,658m',
  distance: '38km',
};

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % trek.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + trek.gallery.length) % trek.gallery.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <Image
          src={trek.gallery[currentImageIndex]}
          alt={trek.title}
          fill
          className="object-cover opacity-80 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{trek.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span>{trek.location}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{trek.duration}</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                <span>Max {trek.maxParticipants} people</span>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Thumbnails */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {trek.gallery.map((img, idx) => (
            <button
              key={img}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-16 h-10 rounded-lg overflow-hidden border-2 ${currentImageIndex === idx ? 'border-orange-500' : 'border-white/40'} transition-all`}
              title={`View image ${idx + 1}`}
            >
              <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
        {/* Gallery Navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            title="Previous image"
          >
            <ArrowRightIcon className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            title="Next image"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Difficulty</h3>
                  <p className="text-lg font-semibold">{trek.difficulty}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Elevation</h3>
                  <p className="text-lg font-semibold">{trek.elevation}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Distance</h3>
                  <p className="text-lg font-semibold">{trek.distance}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Best Time</h3>
                  <p className="text-lg font-semibold">{trek.bestTime.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Trek</h2>
              <p className="text-gray-600 mb-6">{trek.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {trek.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <StarIcon className="w-5 h-5 text-green-600 mr-2 mt-1" />
                        <span>{highlight}</span>
                      </li>
                ))}
              </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
                      <span>Duration: {trek.duration}</span>
                    </li>
                    <li className="flex items-center">
                      <UserGroupIcon className="w-5 h-5 text-gray-400 mr-2" />
                      <span>Min Age: {trek.minAge} years</span>
                    </li>
                    <li className="flex items-center">
                      <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
                      <span>Location: {trek.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold">Day {day.day}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Inclusions</h2>
                  <ul className="space-y-2">
                    {trek.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowPathIcon className="w-5 h-5 text-green-600 mr-2 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Exclusions</h2>
                  <ul className="space-y-2">
                    {trek.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowPathIcon className="w-5 h-5 text-red-600 mr-2 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">What Trekkers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border rounded-lg p-4">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2">{testimonial.text}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Treks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Similar Treks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarTreks.map((similarTrek) => (
                  <Link
                    key={similarTrek.id}
                    href={`/treks/${similarTrek.slug}`}
                    className="group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={similarTrek.imageUrl}
                          alt={similarTrek.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-green-600">
                          {similarTrek.title}
                        </h3>
                        <p className="text-sm text-gray-600">{similarTrek.duration}</p>
                        <p className="text-green-600 font-semibold">₹{similarTrek.price}</p>
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
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">₹{trek.price}</h2>
                  <button
                    onClick={() => setIsWishlist(!isWishlist)}
                    className={`p-2 rounded-full ${
                      isWishlist ? 'text-red-500' : 'text-gray-400'
                    } hover:bg-gray-100`}
                    title={isWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <HeartIcon className="w-6 h-6" />
                  </button>
              </div>
              <div className="space-y-4">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                  <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-4">Share this trek</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" title="Share trek">
                      <ShareIcon className="w-5 h-5" />
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