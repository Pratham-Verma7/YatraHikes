// Trek data for homepage and trek listing
export interface Trek {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  state: string;
  duration: string;
  difficulty: string;
  price: number;
  imageUrl: string;
  rating?: number;
  gallery?: string[];
  itinerary?: Array<{ day: number; title: string; description: string }>;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  mapUrl?: string;
  maxParticipants?: number;
  minAge?: number;
  bestTime?: string[];
  elevation?: string;
  distance?: string;
}

export const treks: Trek[] = [
  {
    id: '1',
    title: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers',
    description: 'A UNESCO World Heritage site, famous for its meadows of endemic flora.',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Moderate',
    price: 15999,
    imageUrl: '/images/treks/uttarakhand/valley-of-flowers.jpg',
    rating: 4.8,
    gallery: ['/images/treks/uttarakhand/valley-of-flowers.jpg'],
  },
  {
    id: '2',
    title: 'Kedarkantha Trek',
    slug: 'kedarkantha',
    description: 'A classic winter trek with stunning snow-capped peaks and beautiful campsites.',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    duration: '6 Days',
    difficulty: 'Easy',
    price: 12999,
    imageUrl: '/images/treks/uttarakhand/kedarkantha1.jpg',
    rating: 4.7,
    gallery: ['/images/treks/uttarakhand/kedarkantha1.jpg'],
  },
  {
    id: '3',
    title: 'Hampta Pass Trek',
    slug: 'hampta-pass',
    description: 'A dramatic crossover trek from lush Kullu to arid Spiti valley.',
    location: 'Himachal Pradesh',
    state: 'Himachal Pradesh',
    duration: '5 Days',
    difficulty: 'Moderate',
    price: 14999,
    imageUrl: '/images/treks/himachal/hampta-pass.jpg',
    rating: 4.9,
    gallery: ['/images/treks/himachal/hampta-pass.jpg'],
  },
  {
    id: '4',
    title: 'Kashmir Great Lakes',
    slug: 'kashmir-great-lakes',
    description: 'A breathtaking trek through pristine alpine lakes and meadows.',
    location: 'Kashmir',
    state: 'Jammu & Kashmir',
    duration: '8 Days',
    difficulty: 'Moderate',
    price: 18999,
    imageUrl: '/images/treks/kashmir/kashmir.jpg',
    rating: 4.9,
    gallery: ['/images/treks/kashmir/kashmir.jpg'],
  },
  {
    id: '5',
    title: 'Bhrigu Lake Trek',
    slug: 'bhrigu-lake',
    description: 'A short trek to a high-altitude glacial lake near Manali.',
    location: 'Himachal Pradesh',
    state: 'Himachal Pradesh',
    duration: '4 Days',
    difficulty: 'Easy',
    price: 10999,
    imageUrl: '/images/treks/himachal/hampta-pass2.jpg',
    rating: 4.6,
    gallery: ['/images/treks/himachal/hampta-pass2.jpg'],
  },
  {
    id: '6',
    title: 'Bali Pass Trek',
    slug: 'bali-pass',
    description: 'A challenging trek with thrilling pass crossing and panoramic views.',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    duration: '8 Days',
    difficulty: 'Difficult',
    price: 20999,
    imageUrl: '/images/treks/uttarakhand/kedarkantha3.jpg',
    rating: 4.7,
    gallery: ['/images/treks/uttarakhand/kedarkantha3.jpg'],
  },
  {
    id: '7',
    title: 'Har Ki Dun Trek',
    slug: 'har-ki-dun',
    description: 'A valley trek with ancient villages and spectacular mountain views.',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    duration: '7 Days',
    difficulty: 'Easy',
    price: 13999,
    imageUrl: '/images/treks/uttarakhand/kedarkantha-temple.jpg',
    rating: 4.8,
    gallery: ['/images/treks/uttarakhand/kedarkantha-temple.jpg'],
  },
]; 