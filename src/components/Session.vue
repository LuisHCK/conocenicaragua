<template>
  <div id="session-page">
    <div class="screen-overlay"></div>
    <el-row>
      <el-col :lg="{span: 10, offset: 7}" :sm="24" :xs="24">
        <div class="message">
          <h1>Iniciar Sesión</h1>
          <p>Elige la opción que prefieras</p>
          <div class="loggin-buttons">
            <el-row :gutter="20">
              
              <el-col :sm="12" :lg="12">
                <el-button class="block" type="primary" round @click="goTo('session')">
                  <img class="img-icon" :src="require('../assets/img/facebook.png')" alt=""> Iniciar con Facebook
                </el-button>
              </el-col>
              
              <el-col :sm="12" :lg="12">
                <el-button class="block" type="danger" round @click="goTo('session')">
                  <img class="img-icon" :src="require('../assets/img/google.png')" alt=""> Iniciar con Google
                </el-button>
              </el-col>

              <el-col :xs="24">
                <p class="or-maybe">
                  O tambien puedes
                </p>
              </el-col>
              <el-col :xs="24">
                <el-button class="large" plain round @click="goTo('departaments')">Iniciar como Invitado</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goTo: function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_session.scss';
</style>
