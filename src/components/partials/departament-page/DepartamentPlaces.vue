<template>
  <div v-if="departament" class="departament-places">
    <el-row :gutter="10">
      <el-col v-for="place of departament.places" :key="place.id+'place'" :xs="24" :sm="12">
        <!-- Place card -->
        <el-card class="place-card" :body-style="{ padding: '0px' }">
          <el-card class="activity-card" :body-style="{ padding: '0px' }">
            <img :src="place.cover" :alt="place.name">
            <div class="body-card">
              <h2 class="title">{{ place.name }}</h2>
              <p class="text-muted">{{ place.category }}</p>
              <el-rate v-model="place.rating" disabled text-color="#ff9900">
              </el-rate>
              <el-button class="details" type="text">Ver detalles</el-button>
            </div>
          </el-card>
        </el-card>
        <!-- Place Card -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'departament-places-partial',
  props: {
    departament: Object
  }
}
</script>
<style lang="scss" scoped>
h2.title {
  margin: 0;
}

img {
  max-height: 150px;
}

p {
  margin-top: 2px;
}
</style>
