import { defineStore } from "pinia";
import { reactive } from "vue";

  export const useProductRootStore = defineStore("productRoot", () => {
  const products = reactive({ value: {} });
  const LastesProductById = reactive({ value: {} });
  const FETCH_PRODUCTS = async () => {
    const res = await fetch("http://10.20.3.164:8099/api/products/all");
    const jsonnew = await res.json();
    products.value = { ...jsonnew };
  };

  const FETCH_PRODUCT_BY_ID = async (productId)=>{
    const res = await fetch(`http://10.20.3.164:8099/api/products/${productId}`);
    const jsonnew = await res.json();
    LastesProductById.value = { ...jsonnew };
    console.log(LastesProductById.value)
  }

  return {
    products,
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCTS,
    LastesProductById
  };
});
export default useProductRootStore;