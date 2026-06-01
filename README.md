# ☀️ SunCart

> A modern summer e-commerce web application built with Next.js 15, featuring authentication, product browsing, and user profile management.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://b13-assignment-8-five.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

---

## 🌐 Live Preview

**🔗 [https://b13-assignment-8-five.vercel.app/](https://b13-assignment-8-five.vercel.app/)**

---

## 📸 Features

- 🛒 **Product Listing** — Browse 12+ summer products with ratings, prices, and categories
- 🔍 **Product Details** — Dedicated page for each product with full information
- 🔐 **Authentication** — Email/password registration & login powered by **Better Auth**
- 🔑 **Google OAuth** — One-click sign-in via Google
- 👤 **User Profile** — View and edit profile (name & avatar)
- 🎠 **Auto-sliding Banner** — Animated promotional banner with `animate.css`
- 🌿 **Summer Care Tips** — Helpful tips section on the homepage
- ⭐ **Top Brands Showcase** — Featured brand cards
- 📱 **Fully Responsive** — Mobile-first layout with hamburger menu
- 🍞 **Toast Notifications** — Real-time feedback via `react-toastify`

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Authentication | Better Auth v1.6 |
| Database | MongoDB (via `@better-auth/mongo-adapter`) |
| Icons | React Icons v5 |
| Animations | Animate.css v4 |
| Notifications | React Toastify v11 |
| Deployment | Vercel |

---

## 📁 Project Structure

```
suncart/
├── public/
│   ├── assets/
│   │   ├── banner1.png
│   │   ├── banner2.png
│   │   └── product-images/         # 12 product images
│   └── data/
│       └── product-data.json       # Static product data (12 items)
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/[...all]/
│   │   │       └── route.js        # Better Auth API handler
│   │   ├── components/
│   │   │   ├── Banner.jsx          # Auto-rotating hero banner
│   │   │   ├── Footer.jsx          # Footer with social links
│   │   │   ├── Navbar.jsx          # Responsive sticky navbar
│   │   │   ├── PopularProducts.jsx # Homepage product section
│   │   │   ├── ProductCard.jsx     # Reusable product card
│   │   │   ├── SummerCareTips.jsx  # Tips section
│   │   │   └── TopBrands.jsx       # Brands showcase
│   │   ├── login/
│   │   │   └── page.js             # Login page
│   │   ├── my-products/
│   │   │   ├── page.js             # All products listing
│   │   │   └── [id]/page.js        # Product detail page
│   │   ├── my-profile/
│   │   │   ├── page.js             # Profile view page
│   │   │   └── edit/page.js        # Profile edit page
│   │   ├── register/
│   │   │   └── page.js             # Registration page
│   │   ├── globals.css
│   │   ├── layout.js               # Root layout with Navbar & Footer
│   │   ├── not-found.jsx           # Custom 404 page
│   │   └── page.js                 # Homepage
│   └── lib/
│       ├── auth.js                 # Better Auth server config
│       └── auth-client.js          # Better Auth client config
│
├── .env                            # Environment variables
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- A MongoDB Atlas cluster (or local MongoDB instance)
- Google OAuth credentials (optional, for social login)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/suncart.git
cd suncart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/suncart

# Better Auth
BETTER_AUTH_SECRET=your_random_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# Public URL (used by auth client)
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> **Note:** To generate a secure `BETTER_AUTH_SECRET`, run: `openssl rand -base64 32`

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📦 Product Data

Products are served from a static JSON file at `public/data/product-data.json`. The store currently includes **12 summer products** across 4 categories:

| Category | Products |
|---|---|
| Accessories | UV Protection Sunglasses, Water Bottle, Beach Bag |
| Fashion | Beach Hat, Sun Hat |
| Clothing | Summer T-Shirt, Beach Shorts |
| Skincare | SPF 50 Sunscreen, Cooling Face Mist, Aloe Vera Gel |
| Footwear | Flip Flops, Sandals |

---

## 🔐 Authentication Flow

SunCart uses **[Better Auth](https://better-auth.com/)** for authentication with MongoDB as the persistent store.

- **Email/Password** — Standard sign-up and sign-in
- **Google OAuth** — Social login via Google provider
- **Session Management** — `authClient.useSession()` hook used across all protected pages
- **Profile Updates** — `authClient.updateUser()` to update name and avatar

---

## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to a GitHub repository
2. Import the project into [Vercel](https://vercel.com/)
3. Add all environment variables from `.env` to Vercel's project settings
4. Deploy — Vercel auto-detects Next.js and handles the build

---

## 📄 Pages Overview

| Route | Description | Auth Required |
|---|---|---|
| `/` | Homepage with banner, products, tips & brands | No |
| `/my-products` | Full product grid listing | No |
| `/my-products/[id]` | Individual product details | No |
| `/login` | Email & Google login | No |
| `/register` | New user registration | No |
| `/my-profile` | View user profile | Yes |
| `/my-profile/edit` | Edit name and avatar | Yes |

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/suncart/issues).

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ and ☀️ — <a href="https://b13-assignment-8-five.vercel.app/">Live Demo</a>
</div>
