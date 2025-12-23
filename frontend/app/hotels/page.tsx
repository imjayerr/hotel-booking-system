"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import SearchBox from "../components/SearchBox";

// Mock data
const allHotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel Bangkok",
    location: "สุขุมวิท, กรุงเทพมหานคร",
    description: "โรงแรมหรูระดับ 5 ดาว ใจกลางกรุงเทพฯ พร้อมสิ่งอำนวยความสะดวกครบครัน",
    pricePerNight: 3500,
    rating: 4.8,
    totalReviews: 1234,
    image: "/hotel1.jpg",
    amenities: ["WiFi ฟรี", "สระว่ายน้ำ", "ฟิตเนส", "ร้านอาหาร", "ที่จอดรถ"],
  },
  {
    id: 2,
    name: "Phuket Beach Resort",
    location: "ป่าตอง, ภูเก็ต",
    description: "รีสอร์ทริมหาด วิวทะเลสวยงาม บรรยากาศผ่อนคลาย",
    pricePerNight: 4200,
    rating: 4.9,
    totalReviews: 856,
    image: "/hotel2.jpg",
    amenities: ["วิวทะเล", "สระว่ายน้ำ", "ชายหาดส่วนตัว", "สปา", "บาร์"],
  },
  {
    id: 3,
    name: "Chiang Mai Boutique Hotel",
    location: "เมืองเก่า, เชียงใหม่",
    description: "โรงแรมบูติกสไตล์ล้านนา บรรยากาศอบอุ่น",
    pricePerNight: 1800,
    rating: 4.7,
    totalReviews: 542,
    image: "/hotel3.jpg",
    amenities: ["WiFi", "อาหารเช้า", "จักรยาน", "ทัวร์", "สวน"],
  },
  {
    id: 4,
    name: "Pattaya City Hotel",
    location: "พัทยากลาง, ชลบุรี",
    description: "โรงแรมใจกลางเมืองพัทยา ใกล้แหล่งท่องเที่ยว",
    pricePerNight: 2200,
    rating: 4.5,
    totalReviews: 678,
    image: "/hotel4.jpg",
    amenities: ["WiFi", "สระว่ายน้ำ", "ฟิตเนส", "ร้านอาหาร"],
  },
  {
    id: 5,
    name: "Krabi Cliff Resort",
    location: "อ่าวนาง, กระบี่",
    description: "รีสอร์ทบนเขา วิวทะเลและเกาะสวยงาม",
    pricePerNight: 3800,
    rating: 4.8,
    totalReviews: 425,
    image: "/hotel5.jpg",
    amenities: ["วิวทะเล", "สระว่ายน้ำ", "ร้านอาหาร", "สปา"],
  },
  {
    id: 6,
    name: "Hua Hin Beach Hotel",
    location: "หัวหิน, ประจวบคีรีขันธ์",
    description: "โรงแรมริมหาด เหมาะสำหรับครอบครัว",
    pricePerNight: 2500,
    rating: 4.6,
    totalReviews: 892,
    image: "/hotel6.jpg",
    amenities: ["ชายหาด", "สระว่ายน้ำ", "ร้านอาหาร", "ที่จอดรถ"],
  },
];

const priceRanges = [
  { label: "ทั้งหมด", min: 0, max: Infinity },
  { label: "ต่ำกว่า ฿2,000", min: 0, max: 2000 },
  { label: "฿2,000 - ฿4,000", min: 2000, max: 4000 },
  { label: "฿4,000 - ฿6,000", min: 4000, max: 6000 },
  { label: "มากกว่า ฿6,000", min: 6000, max: Infinity },
];

const sortOptions = [
  { value: "recommended", label: "แนะนำ" },
  { value: "price-low", label: "ราคาต่ำไปสูง" },
  { value: "price-high", label: "ราคาสูงไปต่ำ" },
  { value: "rating", label: "คะแนนรีวิว" },
];

export default function HotelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

  let filteredHotels = allHotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const priceRange = priceRanges[selectedPriceRange];
    const matchesPrice =
      hotel.pricePerNight >= priceRange.min &&
      hotel.pricePerNight <= priceRange.max;
    return matchesSearch && matchesPrice;
  });

  // Sort hotels
  if (sortBy === "price-low") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => a.pricePerNight - b.pricePerNight
    );
  } else if (sortBy === "price-high") {
    filteredHotels = [...filteredHotels].sort(
      (a, b) => b.pricePerNight - a.pricePerNight
    );
  } else if (sortBy === "rating") {
    filteredHotels = [...filteredHotels].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Search Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBox />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50 dark:bg-black flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                โรงแรมทั้งหมด
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                พบ {filteredHotels.length} โรงแรม
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Toggle Filters */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔧 ตัวกรอง
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`md:w-64 space-y-6 ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              {/* Search */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  ค้นหา
                </h3>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ชื่อโรงแรมหรือสถานที่..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Price Range */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  ช่วงราคา (ต่อคืน)
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === index}
                        onChange={() => setSelectedPriceRange(index)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  คะแนนรีวิว
                </h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {rating}+ ⭐
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Hotels Grid */}
            <div className="flex-grow">
              {filteredHotels.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">🏨</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    ไม่พบโรงแรม
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ลองปรับเปลี่ยนเงื่อนไขการค้นหาของคุณ
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.id} {...hotel} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
