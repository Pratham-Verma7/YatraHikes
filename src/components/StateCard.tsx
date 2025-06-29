import Image from 'next/image'
import Link from 'next/link'

interface StateCardProps {
  name: string
  imageUrl: string
  trekCount: number
  slug: string
}

export default function StateCard({ name, imageUrl, trekCount, slug }: StateCardProps) {
  return (
    <Link href={`/states/${slug}`} className="group">
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm opacity-90">{trekCount} Treks Available</p>
        </div>
      </div>
    </Link>
  )
} 