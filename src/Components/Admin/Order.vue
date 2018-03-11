<template>
  <div>
    <b-card 
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        footer="Card Footer"
        footer-tag="footer"
        footer-bg-variant="white"
        :border-variant="statusBorder"
      > 
      <div slot="header">
        {{order.address.city + ', ' + order.address.street}} 
        <span class="badge" :class="status">{{order.status === 'inProgress' ? 'in progress' : 'todo'}}</span>
        <small class="d-block">telephone: {{order.address.telephone}}</small>
        <small class="text-muted">ID : {{order.id}}</small>
      </div>
      <div v-for="(detail, index) in order.details" :key="index">
        <p class="card-text" >{{detail.pizza}} {{detail.quantity > 1 ? 'x' + detail.quantity : ''}}</p>
      </div>
      <div class="text-right">
        <small>total: {{order.total}}</small>

      </div>
      <div slot="footer">
        <button class="btn btn-success btn-block" @click="changeStatus(order['.key'])">Prepare</button>
      </div>
      </b-card>
  </div>
</template>
<script>
export default {
  props: {
    order: {
      type: Object
    }
  },
  methods: {
    changeStatus(id) {
      this.$store.dispatch("changeStatus", { id, status: "inProgress" });
    }
  },
  computed: {
    status(){
      if(this.order.status === 'inProgress'){
        return 'badge-warning'
      }else if(this.order.status === 'todo'){
        return 'badge-danger'
      }else{
        return 'badge-primary'
      }
    },
    statusBorder() {
      if(this.order.status === 'inProgress'){
        return 'warning'
      }else if(this.order.status === 'todo'){
        return 'danger'
      }else{
        return 'primary'
      }
    }
  }
};
</script>