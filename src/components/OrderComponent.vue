<template>
    <div class="cart-page" v-if="isLoggedIn">
      <h2>Your Shopping Cart</h2>
  
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty. Start shopping!</p>
      </div>
  
      <div v-else>
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="product-details">
              <img :src="item.imageUrl" :alt="item.name" class="product-image">
              <div class="product-info">
                <h3>{{ item.name }}</h3>
                <p class="price">${{ item.price.toFixed(2) }}</p>
              </div>
            </div>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(index)" class="quantity-button">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)" class="quantity-button">+</button>
            </div>
            <div class="total-amount">
              <p>Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
            <button @click="removeItem(index)" class="remove-button">Remove</button>
          </div>
        </div>
  
        <div class="cart-summary">
          <div class="summary-text">
            <p>Total Items: {{ totalItems }}</p>
            <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
          </div>
          <button @click="checkout" class="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {ref , computed} from 'vue';
  export default {
  setup() {
    const cartItems = ref([
      { name: 'Product 1', quantity: 2, price: 20 },
      { name: 'Product 2', quantity: 1, price: 30 },
    
    ]);

    const isLoggedIn = computed(()=> {
      const token = sessionStorage.getItem("jwtToken");
            return token !== null && token.length !== 0;
    }  )
    const totalItems = computed(() => cartItems.value.reduce((total, item) => total + item.quantity, 0));

    const totalPrice = computed(() =>
      cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const increaseQuantity = (index) => {
      cartItems.value[index].quantity++;
    };

    const decreaseQuantity = (index) => {
      if (cartItems.value[index].quantity > 1) {
        cartItems.value[index].quantity--;
      }
    };

    const removeItem = (index) => {
      cartItems.value.splice(index, 1);
    };

    const checkout = () => {
      // Add logic for checkout process
      alert('Proceeding to checkout...');
    };

    return {
      cartItems,
      totalItems,
      totalPrice,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      checkout,
      isLoggedIn
    };
  },
};
  </script>
  
  <style scoped>
  
  .cart-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .empty-cart {
    text-align: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .cart-items {
    margin-top: 20px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
  }
  
  .cart-item:hover {
    transform: translateY(-5px);
  }
  
  .product-details {
    display: flex;
    align-items: center;
  }
  
  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 8px;
  }
  
  .product-info {
    flex-grow: 1;
  }
  
  .price {
    font-weight: bold;
    color: #3498db;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
  }
  
  .quantity-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
  
  .quantity {
    margin: 0 10px;
    font-size: 16px;
  }
  
  .total-amount {
    font-weight: bold;
    color: #27ae60;
  }
  
  .remove-button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
  }
  
  .cart-summary {
    margin-top: 20px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .summary-text {
    font-size: 16px;
  }
  
  .checkout-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
  </style>