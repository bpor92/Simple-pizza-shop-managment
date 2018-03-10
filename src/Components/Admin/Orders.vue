<template>
  <div>
      Orders
        <b-table stacked :items="getOrders"></b-table>
  </div>
</template>

<script>
    import {dbOrderRef} from '../../firebase/firebase-config'
    export default {
        created() {
            this.$store.dispatch('fetchOrders', dbOrderRef)
        },
        computed: {
            getOrders() {
                return this.$store.state.Order  
            }
        }
    }
</script>