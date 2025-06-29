import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      image: string;
    };
    date: string;
    readTime: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime} read</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
} 