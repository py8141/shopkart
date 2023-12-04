import { defineStore } from "pinia";
import { reactive } from "vue";

  export const useProductRootStore = defineStore("productRoot", () => {
  const products = reactive({ value: {} });
  const FETCH_PRODUCTS = async () => {
    const res = await fetch("http://10.20.3.164:8099/api/products/all");
    const jsonnew = await res.json();
    products.value = { ...jsonnew };
  };

  return {
    products,
    FETCH_PRODUCTS,
  };
});
