<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link to="/user" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">User</a>
        </router-link>
      </ul>
      <span v-if="!isUserLoggedIn" class="text-white">Sign </span>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn
      }
    }
  }
</script>
