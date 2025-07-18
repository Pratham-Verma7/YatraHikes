'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, StarIcon, ShieldCheckIcon, UserGroupIcon, CurrencyRupeeIcon, HashtagIcon } from "@heroicons/react/24/outline";
import FeaturedTreks from '../components/FeaturedTreks';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Sample data - This would come from your backend
const destinations = [
  {
    name: "Uttarakhand",
    image: "/images/treks/uttarakhand/uttrakhand.jpg",
    trekCount: 15,
    slug: "uttarakhand",
  },
  {
    name: "Himachal Pradesh",
    image: "/images/treks/himachal/himachal.jpg",
    trekCount: 12,
    slug: "himachal-pradesh",
  },
  {
    name: "Kashmir",
    image: "/images/treks/kashmir/kashmir.jpg",
    trekCount: 8,
    slug: "kashmir",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    text: "Amazing experience with YatraHikes! The guides were professional and the trek was well-organized.",
    rating: 5,
    image: "/images/testimonials/user1.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    text: "Best trekking company I've experienced. Safety was their top priority and the views were breathtaking.",
    rating: 5,
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Bangalore",
    text: "The Valley of Flowers trek was magical. Everything was perfect from start to finish.",
    rating: 5,
    image: "/images/testimonials/user3.jpg",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Essential Trekking Gear for Beginners",
    excerpt: "A comprehensive guide to the must-have equipment for your first trek...",
    image: "/images/blog/gear-guide.jpg",
    date: "March 15, 2024",
    slug: "essential-trekking-gear",
  },
  {
    id: 2,
    title: "Best Time to Visit Valley of Flowers",
    excerpt: "Plan your perfect trip to the Valley of Flowers with our seasonal guide...",
    image: "/images/blog/valley-flowers.jpg",
    date: "March 10, 2024",
    slug: "valley-of-flowers-guide",
  },
];

const instagramPosts = [
  {
    id: 1,
    image: "/images/instagram/post1.jpg",
    link: "https://instagram.com/p/1",
  },
  {
    id: 2,
    image: "/images/instagram/post2.jpg",
    link: "https://instagram.com/p/2",
  },
  {
    id: 3,
    image: "/images/instagram/post3.jpg",
    link: "https://instagram.com/p/3",
  },
  {
    id: 4,
    image: "/images/instagram/post4.jpg",
    link: "https://instagram.com/p/4",
  },
  {
    id: 5,
    image: "/images/instagram/post5.jpg",
    link: "https://instagram.com/p/5",
  },
  {
    id: 6,
    image: "/images/instagram/post6.jpg",
    link: "https://instagram.com/p/6",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section - full video background, no gradient */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <video
          src="/images/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-center mb-6 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl font-body drop-shadow">
            Experience the thrill of trekking through India&apos;s most breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/treks"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold font-body shadow-lg transition-all flex items-center justify-center animate-fadein"
            >
              Book Your Next Trek
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold font-body transition-colors backdrop-blur-sm border border-white/20 animate-fadein"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Treks Section */}
      <FeaturedTreks />

      {/* Destinations Section */}
      <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
        {/* Subtle SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900 font-heading">Discover Treks by <span className='text-orange-500'>Destination</span></h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Explore treks across India&apos;s most beautiful regions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/treks/${destination.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 font-heading drop-shadow-lg">{destination.name}</h3>
                  <p className="text-white/80 font-semibold drop-shadow">{destination.trekCount} Treks</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900 font-heading">Why Choose <span className="text-orange-500">YatraHikes</span></h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              We&apos;re committed to providing the best trekking experience
            </p>
          </div>
          {/* Horizontal scroll for mobile, grid for desktop */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x md:snap-none">
            {/* Animated, expanded feature cards */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '0ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <ShieldCheckIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Safety First</h3>
              <p className="text-gray-600">Certified guides and comprehensive safety measures</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '100ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <UserGroupIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Expert Guides</h3>
              <p className="text-gray-600">Experienced and certified trek leaders</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '200ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <CurrencyRupeeIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Best Value</h3>
              <p className="text-gray-600">Competitive pricing with no hidden costs</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '300ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <StarIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Quality Service</h3>
              <p className="text-gray-600">Premium equipment and well-planned itineraries</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '400ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <HashtagIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Community</h3>
              <p className="text-gray-600">A vibrant community of passionate trekkers</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-w-[260px] snap-center animate-fadein" style={{animationDelay: '500ms'}}>
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                <ArrowRightIcon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">Easy Booking</h3>
              <p className="text-gray-600">Seamless online booking and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.10" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900 font-heading">What Our Trekkers Say</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Join thousands of satisfied trekkers who have experienced the magic of YatraHikes
            </p>
          </div>
          {/* Swiper slider for testimonials */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full"
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="group bg-white p-8 rounded-2xl shadow-xl border-b-4 border-orange-400 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-4 border-orange-400 group-hover:border-orange-500 transition-colors">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic flex-1 mb-4 relative">
                    <span className="absolute -left-6 top-0 text-4xl text-orange-200 font-serif select-none">“</span>
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Subtle SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900 font-heading">Latest from Our <span className='text-orange-500'>Blog</span></h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Tips, guides, and stories from the trekking community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border-b-4 border-orange-400 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-orange-500 font-semibold mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2 font-heading text-gray-900">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Subtle SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900 font-heading">Follow Our <span className='text-orange-500'>Adventures</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get inspired by our latest treks and adventures on Instagram
            </p>
            <a
              href="https://www.instagram.com/yatrahikes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-600 font-semibold"
            >
              <HashtagIcon className="w-6 h-6 mr-2" />
              @yatrahikes
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl border-b-4 border-orange-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={post.image}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <HashtagIcon className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-600 py-20 px-4 relative overflow-hidden">
        {/* Subtle SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.10" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Stay Updated with <span className='text-orange-400'>YatraHikes</span>
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for trek updates, special offers, and travel tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
        {/* Subtle SVG background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fbbf24" fillOpacity="0.10" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">Ready for Your <span className='text-orange-400'>Next Adventure?</span></h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey through India&apos;s most beautiful landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/treks"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
            >
              Explore Treks
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
