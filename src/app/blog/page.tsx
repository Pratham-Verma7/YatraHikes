'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

// Sample blog data - replace with actual data from your backend
const blogPosts = [
  {
    id: 1,
    title: 'Essential Trekking Gear Guide',
    slug: 'essential-trekking-gear-guide',
    excerpt: 'A comprehensive guide to the must-have equipment for your Himalayan trekking adventure.',
    coverImage: '/images/blog/gear-guide.jpg',
    category: 'Packing Tips',
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'Rahul Sharma',
      image: '/images/testimonials/user1.jpg',
    },
  },
  {
    id: 2,
    title: 'Valley of Flowers: A Beginner\'s Guide',
    slug: 'valley-of-flowers-beginners-guide',
    excerpt: 'Everything you need to know about planning your first trek to the Valley of Flowers.',
    coverImage: '/images/blog/valley-flowers.jpg',
    category: 'Beginner Guides',
    date: 'March 10, 2024',
    readTime: '10 min read',
    author: {
      name: 'Priya Patel',
      image: '/images/testimonials/user2.jpg',
    },
  },
  {
    id: 3,
    title: 'Top 5 Himalayan Treks for Beginners',
    slug: 'top-5-himalayan-treks-beginners',
    excerpt: 'Discover the best Himalayan treks perfect for those new to high-altitude hiking.',
    coverImage: '/images/blog/valley-flowers.jpg',
    category: 'Himalayan Treks',
    date: 'March 5, 2024',
    readTime: '12 min read',
    author: {
      name: 'Amit Kumar',
      image: '/images/testimonials/user3.jpg',
    },
  },
];

const categories = ['All', 'Packing Tips', 'Beginner Guides', 'Himalayan Treks'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Trekking Blog</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Discover expert tips, guides, and stories to help you plan your next Himalayan adventure.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">
              No blog posts available in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 