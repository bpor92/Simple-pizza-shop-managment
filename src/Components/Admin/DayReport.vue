<template>
  <div>
    <b-card v-if="daySummary.length > 0" bg-variant="secondary" class="form-group col-xs-12 mx-auto">
      <h1 class="text-white text-center form-group">Done</h1>
      <div class="row"> 
        <Order v-for="order in daySummary" 
          :key="order['.key']" 
          :order="order"
          class="col-sm-3 mb-5"/>
      </div>
    </b-card>
  </div>

</template>
<script>
  import {dbOrderRef} from '../../firebase/firebase-config'
  import {currentDate } from '../../Helpers/date'
  import Order from './Order.vue'
  export default {
    components: {
      Order
    },
    created() {
      this.$store.dispatch("fetchOrders", dbOrderRef);
    },
    computed: {
      daySummary() {
        return this.$store.state.Order.filter(order => order.status === 'done')
      }
    }
  }
</script>