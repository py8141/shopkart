<template>
    <div class="nav-cnt">
        <div class="nav-left">
            <a @click="takeMeHome">ShopKart</a>
            <!-- <router-link to ="/">ShopKart</router-link> -->
        </div>

        <div :class="{ 'search-cnt-loggedin': isLoggedIn, 'search-cnt-loggedout': !isLoggedIn }">
            <input type="text" class="search-input" placeholder="Enter your need!">
            <button class="search-button">Search</button>
        </div>
        <div class="nav-right" v-if="isLoggedIn">
            <div class="sub-menu">
                <p class="flex"> <img class="icon" :src="ordericon">Orders</p>
                <p class="flex"> <img class="icon" :src="shopingcart">Cart</p>
            </div>
            <img :src="userIcon" class="icon">
            <p>My Profile</p>
            <button class="logoutButton" @click="logout">Logout</button>

        </div>
    </div>
</template>
 
<script>
import { defineComponent, computed } from "vue";
import userIcon from "@/assets/userIcon.svg"
import ordericon from "@/assets/ordericon.svg"
import shopingcart from "@/assets/shopingcart.svg"
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {

        const isLoggedIn = computed(() => {
            const token = sessionStorage.getItem("jwtToken");
            return token !== null && token.length !== 0;
        })
        const logout = () => {
            sessionStorage.removeItem("jwtToken");

            isLoggedIn.value = false;
            window.location.reload()

        };

        const router = useRouter();
        const takeMeHome = () => {
            router.push("/")
        }
        return {
            userIcon,
            ordericon,
            shopingcart,
            isLoggedIn,
            logout,
            takeMeHome
        }
    },
})
</script>
<style scoped>
.search-cnt-loggedin {
    flex: 0.5;
    padding: auto;
}

.search-cnt-loggedout {
    flex: 0.7;
    margin-right: 300px;
}

.logoutButton {
    height: 40px;
    margin: 5px;
    padding: inherit;
    margin-left: 5px;
    background-color: #fff;
    color: #292D32;
    border: 2px solid #292D32;
    border-radius: 5px;
    padding: 4px 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.logoutButton:hover {
    background-color: #292D32;
    color: #fff;
}

.nav-cnt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 5px #F3F3f3;
    position: sticky;
    top: 0px;
    z-index: 999;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sub-menu {
    display: flex;
    /* margin-right: 2rem; */
}

.sub-menu p {
    margin: auto 0.8rem;
}

.nav-left {
    display: flex;
    cursor: pointer;
}

.nav-right {
    display: flex;
    padding: 0 1rem;
}

.icon {
    width: 1.2rem;
    margin: 0.3rem;
}

.search-cnt {
    flex: 0.7;
}

.search-input {
    width: 50%;
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    margin: 0.5rem;
    background-color: #F3F3f3;
    z-index: 5;
}

.search-button {
    padding: 0.8rem;
    border-radius: 1rem;
    border: none;
    background-color: #292D32;
    color: #fff;
}

.nav-cnt a {
    padding: 0 1rem;
    font-weight: 800;
    font-size: 1.1rem;
}
</style>