"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import TrekCard from "@/components/TrekCard";
import TrekFilters from "@/components/TrekFilters";
import { Trek } from "@/types";

// Sample data - This would come from your backend
const sampleTreks: Trek[] = [
  {
    id: "1",
    title: "Valley of Flowers Trek",
    slug: "valley-of-flowers-trek",
    description: "Experience the magical Valley of Flowers, a UNESCO World Heritage Site in Uttarakhand.",
    location: "Uttarakhand",
    state: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 15999,
    imageUrl: "/images/valley-of-flowers.jpg",
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    mapUrl: "",
    maxParticipants: 15,
    minAge: 12,
    bestTime: ["July", "August", "September"],
    elevation: "3,658m",
    distance: "38km",
  },
  {
    id: "2",
    title: "Kedarkantha Trek",
    slug: "kedarkantha-trek",
    description: "A winter wonderland trek with stunning views of the Garhwal Himalayas.",
    location: "Uttarakhand",
    state: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy",
    price: 12999,
    imageUrl: "/images/kedarkantha.jpg",
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    mapUrl: "",
    maxParticipants: 15,
    minAge: 12,
    bestTime: ["December", "January", "February"],
    elevation: "3,810m",
    distance: "20km",
  },
  {
    id: "3",
    title: "Hampta Pass Trek",
    slug: "hampta-pass-trek",
    description: "A beautiful trek connecting the green Kullu Valley to the arid Lahaul Valley.",
    location: "Himachal Pradesh",
    state: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate",
    price: 14999,
    imageUrl: "/images/hampta-pass.jpg",
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    mapUrl: "",
    maxParticipants: 15,
    minAge: 12,
    bestTime: ["June", "July", "August"],
    elevation: "4,270m",
    distance: "26km",
  },
  // Add more sample treks...
];

export default function RegionTreksPage() {
  const params = useParams();
  const region = params?.region as string;

  const [filters, setFilters] = useState({
    state: "",
    difficulty: "",
    priceRange: [0, 20000],
    searchQuery: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const treksPerPage = 9;

  // Filter treks by region and current filters
  const filteredTreks = sampleTreks.filter((trek) => {
    const matchesRegion =
      trek.state.toLowerCase().replace(/\s+/g, "-") === region.toLowerCase();
    const matchesState = !filters.state || trek.state === filters.state;
    const matchesDifficulty =
      !filters.difficulty || trek.difficulty === filters.difficulty;
    const matchesPrice =
      trek.price >= filters.priceRange[0] &&
      trek.price <= filters.priceRange[1];
    const matchesSearch =
      !filters.searchQuery ||
      trek.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      trek.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return (
      matchesRegion &&
      matchesState &&
      matchesDifficulty &&
      matchesPrice &&
      matchesSearch
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTreks.length / treksPerPage);
  const currentTreks = filteredTreks.slice(
    (currentPage - 1) * treksPerPage,
    currentPage * treksPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
            Treks in {region?.replace(/-/g, " ")}
          </h1>
          <p className="text-xl text-white/80">
            Explore our collection of handpicked treks in this region
          </p>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <TrekFilters
          filters={filters}
          setFilters={setFilters}
          setCurrentPage={setCurrentPage}
        />

        {/* Trek Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {currentTreks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-green-700 text-white"
                    : "bg-white border border-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* No Results */}
        {currentTreks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No treks found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 