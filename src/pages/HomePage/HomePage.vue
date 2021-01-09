<template>
  <div>
    <body>
      <div class="slid">
        <Slider />
      </div>
      <!-- <div>
        <Carousel />
      </div> -->
      <div class="ads">
        <div class="row">
          <div
            v-for="product in watches.slice(0,3)"
            :key="product.prod_id"
            class="column"
          >
            <img
              :src="product.Image"
              style="width:auto; height:70%;border-radius:0px;"
            >
            <router-link
              :to="'/productdetails/'+ product.prod_id"
              style="color:black"
            >
              <a><b>{{ product.ProductName }}</b>
                <br>
                &#8377; {{ product.Price }}</a>
            </router-link>
          </div>
        </div>
        <div class="row2">
          <div
            v-for="product in furniture.slice(1,3)"
            :key="product.id"
            class="column1"
          >
            <img
              :src="product.Image"
              style="width:auto; height:70%;border-radius:0px;"
            >
            <router-link
              :to="'/productdetails/'+ product.prod_id"
              style="color:black"
            >
              <a><b>{{ product.ProductName }}</b>
                <br>
                &#8377; {{ product.Price }}</a>
            </router-link>
          </div>
        </div>
        <div
          class="row3"
          style="width:100%"
        >
          <div
            v-for="product in mobiles"
            :key="product.prod_id"
            class="column2"
          >
            <img
              class="ad4"
              :src="product.Image"
              style="width:auto; height:75%;border-radius:0px;"
            >
            <router-link
              :to="'/productdetails/'+ product.prod_id"
              style="color:black"
            >
              <a><b>{{ product.ProductName }}</b>
                <br>
                &#8377; {{ product.Price }}</a>
            </router-link>
          </div>
        </div>
        <div class="column3">
          <div
            v-for="product in watches.slice(3,4)"
            :key="product.id"
          >
            <div style="width:50%;float:left;">
              <img
                class="ad4"
                :src="product.Image"
                style="width:auto; height:300px;border-radius:0px;"
              >
            </div>
            <div
              class="textcol3"
              style="height:100%;"
            >
              <router-link
                :to="'/productdetails/'+ product.prod_id"
                style="color:black"
              >
                <a><b>{{ product.ProductName }}</b>
                  <br>
                  &#8377; {{ product.Price }}</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
// import Carousel from '@/components/carousel.vue'
import products from '@/assets/data/products.json'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HomePage',
  components: {
    Slider
  },
  data () {
    return {
      products: products,
      mobiles: [],
      watches: [],
      furniture: []
    }
  },
  mounted () {
    this.ads()
  },
  methods: {
    async ads () {
      const response = await AuthenticationService.home()
      console.log(response.data)
      this.mobiles = response.data.slice(0, 5)
      this.watches = response.data.slice(5, 9)
      this.furniture = response.data.slice(9, 13)
    }
  }
}
</script>

<style>
/* * { */
  /* margin: 0; */
  /* padding: 0; */
  /* box-sizing: border-box; */
/* } */

body {
  font-family: 'montserrat', sans-serif;
  margin: 0px;
}
/* image {
  width: 100px;
} */
.ads {
  margin: 0px 5px;
}
.slid {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  height: 450px;
  margin-bottom: 5px;
}
/* .column {
  float: left;
  width: 32% !important;
  padding: 10px !important;
  margin: 15px 5px 15px 5px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.row::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
} */
.column {
  float: left;
  /* padding: 10px !important; */
  width: 31% !important;
  /* border: 1px solid black; */
  /* box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  /* margin-right: 5px; */
  /* margin: 3px 20px 5px 0px; */
  margin: 15px 5px 15px 17px;
  margin-bottom: 20px;
  height: 300px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.column a {
  font-size: 15px;
  display: block;
}
.column img {
  margin: 0px auto;
  display: block;
}
.row::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column1 {
  float: left;
  /* padding: 10px !important; */
  width: 47.5% !important;
  /* border: 1px solid black; */
  /* box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  /* margin-right: 5px; */
  /* margin: 3px 20px 5px 0px; */
  margin: 15px 5px 15px 18px;
  margin-bottom: 20px;
  height: 300px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.column1 a {
  font-size: 15px;
  display: block;
}
.column1 img {
  margin: 0px auto;
  display: block;
}
.row2::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column2 {
  float: left;
  width: 18.1% !important;
  margin: 15px 5px 15px 18px;
  margin-bottom: 20px;
  height: 300px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.column2 a {
  font-size: 11px;
}
.column2 img {
  margin: 0px auto;
  display: block;
}
.row3::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}

.column3 {
  width: 97.3% !important;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 10px 5px 50px 18px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  height: 300px;
}
.column3 img {
  margin: 0px auto;
  display: block;
  /* float: left; */
}
.column3 a{
  font-size: 30px;
  display: block;
  float: left;
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
}
</style>
