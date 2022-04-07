<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="authenticated"> <!-- v-if="authenticated" -->
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/students">Students</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" v-on:click="Logout()">Logout</a></li>
          </ul>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav> 
<router-view @authenticated='setAuthenticated'></router-view>  
</div>
   

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  export default {
    name: "App",
    data() {
      return {
        authenticated: localStorage.getItem('status'),
        email: '',
        role: ''
      };
    },
    methods: {
      Logout: function() {
        localStorage.clear();
        this.authenticated = false;
        this.RedirectLogin();
      },
      RedirectLogin: function() {
        if (this.authenticated == false) {
          this.$router.replace({name:'Login'});
        } 
      },
      setAuthenticated: function(status) {
        this.authenticated = status;
      },
    },
    mounted() {
      this.RedirectLogin();
      if (JSON.parse(localStorage.getItem('data')) != null) {
        this.role = JSON.parse(localStorage.getItem('data')).role;
        this.email = JSON.parse(localStorage.getItem('data')).email;
      }    
    }
  }
</script>

