'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import TrekForm from '@/components/admin/TrekForm';

export default function NewTrek() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (trekData: any) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual creation logic with your backend
      console.log('Creating new trek:', trekData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to treks list
      router.push('/admin/treks');
    } catch (error) {
      console.error('Error creating trek:', error);
      alert('Failed to create trek. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Add New Trek</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create a new trekking package with all the necessary details.
          </p>
        </div>

        {/* Trek Form */}
        <TrekForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </AdminLayout>
  );
} 