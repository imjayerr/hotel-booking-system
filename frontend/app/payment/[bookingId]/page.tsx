"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// Mock booking data
const mockBooking = {
  id: "BK20241222001",
  hotelName: "Grand Luxury Hotel Bangkok",
  roomName: "Deluxe Room",
  checkIn: "2025-01-10",
  checkOut: "2025-01-13",
  nights: 3,
  guests: 2,
  pricePerNight: 4500,
  totalPrice: 13500,
  status: "PENDING",
  createdAt: "2024-12-22T10:30:00",
};

export default function PaymentPage() {
  const router = useRouter();
  const params = useParams();
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleConfirmPayment = () => {
    // TODO: Send payment to backend
    console.log("Payment confirmed");
    router.push(`/booking-confirmation/${mockBooking.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                  เลือกห้อง
                </span>
              </div>
              <div className="w-16 h-1 bg-green-500"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="ml-2 text-sm font-semibold text-blue-600">
                  ชำระเงิน
                </span>
              </div>
              <div className="w-16 h-1 bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  เสร็จสิ้น
                </span>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              ชำระเงิน
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              เลือกวิธีการชำระเงินที่สะดวกสำหรับคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  วิธีการชำระเงิน
                </h2>

                {/* Payment Options */}
                <div className="space-y-4">
                  {/* Bank Transfer */}
                  <label
                    className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "bank"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">🏦</div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg">
                            โอนผ่านบัญชีธนาคาร
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            โอนเงินผ่านแอปธนาคาร
                          </div>
                        </div>
                      </div>
                      {paymentMethod === "bank" && (
                        <div className="text-blue-600">✓</div>
                      )}
                    </div>
                  </label>

                  {/* QR Code / PromptPay */}
                  <label
                    className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "qr"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="qr"
                      checked={paymentMethod === "qr"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">📱</div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg">
                            QR Code / PromptPay
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            สแกน QR Code เพื่อชำระเงิน
                          </div>
                        </div>
                      </div>
                      {paymentMethod === "qr" && (
                        <div className="text-blue-600">✓</div>
                      )}
                    </div>
                  </label>

                  {/* Cash */}
                  <label
                    className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === "cash"
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">💵</div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg">
                            ชำระเงินสดหน้าที่พัก
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            ชำระเมื่อเช็คอิน
                          </div>
                        </div>
                      </div>
                      {paymentMethod === "cash" && (
                        <div className="text-blue-600">✓</div>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod === "bank" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ข้อมูลบัญชีธนาคาร
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          ธนาคาร:
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ธนาคารกรุงเทพ
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          ชื่อบัญชี:
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          บริษัท โฮเทล บุ๊คกิ้ง จำกัด
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          เลขที่บัญชี:
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white text-lg">
                          123-4-56789-0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      อัพโหลดหลักฐานการโอน
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {uploadedFile && (
                      <p className="mt-2 text-sm text-green-600">
                        ✓ อัพโหลดไฟล์: {uploadedFile.name}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {paymentMethod === "qr" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    สแกน QR Code เพื่อชำระเงิน
                  </h3>
                  <div className="flex justify-center mb-6">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📱</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          QR Code PromptPay
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          (Demo)
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    จำนวนเงิน: ฿{mockBooking.totalPrice.toLocaleString()}
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  สรุปการจอง
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {mockBooking.hotelName}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {mockBooking.roomName}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        เช็คอิน:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {new Date(mockBooking.checkIn).toLocaleDateString(
                          "th-TH"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        เช็คเอาท์:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {new Date(mockBooking.checkOut).toLocaleDateString(
                          "th-TH"
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        จำนวน:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {mockBooking.nights} คืน, {mockBooking.guests} ผู้เข้าพัก
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        ฿{mockBooking.pricePerNight.toLocaleString()} × {mockBooking.nights} คืน
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        ฿{(mockBooking.pricePerNight * mockBooking.nights).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        ค่าบริการ
                      </span>
                      <span className="text-gray-900 dark:text-white">฿0</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ยอดรวมทั้งสิ้น
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ฿{mockBooking.totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleConfirmPayment}
                  disabled={paymentMethod === "bank" && !uploadedFile}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed"
                >
                  {paymentMethod === "cash"
                    ? "ยืนยันการจอง"
                    : "ยืนยันการชำระเงิน"}
                </button>

                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                  การชำระเงินของคุณได้รับการรักษาความปลอดภัย
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
