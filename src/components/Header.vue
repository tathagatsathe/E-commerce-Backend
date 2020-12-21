<template>
  <div class="oneline">
    <div class="e-commerce">
      <strong><a href="index.html" style="color:white; text-decoration:none;">E-commerce</a></strong>
    </div>
    <div class="searchbar">
      <input type="text" placeholder="Search...">
    </div>
    <div class="icons">
      <div><a><Dropdown title="Profile" :items="services"/></a></div>
      <!-- <a href="sign-in.html" style="color:white"> Profile</a> -->
      <div id="cv"><a href="create-account.html" style="color:white"> Wishlist </a></div>
      <div id="cv"><a href="profile.html" style="color:white"> Cart </a></div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown'
export default {
  name: 'header',
  components: {
    Dropdown
  },
  data () {
    return {
      services: [
        {
          title: 'Sign-In',
          link: 'sign-in.html'
        },
        {
          title: 'Create an Account',
          link: 'create-account.html'
        }
      ]
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
}
.e-commerce {
  position: absolute;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  padding: 10px 0px 0px 30px;
  width: 20%;
  float: left;
}
.searchbar input[type=text]{
  position: absolute;
  border: none;
  padding: 6px;
  margin: 16px 16px 0px 350px;
  border-radius: 7px;
  width: 40%;
  align-content: center;
}
.icons{
  position: absolute;
  /* margin-right: 40px; */
  margin: 25px 15px 0px 1000px;
  color: white;
  font-size: 17px;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* float:right; */
}
.icons a{
  color: white;
  position: relative;
}

</style>
