<template>
  <div id="departament-page">
    <el-row>
      <el-col class="page-content" :lg="{span: 12, offset: 6}">
        <div class="header" :style="{ 'background-image': 'url('+ departament.cover +')' }">
          <div class="toolbar">
            <button @click="goTo('/departaments')" class="back icon-btn">
              <i class="material-icons">arrow_back</i>
            </button>
            <div class="spacer" style="width: 100%"></div>
            <button class="like icon-btn">
              <i class="material-icons">favorite</i>
            </button>
          </div>

          <div style="min-height: 120px"></div>

          <div class="info">
            <h1>{{ departament.name }}</h1>
            <span class="nickname">{{ departament.nickname }}</span>
          </div>
        </div>

        <div class="container">
          <el-tabs>
            <el-tab-pane label="Inicio">

              <el-card>
                <div slot="header">
                  Información
                </div>
                {{ departament.description }}
              </el-card>

              <h2>Actividades</h2>
              <el-row>
                <el-col v-for="activity of departament.activities" :key="activity.id+'activity'" :lg="{span: 12}" :xs="24">
                  <el-card class="activity-card" :body-style="{ padding: '0px' }">
                    <img :src="activity.image" :alt="activity.name">
                    <div style="padding: 14px">
                      <span class="title">{{ activity.name }}</span>
                      <p>{{ activity.short_desc }}</p>
                      <el-button type="text" style="float: right">Ver detalles</el-button>
                    </div>
                  </el-card>

                </el-col>
              </el-row>

            </el-tab-pane>
            <el-tab-pane label="Lugares">
              Lugares
            </el-tab-pane>
            <el-tab-pane label="Galería">
              Lugares
            </el-tab-pane>
            <el-tab-pane label="Comentarios">
              Lugares
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departament: {
        cover: require('../assets/img/departamentos/Esteli.jpg'),
        name: this.$route.params.name,
        nickname: 'El diamante de las Segovias',
        description:
          'El departamento de Estelí tiene mucho que ofrecer a sus visitantes. Zona fresca y de importante producción de café, tabaco y hortalizas, se ha desarrollado en las últimas décadas ofertas turísticas que ofrecen la posibilidad de conocer de cerca y desde adentro el proceso de producción de estos distintos rublos, así como su transformación y comercialización. Tanto es así que existen la Ruta del Café y la Ruta del Tabaco',
        activities: [
          {
            name: 'Actividad 1',
            short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: require('../assets/img/departamentos/Masaya.jpg')
          }
        ]
      }
    }
  },

  methods: {
    goTo: function(name) {
      this.$router.push(name)
    }
  },

  mounted() {
    console.log()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_departament.scss';
</style>
