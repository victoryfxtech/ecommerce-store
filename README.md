# Luma Store - Enhanced E-Commerce Portfolio Project

A modern, fully-functional e-commerce storefront concept with responsive design, complete product catalog, working cart system, and advanced shopping features.

## ✨ What's New

### 1. **Complete Product Database**
- 18 curated products across 3 categories (Home, Fashion, Decor)
- Product details: name, price, rating, stock status
- Emoji-based product images for clean, modern aesthetic
- Realistic product names and pricing

### 2. **Fully Functional Shopping Cart**
- Add/remove items from cart
- Adjust quantities with +/- buttons
- Real-time cart total calculation
- Automatic shipping calculation (Free over $50, $8.99 otherwise)
- Persistent cart using localStorage
- Cart count badge in header

### 3. **Smart Wishlist System**
- Add/remove products to wishlist
- Visual heart icon indicator
- Dedicated wishlist drawer
- Add items to cart directly from wishlist
- Persistent storage across sessions
- Beautiful wishlist UI

### 4. **Advanced Product Filtering**
- Filter by category: All, Home, Fashion, Decor
- Active filter state indication
- Instant product grid updates
- Mobile-friendly filter buttons

### 5. **Powerful Search Functionality**
- Real-time product search
- Search across product names
- Search respects current category filter
- Clean search UI that slides down from header
- ESC key to close search
- Search bar icon in navigation

### 6. **Multi-Option Sorting**
- Sort by: Newest, Price (Low to High), Price (High to Low), Name A-Z
- Dropdown selector in product section header
- Works in combination with filters
- Smooth product re-ordering

### 7. **Modern Mobile-First Design**
- Hamburger menu for mobile navigation
- Responsive product grid (4 columns → 2 → 1)
- Touch-friendly buttons (48px minimum)
- Optimized typography for all screen sizes
- Smooth animations and transitions
- Mobile breakpoints: 768px, 480px, 360px

### 8. **Enhanced Navigation**
- Sticky header that stays at top
- Mobile hamburger menu with overlay
- Quick action buttons: Search, Cart, Wishlist
- Smooth menu animations
- Click-to-close functionality
- Keyboard support (ESC closes drawers)

### 9. **Beautiful Cart & Wishlist Drawers**
- Slide-in drawer from the right
- Clean, organized layout
- Real-time updates
- Empty state messaging
- Persistent storage using localStorage
- Smooth open/close animations

### 10. **Professional Details**
- Product ratings display
- Stock status (In Stock / Out of Stock)
- Disabled "Add to Cart" for out-of-stock items
- Subtotal, shipping, and total calculations
- Notification system for user feedback
- Accessible semantic HTML

### 11. **Interactive Story Section**
- Compelling brand story
- Key statistics display
- Responsive grid layout
- Modern typography

### 12. **Accessibility & Performance**
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Respects prefers-reduced-motion
- Fast performance (no external dependencies)
- LocalStorage for offline cart persistence

## 📱 Responsive Breakpoints

- **Desktop** (1200px+): Full navigation, 4-column grid
- **Tablet** (768px): 2-column grid, hamburger menu
- **Mobile** (480px): 1-column grid, optimized spacing
- **Small Devices** (360px): Extra optimizations for ultra-small screens

## 🛠️ Features in Detail

### Shopping Cart
- Real-time quantity adjustment
- Persistent storage (survives page refresh)
- Automatic calculation of subtotal, shipping, and total
- "Free shipping on orders over $50"
- Add/remove items easily
- Visual feedback

### Product Search
- Type to search across all product names
- Works with active category filter
- Real-time results
- Clear search with ESC key or close button

### Product Filters
- 4 categories: All, Home, Fashion, Decor
- Active state indication
- Instant product updates
- Works with sorting and search

### Sorting Options
- Newest (default)
- Price: Low to High
- Price: High to Low
- Name: A-Z

### Wishlist
- Save favorite products
- Persistent across sessions
- Add from wishlist to cart
- Visual heart icon that changes color when active

### Notifications
- Toast notifications for user actions
- "Added to cart" messages
- "Added to wishlist" messages
- Auto-dismiss after 2 seconds

## 🎨 Design Highlights

- **Modern Aesthetic**: Clean, contemporary design with thoughtful spacing
- **Color Palette**: Professional navy (#191919), purple accent (#6b5dfc), warm orange (#f4a460)
- **Typography**: System fonts for fast loading, excellent readability
- **Animations**: Subtle, purposeful transitions (no unnecessary motion)
- **Icons**: Semantic SVG icons throughout
- **Emojis**: Fun, clean product representations

## 📊 Product Catalog

### Home (6 products)
- Ceramic Mug Set - $24.99
- Marble Coasters - $18.99
- Linen Throw Pillow - $32.99
- Wood Cutting Board - $42.99
- Glass Storage Jars - $28.99
- Ceramic Planter - $34.99

### Fashion (6 products)
- Linen Button Shirt - $64.99
- Canvas Tote Bag - $45.99
- Wool Beanie - $38.99
- Minimalist Watch - $89.99
- Cotton Socks Pack - $22.99
- Linen Scarf - $52.99

### Decor (6 products)
- Minimalist Wall Art - $56.99
- Brass Floor Lamp - $78.99
- Woven Wall Hanging - $48.99
- Wooden Shelf Unit - $125.99
- Ceramic Vase - $35.99
- Rattan Mirror - $64.99

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/luma-store.git
git branch -M main
git push -u origin main
```
Then enable GitHub Pages in repository settings.

### Netlify
1. Drag and drop the folder directly
2. Or connect your GitHub repository
3. Deploy automatically on push

### Vercel
1. Import your repository
2. Deploy with one click
3. Automatic deployments on push

## 💾 Local Storage

The store uses `localStorage` to persist:
- Shopping cart items and quantities
- Wishlist items

This means users' cart and wishlist survive:
- Page refresh
- Browser close and reopen
- Multiple sessions

To clear: Open DevTools → Application → LocalStorage → Delete

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, custom properties)
- **JavaScript (Vanilla)**: No frameworks or dependencies
- **LocalStorage API**: Data persistence
- **SVG Icons**: Scalable, crisp icons

## 📋 File Structure

```
luma-store/
├── index.html      - Main HTML with semantic structure
├── style.css       - Modern, responsive CSS
├── script.js       - Complete functionality and interactivity
└── README.md       - This file
```

## 🎯 Key Improvements Over Original

✅ **Functional JavaScript** - All interactive features actually work
✅ **18 Real Products** - Complete product database
✅ **Cart System** - Full shopping cart with calculations
✅ **Wishlist** - Save favorite items
✅ **Search** - Real-time product search
✅ **Filters** - Category filtering
✅ **Sorting** - Multiple sorting options
✅ **Mobile Optimized** - Works perfectly on all devices
✅ **Modern Design** - Contemporary aesthetic
✅ **Persistent Storage** - Cart/wishlist survive refresh
✅ **Notifications** - User feedback system
✅ **Accessibility** - ARIA labels, keyboard support
✅ **No Dependencies** - Pure HTML/CSS/JS

## 🧪 Testing the Store

1. **Add Products to Cart**
   - Click "Add to Cart" on any product
   - See cart count update in header
   - Click cart icon to view full cart

2. **Manage Cart**
   - Adjust quantities with +/- buttons
   - Remove items with × button
   - See total update automatically

3. **Use Wishlist**
   - Click heart icon on any product
   - Click wishlist icon in header
   - Add from wishlist to cart

4. **Search Products**
   - Click search icon
   - Type product name
   - See instant results

5. **Filter & Sort**
   - Use category buttons to filter
   - Select sort option from dropdown
   - Combine filters and sorting

6. **Mobile Testing**
   - Resize browser to test responsive design
   - Or open DevTools → Toggle device emulation
   - Test hamburger menu
   - Try all features on mobile

## 💡 Pro Tips

- Products are sorted by newest by default
- Free shipping kicks in at $50 subtotal
- Out-of-stock items can't be added to cart
- Cart and wishlist persist across sessions
- Use search for quick product discovery
- Try combining filters with sorting

## 🔐 Note on Checkout

This is a portfolio/demo project. The checkout button shows a demo message. In a real implementation, you would:
1. Collect shipping address
2. Integrate payment processor (Stripe, PayPal, etc.)
3. Process payment securely
4. Send confirmation email
5. Track orders

## 📝 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --primary: #191919;      /* Main color */
  --secondary: #6b5dfc;    /* Accent color */
  --accent: #f4a460;       /* Highlight color */
  /* ... */
}
```

### Change Products
Edit the `products` array in `script.js`:
```javascript
const products = [
  { id: 1, name: "Your Product", category: "home", price: 29.99, ... }
  // Add more products
];
```

### Update Store Name
- Change "LUMA" logo in `index.html`
- Update title tag
- Change footer text

## 🎓 Learn From This Project

This project demonstrates:
- Modern vanilla JavaScript patterns
- localStorage API usage
- CSS Grid and Flexbox
- Mobile-first responsive design
- User event handling
- DOM manipulation
- Array methods (map, filter, find, sort)
- ES6+ features
- Accessibility best practices

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Clear cache and localStorage
3. Test in a different browser
4. Ensure JavaScript is enabled

## 📄 License

This is a portfolio project. Feel free to use and modify for your own portfolio.

---

**Built with attention to design, functionality, and user experience.** Perfect for demonstrating modern web development skills!
