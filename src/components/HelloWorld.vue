<template>
  <section id="about">
    <div class="wrapper wrapper-flex">
      <h2 class="title">K://Acerca</h2>
      <p class="bio">
        <span>¡Hola!</span> Soy Kheops Valencia, desarrollador Web y co-fundador de <a href="https://popitcreativos.com/" target="_blank">Pop It Creativos</a>.
        Ayudo a empresas locales a crear sitios web geniales y
        colaboro con <a href="https://es.shopify.com/blog/14934065-hablemos-sobre-startups-que-son-sus-caracteristicas-e-importancia" target="_blank">
        startups</a> creando prototipos con ideas fantásticas que marquen la diferencia.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  /*props: {
    msg: String
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles.scss';

#about{
  padding: 25px 0px;

  .wrapper-flex {
    flex-direction: column;
    align-items: center;

    .title{
      width: 100%;
      color: $rojo;
      text-align: left;
      margin-top: 0.67em;
      margin-bottom: 0.67em;
    }
    .bio{
      border: 3px solid #e8355f;
      padding: 30px;
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      line-height: 1.5em;
      @include tablet-landscape {
        width: 60%;
        max-width: 700px;
        font-size: 1.6em;
      }
      span, a{
        color: $rojo;
      }
    }
  }

}
</style>
