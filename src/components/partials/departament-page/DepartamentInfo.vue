<template>
  <div v-if="departament" id="departament-info-partial">

    <el-card>
      <div slot="header">
        Información
      </div>
      {{ departament.description }}
    </el-card>

    <!-- ACTIVITIES -->

    <h2>Actividades</h2>
    <el-row :gutter="10">
      <el-col v-for="activity of departament.activities" :key="activity.id+'activity'" :sm="{span: 12}" :xs="24">
        <el-card class="activity-card" :body-style="{ padding: '0px' }">
          <img :src="activity.image" :alt="activity.name">
          <div class="body-card">
            <span class="title">{{ activity.name }}</span>
            <p>{{ activity.short_desc }}</p>
            <el-button class="details" type="text">Ver detalles</el-button>
          </div>
        </el-card>

      </el-col>
    </el-row>

    <!-- NEWS -->

    <h2>Novedades</h2>
    <el-row :gutter="10">
      <el-col v-for="news_item of departament.news" :key="'news'+news_item.id" :sm="{span: 12}" :xs="24">
        <el-card class="activity-card" :body-style="{ padding: '0px' }">
          <img :src="news_item.image" :alt="news_item.title">
          <div class="body-card">
            <span class="title">{{ news_item.title }}</span>
            <p>{{ news_item.short_desc }}</p>
            <el-button class="details" type="text">Ver más</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'departament-info-partial',
  props: {
    departament: Object
  }
}
</script>

<style>

</style>
