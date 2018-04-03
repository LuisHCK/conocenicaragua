<template>
  <div id="departament-galleries">
    <el-row>
      <el-col v-for="gallery of galleries" :key="'gallery_'+gallery.id" :xs="24" :sm="12">
        <el-card class="activity-card" :body-style="{ padding: '0px' }">
          <img :src="gallery.picture" :alt="gallery.title">
          <div class="body-card">
            <span class="title">{{ gallery.title }}</span>
            <p>{{ gallery.short_desc }}</p>
            <el-button class="details" type="text">Ver galería</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    galleries: Array
  }
}
</script>

<style>

</style>
