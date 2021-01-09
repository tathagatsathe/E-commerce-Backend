import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../pages/App.vue'
import Profile from '../pages/Profile/profile.vue'
import ProfileHome from '../pages/Profile/ProfileHome.vue'
import AddProduct from '../pages/prod_search/AddProduct.vue'
import EditProfile from '../pages/Profile/EditProfile.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import SignUp from '../pages/Create-Account/create-account.vue'
import Login from '../pages/Sign-In/Sign-In.vue'
import PrDetails from '../pages/prod_details.vue'
import PrSearch from '../pages/prod_search/prod_search.vue'
import Order from '../pages/Profile/Order.vue'
import Orders from '../pages/Profile/Orders.vue'
import Wishlist from '../pages/Profile/Wishlist.vue'
import Cart from '../pages/Profile/Cart.vue'
import checkout from '../pages/Profile/Checkout.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/profile',
      component: Profile,
      children: [
        {
          path: '',
          component: ProfileHome
        },
        {
          path: 'wishlist',
          component: Wishlist
        },
        {
          path: 'orders',
          component: Orders
        },
        {
          path: '/orders/:orderid',
          component: Order
        },
        {
          path: 'checkout',
          component: checkout
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'editprofile',
          component: EditProfile
        },
        {
          path: 'addproduct',
          component: AddProduct
        }
      ]
    },
    // {
    //   path: '/editProfile',
    //   component: EditProfile
    // },
    {
      path: '/addproduct',
      component: AddProduct
    },
    {
      path: '/register',
      component: SignUp
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/productdetails/:id',
      component: PrDetails
    },
    {
      path: '/productsearch',
      component: PrSearch
    }
  ],
  mode: 'history'
})
