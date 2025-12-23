"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Send to backend
    alert("ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ติดต่อเรา
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              เรายินดีรับฟังความคิดเห็นและข้อเสนอแนะจากคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  ส่งข้อความถึงเรา
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        ชื่อ-นามสกุล <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="กรอกชื่อ-นามสกุล"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        อีเมล <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="089-123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      หัวข้อ <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="general">สอบถามข้อมูลทั่วไป</option>
                      <option value="booking">ปัญหาเกี่ยวกับการจอง</option>
                      <option value="payment">ปัญหาการชำระเงิน</option>
                      <option value="hotel">สอบถามเกี่ยวกับโรงแรม</option>
                      <option value="partnership">
                        สนใจเป็นพาร์ทเนอร์
                      </option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      ข้อความ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="กรุณาระบุรายละเอียด..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    ส่งข้อความ
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  ข้อมูลติดต่อ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        ที่อยู่
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        123/45 ถนนสุขุมวิท
                        <br />
                        แขวงคลองเตย เขตคลองเตย
                        <br />
                        กรุงเทพฯ 10110
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        โทรศัพท์
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        02-123-4567
                        <br />
                        089-123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">✉️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        อีเมล
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        info@hotelbooking.com
                        <br />
                        support@hotelbooking.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⏰</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        เวลาทำการ
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        จันทร์ - ศุกร์: 09:00 - 18:00 น.
                        <br />
                        เสาร์ - อาทิตย์: 10:00 - 17:00 น.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">ติดตามเรา</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center hover:underline transition-all"
                  >
                    <span className="text-2xl mr-3">📘</span>
                    <span>Facebook: @HotelBookingTH</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center hover:underline transition-all"
                  >
                    <span className="text-2xl mr-3">📷</span>
                    <span>Instagram: @hotelbooking.th</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center hover:underline transition-all"
                  >
                    <span className="text-2xl mr-3">🐦</span>
                    <span>Twitter: @HotelBookingTH</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center hover:underline transition-all"
                  >
                    <span className="text-2xl mr-3">💼</span>
                    <span>LinkedIn: Hotel Booking Thailand</span>
                  </a>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  ต้องการความช่วยเหลือด่วน?
                </h3>
                <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                  ลองดูหัวข้อคำถามที่พบบ่อยก่อน อาจมีคำตอบที่คุณต้องการ
                </p>
                <a
                  href="/faq"
                  className="block text-center bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all"
                >
                  ดูคำถามที่พบบ่อย
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              แผนที่
            </h2>
            <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 dark:text-gray-400">
                  แผนที่ Google Maps
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  (จะใช้ Google Maps Embed API)
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
