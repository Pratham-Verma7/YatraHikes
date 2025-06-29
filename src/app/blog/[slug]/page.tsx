'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// Sample data - replace with actual data from your backend
const blogPost = {
  id: 1,
  title: 'How to Pack for a Trek: Essential Guide for Beginners',
  slug: 'how-to-pack-for-a-trek',
  content: `
    <h2>Introduction</h2>
    <p>Packing for a trek can be overwhelming, especially if it's your first time. This comprehensive guide will help you pack efficiently and ensure you have everything you need for a successful trekking adventure.</p>

    <h2>Essential Clothing</h2>
    <p>Layering is key when trekking in the Himalayas. Here's what you need:</p>
    <ul>
      <li>Base layers (thermal wear)</li>
      <li>Mid layers (fleece or down jacket)</li>
      <li>Outer shell (waterproof jacket)</li>
      <li>Quick-dry trekking pants</li>
      <li>Moisture-wicking t-shirts</li>
      <li>Woolen socks</li>
    </ul>

    <h2>Footwear</h2>
    <p>Your feet are your most important asset on a trek. Invest in good quality trekking shoes that are:</p>
    <ul>
      <li>Waterproof</li>
      <li>Ankle support</li>
      <li>Well broken-in</li>
      <li>Properly sized</li>
    </ul>

    <h2>Sleeping Gear</h2>
    <p>A good night's sleep is crucial for trekking success. Pack:</p>
    <ul>
      <li>Sleeping bag (rated for the expected temperature)</li>
      <li>Sleeping mat</li>
      <li>Earplugs</li>
      <li>Eye mask</li>
    </ul>
  `,
  coverImage: '/images/blog/gear-guide.jpg',
  category: 'Packing Tips',
  date: 'March 15, 2024',
  readTime: '8 min read',
  author: {
    name: 'Rahul Sharma',
    image: '/images/testimonials/user1.jpg',
    bio: 'Experienced trekker and outdoor enthusiast with over 10 years of experience in the Himalayas.',
  },
  comments: [
    {
      id: 1,
      author: 'Priya Patel',
      image: '/images/testimonials/user2.jpg',
      date: 'March 16, 2024',
      content: 'Great tips! I would also add that carrying a small first-aid kit is essential.',
    },
    {
      id: 2,
      author: 'Amit Kumar',
      image: '/images/testimonials/user3.jpg',
      date: 'March 17, 2024',
      content: 'Thanks for the detailed guide. This will be very helpful for my upcoming trek.',
    },
  ],
};

// Sample related posts - replace with actual data
const relatedPosts = [
  {
    id: 2,
    title: 'Valley of Flowers: A Beginner\'s Guide',
    slug: 'valley-of-flowers-beginners-guide',
    excerpt: 'Everything you need to know about planning your first trek to the Valley of Flowers.',
    coverImage: '/images/blog/valley-flowers.jpg',
    category: 'Beginner Guides',
    date: 'March 10, 2024',
  },
  {
    id: 3,
    title: 'Top 5 Himalayan Treks for Beginners',
    slug: 'top-5-himalayan-treks-beginners',
    excerpt: 'Discover the best Himalayan treks perfect for those new to high-altitude hiking.',
    coverImage: '/images/blog/valley-flowers.jpg',
    category: 'Himalayan Treks',
    date: 'March 5, 2024',
  },
];

const categories = [
  { name: 'Packing Tips', count: 5 },
  { name: 'Beginner Guides', count: 8 },
  { name: 'Himalayan Treks', count: 12 },
  { name: 'Trekking Tips', count: 6 },
];

const recentPosts = [
  {
    id: 4,
    title: 'Altitude Sickness: Prevention and Treatment',
    slug: 'altitude-sickness-prevention',
    date: 'March 18, 2024',
  },
  {
    id: 5,
    title: 'Best Time to Visit Valley of Flowers',
    slug: 'valley-flowers-best-time',
    date: 'March 17, 2024',
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={blogPost.coverImage}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
              {blogPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
                <span>{blogPost.author.name}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Comments ({blogPost.comments.length})</h2>
              
              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-8">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                />
                <button
                  type="submit"
                  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {blogPost.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Image
                      src={comment.image}
                      alt={comment.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <p className="mt-1 text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Bio */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{blogPost.author.name}</h3>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
              <p className="text-gray-600">{blogPost.author.bio}</p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/blog?category=${category.name}`}
                    className="flex items-center justify-between text-gray-600 hover:text-green-600"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block hover:bg-gray-50 p-2 rounded-lg"
                  >
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="relative h-40 mb-2 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-green-600 font-medium">{post.category}</span>
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 