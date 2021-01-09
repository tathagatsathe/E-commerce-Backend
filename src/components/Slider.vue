<template>
  <div class="sli">
    <transition-group
      name="fade"
      tag="div"
    >
      <div
        v-for="i in [currentIndex]"
        :key="i"
      >
        <img :src="currentImg">
      </div>
    </transition-group>
    <a
      class="prev"
      href="#"
      @click="prev"
    >&#10094;</a>
    <a
      class="next"
      href="#"
      @click="next"
    >&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      images: [
        'https://i.gadgets360cdn.com/large/flipkartgrandgadgetssale_main_1566890393492.jpg',
        'https://www.androidpolice.com/wp-content/uploads/2020/10/19/1456201-4e93117f82768715a5d964359fde25ea.png',
        'https://images.freekaamaal.com/post_images/1578392330.png',
        'https://piunikaweb.com/wp-content/uploads/2019/08/oneplus_7_pro_5g_experience_the_power_of_5g_banner-750x354.jpg',
        'https://i.ytimg.com/vi/3-1A_NEATfU/maxresdefault.jpg'],
      timer: null,
      currentIndex: 0
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:450px;
  width:100%;
  border-radius: 5px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}

.prev:hover, .next:hover {
  background-color: transparent;
}
.sli {
  margin: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
