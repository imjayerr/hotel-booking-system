import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              เกี่ยวกับเรา
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              แพลตฟอร์มจองโรงแรมออนไลน์ที่ดีที่สุดในประเทศไทย
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🏨</div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                เรื่องราวของเรา
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <strong>Hotel Booking</strong>{" "}
                ก่อตั้งขึ้นในปี 2024
                ด้วยวิสัยทัศน์ในการทำให้การจองที่พักเป็นเรื่องง่ายและสะดวกสบายสำหรับทุกคน
                เราเชื่อว่าการเดินทางควรเริ่มต้นด้วยประสบการณ์การจองที่ดี
              </p>
              <p>
                เราทำงานร่วมกับโรงแรมและที่พักกว่า <strong>87 แห่ง</strong>{" "}
                ทั่วประเทศไทย
                ตั้งแต่โรงแรมหรูระดับ 5 ดาวไปจนถึงที่พักราคาประหยัด
                เพื่อให้คุณมีตัวเลือกที่หลากหลายสำหรับทุกงบประมาณ
              </p>
              <p>
                ด้วยระบบจองที่ทันสมัย การชำระเงินที่ปลอดภัย
                และทีมสนับสนุนลูกค้าที่พร้อมให้บริการตลอด 24 ชั่วโมง
                เราพร้อมที่จะทำให้การเดินทางของคุณน่าจดจำที่สุด
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">พันธกิจของเรา</h3>
              <p className="leading-relaxed">
                มอบประสบการณ์การจองที่พักที่ดีที่สุด
                ด้วยเทคโนโลยีที่ทันสมัยและบริการที่เป็นเลิศ
                เพื่อให้ทุกการเดินทางของคุณเป็นไปอย่างราบรื่น
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4">วิสัยทัศน์</h3>
              <p className="leading-relaxed">
                เป็นแพลตฟอร์มจองโรงแรมออนไลน์อันดับ 1 ในประเทศไทย
                ที่นักเดินทางทุกคนไว้วางใจและเลือกใช้บริการ
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              คุณค่าหลักของเรา
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  ความไว้วางใจ
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  เราให้ความสำคัญกับความปลอดภัยและความเป็นส่วนตัวของข้อมูลของคุณ
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  ความรวดเร็ว
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  ระบบที่รวดเร็วและใช้งานง่าย จองได้ภายในไม่กี่คลิก
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">💎</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  คุณภาพ
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  คัดสรรที่พักคุณภาพดีเท่านั้น พร้อมรีวิวจากผู้ใช้งานจริง
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ความสำเร็จของเรา
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,245+</div>
                <div className="text-blue-100">ผู้ใช้งาน</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">87</div>
                <div className="text-blue-100">โรงแรมพาร์ทเนอร์</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3,456+</div>
                <div className="text-blue-100">การจอง</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-blue-100">คะแนนเฉลี่ย</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              ทีมงานของเรา
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              ทีมผู้เชี่ยวชาญที่มุ่งมั่นในการให้บริการที่ดีที่สุดแก่คุณ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  สมชาย ใจดี
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  ผู้ก่อตั้งและ CEO
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  10+ ปีในอุตสาหกรรมการท่องเที่ยว
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  👩‍💻
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  สมหญิง รักเทคโนโลยี
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  CTO
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  ผู้เชี่ยวชาญด้านเทคโนโลยี
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  จอห์น สมิธ
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Head of Customer Success
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  ดูแลความพึงพอใจของลูกค้า
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
