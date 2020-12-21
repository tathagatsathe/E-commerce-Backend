<template>
  <div id ="ecom">
    <div>
      <h1>E-commerce</h1>
    </div>
    <a id="email">Email-Id/Username</a>
      <div class="email-sign">
        <input type="text">
      </div>
    <a id="pass">Password</a>
      <div class="pass-sign">
        <input type="password">
      </div>
    <div id="forgot"><a href= '#' style="color:white; text-decoration:none;"> Forgot Password? </a></div>
    <div id="but">
    <button> Sign-In </button>
    </div>
    <div id="Create"><a href="#" style="color:white; text-decoration:none;">Create an Account</a></div>
  </div>
</template>

<script>

export default {
  name: 'Sign-In'
}
</script>

<style lang="scss">
#ecom {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 70px 0px 0px 400px;
  background-color: rgb(124, 121, 121);
  width: 50%;
  height: 350px;
  border-radius: 10px;
}
.email-sign input[type=text]{
  width: 400px;
  height: 35px;
  border-radius: 5px;
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
  margin: 5px 0px 0px 180px
}
button {
  margin: 30px 0px 0px 0px;
  width: 150px;
  height: 40px;
  color: black;
}

</style>
