import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (cred) {
    return Api().post('login', cred)
  },
  logout (cred) {
    return Api().get('logout', cred)
  },
  info (cred) {
    return Api().post('profile', cred)
  },
  edit (a) {
    return Api().post('editprofile', a)
  },
  addproduct (a) {
    return Api().post('addproduct', a)
  },
  proddetails (id) {
    return Api().get('productdetails/' + id)
  },
  prodsearch (keyword) {
    return Api().get('productsearch?search=' + keyword)
  },
  buy (ids) {
    return Api().post('profile/cart', ids)
  },
  addtocart (id, it) {
    return Api().post('/productdetails/' + id, it)
  },
  getcart (id) {
    return Api().post('/profile/cart', id)
  },
  removefromcart (cartId) {
    return Api().post('profile/cart', cartId)
  },
  home () {
    return Api().get('/')
  },
  getorders (id) {
    return Api().post('/profile/orders', id)
  },
  getorder (orderid) {
    return Api().get('profile/orders/' + orderid)
  }
}
