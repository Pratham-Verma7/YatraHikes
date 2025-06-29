'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import TrekForm from '@/components/admin/TrekForm';

// Sample data - replace with actual data from your backend
const sampleTreks = [
  {
    id: '1',
    title: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers-trek',
    description: 'A beautiful trek through the Valley of Flowers National Park in Uttarakhand.',
    location: 'Govindghat',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: 12999,
    imageUrl: '/images/treks/valley-of-flowers.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 12,
    bestTime: [],
    elevation: '3,658m',
    distance: '38km',
  },
  {
    id: '2',
    title: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    description: 'A winter trek to the Kedarkantha peak in Uttarakhand.',
    location: 'Sankri',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Easy',
    price: 14999,
    imageUrl: '/images/treks/kedarkantha.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 12,
    bestTime: [],
    elevation: '3,810m',
    distance: '20km',
  },
  {
    id: '3',
    title: 'Roopkund Trek',
    slug: 'roopkund-trek',
    description: 'A challenging trek to the mysterious Roopkund Lake in Uttarakhand.',
    location: 'Lohajung',
    state: 'Uttarakhand',
    duration: '8 Days',
    difficulty: 'Challenging',
    price: 16999,
    imageUrl: '/images/treks/roopkund.jpg',
    gallery: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    exclusions: [],
    maxParticipants: 15,
    minAge: 14,
    bestTime: [],
    elevation: '5,029m',
    distance: '53km',
  },
];

export default function EditTrek({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [trek, setTrek] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // TODO: Replace with actual API call to fetch trek data
    const fetchTrek = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const foundTrek = sampleTreks.find((t) => t.id === params.id);
        if (foundTrek) {
          setTrek(foundTrek);
        } else {
          router.push('/admin/treks');
        }
      } catch (error) {
        console.error('Error fetching trek:', error);
        alert('Failed to load trek data. Please try again.');
        router.push('/admin/treks');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrek();
  }, [params.id, router]);

  const handleSubmit = async (trekData: any) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual update logic with your backend
      console.log('Updating trek:', trekData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to treks list
      router.push('/admin/treks');
    } catch (error) {
      console.error('Error updating trek:', error);
      alert('Failed to update trek. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-sm text-gray-500">Loading trek data...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!trek) {
    return null;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Edit Trek</h1>
          <p className="mt-1 text-sm text-gray-500">
            Update the details of your trekking package.
          </p>
        </div>

        {/* Trek Form */}
        <TrekForm trek={trek} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </AdminLayout>
  );
} 