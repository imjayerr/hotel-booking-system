"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  onSearch?: (data: SearchData) => void;
}

export interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const router = useRouter();
  const [searchData, setSearchData] = useState<SearchData>({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
  });

  // Debug: Log when searchData changes
  console.log("SearchBox state:", searchData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Call onSearch callback if provided
    onSearch?.(searchData);
    
    console.log("Search:", searchData);
    
    // Build query string
    const params = new URLSearchParams({
      destination: searchData.destination,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: searchData.guests.toString(),
      rooms: searchData.rooms.toString(),
    });
    
    // Navigate to hotels page with search params
    router.push(`/hotels?${params.toString()}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Destination */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              📍 ปลายทาง
            </label>
            <input
              type="text"
              value={searchData.destination}
              onChange={(e) => {
                console.log("Destination changed:", e.target.value);
                setSearchData({ ...searchData, destination: e.target.value });
              }}
              placeholder="กรุงเทพ, ภูเก็ต, เชียงใหม่..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              📅 เช็คอิน
            </label>
            <input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => {
                console.log("Check-in changed:", e.target.value);
                setSearchData({ ...searchData, checkIn: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              📅 เช็คเอาท์
            </label>
            <input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => {
                console.log("Check-out changed:", e.target.value);
                setSearchData({ ...searchData, checkOut: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests & Rooms */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              👥 ผู้เข้าพัก & ห้อง
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={searchData.guests}
                onChange={(e) => {
                  console.log("Guests changed:", e.target.value);
                  setSearchData({
                    ...searchData,
                    guests: parseInt(e.target.value) || 1,
                  });
                }}
                min="1"
                placeholder="ผู้เข้าพัก"
                className="w-full px-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={searchData.rooms}
                onChange={(e) => {
                  console.log("Rooms changed:", e.target.value);
                  setSearchData({
                    ...searchData,
                    rooms: parseInt(e.target.value) || 1,
                  });
                }}
                min="1"
                placeholder="ห้อง"
                className="w-full px-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
        >
          🔍 ค้นหาโรงแรม
        </button>
      </form>
    </div>
  );
}
