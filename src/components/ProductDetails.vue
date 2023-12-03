<template>
  <!-- <p>{{ users[0].title}}</p> -->
  <div class="container">
    <div class="left-column">
      <img
        src="https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
        alt=""
      />
    </div>

    <div class="right-column">
      <div class="product-description">
        <h2>{{ Product.productName }}</h2>
        <h2>{{ Product.skus[0].price }}</h2>
        <h3>
          Hurry up! only {{ Product.skus[0].stock }} product left in stock!
        </h3>
        <h3>Rating : {{ Product.reviews[0].stars }} / 5</h3>
      </div>
      <div><hr /></div>

      <div class="product-configuration">
        <!-- <div class="product-color">
          <span>Color</span>

          <div class="color-choose">
            <div>
              <input
                data-image="red"
                type="radio"
                id="red"
                name="color"
                value="red"
                checked
              />
              <label for="red"><span></span></label>
            </div>
            <div>
              <input
                data-image="blue"
                type="radio"
                id="blue"
                name="color"
                value="blue"
              />
              <label for="blue"><span></span></label>
            </div>
            <div>
              <input
                data-image="black"
                type="radio"
                id="black"
                name="color"
                value="black"
              />
              <label for="black"><span></span></label>
            </div>
          </div>
        </div> -->
        <div class="brand">
          <span>Brand :</span>

          <div>{{ Product.attribute.brand }}</div>
        </div>
        <div class="color">
          <span>Color :</span>

          <div>{{ Product.attribute.color }}</div>
        </div>
        <div class="description">
          <span>Description</span>
          <p>{{ Product.description }}</p>
        </div>
      </div>
      <div class="merchant">
        <div></div>
        <div></div>
      </div>
      <div><hr /></div>
      <div>
        <a href="#" class="cart-btn-add">Add to cart</a>
        <a href="#" class="cart-btn-buy">Buy it Now</a>
      </div>
    </div>
  </div>
  <div class="reviw-container">
    <h2>Customer Reviws</h2>
    <p>No Reviws Yet</p>
    <div><p>Write a reviws</p></div>
    
  </div>
</template>
   
  
   
   <style scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.left-column {
  width: 300px;
  height: 400px;
  position: relative;
}

.right-column {
  width: 300px;
  height: 400px;
  
}

.left-column img {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  top: 10%;
  transition: all 0.3s ease;
}

.product-description {
  margin-bottom: 20px;
}

.brand div {
  display: inline-block;
  margin-left: 5%;
}
.color div {
  margin-top: 5%;
  display: inline-block;
  margin-left: 5%;
}

/* .color-choose input[type="radio"] {
  display: none;
} */

.color-choose input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
}

.color-choose input[type="radio"]#red + label span {
  background-color: #c91524;
}
.color-choose input[type="radio"]#blue + label span {
  background-color: #314780;
}
.color-choose input[type="radio"]#black + label span {
  background-color: #323232;
}

.color-choose input[type="radio"]:checked + label span {
  background-repeat: no-repeat;
  background-position: center;
}

.description {
  margin-top: 5%;
}

.cart-btn-add {
  display: inline-block;
  background-color: #010101;
  border-radius: 20px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 30px;
  transition: all 0.5s;
}
.cart-btn-buy {
  display: inline-block;
  background-color: #6f6f6f;
  border-radius: 20px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 30px;
  transition: all 0.5s;
  margin-left: 10%;
}
.cart-btn-add:hover {
  background-color: #737373;
  color: #010101;
}

.cart-btn-buy:hover {
  background-color: #926868;
  color: #010101;
}

.reviw-container {
  margin-top: 10%;
  margin-left: 10%;
  border-radius: 25px;
  border: 2px solid #8e918e;
  padding: 20px; 
  width: 80%;
   
}

@media screen and (min-width: 360px) and (max-width: 900px) {
  .container {
    display: flex;

    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .left-column {
    margin-top: 10%;

    width: 300px;
    height: 400px;
  }

  .right-column {
    margin-top: 10%;

    width: 300px;
    height: 400px;
  }
  .reviw-container{
    width: 300px;
   margin-left: 10%;
  }
  .reviw-container {
  
  margin: auto;
  border-radius: 25px;
  border: 2px solid #8e918e;
  padding: 20px; 
  width: 300px;
  }
  
}
</style>
   

  

  <script>
//   import useRootStore from "@/store/index";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // const rootStore = useRootStore();
    // rootStore.FETCH_POST()
    // const product = computed(() => rootStore.posts.value)
    const Product = {
      productId: "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
      productName: "Sample Product",
      productImageURL: [
        "https://example.com/images/product1.jpg",
        "https://example.com/images/product2.jpg",
      ],
      usp: "High-quality, durable, and versatile",
      category: "ELECTRONICS", // Replace with the actual category value
      skus: [
        {
          mId: "1",
          stock: 100,
          price: 299.99,
          listingPrice: 349.99,
          isActive: true,
        },
        {
          mId: "2",
          stock: 50,
          price: 199.99,
          listingPrice: 249.99,
          isActive: true,
        },
      ],
      description: "This is a sample product description.",
      attribute: {
        color: "Black",
        brand: "Sample Brand",
      },
      reviews: [
        {
          reviewId: "1",
          mId: "3",
          stars: 4.5,
        },
        {
          reviewId: "2",
          mId: "4",
          stars: 5.0,
        },
      ],
      ratings: 4.75,
    };
    const merchant = ref([]);
    for (let ele of Product.skus) {
      merchant.value.push(ele);
    }
    
    return {
      // product
      Product,
      merchant,
    };
  },
});
</script>