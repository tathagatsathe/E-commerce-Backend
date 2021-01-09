<template>
  <!-- <div> -->
  <!-- <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->
  <div class="container">
    <div
      id="myCarousel"
      class="carousel slide"
      data-ride="carousel"
    >
      <!-- Indicators -->
      <!-- <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol> -->
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img
            src="https://piunikaweb.com/wp-content/uploads/2019/08/oneplus_7_pro_5g_experience_the_power_of_5g_banner-750x354.jpg"
            alt="Los Angeles"
            style="width:100%;height:100%;"
          >
        </div>
        <div class="item">
          <img
            src="https://www.androidpolice.com/wp-content/uploads/2020/10/19/1456201-4e93117f82768715a5d964359fde25ea.png"
            alt="Chicago"
            style="width:100%;height:100%;"
          >
        </div>
        <div class="item">
          <img
            src="https://i.ytimg.com/vi/3-1A_NEATfU/maxresdefault.jpg"
            alt="New york"
            style="width:100%;"
          >
        </div>
      </div>
      <!-- Left and right controls -->
      <a
        class="left carousel-control"
        href="#myCarousel"
        data-slide="prev"
      >
        <span class="glyphicon glyphicon-chevron-left" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span class="glyphicon glyphicon-chevron-right" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel'
}
</script>

<style>
.container {
    width:100%;
    border:1px solid red;
}
#myCarousel {
    width:100%;
    border: 1px solid blue;
}
</style>
