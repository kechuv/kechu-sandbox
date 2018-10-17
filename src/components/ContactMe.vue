<template>
  <div id="contact-me" class="wrapper-flex">
    <h3>¡Trabajemos juntos!</h3>
    <p>Me gustaría escuchar acerca de tu proyecto.<br>Mi principal enfoque es el desarrollo Web <a href="https://www.xataka.com/basics/que-es-una-aplicacion-web-progresiva-o-pwa" target="_blank">híbrido</a> y responsivo. También me gusta participar en el diseño y desarrollo de prototipos relacionados al <a href="https://elpais.com/internacional/2018/07/03/america/1530635131_100155.html" target="_blank">Internet of Things (IoT)</a>.
    <br><br>
    Mis redes sociales estarán disponibles próximamente. Pero mientras, puedes escribir un correo electrónico (a la antigüita) a: 
    </p>
    <div class="social-container wrapper-flex">
      <div v-for="social in socials" :key="social.id" class="social">
        <a :href=social.link target="_blank"><img :src=social.img :alt=social.alt></a><br>
        {{social.msg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {
      socials: {
        email: {
          link: "mailto:kheopsvalencia@gmail.com?subject=¡Trabajemos Juntos!&body=",
          img: require("../assets/social_logo/mail_logo.png"),
          alt: "Email Logo",
          msg: "kheopsvalencia@gmail.com"
        },
        linkedin: {
          link: "https://www.linkedin.com/in/kheopsvalencia",
          img: require("../assets/social_logo/li_logo.png"),
          alt: "LinkedIn Logo",
          msg: "/kheopsvalencia"
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles.scss';

#contact-me {
  grid-area: contact-me;
  padding-bottom: 10px;

  &.wrapper-flex{
    flex-direction: column;
    justify-content: center;
  }
  p{
    padding-bottom: 15px;
    @include tablet-portrait() {
      padding: 0px;
      margin: 15px;
    }
  }

  .social-container{
    flex-direction: column;
    justify-content: center;
    @include tablet-portrait() {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .social{
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    padding: 10px 0px;
    @include tablet-portrait() {
      width: 50%;
      font-size: 0.7em;
    }
    a{
      width: auto;
      height: auto;
      img{
        width: 40px;
        @include tablet-portrait() {
          width: 50px;
        }
      }
    }
  }

}
</style>
