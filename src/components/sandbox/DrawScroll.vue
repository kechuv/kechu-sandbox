<template>
  <div id="draw-scroll">
    <article id="text" :class="{scrolled: scrolled}">
      <h3>Probando SVG animados directamente con<br>HTML/CSS/JavaScript</h3>
      <p>
        ¡Has scroll hasta abajo y observa las líneas bajar!
        <br><br>
        Hasta este ejercicio ignoraba todo acerca de las animaciones con SVG, y la verdad se me hizo difícil lograr el resultado esperado. Así que estaré actualizando este <b>Sandbox</b> con ejercicios cada vez más complejos 😉.
        <br><br>
        Puedes encontrar el ejercicio <a href="https://github.com/kechuv/kechu-sandbox/blob/f2f39cea7d27b808a07dd71d66e69b63874edb1b/src/components/sandbox/DrawScroll.vue" target="_blank">aquí</a>.
      </p>
    </article>
    <svg id="mySVG">
      <path id="line-red" d="M5 0 L5 900" stroke="#e8355f" stroke-width="5" />
      <path id="line-blue" d="M15 30 L15 900" stroke="#079dbf" stroke-width="5" />
      <path id="line-yellow" d="M25 60 L25 900" stroke="#f2b830" stroke-width="5" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </div>
</template>

<script>
export default {
  name: "drawscroll",
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    var self = this;
    var line1 = document.getElementById("line-red");
    var line2 = document.getElementById("line-blue");
    var line3 = document.getElementById("line-yellow");
    var length = line1.getTotalLength();
    line1.style.strokeDasharray = length;
    line1.style.strokeDashoffset = length;
    line2.style.strokeDasharray = length;
    line2.style.strokeDashoffset = length;
    line3.style.strokeDasharray = length;
    line3.style.strokeDashoffset = length;
    window.addEventListener("scroll", myFunction);
    function myFunction() {
      self.scrolled = window.scrollY > 100;
      var scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      var draw = length * (scrollpercent * 0.999);
      // Reverse the drawing (when scrolling upwards)
      line1.style.strokeDashoffset = length - draw;
      line2.style.strokeDashoffset = length - draw;
      line3.style.strokeDashoffset = length - draw;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles.scss";

#draw-scroll {
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  #text {
    position: sticky;
    top: 50%;
    width: 85%;
    transition: 0.1s ease;
    &.scrolled {
      transform: translateY(-50%);
    }
    p {
      font-family: "Quicksand", sans-serif;
    }
  }
  #mySVG {
    width: 32px;
    height: 100vh;
    position: fixed;
    bottom: 5px;
    width: 32px;
    align-self: flex-end;
  }
}
</style>
