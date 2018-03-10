<template>
  <div class="container">
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
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            signIn(){
                this.$store.dispatch('signIn', this.model).then(() => {
                this.$router.push('/admin/panel')
                this.$refs.modal.hide()
                }).catch(() => {
                this.error = true
                })
            
            }
            
        }
    }
</script>
