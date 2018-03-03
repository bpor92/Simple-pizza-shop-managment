<template>
<div>
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
        <router-link to="/menu" tag="li" class="nav-item" active-class="active" exact>
          <a class="nav-link">Menu</a>
        </router-link>
        <router-link v-if="isUserLoggedIn" to="/users" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">User</a>
        </router-link>
      </ul>
      <div class="nav-item row" v-if="!isUserLoggedIn"> 
        <span v-b-modal.signIn class="text-white nav-link">Sign in</span>
        <ul v-if="$store.state.basket.length" class="navbar-nav mr-auto">
          <router-link to="/basket" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Basket <span class="badge badge-secondary">{{$store.state.basket.length}}
              </span></a>
          </router-link>
        </ul>
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
  
  <!-- modal -->
  <b-modal ref="modal" id="signIn" hide-footer title="Sign in">
    <b-alert v-if="error" show variant="danger">
      Incorrect login details
    </b-alert>
    <div class="form-group">
      <label for="">Email</label>
      <input type="text" class="form-control" v-model="model.email">
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input type="password" class="form-control" v-model="model.password">
    </div>
    <button class="btn btn-primary" @click="signIn">Sign In</button>
  </b-modal>
</div>
</template>
<script>
  export default {
    data() {
      return {
        model: {
          email: "",
          password: ""
        },
        error: false
      };
    },
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
      },
      signIn() {
        this.$store.dispatch('signIn', this.model).then(() => {
          this.$router.push('/')
          this.$refs.modal.hide()
        }).catch(() => {
          this.error = true
        })
      
      }
    }
  }
</script>
