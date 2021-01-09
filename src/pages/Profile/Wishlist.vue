<template>
  <div>
    <body>
      <router-link to="/profile/wishlist">
        <div class="profrowc2">
          <div class="wish">
            <strong style="font-size:20px">Wishlist</strong>
          </div>
          <div
            v-for="product in products.slice(0,3)"
            :key="product.id"
            class="profprows"
          >
            <img
              :src="product.image"
              style="width: 100%"
            >
            <div class="profptext">
              <strong style="font-size:20px;color:black;">{{ product.name }}</strong><br>
              <a style="font-size:15px;color:black;">{{ product.price }}</a>
            </div>
          </div>
        </div>
      </router-link>
    </body>
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
