<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f7;
}

.page-content {
  background-color: white;
  height: 100%;
  -webkit-box-shadow: 0px 0px 37px -3px rgba(0,0,0,0.21);
  -moz-box-shadow: 0px 0px 37px -3px rgba(0,0,0,0.21);
  box-shadow: 0px 0px 37px -3px rgba(0,0,0,0.21);
}

.el-row {
  height: 100%;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.img-icon {
  width: 24px;
  height: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.container {
  padding: 0px 8px 8px;
}

button.icon-btn {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.el-tabs__nav {
  text-align: center;
  align-items: center;
  display: contents;
}
.el-tabs__nav-wrap {
  text-align: center;
}

.text-muted {
  color: grey;
}
</style>
