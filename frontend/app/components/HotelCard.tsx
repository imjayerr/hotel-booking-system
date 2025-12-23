import Link from "next/link";

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  description: string;
  pricePerNight: number;
  rating: number;
  totalReviews: number;
  image: string;
  amenities: string[];
}

export default function HotelCard({
  id,
  name,
  location,
  description,
  pricePerNight,
  rating,
  totalReviews,
  image,
  amenities,
}: HotelCardProps) {
  return (
    <Link href={`/hotels/${id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-7xl">🏨</span>
          </div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg flex items-center space-x-1">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-bold text-gray-900 dark:text-white">{rating}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">({totalReviews})</span>
          </div>

          {/* Favorite Button */}
          <button className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="text-xl">❤️</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span className="mr-1">📍</span>
                <span>{location}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{amenities.length - 3} เพิ่มเติม
              </span>
            )}
          </div>

          {/* Price and Button */}
          <div className="flex items-end justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">เริ่มต้น</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-blue-600">
                  ฿{pricePerNight.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  /คืน
                </span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              จองเลย
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
