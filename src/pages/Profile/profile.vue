<template>
  <div>
    <body>
      <div
        v-if="this.si"
        class="profrow"
      >
        <div class="profcol1">
          <img
            src="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo.png"
            alt="Profile"
            style="height:200px; width:200px;"
            class="profilepic"
          >
          <!-- <div v-for="(n) in userinfo" :key="n.hello" class="profinfo" style="font-size:20px">
            {{n}}
          </div> -->
          <div
            v-bind="userinfo[0]"
            class="profinfo"
            style="font-size:20px"
          >
            <div class="profinfalist">
              {{ userinfo[0].FirstName }} {{ userinfo[0].LastName }}
            </div>
            <br>
            <div class="profinfalist">
              {{ userinfo[0].username }}
            </div>
            <br>
            <div class="profinfalist">
              {{ userinfo[0].Phone }}
            </div>
            <br>
            <div class="profinfalist">
              {{ userinfo[0].address }}
            </div>
            <br>
            <div class="profinfalist">
              {{ userinfo[0].City }}
            </div>
            <router-link to="/profile/editprofile">
              <a style="color:black;font-size:20px;">Edit Profile</a>
            </router-link>
          </div>
          <!-- <div class= 'inf' style="font-size:50px">
            {{us.Name}}
            <br>
            {{us.username}}
            <br>
            {{us.Phone}}
            <br>
            {{us.address}}
            <br>
            {{us.City}}
            <br>
          </div> -->
          <!-- <button @click="info" style= "width:20px; height:10px;">info</button><br> -->
          <!-- <router-link to='/profile/editprofile'><a style="color:black;font-size:20px;">Edit Profile</a></router-link> -->
        </div>
        <div class="profcol2">
          <router-view />
          <!-- <router-link to='/profile/orders'>
          <div class="profrowc1">
            <div class="c_orders1">
            </div>
            <div class="c_orders2" style="font-size:20px">
              <strong>Orders</strong>
            </div>
          </div>
          </router-link>
          <router-link to='/profile/wishlist'>
            <div class="profrowc2">
              <div class="wish">
                <strong style="font-size:20px">Wishlist</strong>
              </div>
              <div v-for="product in products.slice(0,3)" :key="product.id" class="profprows">
                <img :src="product.image" style="width: 100%" >
                <div class="profptext">
                  <strong style="font-size:20px;color:black;">{{ product.name }}</strong><br>
                  <a style="font-size:15px;color:black;">{{ product.price }}</a>
                </div>
              </div>
            </div>
          </router-link> -->
        </div>
      </div>
      <div v-else>
        <router-link to="/login">
          <a style="color:black; font-size:50px">Login to View </a>
        </router-link>
      </div>
    </body>
  </div>
</template>

<script>
import products from '@/assets/data/products.json'
// import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Profile',
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
      }],
      si: ''
    }
  },
  mounted () {
    this.si = localStorage.getItem('loggedin')
  }
  // methods: {
  //   async info () {
  //     const response = await AuthenticationService.info({
  //       email: localStorage.getItem('email')
  //     })
  //     this.userinfo = response.data[0]
  //     console.log(response.data[0])
  //     // localStorage.setItem('us', response.data[0])
  //     // console.log(this.userinfo.FirstName)
  //     localStorage.setItem('id', this.userinfo.id)
  //     localStorage.setItem('Name', this.userinfo.FirstName + ' ' + this.userinfo.LastName)
  //     localStorage.setItem('Phone', this.userinfo.Phone)
  //     localStorage.setItem('address', this.userinfo.address)
  //     localStorage.setItem('City', this.userinfo.City)
  //     localStorage.setItem('username', this.userinfo.username)
  //     console.log(localStorage)
  //   }
  // }
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
.wish{
  color: black;
  margin: 15px 0px 0px 20px;
}
.profrow{
  font-size: 0;
  margin-top: 50px;
}
.profcol1 {
  border: 2px solid rgb(139, 135, 135);
  width: 30%;
  height: 650px;
  background-color: rgb(255, 251, 251);
  margin: 0px 0px 30px 30px;
  /* display: inline-block; */
  color: black;
  padding-top: 20px;
  float: left;
  /* padding-left:50px */
}
.profcol2 {
  border: 2px solid rgb(139, 135, 135);
  width: 60%;
  height: 650px;
  background-color:  rgb(255, 251, 251);
  float: left;
  /* display: inline-block; */
  margin-left: 40px;
  /* margin-top: 15px; */
  /* margin-bottom: 30px; */
  padding: 10px;
  padding-right: 20px;
  overflow: auto;
}
.profrowc1 {
  border: 1px solid rgb(139, 135, 135);
  width: 100%;
  height: 300px;
  display: inline-block;
  margin: 5px;
  padding: 10px 10px 0px 10px;
}
.profrowc2 {
  border: 1px solid rgb(139, 135, 135);
  width: 100%;
  height: 300px;
  display: inline-block;
  margin: 5px;
}
.profprows{
  width: 30%;
  float: left;
  padding: 10px;
  padding-bottom: 5px;
  /* border: 1px solid black; */
  margin-left: 20px;
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.profprows img {
  height: 180px;
  /* width: 40%; */
  border-radius: 0px;
}
.c_orders1 {
  width: 30%;
  height: 95%;
  vertical-align: center;
  /* border: 0.5px solid black; */
  display: inline-block;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
}
.c_orders2 {
  color: black;
  display: inline-block;
  padding-left: 50px;
}
.profptext {
  padding-left: 10px;
}
.profinfo {
  margin-top: 20px;
  text-align: center;
  /* border-bottom: 0.5px solid rgb(114, 113, 113); */
}
.profinfo a {
  padding-top: 10px;
}
.profinfalist {
  border-bottom: 0.5px solid rgb(114, 113, 113);
  /* margin-bottom: 10px; */
  margin: 10px 25px 0px 25px;
}
.profilepic {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
