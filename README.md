# Paradise Nursery - Houseplant Shopping Application

A beautiful React-based e-commerce application for browsing and purchasing houseplants.

## Features

- **Landing Page**: Beautiful full-screen introduction with company information
- **Product Listing**: Browse plants organized by categories (Air Purifying, Aromatic, Decorative)
- **Shopping Cart**: Full cart management with quantity controls
- **Redux State Management**: Seamless cart synchronization across all pages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- React 19.2.1
- Redux Toolkit for state management
- React Router for navigation
- Plain CSS for styling
- Functional components with hooks

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd paradise-nursery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── ProductCard.js
│   │   └── ProductCard.css
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── LandingPage.css
│   │   ├── ProductListingPage.js
│   │   ├── ProductListingPage.css
│   │   ├── ShoppingCartPage.js
│   │   └── ShoppingCartPage.css
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Breakdown

### Landing Page (/)
- Full-screen background image
- Company name and description
- "Get Started" button navigates to products

### Product Listing Page (/products)
- Header with logo, tagline, and cart icon
- 8 plants across 3 categories
- Add to Cart functionality
- Button disables after adding to cart
- Dynamic cart count in header

### Shopping Cart Page (/cart)
- Same header as product page
- Display all cart items with images
- Quantity controls (increase/decrease)
- Delete item functionality
- Total quantity and amount display
- Continue Shopping and Checkout buttons

## Redux State Management

The cart state includes:
- `cartItems`: Array of products in cart
- `totalQuantity`: Total number of items
- `totalAmount`: Total price of all items

Actions available:
- `addToCart`: Add product to cart
- `removeFromCart`: Remove product from cart
- `increaseQty`: Increase item quantity
- `decreaseQty`: Decrease item quantity (removes if quantity becomes 0)

## Notes

- The deprecation warnings you see when running `npm start` are from webpack-dev-server and don't affect functionality
- All product images are loaded from Unsplash CDN
- No backend is required - all data is static

## License

MIT License
