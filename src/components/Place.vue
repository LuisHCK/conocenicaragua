<template lang="html">

  <div id="place">
    <el-row>
      <el-col class="page-content" :lg="{span: 12, offset: 6}" :sm="24">
        <div class="cover" :style="{backgroundImage: 'url('+place.cover+')'}">
          <div class="content">
            <img :src="place.avatar" alt="place.name" class="avatar">
            <el-rate v-model="place.rate"></el-rate>
            <h2>{{place.name}}</h2>
            <b>{{place.category}}</b>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>

</template>

<script lang="js">
  export default {
    name: 'place',
    props: [],
    data() {
      return {
        place: {
          name: 'Las Brasas',
          category: 'Restaurante',
          rate: 4.5,
          address: 'Calle 22, 3 cuadras al lago, 4 al sur',
          cover: 'https://media-cdn.tripadvisor.com/media/photo-s/05/11/5c/6e/restaurante-las-brasas.jpg',
          avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/06/a6/46/9e/logo.jpg'
        }
      }
    },
    methods: {

    },
    computed: {

    },

    created() {
      console.log(this.$route.query.id)
    }
}
</script>

<style scoped lang="scss">
#place {
  height: 100vh;
  .cover {
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    color: white;
    .content {
      background-color: rgba(0, 0, 0, 0.514);
      height: inherit;
    }

    h2 {
      margin-bottom: 3px;
      margin-top: 3px;
    }

    img.avatar {
      margin-top: 8%;
      height: 90px;
      width: 90px;
      border-radius: 100px;
    }
  }
}
</style>
