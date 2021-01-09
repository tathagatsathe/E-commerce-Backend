<template>
  <body>
    <div class="addorder">
      <!-- <form action="/addproduct"> -->
      <div
        class="sell"
        style="font-size: 25px;margin-bottom:20px;"
      >
        Sell
      </div>
      <input
        v-model="Product"
        type="text"
        name="product"
        placeholder="Name of Product"
      ><br>
      <input
        v-model="MRP"
        type="int"
        name="MRP"
        placeholder="MRP"
      ><br>
      <input
        v-model="Price"
        type="int"
        name="price"
        placeholder="Deal Price"
      ><br>
      <input
        v-model="Category"
        type="text"
        name="category"
        placeholder="Category"
      ><br>
      <input
        v-model="PrImage"
        type="text"
        name="primage"
        placeholder="Paste link to Image"
      ><br>
      <textarea
        v-model="Description"
        type="text"
        name="description"
        placeholder="Descrition"
        class="Description"
      /><br>
      <input
        style="background-color:black; color:white;"
        type="submit"
        value="Submit"
        @click="addproduct"
      >
      <div v-bind="error">
        {{ error }}
      </div>
      <div
        v-if="error==='Product Added'"
        @click="refresh()"
      >
        <button style="font-size=3px;color:white;width:25%;">
          Add another product
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'AddProduct',
  data () {
    return {
      Product: '',
      Price: '',
      MRP: null,
      Category: '',
      PrImage: '',
      Description: '',
      error: ''
    }
  },
  methods: {
    async addproduct () {
      const response = await AuthenticationService.addproduct({
        id: localStorage.getItem('id'),
        ProductName: this.Product,
        Price: this.Price,
        MRP: this.MRP,
        Category: this.Category,
        PrImage: this.PrImage,
        Description: this.Description
      })
      if (response.data) {
        this.error = 'Product Added'
      } else {
        this.error = 'Error'
      }
      console.log(response.data)
      console.log(localStorage)
    },
    refresh () {
      this.$router.go()
    }
  }
}
</script>

<style>
.addorder {
  /* margin-bottom: auto; */
  display: block;
  text-align: center;
}
.addorder input {
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
.Description{
  height: 200px;
  padding: 5px;
  width: 70%;
  border: 0;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
  background-color: rgb(236, 248, 246);
}
</style>
