<template>
  <div id="ecom">
    <div>
      <h1>E-commerce</h1>
    </div>
    <a id="name">Username</a>
    <div class="nameclass">
      <input
        v-model="user"
        type="text"
        name="name_user"
        required
      >
    </div>
    <a id="email">Email-Id</a>
    <div class="email-sign">
      <input
        v-model="email"
        type="text"
        name="email"
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
    <div id="but">
      <button @click="register">
        Create Account
      </button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'SignUp',
  data () {
    return {
      user: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        user: this.user,
        email: this.email,
        password: this.password
      })
      if (response.data) {
        this.$router.push('/login')
      } else {
        this.error = 'Invalid'
      }
      console.log(response.data)
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
  margin: 70px 0px 0px 400px;
  width: 50%;
  height: 375px;
  border: 2px solid black;
  border-bottom-width:15px;
  border-radius: 2px;
}
.nameclass input[type=text]{
  width: 400px;
  height: 35px;
  border-radius: 2px;
}
.email-sign input[type=text]{
  width: 400px;
  height: 35px;
  border-radius: 2px;
}
.pass-sign input[type=password]{
  width: 400px;
  height: 35px;
  border-radius: 2px;
}
#Create {
  margin: 50px 0px 0px 0px
}
#forgot {
  margin: 5px 0px 0px 180px
}
button {
  margin: 30px 0px 0px 0px;
  width: 40%;
  height: 40px;
  color: white;
  background-color: black;
}

</style>
