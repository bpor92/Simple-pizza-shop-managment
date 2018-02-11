<template>
  <div>
    <div class="form-group">
      <label for="">Email</label>
      <input type="text" class="form-control" v-model="model.email">
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input type="password" class="form-control" v-model="model.password">
    </div>
    <button class="btn btn-primary" @click="signIn">Sign In</button>
  </div>
  
</template>
<script>

export default {
  data() {
    return {
      model: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      let that = this
      this.$store.dispatch('signIn', this.model).then(function(){
        that.$router.push('/')
      })

      
    }
  }
};
</script>
