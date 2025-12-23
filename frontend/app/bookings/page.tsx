"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

// Mock booking data
const mockBookings = [
  {
    id: 1,
    bookingNumber: "BK20241215001",
    hotelName: "Grand Luxury Hotel Bangkok",
    roomType: "Deluxe Room",
    checkIn: "2025-01-10",
    checkOut: "2025-01-13",
    nights: 3,
    guests: 2,
    price: 13500,
    status: "confirmed",
    paymentMethod: "โอนผ่านบัญชีธนาคาร",
  },
  {
    id: 2,
    bookingNumber: "BK20241218002",
    hotelName: "Beachfront Resort Phuket",
    roomType: "Sea View Suite",
    checkIn: "2025-01-20",
    checkOut: "2025-01-25",
    nights: 5,
    guests: 2,
    price: 27500,
    status: "pending",
    paymentMethod: "QR Code / PromptPay",
  },
  {
    id: 3,
    bookingNumber: "BK20241210003",
    hotelName: "Mountain View Hotel Chiang Mai",
    roomType: "Superior Room",
    checkIn: "2024-12-15",
    checkOut: "2024-12-18",
    nights: 3,
    guests: 2,
    price: 10500,
    status: "completed",
    paymentMethod: "โอนผ่านบัญชีธนาคาร",
  },
  {
    id: 4,
    bookingNumber: "BK20241205004",
    hotelName: "City Center Hotel Bangkok",
    roomType: "Standard Room",
    checkIn: "2025-02-01",
    checkOut: "2025-02-03",
    nights: 2,
    guests: 1,
    price: 7000,
    status: "cancelled",
    paymentMethod: "ชำระเงินสดหน้าที่พัก",
  },
];

const statusConfig = {
  confirmed: {
    label: "ยืนยันแล้ว",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    icon: "✓",
  },
  pending: {
    label: "รอการยืนยัน",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    icon: "⏳",
  },
  completed: {
    label: "เสร็จสิ้น",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: "✔",
  },
  cancelled: {
    label: "ยกเลิก",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    icon: "✕",
  },
};

export default function BookingsPage() {
  const [filter, setFilter] = useState("all");

  const filteredBookings = mockBookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              การจองของฉัน
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              ดูและจัดการการจองทั้งหมดของคุณ
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                ทั้งหมด ({mockBookings.length})
              </button>
              <button
                onClick={() => setFilter("confirmed")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  filter === "confirmed"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                ยืนยันแล้ว
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  filter === "pending"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                รอการยืนยัน
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  filter === "completed"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                เสร็จสิ้น
              </button>
            </div>
          </div>

          {/* Bookings List */}
          {filteredBookings.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ไม่มีการจอง
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                คุณยังไม่มีการจองในหมวดนี้
              </p>
              <Link
                href="/hotels"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                เริ่มค้นหาโรงแรม
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => {
                const status = statusConfig[booking.status as keyof typeof statusConfig];
                return (
                  <div
                    key={booking.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Left Side */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {booking.hotelName}
                              </h3>
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${status.color} flex items-center gap-1`}
                              >
                                <span>{status.icon}</span>
                                <span>{status.label}</span>
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                              {booking.roomType}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 font-mono">
                              หมายเลขการจอง: {booking.bookingNumber}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                              <span>📅</span>
                              <span className="font-semibold">เช็คอิน</span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {new Date(booking.checkIn).toLocaleDateString("th-TH", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                              <span>📅</span>
                              <span className="font-semibold">เช็คเอาท์</span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {new Date(booking.checkOut).toLocaleDateString("th-TH", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                              <span>🌙</span>
                              <span className="font-semibold">จำนวนคืน</span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {booking.nights} คืน
                            </span>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                              <span>�</span>
                              <span className="font-semibold">ผู้เข้าพัก</span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-semibold">
                              {booking.guests} ท่าน
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          <span>💳 ชำระเงินผ่าน: </span>
                          <span className="font-semibold">{booking.paymentMethod}</span>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="flex flex-col items-start lg:items-end gap-4">
                        <div className="text-left lg:text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            ราคารวม
                          </p>
                          <p className="text-3xl font-bold text-blue-600">
                            ฿{booking.price.toLocaleString()}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <Link 
                            href={`/booking-confirmation/${booking.bookingNumber}`}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                          >
                            ดูรายละเอียด
                          </Link>
                          {booking.status === "confirmed" && (
                            <button 
                              onClick={() => {
                                if (confirm("คุณต้องการยกเลิกการจองนี้หรือไม่?")) {
                                  console.log("Cancel booking:", booking.id);
                                  // TODO: Call API to cancel booking
                                }
                              }}
                              className="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors text-sm font-semibold"
                            >
                              ยกเลิก
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
