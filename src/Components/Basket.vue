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
      </div>
      <div v-else>
        <b-alert show variant="light">Your basket its empty!</b-alert>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        name: {
          label: "Pizza",
        },
        price: {
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
    }
  }
};
</script>