"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Mock booking data
const mockBooking = {
  id: "BK20241222001",
  hotelName: "Grand Luxury Hotel Bangkok",
  hotelAddress: "999 ถนนพระราม 4 แขวงสีลม เขตบางรัก กรุงเทพฯ 10500",
  hotelPhone: "02-123-4567",
  roomName: "Deluxe Room",
  checkIn: "2025-01-10",
  checkOut: "2025-01-13",
  checkInTime: "14:00",
  checkOutTime: "12:00",
  nights: 3,
  guests: 2,
  pricePerNight: 4500,
  totalPrice: 13500,
  status: "CONFIRMED",
  paymentMethod: "โอนผ่านบัญชีธนาคาร",
  confirmedAt: "2024-12-22T10:45:00",
  guestName: "สมชาย ใจดี",
  guestEmail: "somchai@example.com",
  guestPhone: "089-123-4567",
  specialRequest: "ต้องการห้องชั้นสูง วิวทะเล",
};

export default function BookingConfirmationPage() {
  const params = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              จองสำเร็จ!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              การจองของคุณได้รับการยืนยันแล้ว
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              หมายเลขการจอง: <span className="font-mono font-bold">{mockBooking.id}</span>
            </p>
          </div>

          {/* Confirmation Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                {mockBooking.hotelName}
              </h2>
              <p className="text-blue-100">{mockBooking.hotelAddress}</p>
              <p className="text-blue-100">โทร: {mockBooking.hotelPhone}</p>
            </div>

            {/* Booking Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Check-in */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="text-3xl mr-3">📅</div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        เช็คอิน
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {new Date(mockBooking.checkIn).toLocaleDateString(
                          "th-TH",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        หลัง {mockBooking.checkInTime} น.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Check-out */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="text-3xl mr-3">📅</div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        เช็คเอาท์
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {new Date(mockBooking.checkOut).toLocaleDateString(
                          "th-TH",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ก่อน {mockBooking.checkOutTime} น.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room & Guest Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  รายละเอียดการจอง
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      ประเภทห้อง:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.roomName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      จำนวนคืน:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.nights} คืน
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      จำนวนผู้เข้าพัก:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.guests} ท่าน
                    </span>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  ข้อมูลผู้เข้าพัก
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      ชื่อ-นามสกุล:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.guestName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      อีเมล:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.guestEmail}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      เบอร์โทร:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.guestPhone}
                    </span>
                  </div>
                  {mockBooking.specialRequest && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        คำขอพิเศษ:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {mockBooking.specialRequest}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Summary */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  สรุปการชำระเงิน
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      ราคาห้องพัก ({mockBooking.nights} คืน):
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      ฿{(mockBooking.pricePerNight * mockBooking.nights).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      ค่าบริการ:
                    </span>
                    <span className="text-gray-900 dark:text-white">฿0</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      ยอดรวมทั้งสิ้น:
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      ฿{mockBooking.totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      วิธีชำระเงิน:
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {mockBooking.paymentMethod} ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              ข้อมูลสำคัญ
            </h3>
            <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  กรุณานำหมายเลขการจองมาแสดงเมื่อเช็คอินที่โรงแรม
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  หากมีการเปลี่ยนแปลงหรือยกเลิกการจอง กรุณาติดต่อโรงแรมล่วงหน้า 24 ชั่วโมง
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  เช็คอินได้หลัง {mockBooking.checkInTime} น. / เช็คเอาท์ก่อน {mockBooking.checkOutTime} น.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  อีเมลยืนยันการจองได้ถูกส่งไปยัง {mockBooking.guestEmail} แล้ว
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/bookings"
              className="bg-blue-600 text-white py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all"
            >
              ดูการจองของฉัน
            </Link>
            <button
              onClick={() => window.print()}
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-4 rounded-lg font-semibold hover:border-blue-500 transition-all"
            >
              พิมพ์ใบยืนยัน
            </button>
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-4 rounded-lg font-semibold text-center hover:border-blue-500 transition-all"
            >
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              มีคำถามเกี่ยวกับการจองนี้?
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ติดต่อฝ่ายบริการลูกค้า →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
