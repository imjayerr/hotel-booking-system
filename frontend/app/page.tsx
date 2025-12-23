"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HotelCard from "./components/HotelCard";
import SearchBox from "./components/SearchBox";

// Mock data for hotels
const featuredHotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel Bangkok",
    location: "สุขุมวิท, กรุงเทพมหานคร",
    description: "โรงแรมหรูระดับ 5 ดาว ใจกลางกรุงเทพฯ พร้อมสิ่งอำนวยความสะดวกครบครัน วิวเมืองที่สวยงาม",
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
    description: "รีสอร์ทริมหาด วิวทะเลสวยงาม บรรยากาศผ่อนคลาย เหมาะสำหรับวันพักผ่อน",
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
    description: "โรงแรมบูติกสไตล์ล้านนา บรรยากาศอบอุ่น ใกล้วัดและแหล่งท่องเที่ยว",
    pricePerNight: 1800,
    rating: 4.7,
    totalReviews: 542,
    image: "/hotel3.jpg",
    amenities: ["WiFi", "อาหารเช้า", "จักรยาน", "ทัวร์", "สวน"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ค้นหาโรงแรมในฝันของคุณ
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              จองโรงแรมออนไลน์ง่ายๆ ได้ทุกที่ทุกเวลา ราคาดีที่สุด
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>ราคาถูกที่สุด</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>ยืนยันทันที</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>ยกเลิกฟรี</span>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <SearchBox />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ทำไมต้องจองกับเรา?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              เราคือแพลตฟอร์มจองโรงแรมที่ดีที่สุดในประเทศไทย
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ราคาดีที่สุด
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                เปรียบเทียบราคาจากหลายเว็บไซต์ รับประกันราคาถูกที่สุด พร้อมโปรโมชั่นพิเศษ
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                จองง่ายรวดเร็ว
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                จองได้ใน 3 ขั้นตอน รับยืนยันทันที ไม่ต้องรอนาน
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                โรงแรมคุณภาพ
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                คัดสรรโรงแรมคุณภาพทั่วประเทศ รีวิวจริงจากผู้เข้าพักจริง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              โรงแรมยอดนิยม
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              โรงแรมที่ได้รับความนิยมสูงสุดจากผู้เข้าพัก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotels"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              ดูโรงแรมทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              จุดหมายยอดนิยม
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              สถานที่ท่องเที่ยวที่คนนิยมจองที่พักมากที่สุด
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "กรุงเทพฯ", hotels: 2847, emoji: "🏙️" },
              { name: "ภูเก็ต", hotels: 1523, emoji: "🏖️" },
              { name: "เชียงใหม่", hotels: 987, emoji: "⛰️" },
              { name: "พัทยา", hotels: 1245, emoji: "🌊" },
              { name: "เกาะสมุย", hotels: 654, emoji: "🏝️" },
              { name: "หัวหิน", hotels: 432, emoji: "🌅" },
              { name: "กระบี่", hotels: 789, emoji: "🏞️" },
              { name: "เชียงราย", hotels: 345, emoji: "🗻" },
            ].map((destination, index) => (
              <Link
                key={index}
                href={`/hotels?destination=${destination.name}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer text-center group"
              >
                <div className="text-5xl mb-3">{destination.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {destination.hotels.toLocaleString()} โรงแรม
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมวางแผนทริปถัดไปแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            สมัครสมาชิกวันนี้ รับส่วนลด 15% สำหรับการจองครั้งแรก
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              สมัครสมาชิกฟรี
            </Link>
            <Link
              href="/hotels"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              เริ่มค้นหาโรงแรม
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

