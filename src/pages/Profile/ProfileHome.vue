<template>
  <div>
    <body>
      <router-link to="/profile/orders">
        <div class="profrowc1">
          <div
            class="c_orders2"
            style="font-size:20px"
          >
            <strong>Orders</strong>
          </div>
        </div>
      </router-link>
      <router-link to="/profile/cart">
        <div class="profrowc2">
          <div class="wish">
            <strong style="font-size:20px">Cart</strong>
          </div>
          <!-- <div v-for="product in products.slice(0,3)" :key="product.id" class="profprows">
                <img :src="product.image" style="width: 100%" >
                <div class="profptext">
                  <strong style="font-size:20px;color:black;">{{ product.name }}</strong><br>
                  <a style="font-size:15px;color:black;">{{ product.price }}</a>
                </div>
              </div> -->
        </div>
      </router-link>
    </body>
    <!-- <a style="font-size:40px; color:black;">HOME</a>
        <body style="border:4px solid red">
          <router-link to='/profile/orders'>
            <div class="profrowc1">
                <div class="c_orders1">
                </div>
                <div class="c_orders2" style="font-size:20px">
                <strong>Orders</strong>
                </div>
            </div>
          </router-link>
          <router-link to='/profile/wishlist'>
            <div class="profrowc2">
              <div class="wish">
                <strong style="font-size:20px">Wishlist</strong>
              </div>
              <div v-for="product in products.slice(0,3)" :key="product.id" class="profprows">
                <img :src="product.image" style="width: 100%" >
                <div class="profptext">
                  <strong style="font-size:20px;color:black;">{{ product.name }}</strong><br>
                  <a style="font-size:15px;color:black;">{{ product.price }}</a>
                </div>
              </div>
            </div>
          </router-link>
        </body> -->
  </div>
</template>
<script>
import products from '@/assets/data/products.json'
// import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'ProfileHome',
  data () {
    return {
      products: products,
      userinfo: [ {
        'FirstName': localStorage.getItem('FirstName'),
        'LastName': localStorage.getItem('LastName'),
        'Phone': localStorage.getItem('Phone'),
        'address': localStorage.getItem('address'),
        'City': localStorage.getItem('City'),
        'username': localStorage.getItem('username')
      }]
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
  height: 300px;
  display: inline-block;
  margin: 5px;
  padding: 10px 10px 0px 10px;
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
  /* border: 1px solid black; */
  margin-left: 20px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.profprows img {
  height: 180px;
  /* width: 40%; */
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
  padding-left: 10px;
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
