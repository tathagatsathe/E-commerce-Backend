<template>
  <div>
    <body>
      <strong style="font-size: 30px;margin-left:5%;">Order Id: {{ this.$route.params.orderid }} details</strong>
      <div
        v-for="product in order"
        :key="product.order_det_id"
        class="profrowc1"
      >
        <router-link :to="'/productdetails/' + product.prod_id">
          <div class="c_orders1">
            <img :src="product.Prod_Image">
          </div>
          <div
            class="c_orders2"
            style="font-size:20px"
          >
            <h10>{{ product.Prod_Name }}</h10><br>
            <h8> Quantiy: {{ product.det_quantity }} </h8><br>
            <!-- <h9>Product Id:{{product.order_id}}</h9><br> -->
            <h7>Price: &#8377; {{ product.det_price }}</h7><br>
          </div>
        </router-link>
      </div>
    </body>
  </div>
</template>

<script>
// import products from '@/assets/data/products.json'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Order',
  data () {
    return {
      order: []
    }
  },
  mounted () {
    this.getorder()
  },
  methods: {
    async getorder () {
      const response = await AuthenticationService.getorder(this.$route.params.orderid)
      console.log(response)
      this.order = response.data
    }
  }
}
</script>
<style>
.profrowc1 {
  /* border: 1px solid rgb(204, 11, 11); */
  width: 100%;
  height: 300px;
  /* display: inline-block; */
  margin: 5px;
  /* padding: 10px 10px 0px 10px; */
}
.c_orders1 {
  width: 30%;
  height: 90%;
  /* vertical-align: center; */
  float: left;
  /* border: 2px solid blue; */
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
}
.c_orders2 {
  color: black;
  float: left;
  padding-left: 50px;
  /* border: 2px solid green; */
  display: block;
  max-width: 65%;
  max-height: 100%;
  /* overflow: hidden; */
}
.c_orders1 img{
    max-height: 95%;
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    max-width: 95%;
}
</style>
