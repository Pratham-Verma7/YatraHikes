'use client';

import { useState } from 'react';
import TrekCard from '@/components/TrekCard';
import TrekFilters from '@/components/TrekFilters';
import { treks as allTreks, Trek } from '@/data/treks';

export default function TreksPage() {
  const [filters, setFilters] = useState({
    state: '',
    difficulty: '',
    priceRange: [0, 21000],
    searchQuery: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const treksPerPage = 9;

  // Filter treks based on current filters
  const filteredTreks = allTreks.filter((trek) => {
    const matchesState = !filters.state || trek.state === filters.state;
    const matchesDifficulty = !filters.difficulty || trek.difficulty === filters.difficulty;
    const matchesPrice = trek.price >= filters.priceRange[0] && trek.price <= filters.priceRange[1];
    const matchesSearch = !filters.searchQuery || 
      trek.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      trek.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesState && matchesDifficulty && matchesPrice && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTreks.length / treksPerPage);
  const currentTreks = filteredTreks.slice(
    (currentPage - 1) * treksPerPage,
    currentPage * treksPerPage
  );

  // Reset filters handler
  const handleResetFilters = () => {
    setFilters({
      state: '',
      difficulty: '',
      priceRange: [0, 21000],
      searchQuery: '',
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-x-hidden">
      {/* Subtle SVG background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10 z-0" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fbbf24" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section (after Navbar) */}
        <header className="w-full bg-green-700 text-white py-16 shadow-lg mb-8" style={{marginTop: '64px'}}>
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading drop-shadow-lg">Discover Your Next Adventure</h1>
            <p className="text-xl text-white/80 max-w-2xl font-body drop-shadow">Explore our collection of handpicked treks across India</p>
          </div>
        </header>

        {/* Filters and Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 pb-16">
          {/* Filter Bar */}
          <div className="w-full mb-8 sticky top-24 z-20">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row md:items-end gap-4 border border-orange-100">
              <div className="flex-1 min-w-0">
                <TrekFilters
                  filters={filters}
                  setFilters={setFilters}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              <div className="flex justify-end md:justify-center">
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow transition-colors whitespace-nowrap border-2 border-orange-500 hover:border-orange-600"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Trek Summary */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-2">
            <span className="text-green-900 font-semibold text-lg font-heading">
              Showing <span className="text-orange-500">{currentTreks.length}</span> of <span className="text-orange-500">{filteredTreks.length}</span> treks
            </span>
            {filters.state || filters.difficulty || filters.searchQuery || filters.priceRange[0] > 0 || filters.priceRange[1] < 21000 ? (
              <span className="text-sm text-gray-500">Filters applied</span>
            ) : null}
          </div>

          {/* Trek Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {currentTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-500 font-semibold hover:bg-orange-50 disabled:opacity-50 transition-all shadow"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-full font-semibold shadow transition-all border-2 ${
                    currentPage === index + 1
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-orange-500 border-orange-200 hover:bg-orange-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-500 font-semibold hover:bg-orange-50 disabled:opacity-50 transition-all shadow"
              >
                Next
              </button>
            </div>
          )}

          {/* No Results */}
          {currentTreks.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No treks found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 