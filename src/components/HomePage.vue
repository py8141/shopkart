<template>
    <div class="hero">
        <div class="hero-cnt-title-cnt">
            <h2 class="hero-cnt-title">
                One Stop Solution for all your needs!
            </h2>
        </div>
        <hr class="hr-line">
        <div class="hero-card-cnt">
            <HomeProductCard />
            <HomeProductCard />
            <HomeProductCard />
        </div>
        <button class="action-btn">Shop Now!</button>
        <div class="hero-2">
            <h2>Featured Deals</h2>
            <div class="carousel-holder">
                <CarouselComponent />
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-cnt-title {
    padding: 5rem;
}

.hr-line {
    width: 20%;
}

.hero-card-cnt {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.hero {
    margin: 1rem
}

.action-btn {
    padding: 0.8rem 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #292D32;
    color: #fff;
}

.carousel-holder {
    max-height: 2rem;
}

.hero-2 {
    margin-top: 3rem;
}
</style>

<script>
import { defineComponent } from 'vue'
import HomeProductCard from "@/components/HomeProductCard.vue"
import CarouselComponent from "@/components/CarouselComponent"
export default defineComponent({
    components: {
        HomeProductCard,
        CarouselComponent
    },
    
    setup() {
        

    },
})
</script>
