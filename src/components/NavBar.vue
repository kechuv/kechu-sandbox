<template>
  <nav id="main-nav" class="navbar">
    <div class="wrapper wrapper-flex">
      <slot name="left-menu">
      </slot>
      <slot name="right-menu">
      </slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';

#main-nav{
  background-color: $negro;
  color: $blanco;
  padding: 15px 0px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 5;
  @include tablet-landscape() {
    padding: 15px 0px;
  }
  @include desktop() {
    padding: 25px 0px;
  }

  .wrapper{
    @include desktop() {
      width: 70%;
    }
  }
  
  div.wrapper-flex{
    justify-content: space-between;
    align-items: center;
  }
}
</style>
