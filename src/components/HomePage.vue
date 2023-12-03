<!-- Home.vue -->

<template>
    <div class="home">
      <!-- E-Commerce Application Section -->
      <div class="section ecommerce-section">
        <h2>E-Commerce Application</h2>
        <h1>{{ product.productName }}</h1>
        <div class="product-container">
          <div class="product-item">
            <img :src="product.productImageURL[0]" :alt="product.productName">
            <button @click="shopNow(product.productId)">Shop Now</button>
          </div>
        </div>
      </div>

      <hr>
  
      <!-- Featured Products Section -->
      <div class="section featured-products-section">
        <h2>Featured Products</h2>
        <div class="featured-products-container">
          <div class="featured-product-item">
            <img :src="product.productImageURL[0]" :alt="product.productName">
            <div class="product-info">
              <p>{{ product.productName }}</p>
              <p>{{ product.skus[0].price }}</p>
            </div>
          </div>
        </div>
      </div>

      <hr>
  
      <!-- Product Images Section -->
      <div class="section product-images-section">
        <h2>Product Images</h2>
        <div class="product-images-container">
          <div  class="product-item">
            <img :src="product.productImageURL[0]" :alt="product.productName">
            <div class="product-info">
              <p>{{ product.productName }}</p>
              <div class="stars" :style="{ width: (product.ratings * 20) + '%' }"></div>
              <p>{{ product.skus[0].price }}</p>
            </div>
          </div>
        </div>
      </div>
  
     <hr>

      <!-- About E-Commerce Section -->
      <div class="section about-section">
        <h2>About E-Commerce</h2>
        <p>{{ aboutText }}</p>
      </div>
    </div>
  </template>
  
  <script>
import { defineComponent} from 'vue';

export default defineComponent({
  setup() {
    const product = {
      "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
      "productName": "Sample Product",
      "productImageURL": [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "https://example.com/images/product2.jpg"
      ],
      "usp": "High-quality, durable, and versatile",
      "category": "ELECTRONICS",
      "skus": [
        {
          "mId": "1",
          "stock": 100,
          "price": 299.99,
          "listingPrice": 349.99,
          "isActive": true
        },
        {
          "mId": "2",
          "stock": 50,
          "price": 199.99,
          "listingPrice": 249.99,
          "isActive": true
        }
      ],
      "description": "This is a sample product description.",
      "attribute": {
        "color": "Black",
        "brand": "Sample Brand"
      },
      "reviews": [
        {
          "reviewId": "1",
          "mId": "3",
          "stars": 4.5
        },
        {
          "reviewId": "2",
          "mId": "4",
          "stars": 5.0
        }
      ],
      "ratings": 4.75
    };

    return { product };
  }
});
//   export default {
//     data() {
//       return {
//         ecommerceProducts: [],
//         featuredProducts: [],
//         productImages: [],
//         aboutText: '',
//       };
//     },
//     created() {
//       // For demonstration purposes, using mock data here.
//       // Replace this with actual API calls in your application.
//       this.ecommerceProducts = [
//         {
//           productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
//           productName: "Product 1",
//           productImageURL: ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"],
//           // ... other properties
//         },
//         // Add more products as needed
//       ];
  
//       this.featuredProducts = [
//         {
//           productId: "some-unique-id",
//           productName: "Featured Product 1",
//           productImageURL: ["https://example.com/images/featured1.jpg"],
//           skus: [{ price: "$50.00" }],
//           // ... other properties
//         },
//         // Add more featured products as needed
//       ];
  
//       this.productImages = [
//         {
//           productId: "another-unique-id",
//           productName: "Product 4",
//           productImageURL: ["https://example.com/images/product4.jpg"],
//           ratings: 4.75,
//           skus: [{ price: "$65.00" }],
//           // ... other properties
//         },
//         // Add more product images as needed
//       ];
  
//       this.aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//     },
//     methods: {
//       shopNow(productId) {
//         console.log('Shop Now clicked for product ID:', productId);
//       },
//     },
//   };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  
  /* Existing styles remain unchanged */

  /* Add your CSS styles here */

.home {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.section {
  margin-bottom: 30px;
}

/* E-Commerce Application Section Styles */
.ecommerce-section {
  text-align: center;
}

.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-container button{
    cursor: pointer;
}

.product-item {
  margin: 0 15px;
}

.product-item img {
  max-width: 20%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* transition: transform 0.3s ease-in-out; */
}

.product-item img:hover {
  transform: scale(1.1);
}

.product-item button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Featured Products Section Styles */
.featured-products-section {
  text-align: center;
}

.featured-products-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.featured-product-item {
  margin: 0 15px;
}

.product-info {
  text-align: center;
}

/* Product Images Section Styles */
.product-images-section {
  text-align: center;
}

.product-images-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.stars {
  color: gold;
  font-size: 18px;
  margin-bottom: 5px;
}

/* About E-Commerce Section Styles */
.about-section {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}


  </style>
  