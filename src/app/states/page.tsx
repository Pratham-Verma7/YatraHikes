import Image from 'next/image'
import Link from 'next/link'
import { State } from '@/types'

// Sample states data - this would normally come from your database
const states: State[] = [
  {
    id: '1',
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    description: 'Home to some of the most beautiful treks in the Indian Himalayas, including Valley of Flowers, Kedarkantha, and Roopkund.',
    imageUrl: '/images/uttarakhand.jpg',
    trekCount: 15,
  },
  {
    id: '2',
    name: 'Himachal Pradesh',
    slug: 'himachal-pradesh',
    description: 'Discover the stunning landscapes of Himachal Pradesh with treks like Hampta Pass, Beas Kund, and Triund.',
    imageUrl: '/images/himachal.jpg',
    trekCount: 12,
  },
  {
    id: '3',
    name: 'Kashmir',
    slug: 'kashmir',
    description: 'Experience the breathtaking beauty of Kashmir with treks like Tarsar Marsar, Great Lakes, and Kolahoi Glacier.',
    imageUrl: '/images/kashmir.jpg',
    trekCount: 8,
  },
]

export default function StatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/images/states-hero.jpg"
          alt="Indian Himalayas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Treks by State</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore the diverse trekking destinations across India's most beautiful states
            </p>
          </div>
        </div>
      </div>

      {/* States Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state) => (
            <Link
              key={state.id}
              href={`/states/${state.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={state.imageUrl}
                    alt={state.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
                    <p className="text-sm opacity-90">{state.trekCount} Treks Available</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{state.description}</p>
                  <div className="mt-4 flex items-center text-green-600 font-semibold">
                    Explore Treks
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 