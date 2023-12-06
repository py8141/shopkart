import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderService = defineStore("OrderrOOT", () => {
  const order = ref([]);

  const FETCH_ORDER = async (userId) => {
    const res = await fetch(
      `http://localhost:8095/api/orders/byUserId/${userId}`
    );
    const jsonnew = await res.json();
    order.value = jsonnew;
    console.log(FETCH_ORDER.value);
  };

  const ADD_ORDER = async (OrderItem) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(OrderItem),
    };

    const urlWithUserId = `http://localhost:8095/api/orders/add`;
    const res = await fetch(urlWithUserId, options);
    console.log(res);
  };

  return {
    order,
    FETCH_ORDER,
    ADD_ORDER
  };
});
export default useOrderService;
