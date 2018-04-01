<template>
  <div class="departament-card" :class="[chooseOverlay()]" :style="{ 'background-image': 'url('+cover+')' }">
    <div class="content">
      <h1>{{ name }}</h1>
      <p>{{ places }} Lugares</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'departament-card',
  props: {
    name: String,
    places: Number,
    color: String,
    cover: String
  },
  data () {
    return {
      chooseOverlay: function () {
        return 'red'
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/_overlays.scss';
  .departament-card {
    min-height: 250px;
    background-size: cover;
    background-position: center;
    text-align: center;
    cursor: pointer;
    .content {
      padding-top: 15%;
      position: relative;
      z-index: 3;
      color: white;
      h1 {
        text-transform: uppercase;        
        font-size: 42pt;
        font-weight: bold;
        margin: 3px;
      }
      p {
        font-size: 16pt;
        font-weight: bold;
      }
    }
    @media screen and (min-width: 500px) {
      .content {
        padding: 5%
      }
    }
  }
</style>
