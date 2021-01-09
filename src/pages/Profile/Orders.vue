<template>
  <div>
    <body>
      <!-- <router-link to='/profile/orders'> -->
      <strong style="font-size: 30px;margin-left:5%;">Orders</strong>
      <div
        v-for="order in order"
        :key="order.order_id"
        class="profrowc1"
      >
        <router-link :to="'/orders/' + order.order_id">
          <div
            class="c_orders2"
            style="font-size:20px"
          >
            <h11>Ordered on: {{ order.order_date }}</h11><br>
            <h8> Order Id: {{ order.order_id }} </h8><br>
            <h9>Shipping Address: {{ order.shipping_add }}</h9><br>
            <h7>Order total: {{ order.TotalCost }}</h7><br>
          </div>
        </router-link>
      </div>
      <!-- </router-link> -->
    </body>
  </div>
</template>

<script>
// import products from '@/assets/data/products.json'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Orders',
  data () {
    return {
      order: []
    }
  },
  mounted () {
    this.getorders()
  },
  methods: {
    async getorders () {
      const response = await AuthenticationService.getorders({
        cust_id: localStorage.getItem('id')
      })
      console.log(response)
      this.order = response.data
      console.log(this.order)
    }
  }
}
</script>

<style>
.profrowc1 {
  /* border: 1px solid rgb(204, 11, 11); */
  width: 100%;
  height: 200px;
  /* display: inline-block; */
  margin: 5px;
  /* padding: 5px 20px; */
  /* padding: 10px 10px 0px 10px; */
}
.c_orders1 {
  width: 30%;
  height: 100%;
  vertical-align: center;
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
/* * {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'montserrat', sans-serif;
  margin: 0px;
}
.wish{
  color: black;
  margin: 15px 0px 0px 20px;
}
.profrow{
  font-size: 0;
  margin-top: 50px;
}
.profcol1 {
  border: 2px solid rgb(139, 135, 135);
  width: 30%;
  height: 650px;
  background-color: rgb(255, 251, 251);
  margin: 0px 0px 30px 30px;
  color: black;
  padding-top: 20px;
  float: left;
}
.profcol2 {
  border: 2px solid rgb(139, 135, 135);
  width: 60%;
  height: 650px;
  background-color:  rgb(255, 251, 251);
  float: left;
  margin-left: 40px;
  padding: 10px;
  padding-right: 20px;
}

.profrowc2 {
  border: 1px solid rgb(139, 135, 135);
  width: 100%;
  height: 300px;
  display: inline-block;
  margin: 5px;
}
.profprows{
  width: 30%;
  float: left;
  padding: 10px;
  padding-bottom: 5px;
  margin-left: 20px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.profprows img {
  height: 180px;
  border-radius: 0px;
}
.profptext {
  padding-left: 10px;
}
.profinfo {
  margin-top: 20px;
  text-align: center;
}
.profinfalist {
  border-bottom: 0.5px solid rgb(114, 113, 113);
  margin: 15px 25px 0px 25px;
}
.profilepic {
  margin-left: auto;
  margin-right: auto;
  display: block;
}*/
</style>
