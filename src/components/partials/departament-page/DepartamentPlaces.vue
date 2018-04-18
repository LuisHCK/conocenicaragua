<template>
  <div v-if="departament" class="departament-places">
    <el-row :gutter="10">
      <el-col v-for="place of departament.places" :key="place.id+'place'" :xs="24" :sm="12">
        <!-- Place card -->
        <el-card class="place-card" :body-style="{ padding: '0px' }">
          <el-card class="activity-card" :body-style="{ padding: '0px' }">
            <img :src="place.cover" :alt="place.name" @click="showPlace(place.id)">
            <div class="body-card">
              <h3 class="title" @click="showPlace(place.id)">{{ place.name }}</h3>
              <p class="text-muted">{{ place.category }}</p>
              <el-rate v-model="place.rating" disabled text-color="#ff9900">
              </el-rate>
              <p class="text-muted">
                <b>Horario de atención:</b>
                <br>
                <template v-if="place.schedule.all">
                  {{ place.schedule.all.open_at }} - {{ place.schedule.all.close_at }}
                </template>
                <template v-else>
                  <div v-for="(day, index) of place.schedule.days" :key="day.name" class="schedule-item">
                    <template v-if="getToday(index+1)">
                      {{ day.name }}: {{ day.open_at }} - {{ day.close_at }}
                    </template>
                  </div>
                </template>
              </p>
              <el-button class="details" type="text" @click="showPlace(place.id)">Ver detalles</el-button>
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
  },

  methods: {
    getToday: function(dayIndex) {
      const today = new Date()
      let isToday = false
      if (today.getDay() === dayIndex) {
        return true
      }
      return isToday
    },

    showPlace(id) {
      this.$router.push({ name: 'Place', query: { id: id } })
    }
  }
}
</script>
<style lang="scss" scoped>
h3.title {
  margin: 0;
}

img {
  max-height: 150px;
  cursor: pointer;
}

p {
  margin-top: 2px;
}

.el-rate {
  padding: 3px 0 3px;
}
</style>
