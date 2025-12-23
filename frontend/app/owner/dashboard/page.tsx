"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// Mock data
const mockOwnerData = {
  name: "คุณสมศักดิ์ ธุรกิจดี",
  email: "owner@example.com",
  phone: "081-234-5678",
  totalHotels: 3,
  totalBookings: 127,
  totalRevenue: 1275000,
  pendingApproval: 1,
};

const mockHotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel Bangkok",
    location: "กรุงเทพฯ",
    status: "APPROVED",
    totalRooms: 45,
    availableRooms: 12,
    rating: 4.8,
    totalReviews: 234,
    monthlyBookings: 56,
    monthlyRevenue: 520000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    name: "Beachfront Resort Phuket",
    location: "ภูเก็ต",
    status: "APPROVED",
    totalRooms: 80,
    availableRooms: 23,
    rating: 4.9,
    totalReviews: 456,
    monthlyBookings: 71,
    monthlyRevenue: 755000,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  },
  {
    id: 3,
    name: "Mountain View Hotel Chiang Mai",
    location: "เชียงใหม่",
    status: "PENDING",
    totalRooms: 30,
    availableRooms: 30,
    rating: 0,
    totalReviews: 0,
    monthlyBookings: 0,
    monthlyRevenue: 0,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
];

const mockRecentBookings = [
  {
    id: "BK001",
    hotelName: "Grand Luxury Hotel Bangkok",
    roomName: "Deluxe Room",
    guestName: "สมชาย ใจดี",
    checkIn: "2025-01-10",
    checkOut: "2025-01-13",
    status: "CONFIRMED",
    price: 13500,
  },
  {
    id: "BK002",
    hotelName: "Beachfront Resort Phuket",
    roomName: "Sea View Suite",
    guestName: "สมหญิง รักสวย",
    checkIn: "2025-01-15",
    checkOut: "2025-01-18",
    status: "PENDING",
    price: 24000,
  },
  {
    id: "BK003",
    hotelName: "Grand Luxury Hotel Bangkok",
    roomName: "Executive Suite",
    guestName: "จอห์น สมิธ",
    checkIn: "2025-01-20",
    checkOut: "2025-01-25",
    status: "CONFIRMED",
    price: 42500,
  },
];

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "hotels" | "bookings" | "analytics"
  >("overview");

  const statusStyles = {
    APPROVED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    PENDING: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    REJECTED: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    CONFIRMED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  แดชบอร์ดผู้ประกอบการ
                </h1>
                <p className="text-blue-100">
                  ยินดีต้อนรับ, {mockOwnerData.name}
                </p>
              </div>
              <Link
                href="/owner/add-hotel"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                + เพิ่มโรงแรมใหม่
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">🏨</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  รวม
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockOwnerData.totalHotels}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                โรงแรมทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">📅</div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  เดือนนี้
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockOwnerData.totalBookings}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                การจองทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">💰</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  รายได้
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                ฿{(mockOwnerData.totalRevenue / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                รายได้ทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">⏳</div>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">
                  รออนุมัติ
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockOwnerData.pendingApproval}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                โรงแรมรออนุมัติ
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "overview"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                ภาพรวม
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "hotels"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                โรงแรมของฉัน
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "bookings"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                การจอง
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "analytics"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                สถิติและรายงาน
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="pb-12">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Recent Bookings */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      การจองล่าสุด
                    </h2>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      ดูทั้งหมด →
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            หมายเลขการจอง
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            โรงแรม
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            ผู้เข้าพัก
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            เช็คอิน
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            สถานะ
                          </th>
                          <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            ยอดเงิน
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockRecentBookings.map((booking) => (
                          <tr
                            key={booking.id}
                            className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <td className="py-4 px-4">
                              <span className="font-mono font-semibold text-gray-900 dark:text-white">
                                {booking.id}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                  {booking.hotelName}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {booking.roomName}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-gray-900 dark:text-white">
                              {booking.guestName}
                            </td>
                            <td className="py-4 px-4 text-gray-900 dark:text-white">
                              {new Date(booking.checkIn).toLocaleDateString(
                                "th-TH"
                              )}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  statusStyles[
                                    booking.status as keyof typeof statusStyles
                                  ]
                                }`}
                              >
                                {booking.status === "CONFIRMED"
                                  ? "ยืนยันแล้ว"
                                  : "รอดำเนินการ"}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right font-bold text-gray-900 dark:text-white">
                              ฿{booking.price.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    href="/owner/add-hotel"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="text-4xl mb-3">➕</div>
                    <h3 className="text-xl font-bold mb-2">เพิ่มโรงแรมใหม่</h3>
                    <p className="text-blue-100">
                      ลงทะเบียนที่พักใหม่เข้าสู่ระบบ
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-500 transition-all"
                  >
                    <div className="text-4xl mb-3">🛏️</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      จัดการห้องพัก
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      เพิ่ม แก้ไข หรือปิดห้องพัก
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-500 transition-all"
                  >
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      รายงานสถิติ
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      ดูสถิติและประสิทธิภาพ
                    </p>
                  </Link>
                </div>
              </div>
            )}

            {/* Hotels Tab */}
            {activeTab === "hotels" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            statusStyles[
                              hotel.status as keyof typeof statusStyles
                            ]
                          }`}
                        >
                          {hotel.status === "APPROVED"
                            ? "อนุมัติแล้ว"
                            : "รออนุมัติ"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {hotel.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        📍 {hotel.location}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {hotel.totalRooms}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            ห้องทั้งหมด
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {hotel.availableRooms}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            ห้องว่าง
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            {hotel.monthlyBookings}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            จองเดือนนี้
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">
                            ฿{(hotel.monthlyRevenue / 1000).toFixed(0)}K
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            รายได้เดือนนี้
                          </div>
                        </div>
                      </div>

                      {hotel.status === "APPROVED" && (
                        <div className="flex items-center mb-4">
                          <span className="text-yellow-500 mr-2">
                            ⭐ {hotel.rating}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            ({hotel.totalReviews} รีวิว)
                          </span>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Link
                          href={`/owner/edit-hotel/${hotel.id}`}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all"
                        >
                          แก้ไข
                        </Link>
                        <Link
                          href={`/owner/hotel/${hotel.id}/rooms`}
                          className="flex-1 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-2 rounded-lg font-semibold text-center hover:border-blue-500 transition-all"
                        >
                          จัดการห้อง
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  การจองทั้งหมด
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          รหัส
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          โรงแรม/ห้อง
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          ผู้เข้าพัก
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          วันที่
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          สถานะ
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          ยอดเงิน
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          จัดการ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockRecentBookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="border-b border-gray-100 dark:border-gray-700"
                        >
                          <td className="py-4 px-4">
                            <span className="font-mono font-semibold text-gray-900 dark:text-white">
                              {booking.id}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {booking.hotelName}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {booking.roomName}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-900 dark:text-white">
                            {booking.guestName}
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-gray-900 dark:text-white">
                              {new Date(booking.checkIn).toLocaleDateString(
                                "th-TH",
                                { month: "short", day: "numeric" }
                              )}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              ถึง{" "}
                              {new Date(booking.checkOut).toLocaleDateString(
                                "th-TH",
                                { month: "short", day: "numeric" }
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                statusStyles[
                                  booking.status as keyof typeof statusStyles
                                ]
                              }`}
                            >
                              {booking.status === "CONFIRMED"
                                ? "ยืนยันแล้ว"
                                : "รอดำเนินการ"}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right font-bold text-gray-900 dark:text-white">
                            ฿{booking.price.toLocaleString()}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <button className="text-blue-600 hover:text-blue-700 font-semibold">
                              ดูรายละเอียด
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Revenue Chart Placeholder */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      รายได้รายเดือน
                    </h3>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📊</div>
                        <p className="text-gray-600 dark:text-gray-400">
                          กราฟรายได้
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          (จะใช้ Chart Library)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Occupancy Rate Placeholder */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      อัตราการเข้าพัก
                    </h3>
                    <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📈</div>
                        <p className="text-gray-600 dark:text-gray-400">
                          อัตราการเข้าพัก
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          (จะใช้ Chart Library)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    ประสิทธิภาพโดยรวม (เดือนนี้)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        85%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        อัตราการเข้าพัก
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        4.7
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        คะแนนเฉลี่ย
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        127
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        การจอง
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">
                        32
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        รีวิวใหม่
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
