<template>
  <section id="sandbox-cards" class="container wrapper-flex">
    <CardSlot v-for="sandbox in sandboxes" :key="sandbox.id">
      <router-link :to="{path: sandbox.link}" slot="header"><img :src=sandbox.img :alt=sandbox.alt></router-link>
      <small slot="role">{{sandbox.role}}</small>
      <h3 slot="title">{{sandbox.title}}</h3>
      <small slot="footer"><router-link :to="{path: sandbox.link}">{{sandbox.linkTxt}}</router-link></small>
    </CardSlot>
  </section>
</template>

<script>
let CardSlot = () =>
  import(/* webpackChunkName: "cardslot" */ "@/components/CardSlot.vue");

export default {
  name: "sandboxmenu",
  components: {
    CardSlot
  },
  data() {
    return {
      sandboxes: {
        drawScroll: {
          img: "",
          alt: "Draw Scroll Test",
          role: "JavaScript/SVG",
          title: "Draw Scroll SVG",
          link: "draw-scroll",
          linkTxt: "Ir al Sandbox"
        },
        parallax: {
          img: "",
          alt: "Parallax preview",
          role: "HTML/CSS/JS",
          title: "Paralax Demo",
          link: "parallax-demo",
          linkTxt: "Ir al Sandbox"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles.scss";

#sandbox-cards {
  &.container {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1000px;
    
    header a{
      width: 100%;
      height: 100%;
      text-align: center;
      img{
        height: 100%;
      }
    }
  }
}
</style>
