"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Mock data
const mockStats = {
  totalUsers: 1245,
  totalHotels: 87,
  totalBookings: 3456,
  totalRevenue: 12500000,
  pendingHotels: 5,
  reportedReviews: 12,
};

const mockPendingHotels = [
  {
    id: 1,
    name: "Sunset Beach Resort",
    owner: "นายสมชาย รักทะเล",
    location: "ภูเก็ต",
    totalRooms: 45,
    submittedDate: "2024-12-20",
    status: "PENDING",
  },
  {
    id: 2,
    name: "Mountain View Hotel",
    owner: "นางสาวสมหญิง รักภูเขา",
    location: "เชียงใหม่",
    totalRooms: 30,
    submittedDate: "2024-12-21",
    status: "PENDING",
  },
  {
    id: 3,
    name: "City Center Hotel",
    owner: "บริษัท โรงแรม จำกัด",
    location: "กรุงเทพฯ",
    totalRooms: 80,
    submittedDate: "2024-12-22",
    status: "PENDING",
  },
];

const mockUsers = [
  {
    id: 1,
    name: "สมชาย ใจดี",
    email: "somchai@example.com",
    role: "CUSTOMER",
    totalBookings: 12,
    joinedDate: "2024-01-15",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "สมหญิง รักสวย",
    email: "somying@example.com",
    role: "CUSTOMER",
    totalBookings: 8,
    joinedDate: "2024-02-20",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "จอห์น สมิธ",
    email: "john@example.com",
    role: "HOTEL_MANAGER",
    totalBookings: 0,
    joinedDate: "2024-03-10",
    status: "ACTIVE",
  },
];

const mockReportedReviews = [
  {
    id: 1,
    hotelName: "Grand Luxury Hotel Bangkok",
    reviewer: "นายปลอม หลอกลวง",
    rating: 1,
    comment: "โรงแรมแย่มาก ห้องสกปรก พนักงานไม่น่าเชื่อถือ",
    reportedBy: "เจ้าของโรงแรม",
    reportReason: "รีวิวปลอม/พยายามทำลายชื่อเสียง",
    reportedDate: "2024-12-22",
  },
  {
    id: 2,
    hotelName: "Beachfront Resort Phuket",
    reviewer: "นางสาว ใช้คำหยาบ",
    rating: 2,
    comment: "ห้องพักแย่ คำหยาบคำหยาบคำหยาบ",
    reportedBy: "เจ้าของโรงแรม",
    reportReason: "ใช้ภาษาไม่เหมาะสม",
    reportedDate: "2024-12-21",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "hotels" | "users" | "reviews"
  >("overview");

  const statusStyles = {
    PENDING: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    ACTIVE: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    SUSPENDED: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  const roleStyles = {
    CUSTOMER: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    HOTEL_MANAGER:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    ADMIN: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  const handleApproveHotel = (hotelId: number) => {
    console.log("Approve hotel:", hotelId);
    // TODO: Call backend API
  };

  const handleRejectHotel = (hotelId: number) => {
    console.log("Reject hotel:", hotelId);
    // TODO: Call backend API
  };

  const handleDeleteReview = (reviewId: number) => {
    console.log("Delete review:", reviewId);
    // TODO: Call backend API
  };

  const handleSuspendUser = (userId: number) => {
    console.log("Suspend user:", userId);
    // TODO: Call backend API
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-2">แดชบอร์ดผู้ดูแลระบบ</h1>
            <p className="text-red-100">จัดการและควบคุมระบบทั้งหมด</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">👥</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ผู้ใช้
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockStats.totalUsers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                ผู้ใช้ทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">🏨</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  โรงแรม
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockStats.totalHotels}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                โรงแรมทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">📅</div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  การจอง
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockStats.totalBookings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                การจองทั้งหมด
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">💰</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  รายได้
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                ฿{(mockStats.totalRevenue / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                รายได้รวมทั้งหมด
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
                {mockStats.pendingHotels}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                โรงแรมรออนุมัติ
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">⚠️</div>
                <div className="text-sm text-red-600 dark:text-red-400">
                  รายงาน
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {mockStats.reportedReviews}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                รีวิวที่ถูกรายงาน
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
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                ภาพรวม
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "hotels"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                อนุมัติโรงแรม ({mockStats.pendingHotels})
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "users"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                จัดการผู้ใช้
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 px-1 border-b-2 font-semibold transition-all ${
                  activeTab === "reviews"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                รีวิวที่ถูกรายงาน ({mockStats.reportedReviews})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="pb-12">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Alerts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-2">
                      ⏳ รออนุมัติ
                    </h3>
                    <p className="text-yellow-800 dark:text-yellow-300 mb-4">
                      มีโรงแรม {mockStats.pendingHotels}{" "}
                      แห่งรอการอนุมัติจากคุณ
                    </p>
                    <button
                      onClick={() => setActiveTab("hotels")}
                      className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700"
                    >
                      ดำเนินการ
                    </button>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-2">
                      ⚠️ รีวิวที่ถูกรายงาน
                    </h3>
                    <p className="text-red-800 dark:text-red-300 mb-4">
                      มีรีวิว {mockStats.reportedReviews}{" "}
                      รายการที่ถูกรายงานต้องตรวจสอบ
                    </p>
                    <button
                      onClick={() => setActiveTab("reviews")}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
                    >
                      ตรวจสอบ
                    </button>
                  </div>
                </div>

                {/* System Stats */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    สถิติระบบ (30 วันล่าสุด)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        245
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        ผู้ใช้ใหม่
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        12
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        โรงแรมใหม่
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        856
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        การจอง
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">
                        324
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        รีวิวใหม่
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hotels Approval Tab */}
            {activeTab === "hotels" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  โรงแรมรออนุมัติ
                </h2>
                <div className="space-y-6">
                  {mockPendingHotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {hotel.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            📍 {hotel.location}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            👤 เจ้าของ: {hotel.owner}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            🛏️ จำนวนห้อง: {hotel.totalRooms} ห้อง
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              statusStyles[
                                hotel.status as keyof typeof statusStyles
                              ]
                            }`}
                          >
                            รออนุมัติ
                          </span>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            ส่งเมื่อ:{" "}
                            {new Date(hotel.submittedDate).toLocaleDateString(
                              "th-TH"
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => handleApproveHotel(hotel.id)}
                          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                        >
                          ✓ อนุมัติ
                        </button>
                        <button 
                          onClick={() => {
                            // TODO: Navigate to hotel details
                            console.log(`View hotel details: ${hotel.id}`);
                          }}
                          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                          👁️ ดูรายละเอียด
                        </button>
                        <button
                          onClick={() => handleRejectHotel(hotel.id)}
                          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                        >
                          ✕ ปฏิเสธ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Users Management Tab */}
            {activeTab === "users" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    จัดการผู้ใช้
                  </h2>
                  <input
                    type="text"
                    placeholder="ค้นหาผู้ใช้..."
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          ชื่อ-นามสกุล
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          อีเมล
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          บทบาท
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          การจอง
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          สถานะ
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          สมัครเมื่อ
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                          จัดการ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-gray-100 dark:border-gray-700"
                        >
                          <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                            {user.name}
                          </td>
                          <td className="py-4 px-4 text-gray-600 dark:text-gray-400">
                            {user.email}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                roleStyles[
                                  user.role as keyof typeof roleStyles
                                ]
                              }`}
                            >
                              {user.role === "CUSTOMER"
                                ? "ลูกค้า"
                                : user.role === "HOTEL_MANAGER"
                                ? "ผู้ประกอบการ"
                                : "ผู้ดูแลระบบ"}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center text-gray-900 dark:text-white">
                            {user.totalBookings}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                statusStyles[
                                  user.status as keyof typeof statusStyles
                                ]
                              }`}
                            >
                              {user.status === "ACTIVE"
                                ? "ใช้งาน"
                                : "ระงับ"}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600 dark:text-gray-400">
                            {new Date(user.joinedDate).toLocaleDateString(
                              "th-TH"
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex gap-2 justify-center">
                              <button 
                                onClick={() => {
                                  // TODO: Navigate to user details
                                  console.log(`View user details: ${user.id}`);
                                }}
                                className="text-blue-600 hover:text-blue-700 font-semibold"
                              >
                                ดู
                              </button>
                              <button
                                onClick={() => handleSuspendUser(user.id)}
                                className="text-red-600 hover:text-red-700 font-semibold"
                              >
                                ระงับ
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Reviews Moderation Tab */}
            {activeTab === "reviews" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  รีวิวที่ถูกรายงาน
                </h2>
                <div className="space-y-6">
                  {mockReportedReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10 rounded-xl p-6"
                    >
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              {review.hotelName}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              รีวิวโดย: {review.reviewer}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-2">
                              {"⭐".repeat(review.rating)}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                              ({review.rating}/5)
                            </span>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                          <p className="text-gray-900 dark:text-white">
                            {review.comment}
                          </p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                            รายงานโดย: {review.reportedBy}
                          </p>
                          <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-1">
                            เหตุผล: {review.reportReason}
                          </p>
                          <p className="text-xs text-yellow-700 dark:text-yellow-400">
                            รายงานเมื่อ:{" "}
                            {new Date(review.reportedDate).toLocaleDateString(
                              "th-TH"
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                        >
                          🗑️ ลบรีวิว
                        </button>
                        <button 
                          onClick={() => {
                            // TODO: Implement approve review
                            console.log(`Approve review: ${review.id}`);
                          }}
                          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                        >
                          ✓ รีวิวถูกต้อง (ปฏิเสธการรายงาน)
                        </button>
                        <button 
                          onClick={() => {
                            // TODO: Implement send warning
                            console.log(`Send warning for review: ${review.id}`);
                          }}
                          className="flex-1 bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all"
                        >
                          ⚠️ ส่งคำเตือน
                        </button>
                      </div>
                    </div>
                  ))}
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
