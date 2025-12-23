"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

// Mock data
const allServices = [
  {
    id: 1,
    title: "ห้องประชุม VIP",
    description: "ห้องประชุมสุดหรู พร้อมอุปกรณ์ครบครัน รองรับผู้เข้าร่วม 20-30 คน",
    price: 2500,
    duration: "2 ชั่วโมง",
    image: "/service1.jpg",
    category: "ห้องประชุม",
  },
  {
    id: 2,
    title: "Co-Working Space",
    description: "พื้นที่ทำงานร่วมกัน บรรยากาศดี Wi-Fi เร็ว เหมาะสำหรับทำงาน",
    price: 500,
    duration: "1 วัน",
    image: "/service2.jpg",
    category: "พื้นที่ทำงาน",
  },
  {
    id: 3,
    title: "สตูดิโอถ่ายรูป",
    description: "สตูดิโอถ่ายรูปมืออาชีพ อุปกรณ์ครบ แสงสวยงาม",
    price: 3000,
    duration: "3 ชั่วโมง",
    image: "/service3.jpg",
    category: "สตูดิโอ",
  },
  {
    id: 4,
    title: "ห้องประชุมขนาดเล็ก",
    description: "ห้องประชุมสำหรับทีมเล็ก 5-10 คน บรรยากาศสบาย",
    price: 1200,
    duration: "2 ชั่วโมง",
    image: "/service4.jpg",
    category: "ห้องประชุม",
  },
  {
    id: 5,
    title: "ห้องอบรม",
    description: "ห้องอบรมสำหรับจัดกิจกรรม workshop รองรับ 50 คน",
    price: 5000,
    duration: "1 วัน",
    image: "/service5.jpg",
    category: "ห้องประชุม",
  },
  {
    id: 6,
    title: "Private Office",
    description: "ออฟฟิศส่วนตัว เหมาะสำหรับบริษัทขนาดเล็ก",
    price: 15000,
    duration: "1 เดือน",
    image: "/service6.jpg",
    category: "พื้นที่ทำงาน",
  },
];

const categories = ["ทั้งหมด", "ห้องประชุม", "พื้นที่ทำงาน", "สตูดิโอ"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "ทั้งหมด" || service.category === selectedCategory;
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            บริการทั้งหมด
          </h1>
          <p className="text-xl text-center text-blue-100">
            เลือกบริการที่ต้องการและจองได้ทันที
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาบริการ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50 dark:bg-black flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                ไม่พบบริการที่ตรงกับการค้นหา
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  พบ {filteredServices.length} บริการ
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
