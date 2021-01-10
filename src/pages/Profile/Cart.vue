<template>
  <div>
    <body>
      <div class="pcartcol">
        <a style="display:block;font-size:25px;">Your Cart's Total: <strong>&#8377;{{ total }}</strong></a>
        <div
          v-for="product in product"
          :key="product.cart_id"
          class="pcartrows"
        >
          <router-link
            :to="'/productdetails/'+ product.prod_id"
            style="color:black"
          >
            <div class="pcartimage">
              <img :src="product.Prod_Image">
            </div>
            <div class="pcarttext">
              <div style="overflow:hidden;height:60%;margin-bottom:5px;">
                <h2 class="cartprodname">
                  {{ product.Prod_Name }}
                </h2>
              </div>
              &#8377; {{ product.price }}<br>
            </div>
          </router-link>
          <div style="font-size:80%;line-height:10px;">
            <a style="float:left;">Quantity: {{ product.quantity }}</a><a
              style="float:right;"
              @click="removefromcart(product.cart_id)"
            >Remove from Cart</a>
          </div>
          <br>
        </div>
        <button @click="buy">
          Place Order
        </button>
      </div>
    </body>
  </div>
</template>
<script>
// import product from '@/assets/data/products.json'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Cart',
  data () {
    return {
      product: [],
      price: 1,
      cart: '',
      total: 0,
      ordered: 0
    }
  },
  mounted () {
    this.getcart()
  },
  methods: {
    async buy () {
      var dateObj = new Date()
      var date = dateObj.getDate() + '/' + dateObj.getMonth() + 1 + '/' + dateObj.getFullYear()
      console.log(date)
      const response = await AuthenticationService.buy({
        cust_id: localStorage.getItem('id'),
        order_date: date,
        shipping_add: localStorage.getItem('address'),
        cust_email: localStorage.getItem('email'),
        totalcost: this.total,
        product: this.product,
        det_quantity: 1
      })
      console.log(response.data)
      if (Number(response.data)) {
        console.log(Number(response.data))
        this.$router.push('/profile/checkout')
      }
    },
    async getcart () {
      const response = await AuthenticationService.getcart({
        id: localStorage.getItem('id')
      })
      console.log(response)
      this.product = response.data
      console.log(this.product)
      this.total = 0
      var x = 0
      this.product.forEach(function (Item) {
        x = x + Number(Item.price)
      })
      this.total = x
      console.log(this.total)
    },
    async removefromcart (cart) {
      const response = await AuthenticationService.removefromcart({
        cart_id: cart
      })
      console.log(response)
      if (response.data.affectedRows) {
        this.$router.go()
      } else {
        console.log('Error in removing from cart')
      }
    }
  }
}
</script>

<style>
.pcartrows {
    width: 31%;
    /* border: 0.5px solid rgb(70, 69, 69); */
    height: 260px;
    margin-bottom: 10px;
    float: left;
    margin-right: 6px;
    margin-left: 6px;
    border-radius: 0;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
}
.pcartimage {
    /* width: 30%; */
    height: 70%;
    display: block;
    margin: 0px auto;
}
.pcartimage img {
    /* height: 150px; */
    display: block;
    height: 100%;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
}
.pcarttext {
    height: 25%;
    width: 100%;
    font-size:15px;
    line-height: 12px;
    overflow: hidden;
    padding: 2px 2px;
}
.cartprodname {
    font-size:15px;
    font-weight: bold;
    overflow: hidden;
}
.cartbutton {
    width: 30%;
    float: right;
    border:2px solid red;
    /* height: 100%; */
}
.pcartcol button {
    margin-left: 80%;
}
.pcartrows a {
    cursor: pointer;
}
</style>
