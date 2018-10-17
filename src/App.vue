<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <header id="main-head" class="wrapper-flex">
      <div class="wrapper wrapper-grid">
        <h1 class="title">Awesome sandbox</h1>
        <h2 class="subtitle">by <b>Kheops Valencia</b><br><i>Web Developer</i></h2>
        <p class="description">
          El sitio donde pruebo<br>
          <i>nuevas técnicas</i> de<br>
          <b>Diseño y Desarrollo Web</b>
        </p>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted: () => {
    var el1 = document.querySelectorAll('#main-head .subtitle')[0];
    var el2 = document.querySelectorAll('#main-head .description')[0];
    setTimeout(function(){
      el1.classList.add('sub-anim');
      setTimeout(function(){
        el2.classList.add('desc-anim');
      }, 200);
    }, 1000);
  }
};
</script>

<style lang="scss">
@import './assets/styles.scss';

html {
  text-rendering: optimizeLegibility;
}

html, body{
  @extend %full-screen;
  font-size: 100%;
  @include tablet-landscape() {
    font-size: 105%;
  }
  @include desktop() {
    font-size: 110%;
  }
  @include desktop-big() {
    font-size: 120%;
  }
}
#app {
  @extend %full-screen;
  font-family: 'Raleway', sans-serif;
  background-color: #f0f1f2;
  color: #232528;
  h1,h2,p{
    margin: 0px;
  }
  a{
    cursor: pointer;
  }
  
  #main-head{
    font-family: 'Raleway', sans-serif;
    background-color: $negro;
    color: $blanco;
    @include desktop() {
      height: 70%;
      font-size: 120%;
    }
    
    .wrapper{
      @include tablet-portrait() {
        width: 65%;
      }
      @include desktop() {
        width: 60%;
      }
    }
    .wrapper-grid{
      grid-template-rows: auto auto 1fr 1fr 1fr auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      padding: 30px 0px;
      @include tablet-portrait() {
        padding: 30px 0px;
      }
      @include tablet-landscape() {
        padding: 50px 0px;
      }
      @include desktop() {
        margin: 50px auto;
        padding: 0px;
      }
    }

    .title{
      grid-area: 2/1/3/6;
      color: $rojo;
      font-weight: 700;
      text-align: right;
      text-transform: uppercase;
      align-self: end;
    }
    .subtitle{
      grid-area: 3/5/6/6;
      font-weight: 400;
      writing-mode: vertical-rl;
      text-align: left;
      margin-top: -10px;
      white-space: nowrap;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 0%;
        transition: .3s ease;
        border-right: 3px solid $azul;
      }
      &.sub-anim{
        &:after{
          border-right: 3px solid $azul;
          height: 100%;
        }
      }
      b{
        color: $azul;
      }
      i{
        font-weight: 200;
      }
    }
    .description{
      grid-area: 4/1/6/4;
      margin: 0px;
      align-self: end;
      text-align: left;
      padding-left: 5px;
      white-space: nowrap;
      line-height: 1.5em;
      position: relative;
      @include tablet-portrait() {
        padding-left: 10px;
      }
      @include desktop() {
        padding-left: 15px;
      }
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 0%;
        transition: .3s ease;
        border-left: 3px solid $amarillo;
      }
      &.desc-anim{
        &:after{
          border-left: 3px solid $amarillo;
          height: 100%;
        }
      }
      b{
        color: $amarillo;
      }
    }

  }

}
/*#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
