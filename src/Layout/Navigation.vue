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
        <router-link v-if="isUserLoggedIn" to="/users" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">User</a>
        </router-link>
      </ul>
      <div v-if="!isUserLoggedIn"> 
        <router-link to="/sign-in" tag="span" class="text-white" active-class="active">Sign in</router-link>
      </div>
      <div v-else>
        <ul class="navbar-nav mr-auto">
          <router-link to="/settings" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Settings</a>
          </router-link>
          <li class="nav-item">
            <a class="nav-link"  @click="logout">Logout</a>
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
