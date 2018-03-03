<template>
  <div class="row">
    <div v-for="(item, index) in menu" :key="index" class="col-sm-6 form-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">{{item.description}}</p>
          <a href="#" class="btn btn-primary" @click="addToBasket({name: item.name, price: item.price})">Add to basket</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import menu from '../Helpers/menu'
export default {
  data(){
    return {
      menu
    }
  },
  methods: {
    addToBasket(order){
      this.$store.dispatch('addToBasket', order)
    }
  }
};
</script>