<template>
  <div id="contact-popit" class="wrapper-flex">
    <h3>¡Trabaja con Pop It Creativos!</h3>
    <a class="popit_logo" href="https://popitcreativos.com/" target="_blank"><img src="https://popitcreativos.com/img/logo_popit.83e9b59a.png" alt="Pop It Creativos Logo"></a>
    <p>¡Oh, sí! También hay un equipo creativo especializado dispuesto a trabajar en tu proyecto. 🎉<br><br>Encuéntranos en nuestras redes:</p>
    <div class="social-container wrapper-flex">
      <div v-for="social in socials" :key="social.id" class="social">
        <a :href=social.link target="_blank"><img :src=social.img :alt=social.alt></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPopit",
  data() {
    return {
      socials: {
        face: {
          link: "https://www.facebook.com/popitcreativos",
          img: require("../assets/social_logo/fb_logo.png"),
          alt: "Facebook Logo"
        },
        insta: {
          link: "https://www.instagram.com/popitcreativos",
          img: require("../assets/social_logo/insta_logo.png"),
          alt: "Instagram Logo"
        },
        linkedin: {
          link: "https://www.linkedin.com/company/pop-it-creativos",
          img: require("../assets/social_logo/li_logo.png"),
          alt: "LinkedIn Logo"
        },
        email: {
          link: "mailto:hola@popitcreativos.com?subject=¡Trabajemos Juntos!&body=",
          img: require("../assets/social_logo/mail_logo.png"),
          alt: "Email Logo"
        },
        web: {
          link: "https://www.popitcreativos.com",
          img: require("../assets/social_logo/web_logo.png"),
          alt: "Website Logo"
        },
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles.scss';

#contact-popit {
  grid-area: contact-popit;
  padding-bottom: 10px;

  &.wrapper-flex{
    flex-direction: column;
  }

  .popit_logo{
    align-self: center;
    padding-bottom: 20px;
    img{
      width: 80px;
      @include tablet-portrait() {
        width: 120px;
      }
    }
  }
  p{
    padding-bottom: 20px;
    @include tablet-portrait() {
      padding: 0px;
      margin: 15px;
    }
  }
  .social-container{
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
    @include tablet-portrait() {
      width: 100%;
      justify-content: space-evenly;
    }
  }
  .social{
    width: 33%;
    padding: 10px 0px;
    text-align: center;
    @include tablet-portrait() {
      width: auto;
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
