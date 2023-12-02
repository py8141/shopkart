<template>
    <!-- <p>{{ users[0].title}}</p> -->
  <div class="container">
    <div class="left-column">
      <img
        data-image="black"
        src="https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
        alt=""
      />
      <img
        data-image="blue"
        src="https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
        alt=""
      />
      <img
        data-image="red"
        class="active"
        src="https://img.freepik.com/premium-photo/painting-rainbow-roses_899870-52528.jpg"
        alt=""
      />
    </div>

    <div class="right-column">
      <div class="product-description">
        <h2>{{Product.productName}}</h2>
        <h2>36000 INR</h2>
      </div>
      <div><hr></div>

      <div class="product-configuration">
        <div class="product-color">
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
        </div>
        <div class="brand">
            <span>Brand :</span>

            <div>Brand Name</div>
            
        </div>
        <div class="description">
            <span>Description</span>
            <p>aajnbvfdbifddififbnfndfn</p>
        </div>
      </div>

      <div>
        
        <a href="#" class="cart-btn-add">Add to cart</a>
        <a href="#" class="cart-btn-buy">Buy it Now</a>
      </div>
      <div><hr></div>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  width: 35%;
  margin-top: 60px;
}

.left-column img {
  width: 50%;
  position: absolute;
  left: 10%;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}
.product-description {
 
  margin-bottom: 20px;
}

.product-color {
  margin-bottom: 30px;
}

.color-choose div {
  display: inline-block;
}
.brand div{
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


.description{
    margin-top: 10%;
    
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

.reviw-container{
    margin-top: 10%;
    margin-left: 20%;
}

/* @media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
} */
</style>
   

   <!-- <script>$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });</script> -->

  <script>
 
//   import useRootStore from "@/store/index";
 import { defineComponent } from "vue";


 
 
export default defineComponent({
   
    setup() {
       


        // const rootStore = useRootStore();
        // rootStore.FETCH_POST()
        // const product = computed(() => rootStore.posts.value)
        
        
        


        return {
            // product

            Product:
        {
  "productId": "c809dbb8-e0ef-4a6b-bc5e-1b30a1ea8c81",
  "productName": "Sample Product",
  "productImageURL": [
    "https://example.com/images/product1.jpg",
    "https://example.com/images/product2.jpg"
  ],
  "usp": "High-quality, durable, and versatile",
  "category": "ELECTRONICS", // Replace with the actual category value
  "skus": [
    {
      "mId": "1",
      "stock": 100,
      "price": 299.99,
      "listingPrice": 349.99,
      "isActive": true
    },
    {
      "mId": "2",
      "stock": 50,
      "price": 199.99,
      "listingPrice": 249.99,
      "isActive": true
    }
  ],
  "description": "This is a sample product description.",
  "attribute": {
    "color": "Black",
    "brand": "Sample Brand"
  },
  "reviews": [
    {
      "reviewId": "1",
      "mId": "3",
      "stars": 4.5
    },
    {
      "reviewId": "2",
      "mId": "4",
      "stars": 5.0
    }
  ],
  "ratings": 4.75
}

           
        }
    }
})

        
</script>