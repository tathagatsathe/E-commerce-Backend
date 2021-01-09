<template>
  <div>
    <header>
      <div class="hea">
        <Header />
      </div>
    </header>
    <body>
      <div id="app">
        <Navbar />
      </div>
      <router-view />
    </body>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

body {
  font-family: 'montserrat', sans-serif;
  margin: 0px;
}
image {
  width: 100px;
}
.ads {
  margin: 0px 5px;
}
#slid {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.column {
  float: left;
  width: 33%;
  padding: 5px;
}
.row::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column1 {
  float: left;
  width: 50%;
  padding: 5px;
  /* margin-top: 430px ; */
}
.row2::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
.column2 {
  float: left;
  width: 20%;
  padding: 5px;
}
.row3::after {
  content: "";
  clear: both;
  display: table;
  position: relative;
}
</style>
