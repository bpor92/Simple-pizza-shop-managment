<template>
    <div>
      <div v-if="$store.state.basket.length> 0">
        <b-table striped responsive  hover :items="$store.state.basket" :dark="true" :fields="fields">
          <template slot="show_details" slot-scope="row">
            <b-button size="sm" @click.stop="removeItem(row.index)" class="mr-2">
              Remove
            </b-button>
            <b-button size="sm" @click.stop="incQty(row.index)" class="mr-2">
              +
            </b-button>
            <b-button size="sm" @click.stop="decQty(row.index)" class="mr-2">
              -
            </b-button>
          </template>
        </b-table>
        <b-alert show variant="primary">Summary:  {{summary}}</b-alert>
        <b-button @click="submitOrder">Submit your order</b-button>
      </div>
      <div v-else>
        <b-alert show variant="light">Your basket its empty!</b-alert>
      </div>
    </div>
</template>

<script>
import {dbOrderRef} from '../firebase/firebase-config'
export default {
  data() {
    return {
      summaryOrder: 0,
      fields: {
        name: {
          label: "Pizza",
        },
        total: {
          label: "Price",
        },
        quantity: {
          label: 'Quantity'
        },
        show_details: {
          label: 'Option'
        }
      }
    };
  },
  methods: {
    removeItem(index){
      this.$store.dispatch('removeItem', index)
    },
    incQty(index){
      this.$store.dispatch('incQty', index)
    },
    decQty(index){
      this.$store.dispatch('decQty', index)
    },
    submitOrder() {
      const order = this.$store.state.basket.map(order => {
        return {
          pizza: order.name,
          quantity: order.quantity,
          price: parseFloat(order.price),
          total: parseFloat(order.total)
        }
      })
      order.total = this.summaryOrder
      this.$store.dispatch('submitOrder', order)
    }
  },
  computed: {
    summary() {
      let summary = this.$store.state.basket.reduce((a, b) => a + parseFloat(b.total), 0)
      this.summaryOrder = parseFloat(summary)
      return summary
    }
  }
};
</script>