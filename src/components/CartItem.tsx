import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    slug: string;
    imageUrl: string;
    price: number;
    quantity: number;
    date: string;
    participants: number;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center py-6 border-b border-gray-200 last:border-0">
      {/* Image */}
      <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="ml-6 flex-1">
        <div className="flex items-center justify-between">
          <Link
            href={`/treks/${item.slug}`}
            className="text-lg font-semibold text-gray-900 hover:text-green-600"
          >
            {item.title}
          </Link>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
            aria-label="Remove item"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          <p>Date: {item.date}</p>
          <p>Participants: {item.participants}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <label htmlFor={`quantity-${item.id}`} className="sr-only">
              Quantity
            </label>
            <select
              id={`quantity-${item.id}`}
              value={item.quantity}
              onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
              className="rounded-md border-gray-300 py-1.5 text-base focus:border-green-500 focus:outline-none focus:ring-green-500"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="text-lg font-semibold text-gray-900">
            ₹{(item.price * item.quantity).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
} 