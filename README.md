# Full-Stack E-commerce & Inventory Management System

A modern, scalable, production-ready **E-commerce + Inventory Management System** built using **Next.js, Node.js, and TypeScript**.  
This project follows real-world backend and frontend architecture patterns and is developed **feature-by-feature** with a strong focus on performance, security, and maintainability.

---

##  Key Features

###  Authentication & Authorization
- JWT-based authentication (Access + Refresh tokens)
- Secure HTTP-only cookies
- Role-based access control (Admin / User)
- Email verification & password reset (Resend)
- Session & token caching using Redis

###  E-commerce Core
- Product catalog with categories
- Product variants & images
- Wishlist & reviews
- Cart & checkout flow
- Coupon & discount system
- Razorpay payment integration

###  Inventory Management
- Real-time stock tracking
- Automatic stock deduction/restoration
- Stock adjustment logs (ledger system)
- Low-stock alerts
- Warehouse-ready architecture

###  Admin Dashboard
- Sales & revenue analytics
- Order management
- Inventory monitoring
- User management
- Product & category management

###  Advanced Search
- Elasticsearch-powered product search
- Filters, sorting, and relevance ranking

###  Performance & Reliability
- Redis caching
- Image optimization (ImageKit / Cloudinary / AWS S3)
- Centralized logging using Winston
- Clean error handling & validations

---

##  Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Zustand + Context API**
- **React Hook Form**
- **Zod**

### Backend
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB**
- **Redis**
- **Winston**
- **Elasticsearch**

### Services
- **Razorpay** – Payments
- **Resend** – Email services
- **ImageKit / Cloudinary / AWS S3** – Image storage


---

## 🛠️ Getting Started

### Prerequisites
- Node.js (18+)
- MongoDB
- Redis
- npm or yarn

---

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup
```
cd frontend
npm install
npm run dev
```

### Author
Mohammad Asrar
Full-Stack Developer
Focused on building scalable, real-world web applications.
