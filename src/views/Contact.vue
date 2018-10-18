<template>
  <section id="contact">
    <div class="wrapper wrapper-grid">
      <h2 class="title">K://Contacto</h2>
      <ContactMe/>
      <div class="hr-sect"><span>O</span></div>
      <ContactPopit/>
    </div>
  </section>
</template>

<script>
let ContactMe = () => import(/* webpackChunkName: "contactme" */ '@/components/ContactMe.vue')
let ContactPopit = () => import(/* webpackChunkName: "contactpopit" */ '@/components/ContactPopit.vue')

export default {
  name: "Contact",
  components: {
    ContactMe,
    ContactPopit
  },
  data() {
    return {
      me: false
    };
  },
  methods: {
    showMe() {
      this.me = true;
    },
    showPopit() {
      this.me = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/styles.scss';

#contact {
  text-align: center;
  padding: 25px 0px;
  
  .wrapper-grid {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "contact-me"
      "hr"
      "contact-popit";
    @include tablet-landscape {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas:
        "title title title"
        "contact-me hr contact-popit";
    }

    .title{
      grid-area: title;
      color: $amarillo;
      text-align: left;
      margin-top: 0.67em;
      margin-bottom: 0.67em;
    }
    .contact-me{
      grid-area: contact-me;
    }
    .contact-popit{
      grid-area: contact-popit;
    }
    p{
      font-family: 'Quicksand', sans-serif;
      a{
        color: $amarillo;
        font-weight: bold;
      }
    }
    .social img{
      background-color: $amarillo;
    }
  }

  .hr-sect {
    grid-area: hr;
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    margin: 15px 0px;
    @include tablet-landscape {
      writing-mode: vertical-rl;
      margin: 0px 10px;
      span{
        writing-mode: horizontal-tb;
      }
    }
  }
  .hr-sect::before,
  .hr-sect::after {
    content: "";
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 1);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
    @include tablet-landscape() {
      width: 1px;
      height: auto;
      margin: 16px 0px;
    }
  }

}
</style>
