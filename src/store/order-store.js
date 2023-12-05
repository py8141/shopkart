import { defineStore } from "pinia";
import { ref } from "vue";


export const useProductRootStore = defineStore("productRoot", () => {
    const order = ref([]);
   
  
    const FETCH_ORDER = async (userId) => {
      const res = await fetch(`http://10.20.3.72:8095//api/orders/byUserId/${userId}`);
      const jsonnew = await res.json();
      order.value = jsonnew;
      console.log(FETCH_ORDER.value);
    };
    
  
  
    return {
      order,
      FETCH_ORDER,
     
    };
  });
  export default useProductRootStore;
  
