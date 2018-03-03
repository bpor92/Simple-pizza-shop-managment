<template>
    <div>
        <b-table striped responsive  hover :items="$store.state.basket" :dark="true" :fields="fields">
          <template slot="show_details" slot-scope="row">
            <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
            <b-button size="sm" @click.stop="removeItem(row.index)" class="mr-2">
              Remove
            </b-button>
            <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
              One more!
            </b-button>
          </template>
        </b-table>
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
        show_details: {
          label: 'Option'
        }
      }
    };
  },
  methods: {
    removeItem(index){
      this.$store.dispatch('removeItem', index)
    }
  }
};
</script>