<template>
  <div class="row">
         <div v-for="order in getOrders" class="col-sm-3 mb-5">
            <b-card 
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="dark"
                footer="Card Footer"
                footer-tag="footer"
                footer-bg-variant="white"
                footer-border-variant="dark"
            > 
            <div slot="header">{{order.address.city + ', ' + order.address.street}} <small class="d-block">telephone: {{order.address.telephone}}</small></div>
            <div v-for="detail in order.details">
                <p class="card-text" >{{detail.pizza}} {{detail.quantity > 1 ? 'x' + detail.quantity : ''}}</p>
            </div>
            <div class="text-right">
                <small>total: {{order.total}}</small>

            </div>
            <div slot="footer">
                <button class="btn btn-success btn-block" @click="orderInProgress">Prepare</button>
            </div>
            </b-card>
      </div>
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
        },
        methods: {
            orderInProgress() {
                
            }
        }
    }
</script>