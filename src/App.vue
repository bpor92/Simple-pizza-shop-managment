<template>
  <div id="app">
    <navigation></navigation>
    <div class="container">
      <router-view class="mt-sm-5"></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './Layout/Navigation.vue'

export default {
  components: { Navigation },
}
</script>

