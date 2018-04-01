<template>
  <div id="departaments-page">
    <el-row>
      <el-col class="page-content" :lg="{span: 12, offset: 6}" :sm="24">
        <departament-card
          v-for="departament in departaments" 
          :key="departament.name"
          :name="departament.name"
          :cover="departament.cover"
          :places="departament.places"
          color="red"
          @click.native="openDepartament(departament.name)">
        </departament-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DepartamentsCard from './custom/DepartamentCard.vue'
export default {
  components: {'departament-card': DepartamentsCard},
  data () {
    return {
      departaments: [
        {
          name: 'Estelí',
          places: 12,
          cover: require('../assets/img/departamentos/Esteli.jpg')
        }
      ]
    }
  },

  methods: {
    openDepartament: function (name) {
      this.$router.push({ path: `/departaments/${name}`, params: {name: name} })
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/_departaments.scss'
</style>
