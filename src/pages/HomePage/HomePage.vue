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
        <div class="containr">
          <div
            v-for="product in watches.slice(0,3)"
            :key="product.prod_id"
            class="containr-box"
            style="width:31%"
          >
            <router-link
              :to="'/productdetails/' + product.prod_id"
              style="color:black"
            >
              <img :src="product.Image">
              <h2 style="font-size:15px;padding: 2px 5px">
                <b>{{ product.ProductName|truncate }}</b>
              </h2>
              <a style="font-size:15px;padding: 2px 5px">&#8377; {{ product.Price }} </a>
            </router-link>
          </div>
        </div>
        <!-- <div class="row">
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
        </div> -->
        <!-- <div class="row2">
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
        </div> -->
        <strong><a style="margin-left:1%; font-size:25px;">Furniture</a></strong><br>
        <div class="containr">
          <div
            v-for="product in furniture.slice(1,3)"
            :key="product.prod_id"
            class="containr-box"
            style="width:48%"
          >
            <router-link
              :to="'/productdetails/' + product.prod_id"
              style="color:black"
            >
              <img :src="product.Image">
              <h2 style="font-size:15px;padding: 2px 5px">
                <b>{{ product.ProductName|truncate }}</b>
              </h2>
              <a style="font-size:15px;padding: 2px 5px">&#8377; {{ product.Price }} </a>
            </router-link>
          </div>
        </div>
        <strong><a style="margin-left:1%; font-size:25px;">Mobiles</a></strong><br>
        <div class="containr">
          <div
            v-for="product in mobiles"
            :key="product.prod_id"
            class="containr-box"
            style="width:18%;"
          >
            <router-link
              :to="'/productdetails/' + product.prod_id"
              style="color:black"
            >
              <img :src="product.Image">
              <h2 style="font-size:15px;padding: 2px 5px">
                <b>{{ product.ProductName|truncate }}</b>
              </h2>
              <a style="font-size:15px;padding: 2px 5px">&#8377; {{ product.Price }} </a>
            </router-link>
          </div>
        </div>
        <!-- <div class="row3" style="width:100%">
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
        </div> -->
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
        <strong><a style="margin-left:1%; font-size:25px;"> Watches </a></strong>
        <div
          class="scrolling-wrapper"
          style="height:350px;margin-bottom:50px;margin-left:1%;"
        >
          <div
            v-for="product in watches"
            :key="product.prod_id"
            class="card"
            style="height:90%;width:20%;margin-top: 1%;margin-right:1.5%;"
          >
            <router-link
              :to="'/productdetails/' + product.prod_id"
              style="color:black;"
            >
              <div style="height:70%;">
                <img
                  :src="product.Image"
                  style="height:100%;width:auto; display:block; margin-right:auto; margin-left:auto;"
                >
              </div>
              <div style="height:15%;overflow:hidden;padding: 0px 5px;white-space: nowrap;">
                <a><b>{{ product.ProductName }}</b></a>
              </div>
              <div style="height:15%;padding:0px 5px;">
                &#8377; {{ product.Price }}
              </div>
            </router-link>
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
  filters: {
    truncate: function (value) {
      if (value && value.length > 50) {
        value = value.substring(0, 50) + '...'
      }
      return value
    }
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
      // console.log(response.data)
      this.products = response.data
      this.mobiles = response.data.slice(0, 5)
      this.furniture = response.data.slice(16, 19)
      this.products.forEach(element => {
        if (element.Category === 'Watches') {
          if (element.Category === 'Watches') {
            this.watches.push(element)
          }
        }
      })
      console.log(this.watches)
    }
  }
}
</script>

<style>
 .containr{
  display: flex;
  justify-content: space-around;
  height: 300px;
  margin: 20px 0;
}
.containr-box {
  padding: 4px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.containr-box img {
  height: 70%;
  display: block;
  width: auto;
  margin: auto;
}
.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.card {
  display: inline-block;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  vertical-align: center;
}
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
  margin-bottom: 50px;
}
/* .column {
  float: left;
  width: 31% !important;
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
  width: 47.5% !important;
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
} */
.column3 {
  width: 97.3% !important;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 50px 5px 50px 18px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  height: 300px;
}
.column3 img {
  margin: 0px auto;
  display: block;
}
.column3 a{
  font-size: 30px;
  display: block;
  float: left;
  width: 50%;
  height: 100%;
}
</style>
