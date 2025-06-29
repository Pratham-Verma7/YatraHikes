'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  MapIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

// Sample data - replace with actual data from your backend
const stats = [
  { name: 'Total Treks', value: '24', icon: MapIcon, change: '+2', changeType: 'increase' },
  { name: 'Active Bookings', value: '156', icon: UserGroupIcon, change: '+12', changeType: 'increase' },
  { name: 'Revenue', value: '₹2.4L', icon: CurrencyRupeeIcon, change: '+8.2%', changeType: 'increase' },
  { name: 'Average Rating', value: '4.8', icon: StarIcon, change: '+0.2', changeType: 'increase' },
];

const recentBookings = [
  {
    id: '1',
    trekName: 'Valley of Flowers Trek',
    customerName: 'Rahul Sharma',
    date: '2024-03-15',
    status: 'Confirmed',
    amount: 12999,
  },
  {
    id: '2',
    trekName: 'Kedarkantha Trek',
    customerName: 'Priya Patel',
    date: '2024-03-14',
    status: 'Pending',
    amount: 14999,
  },
  {
    id: '3',
    trekName: 'Roopkund Trek',
    customerName: 'Amit Kumar',
    date: '2024-03-13',
    status: 'Confirmed',
    amount: 16999,
  },
];

const recentReviews = [
  {
    id: '1',
    trekName: 'Valley of Flowers Trek',
    customerName: 'Rahul Sharma',
    rating: 5,
    comment: 'Amazing experience! The guides were very professional and the views were breathtaking.',
    date: '2024-03-10',
  },
  {
    id: '2',
    trekName: 'Kedarkantha Trek',
    customerName: 'Priya Patel',
    rating: 4,
    comment: 'Great trek with beautiful snow-covered trails. Would recommend!',
    date: '2024-03-08',
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your treks.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
            >
              <dt>
                <div className="absolute rounded-md bg-green-500 p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Bookings */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h2 className="text-base font-semibold text-gray-900">Recent Bookings</h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <li key={booking.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {booking.trekName}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            {booking.customerName} • {booking.date}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              booking.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {booking.status}
                          </span>
                          <span className="mt-1 text-sm text-gray-900">
                            ₹{booking.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/bookings"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-600 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50"
                >
                  View all bookings
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h2 className="text-base font-semibold text-gray-900">Recent Reviews</h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentReviews.map((review) => (
                    <li key={review.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {review.trekName}
                          </p>
                          <div className="mt-1 flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-1 truncate text-sm text-gray-500">{review.comment}</p>
                          <p className="mt-1 text-xs text-gray-400">{review.date}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="/admin/reviews"
                  className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-600 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50"
                >
                  View all reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 