<template>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <el-carousel class="bg-carousel" :interval="3000" :pause-on-hover="false" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
      <div class="name-card-content">
        <el-avatar :size="150" :src="circleUrl" />
        <HelloWorld msg="my-project-v2" />
      </div>
    </el-carousel>
  </div>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'


export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const circleUrl = ref<String>('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
    return {
      circleUrl
    }
  }
})
</script>

<style lang="less" scoped>
.logo {
  height: 150px;
  padding: 30px;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 75px #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 75px #42b883aa);
}
.bg-carousel {
  .el-carousel__item {
    height: 100vh;
  }
  height: 100vh;
}
.name-card-content {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100vh;
  z-index: 999 !important;
  // background: @red-color;
}
</style>
