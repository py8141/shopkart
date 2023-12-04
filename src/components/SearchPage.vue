<template>
  <div class="card-container">
    <div
      v-for="product in products"
      class="card"
      :key="product.productId"
      @click="routeMeTo"
    >
      <img :src="product.productImageURL[0]" alt="Image 1" />
      <!-- <img v-for="(img,index) in Product.productImageURL" :src="img" :key="index" > -->

      <div class="card-content">
        <h3>{{ product.productName }}</h3>
        <p class="price">Rp. {{ product.skus[0].price }}</p>
        <h3>Rating : {{ Product.reviews[0].stars }} / 5</h3>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const routeMeTo = () => {
      router.push("/product");
    };

    // const rootStore = useRootStore();
    // rootStore.FETCH_POST()
    // const product = computed(() => rootStore.posts.value)

    const products = [
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?w=1800&t=st=1701529012~exp=1701529612~hmac=92a75a5afe76d3b479a42eb774a5f2f4b7a04259e6ad57c4cbac70e3b7c3c0bb",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product 2",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 399.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product4",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
      {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
    ];

    return {
      routeMeTo,
      products,
      Product: {
        productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
        productName: "Sample Product",
        productImageURL: [
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
          "https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg",
        ],
        usp: "High-quality, durable, and versatile",
        category: "ELECTRONICS", // Replace with the actual category value
        skus: [
          {
            mId: "1",
            stock: 100,
            price: 299.99,
            listingPrice: 349.99,
            isActive: true,
          },
          {
            mId: "2",
            stock: 50,
            price: 199.99,
            listingPrice: 249.99,
            isActive: true,
          },
        ],
        description: "This is a sample product description.",
        attribute: {
          color: "Black",
          brand: "Sample Brand",
        },
        reviews: [
          {
            reviewId: "1",
            mId: "3",
            stars: 4.5,
          },
          {
            reviewId: "2",
            mId: "4",
            stars: 5.0,
          },
        ],
        ratings: 4.75,
      },
    };
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
}

.card {
  height: 460px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 350px;
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

@media screen and (min-width: 360px) and (max-width: 600px) {
  .card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    box-sizing: border-box;
    cursor: pointer;
  }
}
</style>

