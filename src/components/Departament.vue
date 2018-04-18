<template>
  <div id="departament-page">
    <el-row :gutter="10" class="main">
      <el-col class="page-content" :sm="{span: 16, offset: 4}" :md="{span: 12, offset: 6}">
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
              <departament-info-partial :departament="departament"></departament-info-partial>
            </el-tab-pane>
            <el-tab-pane label="Lugares">
              <departament-places :departament="departament"></departament-places>
            </el-tab-pane>
            <el-tab-pane label="Galería">
              <departament-galleries :galleries="departament.galleries"></departament-galleries>
            </el-tab-pane>
            <el-tab-pane label="Comentarios">
              Reviews
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DepartamentInfo from './partials/departament-page/DepartamentInfo.vue'
import DepartamentPlaces from './partials/departament-page/DepartamentPlaces.vue'
import DepartamentGalleries from './partials/departament-page/DepartamentGalleries.vue'
export default {
  components: {
    'departament-info-partial': DepartamentInfo,
    'departament-places': DepartamentPlaces,
    'departament-galleries': DepartamentGalleries
  },
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
            id: 1,
            name: 'Actividad 1',
            short_desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: require('../assets/img/default.jpg')
          },
          {
            id: 2,
            name: 'Actividad 2',
            short_desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: require('../assets/img/default-2.jpg')
          }
        ],
        news: [
          {
            id: 1,
            title: 'Novedad 1',
            short_desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: require('../assets/img/default.jpg')
          },
          {
            id: 2,
            title: 'Novedad 2',
            short_desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: require('../assets/img/default-2.jpg')
          }
        ],
        places: [
          {
            id: 1,
            name: 'Las Brasas',
            category: 'Restaurante',
            cover: require('../assets/img/default.jpg'),
            rating: 5,
            schedule: {
              all: { open_at: '6am', close_at: '11pm' }
            }
          },
          {
            id: 2,
            name: 'Las Fonda',
            category: 'Bar',
            cover: require('../assets/img/default-2.jpg'),
            rating: 4.2,
            schedule: {
              days: [
                {
                  name: 'lunes',
                  open_at: '6am',
                  close_at: '11pm'
                },
                {
                  name: 'martes',
                  open_at: '6am',
                  close_at: '11pm'
                },
                {
                  name: 'miercoles',
                  open_at: '6am',
                  close_at: '11pm'
                },
                {
                  name: 'jueves',
                  open_at: '6am',
                  close_at: '11pm'
                },
                {
                  name: 'viernes',
                  open_at: '6am',
                  close_at: '11pm'
                },
                {
                  name: 'sabado',
                  open_at: '11am',
                  close_at: '11pm'
                },
                {
                  name: 'domingo',
                  open_at: '11am',
                  close_at: '11pm'
                }
              ]
            }
          }
        ],
        galleries: [
          {
            title: 'Eventos',
            picture: require('../assets/img/default.jpg'),
            short_desc: 'Aventos realizados en abril'
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
