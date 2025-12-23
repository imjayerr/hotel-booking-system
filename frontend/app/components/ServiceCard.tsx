import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  price,
  duration,
  image,
  category,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-6xl">🎯</span>
          </div>
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Details */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-1">
              <span>⏱️</span>
              <span>{duration}</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                ฿{price.toLocaleString()}
              </span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              จองเลย
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
