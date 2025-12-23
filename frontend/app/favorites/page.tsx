"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";

// Mock favorites data
const mockFavorites = [
  {
    id: 1,
    name: "Grand Luxury Hotel Bangkok",
    location: "สุขุมวิท, กรุงเทพมหานคร",
    description: "โรงแรมหรูระดับ 5 ดาว ใจกลางกรุงเทพฯ",
    pricePerNight: 3500,
    rating: 4.8,
    totalReviews: 1234,
    image: "/hotel1.jpg",
    amenities: ["WiFi ฟรี", "สระว่ายน้ำ", "ฟิตเนส", "ร้านอาหาร"],
    addedDate: "2024-12-15",
  },
  {
    id: 2,
    name: "Phuket Beach Resort",
    location: "ป่าตอง, ภูเก็ต",
    description: "รีสอร์ทริมหาด วิวทะเลสวยงาม",
    pricePerNight: 4200,
    rating: 4.9,
    totalReviews: 856,
    image: "/hotel2.jpg",
    amenities: ["วิวทะเล", "สระว่ายน้ำ", "ชายหาด", "สปา"],
    addedDate: "2024-12-10",
  },
  {
    id: 3,
    name: "Chiang Mai Boutique Hotel",
    location: "เมืองเก่า, เชียงใหม่",
    description: "โรงแรมบูติกสไตล์ล้านนา",
    pricePerNight: 1800,
    rating: 4.7,
    totalReviews: 542,
    image: "/hotel3.jpg",
    amenities: ["WiFi", "อาหารเช้า", "จักรยาน", "ทัวร์"],
    addedDate: "2024-11-28",
  },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              รายการโปรด
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              โรงแรมที่คุณบันทึกไว้ ({favorites.length} แห่ง)
            </p>
          </div>

          {favorites.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ยังไม่มีรายการโปรด
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                เริ่มบันทึกโรงแรมที่คุณสนใจเพื่อดูได้ง่ายในภายหลัง
              </p>
              <a
                href="/hotels"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ค้นหาโรงแรม
              </a>
            </div>
          ) : (
            <>
              {/* Sort and Filter */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    ล่าสุด
                  </button>
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    ราคาต่ำสุด
                  </button>
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    คะแนนสูงสุด
                  </button>
                </div>
                <button
                  onClick={() => setFavorites([])}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  ล้างทั้งหมด
                </button>
              </div>

              {/* Favorites Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((hotel) => (
                  <div key={hotel.id} className="relative">
                    <HotelCard {...hotel} />
                    <button
                      onClick={() => removeFavorite(hotel.id)}
                      className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors z-10"
                      title="ลบออกจากรายการโปรด"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
