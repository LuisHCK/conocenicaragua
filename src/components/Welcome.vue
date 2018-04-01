<template>
  <div class="welcome-page">
    <div class="screen-overlay"></div>
    <el-row>
      <el-col :lg="{span: 10, offset: 7}" :sm="24" :xs="24">
        <div class="message">
          <h1>Te damos la Bienvenida</h1>
          <p>ConoceNicaragua es tu ventana para explorar Nicaragua desde cualquier parte del mundo</p>
          <div class="button-container">
            <el-button plain round @click="goTo('session')">COMENZAR</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    goTo: function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_welcome.scss';
</style>
