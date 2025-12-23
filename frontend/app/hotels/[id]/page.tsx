"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// Mock hotel data
const getHotelById = (id: string) => {
  const hotels: any = {
    "1": {
      id: 1,
      name: "Grand Luxury Hotel Bangkok",
      location: "สุขุมวิท, กรุงเทพมหานคร",
      address: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
      description: "โรงแรมหรูระดับ 5 ดาว ใจกลางกรุงเทพฯ",
      fullDescription: "Grand Luxury Hotel Bangkok เป็นโรงแรมระดับ 5 ดาวที่ตั้งอยู่ใจกลางกรุงเทพฯ บนถนนสุขุมวิท พร้อมสิ่งอำนวยความสะดวกครบครัน ห้องพักหรูหรา ตกแต่งอย่างมีรสนิยม พร้อมวิวเมืองที่สวยงาม เหมาะสำหรับทั้งการเดินทางเพื่อธุรกิจและพักผ่อน",
      rating: 4.8,
      totalReviews: 1234,
      phone: "02-xxx-xxxx",
      email: "info@grandluxury.com",
      checkInTime: "14:00",
      checkOutTime: "12:00",
      amenities: [
        "WiFi ฟรีทั่วโรงแรม",
        "สระว่ายน้ำกลางแจ้ง",
        "ฟิตเนสเซ็นเตอร์ 24 ชม.",
        "สปาและนวดแผนไทย",
        "ร้านอาหารนานาชาติ",
        "บาร์และเลานจ์",
        "ห้องประชุมและจัดงาน",
        "ที่จอดรถฟรี",
        "รูมเซอร์วิส 24 ชม.",
        "พนักงานต้อนรับ 24 ชม.",
      ],
      rooms: [
        {
          id: 1,
          name: "Superior Room",
          type: "STANDARD",
          pricePerNight: 3500,
          maxGuests: 2,
          size: 32,
          bedType: "King Bed",
          description: "ห้องพักมาตรฐานขนาด 32 ตร.ม. พร้อมเตียง King Size วิวเมือง",
          amenities: ["TV", "เครื่องปรับอากาศ", "ตู้เย็น", "เครื่องทำน้ำอุ่น"],
          available: 5,
        },
        {
          id: 2,
          name: "Deluxe Room",
          type: "DELUXE",
          pricePerNight: 4500,
          maxGuests: 2,
          size: 40,
          bedType: "King Bed",
          description: "ห้องพักระดับ Deluxe ขนาด 40 ตร.ม. พร้อมระเบียงส่วนตัว",
          amenities: ["TV", "ระเบียง", "โซฟา", "มินิบาร์", "ตู้นิรภัย"],
          available: 3,
        },
        {
          id: 3,
          name: "Executive Suite",
          type: "SUITE",
          pricePerNight: 7500,
          maxGuests: 3,
          size: 65,
          bedType: "King Bed + Sofa Bed",
          description: "ห้องสวีทหรูหรา 65 ตร.ม. แยกพื้นที่นั่งเล่นและนอน วิวพาโนรามา",
          amenities: ["ห้องนั่งเล่น", "ระเบียงใหญ่", "อ่างอาบน้ำ", "เครื่องชงกาแฟ"],
          available: 2,
        },
      ],
      policies: [
        "เช็คอินตั้งแต่ 14:00 น.",
        "เช็คเอาท์ก่อน 12:00 น.",
        "ยกเลิกฟรีก่อนเช็คอิน 3 วัน",
        "ไม่อนุญาตให้สูบบุหรี่ในห้องพัก",
        "สัตว์เลี้ยงไม่ได้รับอนุญาต",
      ],
    },
    "2": {
      id: 2,
      name: "Phuket Beach Resort",
      location: "ป่าตอง, ภูเก็ต",
      address: "456 ถนนทวีวงศ์ ตำบลป่าตอง อำเภอกะทู้ ภูเก็ต 83150",
      description: "รีสอร์ทริมหาด วิวทะเลสวยงาม",
      fullDescription: "Phuket Beach Resort รีสอร์ทริมหาดป่าตอง วิวทะเลอันดามันที่สวยงาม บรรยากาศผ่อนคลาย พร้อมชายหาดส่วนตัว สระว่ายน้ำติดทะเล และร้านอาหารซีฟู้ดสดใหม่ เหมาะสำหรับวันหยุดพักผ่อน",
      rating: 4.9,
      totalReviews: 856,
      phone: "076-xxx-xxx",
      email: "info@phuketbeach.com",
      checkInTime: "14:00",
      checkOutTime: "12:00",
      amenities: [
        "วิวทะเลพาโนรามา",
        "ชายหาดส่วนตัว",
        "สระว่ายน้ำอินฟินิตี้",
        "ร้านอาหารซีฟู้ด",
        "บาร์ริมชายหาด",
        "สปาและนวดแผนไทย",
        "กิจกรรมทางน้ำ",
        "ที่จอดรถฟรี",
        "WiFi ฟรี",
        "รูมเซอร์วิส",
      ],
      rooms: [
        {
          id: 1,
          name: "Garden View Room",
          type: "STANDARD",
          pricePerNight: 3800,
          maxGuests: 2,
          size: 35,
          bedType: "Queen Bed",
          description: "ห้องพักวิวสวน ขนาด 35 ตร.ม. บรรยากาศร่มรื่น",
          amenities: ["TV", "ระเบียง", "ตู้เย็น", "เครื่องปรับอากาศ"],
          available: 4,
        },
        {
          id: 2,
          name: "Sea View Deluxe",
          type: "DELUXE",
          pricePerNight: 5500,
          maxGuests: 2,
          size: 45,
          bedType: "King Bed",
          description: "ห้องพักวิวทะเล ขนาด 45 ตร.ม. ระเบียงส่วนตัวหันหน้าสู่ทะเล",
          amenities: ["วิวทะเล", "ระเบียงใหญ่", "อ่างอาบน้ำ", "มินิบาร์"],
          available: 6,
        },
        {
          id: 3,
          name: "Beach Front Villa",
          type: "SUITE",
          pricePerNight: 9800,
          maxGuests: 4,
          size: 80,
          bedType: "2 King Beds",
          description: "วิลล่าหรูหน้าชายหาด 80 ตร.ม. พร้อมสระว่ายน้ำส่วนตัว",
          amenities: ["สระส่วนตัว", "ห้องนั่งเล่น", "ครัวเล็ก", "ระเบียงใหญ่"],
          available: 1,
        },
      ],
      policies: [
        "เช็คอินตั้งแต่ 14:00 น.",
        "เช็คเอาท์ก่อน 12:00 น.",
        "ยกเลิกฟรีก่อนเช็คอิน 7 วัน",
        "มีค่าธรรมเนียมสัตว์เลี้ยง 500 บาท/วัน",
        "เด็กต่ำกว่า 12 ปี พักฟรี (ใช้เตียงเดียวกับผู้ใหญ่)",
      ],
    },
  };

  return hotels[id] || null;
};

export default function HotelDetailPage() {
  const params = useParams();
  const router = useRouter();
  const hotel = getHotelById(params.id as string);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ไม่พบโรงแรม
            </h1>
            <Link href="/hotels" className="text-blue-600 hover:underline">
              กลับไปหน้าโรงแรม
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = selectedRoom ? selectedRoom.pricePerNight * nights : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gray-50 dark:bg-black py-8">
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
                  <Link
                    href="/hotels"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    โรงแรม
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li className="text-gray-900 dark:text-white font-semibold">
                  {hotel.name}
                </li>
              </ol>
            </nav>
          </div>

          {/* Hotel Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div className="flex-grow">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {hotel.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-lg">
                    <span className="text-yellow-500 text-xl">⭐</span>
                    <span className="font-bold text-blue-900 dark:text-blue-100">
                      {hotel.rating}
                    </span>
                    <span className="text-sm text-blue-700 dark:text-blue-300">
                      ({hotel.totalReviews} รีวิว)
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <span className="mr-2">📍</span>
                  <span>{hotel.address}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <span className="mr-1">📞</span>
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">📧</span>
                    <span>{hotel.email}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  console.log(isFavorite ? "Removed from favorites" : "Added to favorites");
                }}
                className="mt-4 md:mt-0 bg-white dark:bg-gray-700 border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
              >
                <span className="text-2xl">{isFavorite ? "❤️" : "🤍"}</span>
                <span className="font-semibold">{isFavorite ? "บันทึกแล้ว" : "บันทึก"}</span>
              </button>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="col-span-4 md:col-span-2 row-span-2 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl h-96 flex items-center justify-center">
                <span className="text-white text-9xl">🏨</span>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl h-44 flex items-center justify-center">
                <span className="text-white text-5xl">🏊</span>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl h-44 flex items-center justify-center">
                <span className="text-white text-5xl">🍽️</span>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl h-44 flex items-center justify-center">
                <span className="text-white text-5xl">💆</span>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl h-44 flex items-center justify-center">
                <span className="text-white text-5xl">🏋️</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {hotel.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Amenities */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  สิ่งอำนวยความสะดวก
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-green-500 text-xl">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  ประเภทห้องพัก
                </h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room: any) => (
                    <div
                      key={room.id}
                      className={`border-2 rounded-xl p-6 transition-all cursor-pointer ${
                        selectedRoom?.id === room.id
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                      }`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {room.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {room.description}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <span className="mr-1">📏</span>
                              <span>{room.size} ตร.ม.</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <span className="mr-1">🛏️</span>
                              <span>{room.bedType}</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <span className="mr-1">👥</span>
                              <span>{room.maxGuests} ผู้เข้าพัก</span>
                            </div>
                            <div className="flex items-center text-green-600 dark:text-green-400">
                              <span className="mr-1">✓</span>
                              <span>{room.available} ห้องว่าง</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            เริ่มต้น
                          </p>
                          <p className="text-3xl font-bold text-blue-600">
                            ฿{room.pricePerNight.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            ต่อคืน
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  นโยบายของโรงแรม
                </h2>
                <div className="space-y-3">
                  {hotel.policies.map((policy: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  จองห้องพัก
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      วันเช็คอิน
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      วันเช็คเอาท์
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      จำนวนผู้เข้าพัก
                    </label>
                    <input
                      type="number"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      min="1"
                      max={selectedRoom?.maxGuests || 10}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {selectedRoom && checkIn && checkOut && nights > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          {selectedRoom.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          ฿{selectedRoom.pricePerNight.toLocaleString()} × {nights} คืน
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ฿{(selectedRoom.pricePerNight * nights).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-900 dark:text-white">
                            ราคารวม
                          </span>
                          <span className="font-bold text-2xl text-blue-600">
                            ฿{totalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    if (!selectedRoom || !checkIn || !checkOut || nights <= 0) {
                      return;
                    }
                    // TODO: Save booking data to localStorage or state management
                    const bookingData = {
                      hotelId: hotel.id,
                      hotelName: hotel.name,
                      roomId: selectedRoom.id,
                      roomName: selectedRoom.name,
                      checkIn,
                      checkOut,
                      nights,
                      guests,
                      pricePerNight: selectedRoom.pricePerNight,
                      totalPrice,
                    };
                    localStorage.setItem('pendingBooking', JSON.stringify(bookingData));
                    router.push(`/payment/BOOKING-${Date.now()}`);
                  }}
                  disabled={!selectedRoom || !checkIn || !checkOut || nights <= 0}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed"
                >
                  {!selectedRoom
                    ? "เลือกห้องพัก"
                    : !checkIn || !checkOut
                    ? "เลือกวันที่"
                    : "จองเลย"}
                </button>

                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                  ⚡ ยืนยันการจองทันที • ยกเลิกฟรี
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
