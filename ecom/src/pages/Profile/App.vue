<template>
<div>
  <header>
    <div>
      <Header />
    </div>
  </header>
  <body>
    <div>
      <Navbar />
    </div>
    <div class ="row">
      <div class="col1">
      </div>
      <div class="col2">
        <div class="rowc1">
        </div>
        <div class="rowc2">
        </div>
      </div>
    </div>
  </body>
    <!-- <div>
      <footer>
        <Footer />
      </footer>
    </div> -->
</div>
</template>

<script>
import Navbar from 'c:/Users/703269701/ecom-mul/src/components/Navbar.vue'
import Header from 'c:/Users/703269701/ecom-mul/src/components/Header.vue'
// import Footer from 'c:/Users/703269701/ecom-mul/vue-mpa-application-example/src/components/Footer.vue'

export default {
  name: 'Profile',
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
}
body {
  font-family: 'montserrat', sans-serif;
  margin: 0px;
}
.row{
  font-size: 0;
  margin-top: 50px;
}
.col1 {
  border: 2px solid rgb(139, 135, 135);
  width: 30%;
  height: 600px;
  background-color: rgb(233, 232, 232);
  border-radius: 10px;
  margin: 30px 0px 0px 10px;
  display: inline-block;
}
.col2 {
  border: 2px solid rgb(139, 135, 135);
  width: 60%;
  height: 600px;
  background-color:  rgb(233, 232, 232);
  border-radius: 10px;
  display: inline-block;
  margin-inline: 50px;
}
.rowc1 {
  border: black;
  border-radius: 5px;
}
.rowc2 {
  border: black;
  border-radius: 5px;
}
</style>
