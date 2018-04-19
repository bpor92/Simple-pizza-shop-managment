<template>
  <div class="col-sm-6 form-group">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
        <div v-if="isInBasket">
          <b-alert show variant="success">Product successful added to basket</b-alert>
        </div>
        <div v-else>
          <a href="#" class="btn btn-primary" @click="addToBasket({name: item.name, price: item.price, index, quantity: 1, total: item.price})">Add to basket</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    addToBasket(order) {
      this.$store.dispatch("addToBasket", order)
    }
  },
  computed: {
    isInBasket() {
      return this.$store.state.basket.find(item => item.name === this.item.name)
    }
  }
}
</script>
