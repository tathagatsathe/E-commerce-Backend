<template>
  <div>
    <header>
      <div class="hea">
        <Header />
      </div>
    </header>
    <body>
      <div id="app">
        <Navbar />
      </div>
      <div id="slid">
        <Slider />
      </div>
      <div class="row">
        <div class="column">
          <img
            class="ad1"
            src="https://images.freekaamaal.com/post_images/1578392330.png"
            style="width:100%; height:400px;"
          >
        </div>
        <div class="column">
          <img
            class="ad2"
            src="https://d3nuqriibqh3vw.cloudfront.net/images/primewatch1.jpg"
            style="width:100%; height:400px;"
          >
        </div>
        <div class="column">
          <img
            class="ad3"
            src="https://images.freekaamaal.com/post_images/1578392330.png"
            style="width:100%; height:400px;"
          >
        </div>
      </div>
      <div class="row2">
        <div class="column1">
          <img
            class="ad4"
            src="https://d3nuqriibqh3vw.cloudfront.net/images/primewatch1.jpg"
            style="width:100%; height:400px;"
          >
        </div>
        <div class="column1">
          <img
            class="ad5"
            src="https://d3nuqriibqh3vw.cloudfront.net/images/primewatch1.jpg"
            style="width:100%; height:400px;"
          >
        </div>
      </div>
      <div class="row3">
        <div
          v-for="product in products"
          :key="product.id"
          class="column2"
        >
          {{ product.name }}
          <br>
          {{ product.category }}
          <img
            class="ad4"
            src="product.image"
            style="width:100%; height:300px;"
          >
        </div>
        <div class="column3">
          <img
            class="ad4"
            src="https://d3nuqriibqh3vw.cloudfront.net/images/primewatch1.jpg"
            style="width:100%; height:400px;"
          >
        </div>
      </div>
    </body>
    <div class="Footer">
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'
import products from '@/assets/data/products.json'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Slider,
    Footer
  },
  data () {
    return {
      products: products
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

body {
  font-family: 'montserrat', sans-serif;
  margin: 0px;
}
image {
  width: 100px;
}
/* header {
  width: 100%;
  background-color: rgb(0, 0, 0);
  height: 60px;
  padding: 0px;
} */
/* #app {
  width: 100%;
  background-color: rgb(63, 62, 62);
  height: 45px;
  padding: 0px 20px 0px 20px;
} */
/* footer {
  width:100%;
  background-color: black;
  margin-top: 5px;
} */
#slid {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
/* .ad1 {
  position: absolute;
  height:  400px;
  width: 30%;
  margin: 10px 0px 0px 10px;
  align-self: center;
}
.ad2 {
  position: absolute;
  width: 40%;
  height: 400px;
  margin: 10px 0px 0px 420px;
}
.ad3 {
  position: absolute;
  width: 30%;
  height: 400px;
} */
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}
.row::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column1 {
  float: left;
  width: 50%;
  padding: 5px;
  /* margin-top: 430px ; */
}
.row2::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column2 {
  float: left;
  width: 20%;
  padding: 5px;
}
.row3::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
</style>
