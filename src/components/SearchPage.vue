<template>
  <div class="card-container">
    <div v-for="product in products" class="card" :key="product.productId" @click="routeMeTo(product.productId)">
      <img :src="product.productImageURL[0]" alt="Image 1" />
      <!-- <img v-for="(img,index) in Product.productImageURL" :src="img" :key="index" > -->

      <div class="card-content">

        <h3>{{ product.productName }}</h3>
        <p class="price">Rs. {{ product?.skus?.[0].price }}</p>

        <h3>Rating : {{ product.reviews }} / 5</h3>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { computed, defineComponent } from "vue";
import useProductRootStore from "@/store/ProductStore";

export default defineComponent({
  setup() {
    const rootStore = useProductRootStore();
    rootStore.FETCH_PRODUCTS()
    const products = computed(() => rootStore.products)
    const routeMeTo = (productId) => {
      router.push(`/product/${productId}`);
    };

    return {
      routeMeTo,
      products,
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
.oneline{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.card {
  height: 480px;
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
  height: 330px;
  border-radius: 10px;
  object-fit: contain;
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

