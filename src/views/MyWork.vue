<template>
  <section id="work">
    <div class="wrapper wrapper-flex">
      <h2 class="title">K://Trabajo</h2>
      <div class="container wrapper-flex">
        <CardSlot id="sandbox-card">
          <router-link id="sandbox-img" class="wrapper-flex" to="/sandbox/menu" slot="header">
            <h2>Sandbox</h2>
          </router-link>
          <small slot="role">Desarrollo Web</small>
          <h3 slot="title">Sandbox</h3>
          <small slot="footer">
            <router-link to="/sandbox/menu">Ir al menú de Sandbox</router-link>
          </small>
        </CardSlot>
        <CardSlot v-for="project in projects" :key="project.id">
          <a slot="header" :href=project.link target="_blank">
            <img :src=project.img :alt=project.alt>
          </a>
          <small slot="role">{{project.role}}</small>
          <h3 slot="title">{{project.title}}</h3>
          <small slot="footer">
            <a :href=project.link target="_blank">{{project.linkTxt}}</a>
          </small>
        </CardSlot>
      </div>
    </div>
  </section>
</template>

<script>
let CardSlot = () => import(/* webpackChunkName: "cardslot" */ '@/components/CardSlot.vue')

export default {
  name: "MyWork",
  components: {
    CardSlot,
  },
  data() {
    return {
      projects: {
        popit: {
          img: "https://popitcreativos.com/img/logo_popit.83e9b59a.png",
          alt: "Pop It Creativos Logo",
          role: "Desarrollo Web",
          title: "Pop It Creativos",
          link: "https://www.popitcreativos.com",
          linkTxt: "popitcreativos.com",
        },
        aTeam: {
          img: require("../assets/img/logo_original_web.png"),
          alt: "Fitness Team Logo",
          role: "Diseño de logotipo",
          title: "Logo: Equipo Fitness",
          link: "",
          linkTxt: "",
        }
      },
    }
  },
  updated() {
    var elms = [document.querySelectorAll('.card a[target="_blank"]')[2], document.querySelectorAll('.card a[target="_blank"]')[3]];
    elms.forEach(function(el){
      el.addEventListener("click", function(event){
        event.preventDefault();
      });
    })
  }
  /*props: {
    msg: String
  }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles.scss';

#work {
  grid-area: work;
  padding: 25px 0px;

  .wrapper.wrapper-flex {
    flex-wrap: wrap;
    justify-content: center;

    .title{
      width: 100%;
      grid-area: title;
      color: $azul;
      text-align: left;
      margin-top: 0.67em;
      margin-bottom: 0.67em;
    }
  }
  .container{
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1000px;
    #sandbox-img{
      background-color: $negro;
      color: $blanco;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      text-decoration: none;
      position: relative;
      @include tablet-landscape() {
        font-size: 1.7em;
      }
      &:after{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: -webkit-linear-gradient(-30deg, $negro 70%, $rojo 70%, $rojo 73%, $negro 73%, $negro 75%, $azul 75%, $azul 78%, $negro 78%, $negro 80%, $amarillo 80%, $amarillo 83%, $negro 83%);
        background: -moz-linear-gradient(-30deg, $negro 70%, $rojo 70%, $rojo 73%, $negro 73%, $negro 75%, $azul 75%, $azul 78%, $negro 78%, $negro 80%, $amarillo 80%, $amarillo 83%, $negro 83%);
        background: linear-gradient(120deg, $negro 70%,$rojo 70%,$rojo 73%,$negro 73%,$negro 75%,$azul 75%,$azul 78%,$negro 78%,$negro 80%,$amarillo 80%,$amarillo 83%,$negro 83%);
      }
      h2{
        z-index: 1;
      }
    }
    header a{
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
       max-height: 100%;
      }
    }
  }
}
</style>
