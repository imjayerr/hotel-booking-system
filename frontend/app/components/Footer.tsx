import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-white">
                Hotel Booking
              </span>
            </div>
            <p className="text-sm text-gray-400">
              ระบบจองโรงแรมออนไลน์ที่ง่ายและรวดเร็ว พร้อมราคาพิเศษ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-blue-400 transition-colors">
                  โรงแรม
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-blue-400 transition-colors">
                  การจองของฉัน
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">ช่วยเหลือ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  คำถามที่พบบ่อย
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@booking.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>02-xxx-xxxx</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>กรุงเทพมหานคร</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hotel Booking System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
