<template>
    <div class="nav-cnt">
        <h3>ShopKart</h3>
        <div class="search-cnt">
            <input type="text" class="search-input" placeholder="Enter your need!">
            <button class="search-button">Search</button>
        </div>
        <div class="nav-right">
            <img :src="userIcon" class="icon">
            <p>My Profile</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import userIcon from "@/assets/userIcon.svg"
export default defineComponent({
    setup() {
        return {
            userIcon
        }
    },
})
</script>
<style scoped>
.nav-cnt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ACACAC;
    padding: 0.2rem 1rem;
}

.nav-right {
    display: flex;
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
}

.search-button {
    padding: 0.8rem;
    border-radius: 1rem;
    border: none;
    background-color: #292D32;
    color: #fff;
}
</style>