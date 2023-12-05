import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const state = reactive({
      registerStatus: { value: {} },
    });
  
    const registerUser = async (userDto) => {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDto),
        };
  
        const res = await fetch("http://localhost:8051/api/users/register", options);
        const jsonResult = await res.json();
  
        state.registerStatus = { ...jsonResult };
  
        return state.registerStatus; 
      } catch (error) {
        console.error("Error during user registration:", error);
        state.registerStatus = { error: "An error occurred during user registration. Please try again later." };
        return state.registerStatus;
      }
    };

    const loginUser = async (userCredentials) => {
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredentials),
          };
      
          const res = await fetch("http://localhost:8051/api/auth/login", options);
      
          if (!res.ok) {
            console.error("Error during login:", res.status);
            throw new Error(`Error during login: ${res.status}`);
          }
      
          const token = await res.json();
    
          
          return token;
        } catch (error) {
          console.error("Error during login:", error);
          throw error; 
        }
      };
  
    return {
      registerUser,
      loginUser
    };
  });
  
  export default useAuthStore;