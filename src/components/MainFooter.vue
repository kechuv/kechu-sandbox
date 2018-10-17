<template>
  <footer class="wrapper-flex">
    <p>
      &copy; <small>Kheops Valencia 2018</small>
    </p>
  </footer>
</template>

<script>
export default {
  name: "mainfooter"
};
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';

footer {
  justify-content: center;
  background-color: $negro;
  color: $blanco;
  font-size: 0.8em;
}
</style>
