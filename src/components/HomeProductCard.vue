<template>
    <div>
        <img :src="product.productImageURL[0]" class="product-image" />
        <div>
            <p>{{ product.productName }}</p>
            <p>INR {{ product.skus[0].listingPrice }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const product = {
            "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
            "productName": "Sample Product",
            "productImageURL": [
                "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg",
                "https://example.com/images/product2.jpg"
            ],
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
        return {
            product
        }
    },
})
</script>

<style scoped>
.product-image {
    width: 40%;
    /* animation: move-x-y 2s infinite; */
}

@keyframes move-x-y {
    0% {
        transform: translateX(5px);
    }

    50% {
        transform: translateY(1px);
    }

    100% {
        transform: translateX(5px);
    }
}</style>
