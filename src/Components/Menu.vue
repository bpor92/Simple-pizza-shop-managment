<template>
  <div class="row">
    <Pizza v-for="(item, index) in $store.state.Menu" :item="item" :key="index"  />
  </div>
</template>

<script>
import {dbMenuRef} from '../firebase/firebase-config'
import Pizza from './Pizza'

export default {
  components: {Pizza},
  created() {
    this.$store.dispatch("importMenu", dbMenuRef);
  }
};
</script>

