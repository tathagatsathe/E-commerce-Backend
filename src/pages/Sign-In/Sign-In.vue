<template>
  <div id="ecom">
    <div>
      <h1>E-commerce</h1>
    </div>
    <a id="email">Email-Id</a>
    <div class="email-sign">
      <input
        v-model="email"
        type="text"
        name="emailid"
        required
      >
    </div>
    <a id="pass">Password</a>
    <div class="pass-sign">
      <input
        v-model="password"
        type="password"
        name="password"
        required
      >
    </div>
    <div id="forgot">
      <a
        href="#"
        style="color:black; text-decoration:none;"
      > Forgot Password? </a>
    </div>
    {{ error }}
    <div id="but">
      <button @click="login">
        Sign-In
      </button>
    </div>
    <div id="Create">
      <router-link to="/register">
        <a style="color:black; text-decoration:none;">Create an Account</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
      if (response.data.id === 'Email does not exist') {
        this.error = 'Email does not exist'
      } else if (response.data.id) {
        localStorage.setItem('loggedin', true)
        localStorage.setItem('email', this.email)
        localStorage.setItem('id', response.data.id)
        localStorage.setItem('FirstName', response.data.FirstName)
        localStorage.setItem('LastName', response.data.LastName)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('Phone', response.data.Phone)
        localStorage.setItem('address', response.data.address)
        localStorage.setItem('City', response.data.City)
        this.$router.push('/')
        this.$router.go()
      } else {
        this.error = 'Incorrect Password'
      }
      console.log(response.data)
      console.log(localStorage)
    }
  }
}
</script>

<style lang="scss">
#ecom {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  border: 2px solid black;
  margin: 70px 0px 0px 400px;
  // background-color: rgb(124, 121, 121);
  width: 50%;
  height: 370px;
  border-radius: 2px;
  border-bottom-width: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.email-sign input[type=text]{
  width: 400px;
  height: 35px;
  border-radius: 5px;
}
.email-sign input[type=text] :active{
  width: 400px;
  height: 35px;
  border-radius: 5px;
  border-bottom: 5px solid black;
}
.pass-sign input[type=password]{
  width: 400px;
  height: 35px;
  border-radius: 5px;
}
#Create {
  margin: 50px 0px 0px 0px
}
#forgot {
  margin: 1px 0px 0px 180px
}
button {
  margin: 30px 0px 0px 0px;
  width: 150px;
  height: 40px;
  color: white;
  background-color: black;
}
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
#Create a {
  text-decoration: none;
}
</style>
