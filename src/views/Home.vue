<template>
  <main class="home">
    <NavBar>
      <ul slot="left-menu" class="wrapper-flex">
        <li><a id="link-about" :class="[logoColorScr == 'logo-red-scr'? 'logo-red-scr' : '']" @mouseover="changeLogoColor()" @mouseout="logoColor = ''" @click="smoothScroll('about')">Acerca</a></li>
        <li><a id="link-work" :class="[logoColorScr == 'logo-blue-scr'? 'logo-blue-scr' : '']" @mouseover="changeLogoColor()" @mouseout="logoColor = ''" @click="smoothScroll('work')">Trabajo</a></li>
        <li><a id="link-contact" :class="[logoColorScr == 'logo-yellow-scr'? 'logo-yellow-scr' : '']" @mouseover="changeLogoColor()" @mouseout="logoColor = ''" @click="smoothScroll('contact')">Contacto</a></li>
      </ul>
      <div slot="right-menu" class="logo" :class="[logoColor,logoColorScr]">
        <a @click="smoothScroll('main-head')">
          <h2>Sandbox</h2>
          <small>by <b>Kheops Valencia</b></small>
        </a>
      </div>
    </NavBar>
    <HelloWorld/>
    <MyWork/>
    <Contact/>
    <MainFooter/>
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </main>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MyWork from "@/views/MyWork.vue";
import Contact from "@/views/Contact.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "home",
  components: {
    NavBar,
    HelloWorld,
    MyWork,
    Contact,
    MainFooter,
  },
  data(){
    return{
      logoColor: '',
      logoColorScr: '',
    }
  },
  methods: {
    smoothScroll(section){
      var el = document.getElementById(section);
      var location = el.offsetTop;
      window.scrollTo({
        top: (location-100),
        behavior: "smooth"
      });
    },
    changeLogoColor() {
      var el = document.querySelector('#main-nav ul a:hover');
      if(el.matches('#link-about')) {
        this.logoColor = 'logo-red';
      }else if(el.matches('#link-work')){
        this.logoColor = 'logo-blue';
      }else if(el.matches('#link-contact')){
        this.logoColor = 'logo-yellow';
      }else{
        this.logoColor = '';
      }
    },
    sectionScroll(){
      const s1 = document.getElementById('about');
      const s2 = document.getElementById('work');
      const s3 = document.getElementById('contact');
      if(window.scrollY >= (s1.offsetTop-150) && window.scrollY < (s2.offsetTop-150)) {
        this.logoColorScr = 'logo-red-scr';
      }else if(window.scrollY >= (s2.offsetTop-150) && window.scrollY < (s3.offsetTop-150)) {
        this.logoColorScr = 'logo-blue-scr';
      }else if(window.scrollY >= (s3.offsetTop-150)) {
        this.logoColorScr = 'logo-yellow-scr';
      }else{
        this.logoColorScr = '';
      }
    },
  },
  created(){
    window.addEventListener('scroll', this.sectionScroll);
  },
  destroyed(){
    window.removeEventListener('scroll', this.sectionScroll);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';

#main-nav{  
  div.wrapper-flex{
    ul{
      width: 55%;
      margin: 0px;
      padding: 0px;
      font-weight: bold;
      list-style-type: none;
      justify-content: space-between;
      @include tablet-portrait() {
        width: 40%;
      }
      @include tablet-landscape() {
        width: 30%;
      }

      a#link-about{
        &.logo-red-scr{
          color: $rojo;
        }
        @include desktop(){
          @include navLink($rojo);
        }
      }
      a#link-work{
        &.logo-blue-scr{
          color: $azul;
        }
        @include desktop(){
          @include navLink($azul);
        }
      }
      a#link-contact{
        &.logo-yellow-scr{
          color: $amarillo;
        }
        @include desktop(){
          @include navLink($amarillo);
        }
      }
    }
    .logo{
      color: $blanco;
      text-align: center;
      transition: 0.3s ease;
      @include desktop(){
        &.logo-red{
          color: $rojo !important;
        }
        &.logo-blue{
          color: $azul !important;
        }
        &.logo-yellow{
          color: $amarillo !important;
        }
      }
      &.logo-red-scr{
        color: $rojo;
      }
      &.logo-blue-scr{
        color: $azul;
      }
      &.logo-yellow-scr{
        color: $amarillo;
      }
      h2, small{
        margin: 0px;
      }
    }
  }
}
</style>
