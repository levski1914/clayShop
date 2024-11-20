# **E-Commerce Product Page**

## **Description**

This project is an interactive product page for an e-commerce application. It features a dynamic shopping cart, a review system, and local storage functionality to persist the cart's state. Built with **React**, the application includes an image gallery, product customization options (size and color selection), and a review submission system.

---

## **Key Features**

### 1. **Product Page**

- An image gallery for product photos implemented using `ReactImageGallery`.
- Displays product details such as title, price, availability, and description.
- Options to select product size and color.

### 2. **Dynamic Shopping Cart**

- Add products to the cart with selected size, color, and quantity.
- View cart items in a popup modal with quantity adjustment and product removal options.
- Total price calculation based on cart items.
- Cart state is saved in `localStorage` to ensure persistence across page reloads.

### 3. **Review System**

- Allows users to submit reviews with a star rating, name, email, and message.
- Displays a list of submitted reviews dynamically.
- Real-time validation to ensure all fields are filled before submission.

### 4. **LocalStorage Integration**

- Cart items are saved to and retrieved from `localStorage` automatically.
- Ensures cart data is persistent even after refreshing or closing the browser.

---

## **Technologies Used**

- **React**: Component-based architecture for building the user interface.
- **ReactImageGallery**: For the product image carousel.
- **Rater**: For implementing the star rating system.
- **Bootstrap**: For styling and responsive design.
- **LocalStorage**: To persist cart data between sessions.

---

## **Getting Started**

### Prerequisites

- Node.js installed on your system.
- A code editor (e.g., VS Code).

### Installation

1. Clone the repository:

   ```bash
        git clone https://github.com/levski1914/clayShop.git
   ```

   ```bash
        npm install
   ```

   ```bash
        npm run dev
   ```
