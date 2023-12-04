<template>
    <div class="carousel">
        <div class="carousel-wrapper">
            <div class="carousel-inner" :style="{ transform: `translateX(${translateX}px)` }">
                <div v-for="(product, index) in products" :key="index" class="carousel-item">
                    <img :src="product.image" alt="Product" />
                </div>
            </div>
        </div>
        <button @click="prev" class="carousel-button prev-button" v-show="showPrevButton"> <img class="slider-icons"
                :src="leftIcon"> </button>
        <button @click="next" class="carousel-button next-button" v-show="showNextButton"><img class="slider-icons"
                :src="rightIcon"> </button>
    </div>
</template>
  
<script>
import { ref, onMounted, computed } from 'vue';
import rightIcon from "@/assets/righticon.svg"
import leftIcon from "@/assets/lefticon.svg"
export default {
    setup() {
        const products = [
            { image: "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/2577-1.JPG" },
            { image: "https://assets.sangeethamobiles.com/product_img/4777-2.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/2577-1.JPG" },
            { image: "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/2577-1.JPG" },
            { image: "https://assets.sangeethamobiles.com/product_img/4777-2.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/14507/1694714687_bw9.jpg" },
            { image: "https://assets.sangeethamobiles.com/product_img/2577-1.JPG" }
        ];

        const translateX = ref(0);
        const itemWidth = ref(0);
        const currentIndex = ref(0);

        const prev = () => {
            if (currentIndex.value > 0) {
                currentIndex.value--;
                translateX.value += itemWidth.value
            }
        };

        const next = () => {
            if (currentIndex.value < products.length - 5) {
                currentIndex.value++;
                translateX.value -= itemWidth.value;
            }
        };

        onMounted(() => {
            const carousel = document.querySelector('.carousel-wrapper');
            itemWidth.value = Math.ceil(carousel.clientWidth / 5); // Display 5 items at a time
        });

        const showPrevButton = computed(() => currentIndex.value > 0);
        const showNextButton = computed(() => currentIndex.value < products.length - 1);

        return {
            products,
            translateX,
            prev,
            next,
            rightIcon,
            leftIcon,
            showPrevButton,
            showNextButton
        };
    },
};
</script>
  
<style scoped>
.carousel {
    width: 100%;
    position: relative;
    z-index: 1;
}

.carousel-wrapper {
    display: flex;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    flex: 0 0 auto;
    width: 20%;
    /* Display two items at a time */
}

img {
    max-width: 100%;
    height: 12rem;
    object-fit: contain;
}

.carousel-button {
    position: absolute;
    top: 5rem;
    transform: translateY(-50%);
    /* background: rgba(0, 0, 0, 0.5); */
    background: transparent;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}

.slider-icons {
    width: 1.5rem;
}
</style>