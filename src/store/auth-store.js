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
  
        return state.registerStatus; // You may want to return this value for further handling in components
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
        //   console.log(res);
      
          if (!res.ok) {
            // If the response status is not OK (e.g., 401 Unauthorized), handle accordingly
            console.error("Error during login:", res.status);
            throw new Error(`Error during login: ${res.status}`);
          }
      
          // Try to parse the response text as JSON
          const jsonResult = await res.json();
      
          // Assuming your backend returns a JWT token on successful login
          const token = jsonResult.token;
        //   console.log(token);
          
          return token;
        } catch (error) {
          console.error("Error during login:", error);
          throw error; // Propagate the error to the calling component
        }
      };
  
    return {
      registerUser,
      loginUser
    };
  });
  
  export default useAuthStore;