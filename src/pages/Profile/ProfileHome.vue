<template>
  <div>
    <body>
      <div class="profrowc1">
        <router-link to="/profile/cart">
          <div class="wish">
            <strong style="font-size:20px">Orders</strong>
          </div>
        </router-link>
        <div
          v-for="order in products.slice(3,6)"
          :key="order.order_id"
          class="orderrows"
        >
          <router-link :to="'/orders/' + order.order_id">
            <div
              class="ordertextarea"
              style="font-size:15px; color:black; height:80%; width:100%;"
            >
              <h11>Ordered on: <strong>{{ order.order_date }}</strong></h11><br>
              <h8>Id: <strong>{{ order.order_id }}</strong></h8><br>
              <h7>Order total: <strong>{{ order.TotalCost }}</strong></h7><br>
              <h9>Shipping Address: <strong>{{ order.shipping_add }}</strong></h9><br>
            </div>
          </router-link>
        </div>
      </div>
      <div class="profrowc2">
        <router-link to="/profile/cart">
          <div class="wish">
            <strong style="font-size:20px">Cart</strong>
          </div>
        </router-link>
        <div
          v-for="product in products.slice(0,3)"
          :key="product.prod_id"
          class="profprows"
        >
          <router-link
            :to="'/productdetails/' + product.prod_id"
            style="color:black;"
          >
            <img :src="product.Prod_Image">
            <div class="profptext">
              <strong>{{ product.Prod_Name }}</strong><br>
              <a>&#8377; {{ product.price }}</a>
            </div>
          </router-link>
        </div>
      </div>
    </body>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'ProfileHome',
  data () {
    return {
      products: [],
      userinfo: [ {
        'FirstName': localStorage.getItem('FirstName'),
        'LastName': localStorage.getItem('LastName'),
        'Phone': localStorage.getItem('Phone'),
        'address': localStorage.getItem('address'),
        'City': localStorage.getItem('City'),
        'username': localStorage.getItem('username')
      }]
    }
  },
  mounted () {
    this.si = localStorage.getItem('loggedin')
    this.info()
  },
  methods: {
    async info () {
      const response = await AuthenticationService.info({
        id: localStorage.getItem('id')
      })
      // console.log(response.data)
      this.products = response.data
      console.log(this.products.slice(0, 5))
      console.log(this.products.slice(5, 8))
    }
  }
}
</script>

<style>
* {
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
  /* display: inline-block; */
  color: black;
  padding-top: 20px;
  float: left;
  /* padding-left:50px */
}
.profcol2 {
  border: 2px solid rgb(139, 135, 135);
  width: 60%;
  height: 650px;
  background-color:  rgb(255, 251, 251);
  float: left;
  /* display: inline-block; */
  margin-left: 40px;
  /* margin-top: 15px; */
  /* margin-bottom: 30px; */
  padding: 10px;
  padding-right: 20px;
}
.profrowc1 {
  border: 1px solid rgb(139, 135, 135);
  width: 100%;
  height: 300px !important;
  margin: 5px;
  padding: 10px 10px 0px 10px;
}
.profrowc2 {
  width: 100%;
  height: 300px;
  margin: 5px;
}
.orderrows {
  height: 70%;
  padding: 30px 10px;
  width:30%;
  float:left;
  margin:10px 5px 5px 20px;
  overflow:hidden;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.profprows{
  width: 30%;
  height: 80%;
  float: left;
  padding: 10px;
  padding-bottom: 5px;
  margin-left: 20px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.profprows img {
  height: 70%;
  /* width: 40%; */
  width: auto;
  margin: auto;
  display: block;
  border-radius: 0px;
}
.c_orders1 {
  width: 30%;
  height: 95%;
  vertical-align: center;
  /* border: 0.5px solid black; */
  display: inline-block;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
}
.c_orders2 {
  color: black;
  display: inline-block;
  padding-left: 50px;
}
.profptext {
  height: 30%;
  /* border: 1px solid green; */
}
.profptext strong {
  display: block;
  /* border-bottom: 1px solid rgb(133, 133, 133); */
  height: 70%;
  overflow: hidden;
}
.profptext a {
  display: block;
  /* border: 1px solid blue; */
  margin-top: -25px;
}
.profinfo {
  margin-top: 20px;
  text-align: center;
  /* border-bottom: 0.5px solid rgb(114, 113, 113); */
}
.profinfalist {
  border-bottom: 0.5px solid rgb(114, 113, 113);
  /* margin-bottom: 10px; */
  margin: 15px 25px 0px 25px;
}
.profilepic {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
