'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Sample team data - replace with actual data
const team = [
  {
    name: 'Rahul Sharma',
    role: 'Founder & Lead Guide',
    image: '/images/team/rahul.jpg',
    bio: '15+ years of trekking experience in the Himalayas',
  },
  {
    name: 'Priya Patel',
    role: 'Operations Manager',
    image: '/images/team/priya.jpg',
    bio: 'Expert in logistics and customer experience',
  },
  {
    name: 'Amit Kumar',
    role: 'Senior Trek Guide',
    image: '/images/team/amit.jpg',
    bio: 'Certified mountaineer with 10+ years of experience',
  },
];

// Sample timeline data
const timeline = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'YatraHikes was founded with a vision to make Himalayan trekking accessible to everyone.',
  },
  {
    year: '2019',
    title: 'First Milestone',
    description: 'Successfully organized 100+ treks with 500+ happy trekkers.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our online booking platform and virtual trek planning tools.',
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Expanded operations to new regions and added more trek routes.',
  },
  {
    year: '2022',
    title: 'Safety First',
    description: 'Implemented advanced safety protocols and emergency response systems.',
  },
  {
    year: '2023',
    title: 'Community Growth',
    description: 'Built a community of 10,000+ trekkers and 50+ experienced guides.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/about/hero.jpg"
          alt="YatraHikes Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About YatraHikes</h1>
            <p className="text-xl text-gray-100">
              Connecting people with the majestic Himalayas through safe and memorable trekking experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, YatraHikes began with a simple mission: to make the breathtaking beauty of the Himalayas accessible to everyone. What started as a small team of passionate trekkers has grown into a trusted name in the trekking community.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have guided thousands of trekkers through some of the most beautiful trails in the Himalayas, creating unforgettable memories and fostering a deep connection with nature.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about/story.jpg"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We strive to be the most trusted name in Himalayan trekking, combining adventure with safety and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, memorable, and sustainable trekking experiences while promoting responsible tourism and environmental conservation in the Himalayas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading trekking organization in India, known for excellence in safety, customer experience, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-green-600 font-semibold">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose YatraHikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Comprehensive safety protocols, trained guides, and emergency response systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion for Adventure</h3>
              <p className="text-gray-600">
                Experienced team dedicated to creating memorable trekking experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">
                Committed to environmental conservation and responsible tourism practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Adventure?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/treks"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Treks
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 