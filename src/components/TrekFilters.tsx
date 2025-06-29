'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Filters {
  state: string;
  difficulty: string;
  priceRange: [number, number];
  searchQuery: string;
}

interface TrekFiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  setCurrentPage: (page: number) => void;
}

const states = ['Uttarakhand', 'Himachal Pradesh', 'Kashmir'];
const difficulties = ['Easy', 'Moderate', 'Difficult'];

export default function TrekFilters({ filters, setFilters, setCurrentPage }: TrekFiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange);

  // Update local price range when filters change
  useEffect(() => {
    setLocalPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  const handlePriceChange = (value: [number, number]) => {
    setLocalPriceRange(value);
  };

  const handlePriceChangeEnd = () => {
    setFilters({ ...filters, priceRange: localPriceRange });
    setCurrentPage(1);
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search Bar */}
        <div className="lg:col-span-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Treks
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search treks..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Search treks"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>

        {/* State Filter */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <select
            id="state"
            value={filters.state}
            onChange={(e) => handleFilterChange('state', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Filter by state"
          >
            <option value="">All States</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty
          </label>
          <select
            id="difficulty"
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Filter by difficulty"
          >
            <option value="">All Difficulties</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="lg:col-span-2">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ₹{localPriceRange[0]} - ₹{localPriceRange[1]}
          </label>
          <div className="flex items-center space-x-4">
            <input
              id="price-min"
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={localPriceRange[0]}
              onChange={(e) => handlePriceChange([parseInt(e.target.value), localPriceRange[1]])}
              onMouseUp={handlePriceChangeEnd}
              onTouchEnd={handlePriceChangeEnd}
              className="w-full"
              aria-label="Minimum price"
            />
            <input
              id="price-max"
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={localPriceRange[1]}
              onChange={(e) => handlePriceChange([localPriceRange[0], parseInt(e.target.value)])}
              onMouseUp={handlePriceChangeEnd}
              onTouchEnd={handlePriceChangeEnd}
              className="w-full"
              aria-label="Maximum price"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 