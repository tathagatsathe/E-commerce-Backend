<template>
  <nav>
    <Dropdown title="Categories" :items="services" />
    <div class="menu-item"><a href="#">Electronics</a></div>
    <div class="menu-item"><a href="#">Clothing</a></div>
    <div class="menu-item"><a href="#">Watches</a></div>
    <div class="menu-item"><a href="#">Best Deals</a></div>
    <div class="menu-item"><a href="#">Blog</a></div>
    <div class="menu-item"><a href="#">New Arrivals</a></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown'
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Furniture',
          link: '#'
        },
        {
          title: 'Grocery',
          link: '#'
        },
        {
          title: 'Mobiles',
          link: '#'
        },
        {
          title: 'Watches',
          link: '#'
        },
        {
          title: 'Home and Furniture',
          link: '#'
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
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

</style>
