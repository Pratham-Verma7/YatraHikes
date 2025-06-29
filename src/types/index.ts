export interface Trek {
  id: string
  title: string
  slug: string
  description: string
  location: string
  state: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  price: number
  imageUrl: string
  gallery: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  mapUrl: string
  maxParticipants: number
  minAge: number
  bestTime: string[]
  elevation: string
  distance: string
}

export interface State {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  trekCount: number
}

export interface Booking {
  id: string
  trekId: string
  trekTitle: string
  userId: string
  date: string
  participants: number
  totalAmount: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  bookings: string[] // Array of booking IDs
  createdAt: Date
  updatedAt: Date
} 