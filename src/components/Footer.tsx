'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail('');
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.7, type: 'spring' } }),
  };

  return (
    <footer className="bg-gray-900 text-gray-100 font-body border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-lg font-bold mb-3 text-white">About YatraHikes</h3>
            <p className="text-sm text-gray-300">
              Connecting adventure enthusiasts with the majestic Himalayas through safe and memorable trekking experiences.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.201 20.5 1.5 15.799 1.5 10S6.201-.5 12-.5s10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5z" /></svg>
              Emergency: <a href="tel:+919310676409" className="underline ml-1">+91 9310676409</a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-lg font-bold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">Home</Link></li>
              <li><Link href="/treks" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">Treks</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">Contact</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">About</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-300 hover:text-orange-400 hover:underline transition">FAQ</Link></li>
            </ul>
          </motion.div>

          {/* Instagram Feed Preview */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-lg font-bold mb-3 text-white">Instagram</h3>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[1,2,3,4,5,6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ borderColor: '#fb923c', scale: 1.06 }}
                  className="w-full h-14 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-xs border border-gray-800 transition-all duration-200"
                >
                  <span>—</span>
                </motion.div>
              ))}
            </div>
            <a href="https://instagram.com/yatrahikes" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:underline flex items-center gap-1">
              <FaInstagram className="inline-block" /> @yatrahikes
            </a>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-lg font-bold mb-3 text-white">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex rounded-full overflow-hidden border border-gray-700 bg-gray-800">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
                  required
                  disabled={submitted}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition ${submitted ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={submitted}
                >
                  {submitted ? '✓' : 'Subscribe'}
                </button>
              </div>
              {submitted && (
                <div className="text-orange-400 text-xs mt-2">Thank you for subscribing!</div>
              )}
            </form>
            <div className="flex space-x-4 mt-2">
              <motion.a
                href="https://instagram.com/yatrahikes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#fb923c', filter: 'drop-shadow(0 0 8px #fb923c)' }}
                className="text-orange-400 hover:text-white transition"
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@yatrahikes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#fb923c', filter: 'drop-shadow(0 0 8px #fb923c)' }}
                className="text-orange-400 hover:text-white transition"
              >
                <FaYoutube className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} YatraHikes. All rights reserved.
            </p>
            <p className="text-sm mt-4 md:mt-0 text-gray-400">
              Crafted with <span className="inline-block">❤️</span> in the Himalayas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 