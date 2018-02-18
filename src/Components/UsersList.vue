<template>
  <div class="card-deck">
    <div v-for="(user, index) in getUsers" :key="index" class="card">
      <div class="card-body">
        <h5 class="card-title">Username: {{user.username}}</h5>
        <div class="form-group">
          <span>Age: {{user.age}}</span>
          <br>
          <span>City: {{user.locality}}</span>
        </div>
        <div>
          <button class="btn btn-primary">Edit</button>

        </div>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</template>
<script>
  import { dbUserRef } from '../firebase/firebase-config'

  export default { 
    created(){
        this.$store.dispatch('setUsersList', dbUserRef)      
    },
    computed: {
      getUsers() {
        return this.$store.getters.getUsers
      }
    }
  }
</script>
