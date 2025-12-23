# 🚀 Backend API Development Plan
## สำหรับ Hotel Booking System

### 📋 โครงสร้าง Backend ที่จะสร้าง

ตามขอบเขตงานที่กำหนด เราจะสร้าง Backend API ครบถ้วนสำหรับ:
- **ผู้ใช้ทั่วไป (User/Customer)**
- **เจ้าของที่พัก (Hotel Owner)**  
- **ผู้ดูแลระบบ (Admin)**

---

## 🎯 Modules ที่ต้องสร้าง

### 1. **Auth Module** 🔐
**Features:**
- ✅ Register (สมัครสมาชิก)
- ✅ Login (เข้าสู่ระบบ)
- ✅ JWT Authentication
- ✅ Role-based Guards (Customer, Hotel Owner, Admin)
- ✅ Refresh Token
- ✅ Forgot Password / Reset Password

**Endpoints:**
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/auth/me
```

---

### 2. **Users Module** 👤
**Features:**
- ✅ Get Profile
- ✅ Update Profile  
- ✅ Upload Avatar
- ✅ Change Password
- ✅ Verify Email

**Endpoints:**
```
GET    /api/users/me
PUT    /api/users/me
POST   /api/users/avatar
PUT    /api/users/password
POST   /api/users/verify-email
```

---

### 3. **Hotels Module** 🏨
**Features (User):**
- ✅ Get All Hotels (พร้อม filters: location, price, rating)
- ✅ Get Hotel by ID
- ✅ Search Hotels
- ✅ Get Popular Hotels

**Features (Hotel Owner):**
- ✅ Create Hotel
- ✅ Update Hotel
- ✅ Delete Hotel
- ✅ Upload Hotel Images
- ✅ Manage Hotel Amenities
- ✅ View Hotel Statistics

**Features (Admin):**
- ✅ Approve/Reject Hotel
- ✅ Suspend Hotel
- ✅ View All Hotels (including pending)

**Endpoints:**
```
# Public
GET    /api/hotels
GET    /api/hotels/:id
GET    /api/hotels/search
GET    /api/hotels/popular

# Hotel Owner
POST   /api/hotels
PUT    /api/hotels/:id
DELETE /api/hotels/:id
POST   /api/hotels/:id/images
GET    /api/hotels/my-hotels
GET    /api/hotels/:id/statistics

# Admin
GET    /api/hotels/pending
PUT    /api/hotels/:id/approve
PUT    /api/hotels/:id/reject
PUT    /api/hotels/:id/suspend
```

---

### 4. **Rooms Module** 🛏️
**Features (User):**
- ✅ Get Rooms by Hotel
- ✅ Check Room Availability
- ✅ Get Room Details

**Features (Hotel Owner):**
- ✅ Create Room
- ✅ Update Room
- ✅ Delete Room
- ✅ Upload Room Images
- ✅ Set Room Pricing (Dynamic Pricing)
- ✅ Manage Room Availability

**Endpoints:**
```
# Public
GET    /api/hotels/:hotelId/rooms
GET    /api/rooms/:id
GET    /api/rooms/:id/availability

# Hotel Owner
POST   /api/rooms
PUT    /api/rooms/:id
DELETE /api/rooms/:id
POST   /api/rooms/:id/images
POST   /api/rooms/:id/pricing
PUT    /api/rooms/:id/availability
```

---

### 5. **Bookings Module** 📅
**Features (User):**
- ✅ Create Booking
- ✅ View My Bookings (พร้อมกรองตามสถานะ)
- ✅ View Booking Details
- ✅ Cancel Booking
- ✅ Update Booking

**Features (Hotel Owner):**
- ✅ View Hotel Bookings
- ✅ View Bookings by Date
- ✅ Approve Booking (auto-approve)
- ✅ Cancel Booking (with reason)
- ✅ Update Booking Status
- ✅ View Booking Statistics

**Features (Admin):**
- ✅ View All Bookings
- ✅ Cancel Any Booking
- ✅ Resolve Disputes

**Endpoints:**
```
# Customer
POST   /api/bookings
GET    /api/bookings/my
GET    /api/bookings/:id
PUT    /api/bookings/:id
DELETE /api/bookings/:id/cancel

# Hotel Owner
GET    /api/bookings/hotel/:hotelId
GET    /api/bookings/hotel/:hotelId/by-date
PUT    /api/bookings/:id/approve
PUT    /api/bookings/:id/status
GET    /api/bookings/hotel/:hotelId/statistics

# Admin
GET    /api/bookings/all
DELETE /api/bookings/:id/admin-cancel
```

---

### 6. **Payments Module** 💳
**Features:**
- ✅ Create Payment
- ✅ Upload Payment Proof (Bank Transfer)
- ✅ QR Code Payment (PromptPay)
- ✅ Verify Payment
- ✅ Refund Payment
- ✅ Payment History

**Endpoints:**
```
POST   /api/payments
POST   /api/payments/:id/proof
GET    /api/payments/:id
GET    /api/payments/booking/:bookingId
POST   /api/payments/:id/verify
POST   /api/payments/:id/refund
GET    /api/payments/my
```

---

### 7. **Reviews Module** ⭐
**Features (User):**
- ✅ Create Review (เฉพาะผู้ที่พักจริง)
- ✅ Update Review
- ✅ Delete Review
- ✅ Upload Review Images
- ✅ Get Hotel Reviews

**Features (Hotel Owner):**
- ✅ View Hotel Reviews
- ✅ Reply to Reviews

**Features (Admin):**
- ✅ Moderate Reviews
- ✅ Delete Inappropriate Reviews
- ✅ Verify Reviews

**Endpoints:**
```
# Customer
POST   /api/reviews
PUT    /api/reviews/:id
DELETE /api/reviews/:id
POST   /api/reviews/:id/images
GET    /api/hotels/:hotelId/reviews

# Hotel Owner
POST   /api/reviews/:id/reply
GET    /api/reviews/hotel/:hotelId

# Admin
DELETE /api/reviews/:id/admin-delete
PUT    /api/reviews/:id/verify
```

---

### 8. **Favorites Module** ❤️
**Features:**
- ✅ Add to Favorites
- ✅ Remove from Favorites
- ✅ Get My Favorites

**Endpoints:**
```
POST   /api/favorites
DELETE /api/favorites/:hotelId
GET    /api/favorites/my
```

---

### 9. **Admin Module** 👨‍💼
**Features:**
- ✅ Dashboard Statistics
- ✅ User Management
  - View All Users
  - Suspend/Activate User
  - Delete User
- ✅ Hotel Management
  - Pending Approvals
  - Approve/Reject Hotels
- ✅ Booking Management
  - View All Bookings
  - Resolve Issues
- ✅ Review Moderation
- ✅ System Settings

**Endpoints:**
```
# Dashboard
GET    /api/admin/dashboard/stats

# User Management  
GET    /api/admin/users
GET    /api/admin/users/:id
PUT    /api/admin/users/:id/suspend
PUT    /api/admin/users/:id/activate
DELETE /api/admin/users/:id

# Hotel Management
GET    /api/admin/hotels/pending
PUT    /api/admin/hotels/:id/approve
PUT    /api/admin/hotels/:id/reject

# System
GET    /api/admin/logs
GET    /api/admin/reports
```

---

### 10. **Upload Module** 📁
**Features:**
- ✅ Upload Single Image
- ✅ Upload Multiple Images
- ✅ Delete Image
- ✅ Image Optimization

**Endpoints:**
```
POST   /api/upload/single
POST   /api/upload/multiple
DELETE /api/upload/:filename
```

---

### 11. **Notifications Module** 🔔
**Features:**
- ✅ Email Notifications
  - Booking Confirmation
  - Payment Confirmation
  - Check-in Reminder
  - Review Request
- ✅ In-app Notifications

**Endpoints:**
```
GET    /api/notifications
PUT    /api/notifications/:id/read
DELETE /api/notifications/:id
```

---

## 🔧 Technical Implementation

### **Guards & Decorators**
```typescript
@Roles('CUSTOMER')
@Roles('HOTEL_MANAGER')
@Roles('ADMIN')
@Public() // Skip JWT validation
@CurrentUser() // Get current user from JWT
```

### **DTOs (Data Transfer Objects)**
- RegisterDto
- LoginDto
- CreateHotelDto
- UpdateHotelDto
- CreateRoomDto
- CreateBookingDto
- CreateReviewDto
- etc.

### **Validation**
- class-validator
- class-transformer
- Custom validators

### **Error Handling**
- Custom Exception Filters
- Standardized Error Responses

### **File Upload**
- Multer
- Image Optimization (Sharp)
- Cloud Storage (Optional: AWS S3, Cloudinary)

---

## 📊 Database Relations (Already Done ✅)

จาก Prisma Schema ที่สร้างไว้แล้ว:
- ✅ User → Bookings, Reviews, Favorites
- ✅ Hotel → Rooms, Reviews, Favorites
- ✅ Room → Bookings, RoomPricing
- ✅ Booking → User, Room, Payment
- ✅ Payment → Booking
- ✅ Review → User, Hotel
- ✅ Favorite → User, Hotel

---

## 🎯 Priority Order (การทำตามลำดับความสำคัญ)

### **Phase 1: Core Features** (สัปดาห์ที่ 1)
1. ✅ Prisma Setup
2. ⏳ Auth Module (Register, Login, JWT)
3. ⏳ Users Module (Profile Management)
4. ⏳ Hotels Module (CRUD, Search)
5. ⏳ Rooms Module (CRUD, Availability)

### **Phase 2: Booking System** (สัปดาห์ที่ 2)
6. ⏳ Bookings Module (Create, View, Cancel)
7. ⏳ Payments Module (Payment Methods)
8. ⏳ Upload Module (Image Upload)

### **Phase 3: Reviews & Favorites** (สัปดาห์ที่ 3)
9. ⏳ Reviews Module
10. ⏳ Favorites Module
11. ⏳ Notifications Module

### **Phase 4: Admin & Hotel Owner** (สัปดาห์ที่ 4)
12. ⏳ Admin Dashboard
13. ⏳ Hotel Owner Dashboard
14. ⏳ Statistics & Reports

---

## 🔒 Security Measures

- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Rate Limiting
- ✅ CORS Configuration
- ✅ Input Validation
- ✅ SQL Injection Prevention (Prisma)
- ✅ XSS Protection
- ✅ File Upload Validation

---

## 📝 API Documentation

- ✅ Swagger/OpenAPI
- ✅ Postman Collection
- ✅ Example Requests/Responses

---

## 🧪 Testing

- Unit Tests (Jest)
- Integration Tests
- E2E Tests

---

## 🚀 Deployment Checklist

- [ ] Environment Variables
- [ ] Database Migration
- [ ] HTTPS/SSL
- [ ] Monitoring (Logs)
- [ ] Backup Strategy
- [ ] CI/CD Pipeline

---

**ให้เริ่มสร้าง Phase 1 กันเลยไหมครับ?** 🚀
