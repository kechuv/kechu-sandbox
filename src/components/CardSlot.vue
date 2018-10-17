<template>
  <div class="card wrapper-grid">
    <header class="wrapper-flex">
      <slot name="header"></slot>
    </header>
    <main class="wrapper-flex">
      <div>
        <slot name="role">Role</slot>
        <slot name="title">Title</slot>
      </div>
    </main>
    <footer class="wrapper-flex">
      <slot name="footer"></slot>
    </footer>
  </div> 
</template>

<script>
export default {
  name: 'cardslot',
};
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';

.card {
  position: relative;
  transition: 0.3s;
  width: 95%;
  height: 333px;
  margin: 20px 0px;
  border-radius: 5px;
  grid-template-rows: 60% 30% auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @include tablet-portrait() {
    width: 45%;
    height: 450px;
    grid-template-rows: 40% 50% auto;
  }
  @include tablet-landscape() {
    width: 30%;
    max-width: 300px;
    height: 500px;
  }
  &:hover {
    @include desktop() {
      top: -1px;
      box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.5);
    }
  }

  header{
    grid-area: header;
    height: auto;
    background-color: $azul;
    justify-content: center;
    align-items: center;
    border: 5px solid $negro;
  }
  main{
    grid-area: main;
    background-color: $negro;
    color: $blanco;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @include tablet-portrait() {
      justify-content: flex-start;
    }
    div{
      margin: 0px 20px;
      @include tablet-portrait() {
        margin: 20px;
      }
      small{
        color: $azul;
        font-family: 'Quicksand', sans-serif;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
      }
      h3{
        font-size: 1.3em;
      }
    }
  }
  footer{
    grid-area: footer;
    background-color: $negro;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    small{
      margin: 0px 20px;
      font-family: 'Quicksand', sans-serif;
      font-size: 0.7em;
      font-weight: bold;
      text-transform: uppercase;
      a{
        color: $azul;
      }
    }
  }

}
</style>
