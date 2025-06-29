'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface TrekFilterBarProps {
  onFilterChange: (filters: {
    search: string;
    state: string;
    difficulty: string;
    priceRange: [number, number];
  }) => void;
}

const states = [
  'All States',
  'Uttarakhand',
  'Himachal Pradesh',
  'Sikkim',
  'Ladakh',
  'Karnataka',
  'Kerala',
];

const difficulties = ['All Levels', 'Easy', 'Moderate', 'Challenging', 'Difficult'];

export default function TrekFilterBar({ onFilterChange }: TrekFilterBarProps) {
  const [filters, setFilters] = useState({
    search: '',
    state: 'All States',
    difficulty: 'All Levels',
    priceRange: [0, 50000] as [number, number],
  });

  const handleChange = (key: string, value: string | [number, number]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Bar */}
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search treks
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            placeholder="Search treks..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
          />
        </div>

        {/* State Filter */}
        <div>
          <label htmlFor="state" className="sr-only">
            Select state
          </label>
          <select
            id="state"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-lg"
            value={filters.state}
            onChange={(e) => handleChange('state', e.target.value)}
            aria-label="Select state"
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label htmlFor="difficulty" className="sr-only">
            Select difficulty level
          </label>
          <select
            id="difficulty"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-lg"
            value={filters.difficulty}
            onChange={(e) => handleChange('difficulty', e.target.value)}
            aria-label="Select difficulty level"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label htmlFor="minPrice" className="sr-only">
              Minimum price
            </label>
            <input
              id="minPrice"
              type="number"
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Min Price"
              value={filters.priceRange[0]}
              onChange={(e) =>
                handleChange('priceRange', [Number(e.target.value), filters.priceRange[1]])
              }
            />
          </div>
          <span className="text-gray-500">to</span>
          <div className="flex-1">
            <label htmlFor="maxPrice" className="sr-only">
              Maximum price
            </label>
            <input
              id="maxPrice"
              type="number"
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Max Price"
              value={filters.priceRange[1]}
              onChange={(e) =>
                handleChange('priceRange', [filters.priceRange[0], Number(e.target.value)])
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
} 