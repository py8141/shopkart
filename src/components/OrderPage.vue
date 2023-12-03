<template>
    <div class="order-page">
      <div class="order-status" :class="{ 'delivered': orderStatus === 'delivered', 'cancelled': orderStatus === 'cancelled', 'pending': orderStatus === 'pending' }">
        <h2>Your Order Status</h2>
        <p>{{ orderStatus }}</p>
      </div>
  
      <div class="order-details">
        <div class="section">
          <h3>Shipping Information</h3>
          <p><strong>Delivery Address:</strong> {{ shippingAddress }}</p>
          <p><strong>Estimated Delivery Date:</strong> {{ estimatedDeliveryDate }}</p>
        </div>
  
        <div class="section">
          <h3>Ordered Items</h3>
          <ul>
            <li v-for="(item, index) in orderItems" :key="index">
              <span>{{ item.name }} - Quantity: {{ item.quantity }}</span>
            </li>
          </ul>
        </div>
  
        <div class="section">
          <h3>Total Amount</h3>
          <p><strong>Subtotal:</strong> ${{ subtotal.toFixed(2) }}</p>
          <p><strong>Shipping Fee:</strong> ${{ shippingFee.toFixed(2) }}</p>
          <p><strong>Total:</strong> ${{ total.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orderStatus: 'pending',
        shippingAddress: '1234 Main St, Cityville, State, 12345',
        estimatedDeliveryDate: 'December 10, 2023',
        orderItems: [
          { name: 'Product 1', quantity: 2 },
          { name: 'Product 2', quantity: 1 },
          // Add more items as needed
        ],
        subtotal: 90.0,
        shippingFee: 10.0,
        total: 100.0,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  
  .order-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .order-status {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
  }
  
  .delivered {
    background-color: #2ecc71;
  }
  
  .cancelled {
    background-color: #e74c3c;
  }
  
  .pending {
    background-color: #3498db;
  }
  
  .order-details {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .section {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  h3 {
    color: #3498db;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  strong {
    font-weight: bold;
  }
  </style>  