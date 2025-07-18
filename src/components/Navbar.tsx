'use client';

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Treks', href: '/treks' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/70 backdrop-blur-lg z-50 shadow-[0_2px_16px_0_rgba(34,197,94,0.07)] border-b border-green-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-2 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group transition">
            <span className="text-3xl font-bold text-green-700 font-heading tracking-tight group-hover:scale-105 group-hover:text-green-800 transition-transform duration-200">YatraHikes</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-3 text-green-700 hover:bg-green-50 transition"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-gray-900 hover:text-green-700 transition-colors font-body rounded-lg px-3 py-2 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4 group-hover:scale-105 transition-all duration-200">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/treks"
            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-7 py-2 rounded-full font-semibold shadow-lg transition-all font-body text-base focus:outline-none focus:ring-2 focus:ring-orange-400 scale-105"
            style={{ boxShadow: '0 4px 16px 0 rgba(255, 122, 0, 0.10)' }}
          >
            Book a Trek
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white/90 backdrop-blur-lg px-6 py-6 rounded-l-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="-m-1.5 p-1.5 group transition">
              <span className="text-2xl font-bold text-green-700 font-heading group-hover:scale-105 group-hover:text-green-800 transition-transform duration-200">YatraHikes</span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-green-700 hover:bg-green-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors font-body rounded-lg px-3 py-3 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="group-hover:underline group-hover:underline-offset-4 group-hover:scale-105 transition-all duration-200">{item.name}</span>
              </Link>
            ))}
            <Link
              href="/treks"
              className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg transition-all font-body text-lg text-center mt-4 focus:outline-none focus:ring-2 focus:ring-orange-400 scale-105"
              onClick={() => setMobileMenuOpen(false)}
              style={{ boxShadow: '0 4px 16px 0 rgba(255, 122, 0, 0.10)' }}
            >
              Book a Trek
            </Link>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp button for mobile */}
      <a
        href="https://wa.me/919999999999"
        className="fixed bottom-6 right-6 z-50 block lg:hidden bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75l2.25 2.25 4.75-4.75M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.48-1.17L3 21l1.17-4.48A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        </svg>
      </a>
    </header>
  )
} 