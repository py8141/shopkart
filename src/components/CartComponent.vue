<template>
    <div class="cart-page">
        <h2>Your Shopping Cart</h2>

        <div v-if="products.length === 0" class="empty-cart">
            <p>Your cart is empty. Start shopping!</p>
            <button>
                <a href="/">Shop Now</a>
            </button>
        </div>

        <div v-else>
            <div class="cart-items">
                <div v-for="(item, index) in products" :key="index" class="cart-item">
                    <div class="product-details">
                        <img :src="item.productImageURL[0]" :alt="item.productName" class="product-image">
                        <div class="product-info">
                            <h3>{{ item.productName }}</h3>
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
import { computed, ref } from 'vue';

export default {
    setup() {
        const products = ref([{
            "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
            "productName": "Sample Product",
            "productImageURL": [
                "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg",
                "https://example.com/images/product2.jpg"
            ],
            "price": 100,
            "quantity": 2,
            "usp": "High-quality, durable, and versatile",
            "category": "ELECTRONICS", // Replace with the actual category value
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
        }, {
            "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
            "productName": "Sample Product",
            "productImageURL": [
                "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg",
                "https://example.com/images/product2.jpg"
            ],
            "price": 300,
            "quantity": 5,
            "usp": "High-quality, durable, and versatile",
            "category": "ELECTRONICS", // Replace with the actual category value
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
        }
        ])

        const totalPrice = computed(() => {
            return products.value.reduce((total, item) => total + item.price * item.quantity, 0)
        })
        const totalItems = computed(() => {
            return products.value.reduce((total, item) => total + item.quantity, 0)
        })

        const increaseQuantity = (index) => {
            products.value[index].quantity++;
        }
        const decreaseQuantity = (index) => {
            if (products.value[index].quantity > 1) {
                products.value[index].quantity--;
            }
        }
        const removeItem = (index) => {
            console.log(products)
            products.value.splice(index, 1);
        }
        return {
            products,
            totalItems,
            totalPrice,
            increaseQuantity,
            decreaseQuantity,
            removeItem
        }
    }
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
    /* transition: transform 0.3s linear; */
}

/* .cart-item:hover {
    transform: translateY(-5px);
} */

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