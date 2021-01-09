<template>
  <div>
    <!-- <button @click="search" style="width:50px; height:30px;color:white;">search</button> -->
    <body>
      <div class="psearchcol">
        <div class="psearchcol1">
          <strong>Price Range</strong>
          <br>
          <form action="#">
            <input
              id="price1"
              type="checkbox"
              name="price1"
            >
            <label for="price1"> Under 1000</label><br>
            <input
              id="price2"
              type="checkbox"
              name="price2"
            >
            <label for="price2"> 1000 - 5000</label><br>
            <input
              id="price3"
              type="checkbox"
              name="price3"
            >
            <label for="price3"> Above 5000</label><br><br>
          </form>
        </div>
        <div style="text-decoration:none;color:black">
          <div class="psearchcol2">
            <div
              v-for="product in product"
              :key="product.prod_id"
              class="psearchrows"
            >
              <router-link
                :to="'/productdetails/'+ product.prod_id"
                style="color:black"
              >
                <div class="searchimage">
                  <img :src="product.Image">
                </div>
                <div class="psearchtext">
                  <h2 class="psprodname">
                    <strong>{{ product.ProductName }}</strong>
                  </h2>
                  <br>
                  <a
                    v-if="Number(product.MRP)"
                    style="font-size:15px"
                  ><a style="text-decoration:line-through">&#8377; {{ product.MRP }}<br></a></a>
                  <a>&#8377; {{ product.Price }}</a>
                  <br>
                  Rating: {{ product.Rating }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import products from '@/assets/data/products.json'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'PrSearch',
  data () {
    return {
      products: products,
      product: []
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    async search () {
      const response = await AuthenticationService.prodsearch(this.$route.query.search)
      console.log(response.data)
      console.log(this.$route.query.search)
      this.product = response.data
      console.log(this.product[0])
    }
  }
}
</script>

<style>
.psearchcol1 {
  /* border: 2px solid rgb(139, 135, 135); */
  width: 20%;
  height: 600px;
  background-color: rgb(253, 253, 253);
  border-radius: 2px;
  margin: 30px 0px 0px 10px;
  /* display: inline-block; */
  float: left;
  /* vertical-align: top; */
  padding: 20px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.psearchcol2 {
  /* border: 1px solid rgb(5, 5, 5); */
  width: 75%;
  height: 80%;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin: 30px 0px 0px 10px;
  /* display: inline-block; */
  float: left;
  padding: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serifS;
  /* box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.psearchrows {
    /* border: 1px solid black; */
    border-radius: 2x;
    border-left-width: 10px;
    margin-bottom: 20px ;
    box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    height: 300px
    /* display: flex; */
}
.psearchrows img {
    /* padding: 15px; */
    max-height: 100%;
    width: auto;
    height: auto;
    display: block;
    margin: auto !important;
    border-radius: 2x;
    max-width: 100%;
    /* border: 2px solid red; */
    /* margin-right: 50px; */
    /* box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.searchimage {
  width: 30%;
  /* border: 2px solid green; */
  height: 100%;
  float: left;
  /* padding: 5px 0px 5px 0px; */
}
.psearchtext {
  float: right;
  /* vertical-align: top; */
  height: 100%;
  width: 70%;
  text-align: left;
  font-size: 20px;
  /* display: inline-block; */
  padding-inline: 50px;
  padding-top: 20px;
  /* border: 2px solid black; */
  /* position: relative; */
}
.psprodname {
    border-bottom: 1px solid rgb(146, 146, 146);
    width: 500px;
    padding-bottom: 2%;
    font-size: 30px;
}
</style>
