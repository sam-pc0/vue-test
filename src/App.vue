<template>
  <section class="container has-text-white">
    <b-navbar class="navbar navbar-default">
      <b-navbar-brand class="navbar-header">
        <router-link class="navbar-brand" to="/app/welcome"
          >Blautech</router-link
        >
      </b-navbar-brand>

      <b-navbar-nav class="nav navbar-nav">
        <b-nav-item
          ><router-link to="/app/welcome">Welcome</router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/app/users">Users</router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/app/newuser">Create User</router-link></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </section>
</template>

<script charset="utf-8">
export default {
  name: 'App',
};
</script>

<style lang="scss"></style>
