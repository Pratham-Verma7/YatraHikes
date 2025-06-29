import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valley of Flowers Trek - YatraHikes',
  description: 'Experience the magical Valley of Flowers, a UNESCO World Heritage Site in Uttarakhand. This moderate trek takes you through stunning alpine meadows filled with rare Himalayan flowers.',
  openGraph: {
    title: 'Valley of Flowers Trek - YatraHikes',
    description: 'Experience the magical Valley of Flowers, a UNESCO World Heritage Site in Uttarakhand. This moderate trek takes you through stunning alpine meadows filled with rare Himalayan flowers.',
    images: [
      {
        url: '/images/valley-of-flowers.jpg',
        width: 1200,
        height: 630,
        alt: 'Valley of Flowers Trek',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valley of Flowers Trek - YatraHikes',
    description: 'Experience the magical Valley of Flowers, a UNESCO World Heritage Site in Uttarakhand. This moderate trek takes you through stunning alpine meadows filled with rare Himalayan flowers.',
    images: ['/images/valley-of-flowers.jpg'],
  },
};

export default function TrekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 