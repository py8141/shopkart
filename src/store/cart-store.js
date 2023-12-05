import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStoer = defineStore("cart",()=>{
    const cartObject = reactive({ value: {} })

    const UPDATE_CART = async(cartItemsDto,userId) =>{
        try {
            const options = {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItemsDto),
              };

              const urlWithUserId = `http://localhost:8095/api/carts/update?userId=${userId}`;
              const res = await fetch(urlWithUserId,options);
              const jsonRes = await res.json();
              cartObject.value = {...jsonRes}
        }
        catch(error){
            console.error("Error During resgistration");
        }
    }

    return{
        cartObject,
        UPDATE_CART,
    }
})