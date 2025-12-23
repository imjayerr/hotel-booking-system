# 🏨 Hotel Booking System

ระบบจองโรงแรมออนไลน์ที่สมบูรณ์แบบ สร้างด้วย Next.js 16, React 19, TypeScript และ Prisma ORM

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🎯 ภาพรวมโปรเจกต์

Hotel Booking System เป็นระบบจองโรงแรมออนไลน์ที่ออกแบบมาเพื่อให้ผู้ใช้สามารถค้นหา เปรียบเทียบ และจองโรงแรมได้อย่างง่ายดาย พร้อมระบบจัดการ Backend ที่ครบครัน

### ✨ ฟีเจอร์หลัก

#### 📱 Frontend Features

1. **หน้าแรก (Homepage)**
   - Hero section พร้อมระบบค้นหาโรงแรม
   - แสดงโรงแรมยอดนิยม
   - จุดหมายปลายทางยอดนิยม
   - ฟีเจอร์เด่นของระบบ

2. **หน้ารายการโรงแรม (Hotels Listing)**
   - แสดงโรงแรมทั้งหมดพร้อม Pagination
   - ระบบค้นหาและกรองโรงแรม
   - กรองตามราคา, คะแนน, สิ่งอำนวยความสะดวก
   - เรียงลำดับ (แนะนำ, ราคา, คะแนน)

3. **หน้ารายละเอียดโรงแรม (Hotel Details)**
   - ข้อมูลโรงแรมอย่างละเอียด
   - แกลเลอรี่รูปภาพ
   - รีวิวและคะแนนจากผู้เข้าพัก
   - แสดงประเภทห้องพักทั้งหมด
   - ระบบจองห้องพักพร้อมเลือกวันที่
   - คำนวณราคาอัตโนมัติ
   - นโยบายและเงื่อนไขของโรงแรม

4. **ระบบผู้ใช้**
   - สมัครสมาชิก / เข้าสู่ระบบ
   - Social Login (Google, Facebook)
   - จัดการโปรไฟล์
   - ดูประวัติการจอง

5. **หน้าการจองของฉัน (My Bookings)**
   - แสดงรายการจองทั้งหมด
   - กรองตามสถานะ (รอการยืนยัน, ยืนยันแล้ว, เสร็จสิ้น, ยกเลิก)
   - ดูรายละเอียดการจอง
   - ยกเลิกการจอง

6. **ฟีเจอร์เพิ่มเติม**
   - Dark Mode Support
   - Fully Responsive Design
   - ระบบ Wishlist/Favorites
   - ระบบค้นหาขั้นสูง

#### 🔧 Backend Features (Database Schema)

1. **User Management**
   - ระบบสมาชิก (Customer, Admin, Hotel Manager)
   - ข้อมูลส่วนตัวและการยืนยันตัวตน
   - Role-based Access Control

2. **Hotel Management**
   - ข้อมูลโรงแรมครบครัน
   - ที่ตั้ง (พร้อม Geo-location)
   - สิ่งอำนวยความสะดวก
   - นโยบายโรงแรม
   - แกลเลอรี่รูปภาพ
   - คะแนนและรีวิว

3. **Room Management**
   - ประเภทห้องพัก (Standard, Deluxe, Suite, etc.)
   - ราคาต่อคืน
   - จำนวนผู้เข้าพักสูงสุด
   - ขนาดห้อง, ประเภทเตียง
   - สิ่งอำนวยความสะดวกในห้อง
   - ระบบ Dynamic Pricing (ราคาตามช่วงเวลา)

4. **Booking System**
   - การจองห้องพัก
   - สถานะการจอง (Pending, Confirmed, Checked-In, Checked-Out, Cancelled)
   - คำนวณจำนวนคืนและราคาอัตโนมัติ
   - Special Requests
   - เหตุผลการยกเลิก

5. **Payment System**
   - ระบบชำระเงิน
   - Transaction Tracking
   - สถานะการชำระเงิน
   - คืนเงิน (Refund)

6. **Review & Rating**
   - รีวิวและให้คะแนนโรงแรม (1-5 ดาว)
   - อัพโหลดรูปภาพรีวิว
   - ยืนยันการเข้าพักจริง
   - คำนวณคะแนนเฉลี่ยอัตโนมัติ

7. **Wishlist/Favorites**
   - บันทึกโรงแรมที่สนใจ
   - จัดการรายการโปรด

## 🚀 เทคโนโลยีที่ใช้

### Frontend
- **Next.js 16** - React Framework with App Router
- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Utility-first CSS
- **ESLint** - Code Quality

### Backend
- **Prisma ORM** - Type-safe Database ORM
- **PostgreSQL** - Relational Database
- **Node.js** - Runtime Environment

## 📦 การติดตั้ง

### 1. Clone Repository

```bash
git clone <repository-url>
cd website-booking
```

### 2. ติดตั้ง Frontend

```bash
cd frontend
npm install
```

### 3. ติดตั้ง Backend

```bash
cd backend
npm install
```

### 4. ตั้งค่า Database

สร้างไฟล์ `.env` ใน folder `backend`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/hotel_booking"
```

### 5. สร้าง Database Schema

```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 6. รันโปรเจกต์

**Frontend:**
```bash
cd frontend
npm run dev
```
เปิด [http://localhost:3000](http://localhost:3000)

**Backend:**
```bash
cd backend
npm run dev
```
API จะรันที่ [http://localhost:4000](http://localhost:4000)

## 📁 โครงสร้างโปรเจกต์

```
website-booking/
├── frontend/                 # Next.js Frontend
│   ├── app/
│   │   ├── components/      # Shared Components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HotelCard.tsx
│   │   │   └── SearchBox.tsx
│   │   ├── hotels/          # Hotel Pages
│   │   │   ├── page.tsx     # Hotels Listing
│   │   │   └── [id]/
│   │   │       └── page.tsx # Hotel Detail
│   │   ├── bookings/        # Bookings Page
│   │   ├── login/           # Login Page
│   │   ├── register/        # Register Page
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css
│   └── package.json
│
└── backend/                  # Backend API
    ├── prisma/
    │   └── schema.prisma    # Database Schema
    └── package.json
```

## 🎨 Database Schema

### Models Overview

1. **User** - ข้อมูลผู้ใช้
2. **Hotel** - ข้อมูลโรงแรม
3. **Room** - ประเภทห้องพัก
4. **RoomPricing** - ราคาห้องตามช่วงเวลา
5. **Booking** - การจองห้องพัก
6. **Payment** - การชำระเงิน
7. **Review** - รีวิวและคะแนน
8. **Favorite** - รายการโปรด

### Enums

- **UserRole**: CUSTOMER, ADMIN, HOTEL_MANAGER
- **RoomType**: STANDARD, DELUXE, SUITE, FAMILY, PRESIDENTIAL
- **BookingStatus**: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED
- **PaymentStatus**: PENDING, PAID, REFUNDED, FAILED

## 🎯 API Endpoints (ตัวอย่าง)

### Hotels
```
GET    /api/hotels              - รายการโรงแรมทั้งหมด
GET    /api/hotels/:id          - รายละเอียดโรงแรม
POST   /api/hotels              - สร้างโรงแรมใหม่ (Admin)
PUT    /api/hotels/:id          - แก้ไขโรงแรม (Admin)
DELETE /api/hotels/:id          - ลบโรงแรม (Admin)
```

### Rooms
```
GET    /api/hotels/:id/rooms    - รายการห้องของโรงแรม
GET    /api/rooms/:id           - รายละเอียดห้อง
POST   /api/rooms               - สร้างห้องใหม่ (Admin)
```

### Bookings
```
GET    /api/bookings            - รายการจองทั้งหมด
GET    /api/bookings/my         - การจองของฉัน
POST   /api/bookings            - สร้างการจองใหม่
PUT    /api/bookings/:id        - แก้ไขการจอง
DELETE /api/bookings/:id        - ยกเลิกการจอง
```

### Users
```
POST   /api/auth/register       - สมัครสมาชิก
POST   /api/auth/login          - เข้าสู่ระบบ
GET    /api/users/me            - ข้อมูลของฉัน
PUT    /api/users/me            - แก้ไขข้อมูล
```

### Reviews
```
GET    /api/hotels/:id/reviews  - รีวิวของโรงแรม
POST   /api/reviews             - เขียนรีวิว
PUT    /api/reviews/:id         - แก้ไขรีวิว
DELETE /api/reviews/:id         - ลบรีวิว
```

## 🔒 Authentication & Authorization

- JWT Token-based Authentication
- Role-based Access Control
- Protected Routes
- Session Management

## 💡 ฟีเจอร์ที่ควรเพิ่มต่อ

### High Priority
- [ ] Backend API Implementation
- [ ] Authentication System (JWT)
- [ ] Payment Gateway Integration (Stripe, PayPal, Promptpay)
- [ ] Email Notification System
- [ ] SMS Notification
- [ ] Real-time Availability Check
- [ ] Admin Dashboard

### Medium Priority
- [ ] Advanced Search with Filters
- [ ] Map Integration (Google Maps)
- [ ] Multi-language Support (i18n)
- [ ] Currency Converter
- [ ] Booking Calendar View
- [ ] Price Alerts
- [ ] Loyalty Program
- [ ] Promotional Codes/Coupons

### Low Priority
- [ ] Chat Support (Live Chat)
- [ ] Mobile App (React Native)
- [ ] Social Sharing
- [ ] Blog/Travel Guide
- [ ] Newsletter
- [ ] Analytics Dashboard
- [ ] SEO Optimization
- [ ] PWA Support

## 🧪 Testing

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend
# Deploy to your preferred platform
```

## 📝 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
```

### Backend (.env)
```env
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
STRIPE_SECRET_KEY=your_stripe_key
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ by Your Team

## 📧 Contact

- Email: info@hotelbooking.com
- Website: https://hotelbooking.com

---

**Happy Coding! 🏨✨**
