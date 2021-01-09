<template>
  <nav>
    <Dropdown
      title="Categories"
      :items="services"
    />
    <div class="menu-item">
      <a href="/productsearch?search=Electronics">Electronics</a>
    </div>
    <div class="menu-item">
      <a href="/productsearch?search=Clothing">Clothing</a>
    </div>
    <div class="menu-item">
      <a href="/productsearch?search=Watches">Watches</a>
    </div>
    <div class="menu-item">
      <a href="/productsearch?search=Furniture">Furniture</a>
    </div>
    <div class="menu-item">
      <a href="/productsearch?search=Grocery">Grocery</a>
    </div>
    <div class="menu-item">
      <a href="/productsearch?search=Mobiles">Mobiles</a>
    </div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown'
export default {
  name: 'Navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Furniture',
          link: '/productsearch?search=Furniture'
        },
        {
          title: 'Grocery',
          link: '/productsearch?search=Grocery'
        },
        {
          title: 'Mobiles',
          link: '/productsearch?search=Mobiles'
        },
        {
          title: 'Watches',
          link: '/productsearch?search=Watches'
        },
        {
          title: 'Home and Furniture',
          link: '/productsearch?search=Home+and+Furniture'
        }
      ]
    }
  }
}
</script>
<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 45px;
  width: 100%;
  background-color: rgb(63, 62, 62);
}

nav .menu-item {
  color:#FFF;
  /* padding: 10px 20px; */
  position: relative;
  text-align: center;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item :hover {
  /* background-color: rgb(255, 0, 0); */
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

</style>
