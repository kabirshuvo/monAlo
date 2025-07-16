# 🕯️ MonAlo – Light Up & Level Up

MonAlo is a modern full-stack web application that blends an elegant **artisan candle shop** with a curated **learning platform**. Built with the latest technologies in the JavaScript ecosystem, MonAlo is designed to be scalable, user-friendly, and immersive — whether you're shopping for peace or seeking personal growth.

---

## ✨ Features

### 🛍️ Candle Shop

- Browse beautiful handmade candles
- View product details with categories, prices, and descriptions
- Add to cart and checkout securely
- Cart system with global state management
- Responsive and aesthetic UI

### 🎓 Learning Platform

- Explore curated courses
- Enroll and track learning progress
- Rich lesson structure (text, video, etc.)
- Dual experience: Learn while you light

### 🔐 Authentication

- Secure login/logout using NextAuth.js
- Role-based access (Guest, Customer, Learner, Admin)

### 💳 Payments (Coming Soon)

- Integrated **SSLCommerz** and **bKash** gateways for secure checkout

---

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + [shadcn/ui](https://ui.shadcn.com) |
| **State Management** | Redux Toolkit |
| **Authentication** | NextAuth.js |
| **Database** | MongoDB + Mongoose |
| **Image Hosting** | (Optional) Cloudinary |
| **Editor & UI Enhancers** | CKEditor 5, Lucide Icons, Dialogs, Toasts |
| **Payments** | SSLCommerz, bKash (Bangladesh) |

---

## 📁 Folder Structure

monalo/
├── app/ # App Router pages & layouts
│ ├── shop/ # Candle store routes
│ ├── learn/ # Learning platform routes
│ ├── api/ # API routes (REST, Mongo-connected)
│ └── page.tsx # Home page
├── components/ # UI and reusable components
│ └── ui/ # shadcn components
├── lib/
│ ├── mongoose.ts # DB connection
│ └── redux/ # Redux store & slices
├── models/ # Mongoose models (Course, Order, Lesson, User, etc.)
├── public/ # Static assets
├── styles/ # Global styles
├── .env.local # Environment variables
└── README.md # You're reading it!


---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/monalo.git
cd monalo


Install dependencies

bash
Copy
Edit
npm install
Set up environment

Create a .env.local file and add your credentials:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
Run the app

bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

⭐️ Inspiration
“Light up your space, level up your soul.”

MonAlo isn't just a store. It’s a state of mind.