"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// Mock service data
const getServiceById = (id: string) => {
  const services: any = {
    "1": {
      id: 1,
      title: "ห้องประชุม VIP",
      description: "ห้องประชุมสุดหรู พร้อมอุปกรณ์ครบครัน รองรับผู้เข้าร่วม 20-30 คน",
      fullDescription: "ห้องประชุม VIP ของเรามีขนาดกว้างขวาง สะอาด และตกแต่งอย่างหรูหรา พร้อมอุปกรณ์นำเสนอที่ทันสมัย รวมถึง Projector, Whiteboard, ระบบเสียง และ Wi-Fi ความเร็วสูง เหมาะสำหรับการประชุม สัมมนา หรือจัดกิจกรรมต่างๆ",
      price: 2500,
      duration: "2 ชั่วโมง",
      category: "ห้องประชุม",
      capacity: "20-30 คน",
      amenities: [
        "Projector & Screen",
        "Whiteboard",
        "ระบบเสียง",
        "Wi-Fi ความเร็วสูง",
        "เครื่องปรับอากาศ",
        "น้ำดื่มและกาแฟฟรี",
        "ที่จอดรถ",
      ],
      location: "ชั้น 5 อาคาร A",
    },
    "2": {
      id: 2,
      title: "Co-Working Space",
      description: "พื้นที่ทำงานร่วมกัน บรรยากาศดี Wi-Fi เร็ว เหมาะสำหรับทำงาน",
      fullDescription: "พื้นที่ทำงานร่วมกันที่ออกแบบมาอย่างดี บรรยากาศสบาย เหมาะสำหรับ Freelancer หรือทีมเล็กที่ต้องการพื้นที่ทำงานที่ยืดหยุ่น พร้อมสิ่งอำนวยความสะดวกครบครัน",
      price: 500,
      duration: "1 วัน",
      category: "พื้นที่ทำงาน",
      capacity: "ไม่จำกัด",
      amenities: [
        "Wi-Fi ความเร็วสูง",
        "โต๊ะทำงานส่วนตัว",
        "ปลั๊กไฟเพียงพอ",
        "เครื่องปริ้น",
        "ห้องครัว",
        "กาแฟ-น้ำชาฟรี",
        "ที่พักผ่อน",
      ],
      location: "ชั้น 3 อาคาร B",
    },
    "3": {
      id: 3,
      title: "สตูดิโอถ่ายรูป",
      description: "สตูดิโอถ่ายรูปมืออาชีพ อุปกรณ์ครบ แสงสวยงาม",
      fullDescription: "สตูดิโอถ่ายรูปมืออาชีพ พร้อมระบบไฟ Background หลากหลาย และอุปกรณ์ถ่ายภาพที่ทันสมัย เหมาะสำหรับถ่ายภาพสินค้า โปรไฟล์ หรือกิจกรรมต่างๆ",
      price: 3000,
      duration: "3 ชั่วโมง",
      category: "สตูดิโอ",
      capacity: "5-10 คน",
      amenities: [
        "ระบบไฟ Softbox",
        "Background หลากหลาย",
        "ขาตั้งกล้อง",
        "ฉากถ่ายภาพ",
        "ห้องแต่งตัว",
        "Wi-Fi",
        "เครื่องปรับอากาศ",
      ],
      location: "ชั้น 2 อาคาร C",
    },
  };

  return services[id] || null;
};

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceById(params.id as string);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ไม่พบบริการ
            </h1>
            <Link
              href="/services"
              className="text-blue-600 hover:underline"
            >
              กลับไปหน้าบริการ
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-blue-600">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <Link href="/services" className="text-gray-500 hover:text-blue-600">
                    บริการ
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li className="text-gray-900 dark:text-white font-semibold">
                  {service.title}
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl h-96 flex items-center justify-center mb-6">
                <span className="text-white text-9xl">🎯</span>
              </div>

              {/* Service Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {service.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ระยะเวลา
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {service.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">👥</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        จำนวนคน
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {service.capacity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        สถานที่
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {service.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ราคา
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        ฿{service.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    สิ่งอำนวยความสะดวก
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.amenities.map((amenity: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-green-500">✓</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    ราคาเริ่มต้น
                  </p>
                  <p className="text-4xl font-bold text-blue-600">
                    ฿{service.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    / {service.duration}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      เลือกวันที่
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      เลือกเวลา
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">เลือกเวลา</option>
                      <option value="09:00">09:00 - 11:00</option>
                      <option value="11:00">11:00 - 13:00</option>
                      <option value="13:00">13:00 - 15:00</option>
                      <option value="15:00">15:00 - 17:00</option>
                      <option value="17:00">17:00 - 19:00</option>
                    </select>
                  </div>
                </div>

                <button
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!selectedDate || !selectedTime}
                >
                  จองเลย
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  ⚡ ยืนยันการจองทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
