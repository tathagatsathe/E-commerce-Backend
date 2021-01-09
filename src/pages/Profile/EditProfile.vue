<template>
  <body>
    <div class="inf">
      <div
        class="editpro"
        style="font-size: 25px;margin-bottom:20px;"
      >
        Edit Profile
      </div>
      <input
        v-model="FirstName"
        type="text"
        name="FirstName"
        placeholder="First Name"
      ><br>
      <input
        v-model="LastName"
        type="text"
        name="LastName"
        placeholder="Last Name"
      ><br>
      <input
        v-model="Phone"
        type="text"
        name="Phone"
        placeholder="Phone no."
      ><br>
      <input
        v-model="address"
        type="text"
        name="address"
        placeholder="Address"
      ><br>
      <input
        v-model="City"
        type="text"
        name="City"
        placeholder="City"
      ><br>
      <input
        style="background-color:black; color:white;"
        type="submit"
        @click="edit"
      >
    </div>
  </body>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'EditProfile',
  data () {
    return {
      email: localStorage.getItem('email'),
      FirstName: localStorage.getItem('FirstName'),
      LastName: localStorage.getItem('LastName'),
      Phone: localStorage.getItem('Phone'),
      address: localStorage.getItem('address'),
      City: localStorage.getItem('City')
    }
  },
  methods: {
    async edit () {
      const response = await AuthenticationService.edit({
        email: localStorage.getItem('email'),
        FirstName: this.FirstName,
        LastName: this.LastName,
        Phone: this.Phone,
        address: this.address,
        City: this.City
      })
      console.log(response)
      localStorage.setItem('email', this.FirstName)
      localStorage.setItem('LastName', this.LastName)
      localStorage.setItem('Phone', this.Phone)
      localStorage.setItem('address', this.address)
      localStorage.setItem('City', this.City)
      // console.log(localStorage)
      this.$router.go()
    }
  }
}
</script>

<style>
.inf {
  margin-top: 50px;
  margin-bottom: auto;
  display: block;
  text-align: center;
}
.inf input {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* border-bottom: 3px solid #000000; */
  padding: 10px 5px;
  border: 0;
  border-bottom: 1px solid black;
  background-color: rgb(236, 248, 246);
}
/* .inf input[type]:focus {
  background-color:white;
} */
</style>
