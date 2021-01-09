<template>
  <div class="oneline">
    <div class="e-commerce">
      <strong><router-link to="/"><a
        style="color:white; text-decoration:none; width:20%"
      >E-commerce</a></router-link></strong>
    </div>
    <form
      action="/productsearch"
      method="get"
    >
      <div class="searchbar">
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search..."
          style="width:600px"
        >
      </div>
    </form>
    <div class="icons">
      <b-nav>
        <b-nav-item-dropdown
          text="Account"
          right
        >
          <div v-if="si == 'true'">
            <b-dropdown-item>
              <router-link to="/profile">
                <a style="color:black; text-decoration:none;">
                  Profile
                </a>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/profile/addproduct">
                <a style="color:black; text-decoration:none;">
                  Sell
                </a>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <a
                style="color:black"
                @click="logout"
              >
                Sign-Out
              </a>
            </b-dropdown-item>
          </div>
          <div v-else>
            <b-dropdown-item>
              <router-link to="/login">
                <a style="color:black">
                  Sign-In
                </a>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/register">
                <a style="color:black">
                  Create Account
                </a>
              </router-link>
            </b-dropdown-item>
          </div>
        </b-nav-item-dropdown>
        <b-nav-item>
          <router-link :to="this.cart">
            <a style="color:white;">Cart</a>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="this.order">
            <a style="color:white">Orders</a>
          </router-link>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
// import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Header',
  data () {
    return {
      si: localStorage.getItem('loggedin'),
      cart: '/profile/cart',
      order: '/profile/orders'
    }
  },
  mounted () {
    this.wishl_order()
  },
  methods: {
    logout () {
      console.log('hello')
      localStorage.clear()
      this.$router.push('/')
      this.$router.go()
    },
    wishl_order () {
      if (!localStorage.getItem('loggedin')) {
        this.wishl = '/login'
        this.order = '/login'
      }
    }
  }
}
</script>

<style>
.oneline {
  margin: 0px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  float: left;
}
.e-commerce {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: auto;
  width: 25%;
  float: left;
  display: flex;
}
.e-commerce a {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  text-decoration: none;
  /* display: inline-block; */
}
.searchbar input[type=text]{
  border: none;
  padding: 7px;
  margin-top: 10px;
  border-radius: 7px;
  align-content: center;
  width: 50%;
  /* float: left; */
  display: inline-block;
}
.searchbar:focus {
  min-width: 500px;
  width: auto;
}
/* .icons{
  color: white;
  width: 25%;
  justify-content: space-evenly;
  float: right;
} */
a{
  color: white;
}
</style>
