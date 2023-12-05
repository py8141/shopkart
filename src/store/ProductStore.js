import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductRootStore = defineStore("productRoot", () => {
  const products = ref([]);
  const productsOfElectronics = ref([]);
  const productsOfBooks = ref([]);
  const productsOfFashion = ref([]);
  const FETCH_PRODUCTS = async () => {
    const res = await fetch("http://10.20.3.164:8099/api/products/all");
    const jsonnew = await res.json();
    products.value = jsonnew;
  };
  const FETCH_ELECRONICS_PRODUCTS = async () => {
    const res = await fetch(
      "http://10.20.3.164:8099/api/products/by-category/Electronics"
    );
    const jsonnew = await res.json();
    productsOfElectronics.value = jsonnew;
  };
  const FETCH_BOOKS_PRODUCTS = async () => {
    const res = await fetch(
      "http://10.20.3.164:8099/api/products/by-category/Books"
    );
    const jsonnew = await res.json();
    productsOfBooks.value = jsonnew;
  };
  const FETCH_FASHION_PRODUCTS = async () => {
    const res = await fetch(
      "http://10.20.3.164:8099/api/products/by-category/Fashion"
    );
    const jsonnew = await res.json();
    productsOfFashion.value = jsonnew;
  };

  return {
    products,
    FETCH_PRODUCTS,
    FETCH_BOOKS_PRODUCTS,
    FETCH_ELECRONICS_PRODUCTS,
    FETCH_FASHION_PRODUCTS,
    productsOfBooks,
    productsOfElectronics,
    productsOfFashion,
  };
});
