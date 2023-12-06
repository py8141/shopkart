import { defineStore } from "pinia";
import { ref } from "vue";

export const useInventoryStore = defineStore("inventory", () => {

    const getInventoryByProductId = ref ({value :[]})
    const Get_inventory_by_productId = async(productId)=>{
        const urlWithProductId = `http://localhost:8050/inventory/product/${productId}`;
        const res = await fetch(urlWithProductId);
        const jsonRes = await res.json();
        console.log(jsonRes);
        getInventoryByProductId.value = jsonRes;
    }

    return{
        getInventoryByProductId,
        Get_inventory_by_productId,
    }
});

export default useInventoryStore;