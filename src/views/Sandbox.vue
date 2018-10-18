<template>
  <main id="sandbox">
    <NavBar>
      <img @click="backNav()" slot="left-menu" class="wrapper-flex back-btn" src="../assets/back_btn.png" alt="Back Button">
      <router-link to="/" slot="right-menu" class="logo">
        <h2>Sandbox</h2>
        <small>by <b>Kheops Valencia</b></small>
      </router-link>
    </NavBar>
    <div class="wrapper wrapper-flex">
      <router-view/>
    </div>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "sandbox",
  components: {
    NavBar
  },
  methods: {
    backNav(){
      if( this.$route.fullPath === "/sandbox/menu" || window.history.length === 1){
        this.$router.replace('/');
      }else{
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

#sandbox{
  .navbar{
    .back-btn{
      width: 20px;
      cursor: pointer;
      @include tablet-landscape{
        width: 30px;
      }
    }
    .logo{
      color: $blanco;
      text-align: center;
      text-decoration: none;
      //transition: 0.3s ease;
      h2, small{
        margin: 0px;
      }
    }
  }
  .wrapper.wrapper-flex{
    justify-content: center;
  }
}
</style>

