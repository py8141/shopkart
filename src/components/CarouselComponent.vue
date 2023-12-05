<template>
    <div class="carousel">
        <div class="carousel-wrapper">
            <div class="carousel-inner" :style="{ transform: `translateX(${translateX}px)` }">
                <div v-for="(product, index) in products" :key="index" class="carousel-item"
                    @click="routeMeToProduct(product.productId)">
                    <img :src="product.productImageURL[0]" alt="Product" />
                    <p>{{ product.productName }}</p>
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
import { ref, onMounted, computed, onBeforeMount, watch } from 'vue';
import rightIcon from "@/assets/righticon.svg"
import leftIcon from "@/assets/lefticon.svg"
import { useProductRootStore } from "@/store/ProductStore"
import { useRouter } from 'vue-router'
export default {

    setup() {
        const router = useRouter();
        const productStore = useProductRootStore();
        const products = computed(() => productStore.products);
        watch(products, () => {
            if (products?.value) {
                products.value.reverse()
            }
        })
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
            if (currentIndex.value < products.value.length - 4) {
                currentIndex.value++;
                translateX.value -= itemWidth.value;
            }
        };

        onBeforeMount(async () => {
            await productStore.FETCH_PRODUCTS()
        })
        onMounted(() => {
            const carousel = document.querySelector('.carousel-wrapper');
            itemWidth.value = Math.ceil(carousel.clientWidth / 5); // Display 5 items at a time
        });
        const routeMeToProduct = (productId) => {
            router.push(`/products/${productId}`)
        }

        const showPrevButton = computed(() => currentIndex.value > 0);
        const showNextButton = computed(() => currentIndex.value < products.value.length - 1);

        return {
            translateX,
            prev,
            next,
            rightIcon,
            leftIcon,
            showPrevButton,
            showNextButton,
            products,
            routeMeToProduct
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

.carousel-item {
    cursor: pointer;
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