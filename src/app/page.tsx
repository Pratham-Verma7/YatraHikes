import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, StarIcon, ShieldCheckIcon, UserGroupIcon, CurrencyRupeeIcon, HashtagIcon } from "@heroicons/react/24/outline";

// Sample data - This would come from your backend
const featuredTreks = [
  {
    id: 1,
    title: "Valley of Flowers Trek",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 15999,
    image: "/images/treks/uttarakhand/valley-of-flowers.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Kedarkantha Trek",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy",
    price: 12999,
    image: "/images/treks/uttarakhand/kedarkantha1.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Hampta Pass Trek",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate",
    price: 14999,
    image: "/images/treks/himachal/hampta-pass.jpg",
    rating: 4.9,
  },
];

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Himalayan landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for emotional impact */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-900/40 to-orange-500/30" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 animate-fadein">
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
              className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold font-body transition-colors backdrop-blur-sm border border-white/20 animate-fadein"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Treks Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Featured Treks</h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-body">
            Explore our most popular treks, carefully curated for an unforgettable experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreks.map((trek) => (
            <div key={trek.id} className="card group relative overflow-hidden animate-fadein">
              <div className="relative h-72">
                <Image
                  src={trek.image}
                  alt={trek.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* State badge */}
                <span className="absolute top-4 left-4 bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow font-body">
                  {trek.location}
                </span>
                {/* Wishlist heart */}
                <button className="absolute top-4 right-4 bg-white/80 hover:bg-orange-100 rounded-full p-2 shadow transition-all" title="Add to wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a5.25 5.25 0 00-4.5 2.472A5.25 5.25 0 007.5 3.75C4.5 3.75 2.25 6.086 2.25 8.917c0 4.28 7.09 9.208 8.25 9.833 1.16-.625 8.25-5.553 8.25-9.833 0-2.83-2.25-5.167-5.25-5.167z" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold font-heading group-hover:text-green-700 transition-colors">
                    {trek.title}
                  </h3>
                  <span className="text-green-700 font-bold font-body text-lg">₹{trek.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {/* Rating */}
                  <span className="flex items-center text-yellow-400 font-semibold text-sm">
                    <StarIcon className="w-5 h-5 mr-1" />
                    {trek.rating}
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full font-body ml-2">
                    {trek.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-body">{trek.duration} • {trek.location}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 font-body">
                  <span>Uttarakhand</span>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Discover Treks by Destination</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Explore treks across India&apos;s most beautiful regions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/treks/${destination.slug}`}
                className="group relative h-80 rounded-xl overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/80">{destination.trekCount} Treks</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Why Choose YatraHikes</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We&apos;re committed to providing the best trekking experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <ShieldCheckIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">Certified guides and comprehensive safety measures</p>
          </div>
          <div className="text-center p-6">
            <UserGroupIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Experienced and certified trek leaders</p>
          </div>
          <div className="text-center p-6">
            <CurrencyRupeeIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Value</h3>
            <p className="text-gray-600">Competitive pricing with no hidden costs</p>
          </div>
          <div className="text-center p-6">
            <StarIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">Premium equipment and well-planned itineraries</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">What Our Trekkers Say</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Join thousands of satisfied trekkers who have experienced the magic of YatraHikes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
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
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Latest from Our Blog</h2>
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Adventures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get inspired by our latest treks and adventures on Instagram
            </p>
            <a
              href="https://www.instagram.com/yatrahikes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-semibold"
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
                className="group relative aspect-square overflow-hidden rounded-lg"
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
      <section className="bg-green-600 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with YatraHikes
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for trek updates, special offers, and travel tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Your Next Adventure?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey through India&apos;s most beautiful landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/treks"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
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
    </div>
  );
}
