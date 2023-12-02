<template>


 
  <div class="card-container">
  
    <div v-for="product in products"  class="card" :key="product.productId">
      <img :src="product.productImageURL[0]" alt="Image 1">
      <!-- <img v-for="(img,index) in Product.productImageURL" :src="img" :key="index" > -->
    
      <div class="card-content">
        <h3>{{ product.productName }}</h3>
        <p class="price">{{ product.skus[0].price }}</p>
        <div class="rating">
          <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
        </div>
      </div>
    </div>
    
</div>


</template>

<script>

import { defineComponent } from "vue";


 
 
export default defineComponent({
   
    setup() {
       


        // const rootStore = useRootStore();
        // rootStore.FETCH_POST()
        // const product = computed(() => rootStore.posts.value)
        
        
        const products=[
        {
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?w=1800&t=st=1701529012~exp=1701529612~hmac=92a75a5afe76d3b479a42eb774a5f2f4b7a04259e6ad57c4cbac70e3b7c3c0bb",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product 2",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
  ],
  "usp": "High-quality, durable, and versatile",
  "category": "ELECTRONICS", // Replace with the actual category value
  "skus": [
    {
      "mId": "1",
      "stock": 100,
      "price": 399.99,
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
,{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
},
{
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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
        ]


        return {
            // product
products,
            Product:
        {
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
    "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
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

           
        }
    }
})

        

</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  

  .card {
    width: calc(25% - 20px); 
    background-color: #ffffff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    box-sizing: border-box; 
    
  }
  

  .card img {
    width: 100%;
    border-radius: 10px;
    
  }
  
  .card-content {
    margin-top: 10px;
  }
  
  .card-content h3 {
    margin: 5px 0;
  }
  
  .price {
    margin: 5px 0;
    font-weight: bold;
  }
  
  .rating {
    color: gold;
    font-size: 20px;
  }




  

  .rating {
    font-size: 24px;
    cursor: pointer;
    color: rgb(208, 208, 16);
  }
  
</style>


<!-- Rating.vue -->
<!-- <template>
    <div class="rating">
      <span v-for="star in totalStars" :key="star" @click="rate(star)">
        {{ star <= currentRating ? '★' : '☆' }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalStars: {
        type: Number,
        default: 5,
      },
      initialRating: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        currentRating: this.initialRating,
      };
    },
    methods: {
      rate(star) {
        this.currentRating = star;
        this.$emit('update:initialRating', star);
      },
    },
  };
  </script>
  
 
  </style>
   -->