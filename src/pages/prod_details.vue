<template>
  <div>
    <body>
      <div class="Det">
        <div
          class="row"
          v-bind="product"
        >
          <div class="col_image">
            <img
              class="pr_image"
              :src="product.Image"
            >
          </div>
          <div class="col_text">
            <h2
              class="productname"
              style="height:30%;overflow:hidden;"
            >
              <strong>{{ product.ProductName }}</strong>
            </h2>
            <a
              v-if="Number(product.MRP)"
              style="font-size:15px"
            ><a style="text-decoration:line-through">&#8377; {{ product.MRP }}</a></a>
            <h3> &#8377; {{ product.Price }}</h3>
            <a>Rating: {{ product.Rating }}</a><br>
            <!-- <p style="color:black; font-size:20px;">{{product.Category}}</p> -->
            <!-- <router-link to="/profile/cart">
              <button
                class="Buy_Now"
                style="color:white; background-color:black; font-size:15px;"
              >
                Buy Now
              </button>
            </router-link> -->
            <button
              class="Buy_Now"
              style="color:white; background-color:black; font-size:15px;float:left;"
              @click="addtocart"
            >
              Add to Cart
            </button>
            <div style="float:left;">
              <input
                v-model="counter"
                type="number"
                style="width:20%;margin-top:20%;"
              >
            </div>
            <a v-if="this.addedtocart === 'Added to Cart'">Added to Cart</a>
          </div>
        </div>
        <div class="details">
          <strong>About this Item</strong><br>
          {{ product.Description }}
        </div>
      </div>
    </body>
    <!-- <button style="height:20px; width:50px;color:white;" @click="proddetails">details</button> -->
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'PrDetails',
  data () {
    return {
      product: [],
      producttt: {},
      addedtocart: '',
      counter: 1
    }
  },
  mounted () {
    this.proddetails()
  },
  methods: {
    async proddetails () {
      const response = await AuthenticationService.proddetails(this.$route.params.id)
      console.log(response.data.ProductName)
      console.log(response)
      this.product = response.data
      this.addedtocart = ''
    },
    async addtocart () {
      this.addedtocart = 'Added to Cart'
      const cartresponse = await AuthenticationService.addtocart(this.$route.params.id, {
        cust_id: localStorage.getItem('id'),
        Price: this.product.Price,
        prodname: this.product.ProductName,
        image: this.product.Image,
        quantity: this.counter
      })
      console.log(cartresponse)
    },
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  }
}
</script>
<style>
.row {
  width:100%;
  /* margin: 1%; */
  margin-left: 1%;
}
.productname {
    border-bottom: 1px solid rgb(116, 114, 114);
    width: 100%;
    padding-bottom: 1%;
}
.col_image {
    width: 30%;
    margin: 30px 30px 30px 20px;
    float: left;
    /* border: 1px solid rgb(5, 5, 5); */
    border-radius: 2px;
    height: 325px;
    max-height: 10%;
    padding: 5px 5px 40px 5px;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
  }
.pr_image {
  width: auto;
  height: auto;
  display: block;
  max-height: 315px;
  margin:auto;
}
.col_text {
    width: 60%;
    float: left;
    height: 325px;
    margin-top: 30px;
    margin-left: 20px;
    padding-bottom: 30px;
    padding: 20px 30px 10px 30px;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
}
.Buy_Now {
    width: 20%;
    margin-inline: 5%;
    height: 15%;
    border-radius: 2px;
    color: white;
    margin-bottom: 20px;
}
.details {
    border-top: 1px solid rgb(7, 7, 7);
    min-height: 20px;
    width: 94%;
    margin-top: 50px;
    margin-bottom: 10%;
    margin-left: 2.5%;
    border-top-width: 10px ;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 15px;
    background-color: white;
}
</style>
