<template>
  <div id="parallax">
    <div class="bg-1 wrapper-flex" :style= "{ 'background-image': 'url(' + img1 + ')' }">
      <h3>Sandbox</h3>
    </div>
  </div>
</template>

<script>
//import img1 from "@/assets/img/parallax_bg1.png";
export default {
  data() {
    return {
      img1: require("@/assets/img/parallax_bg1.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles.scss";

#parallax {
  height: 400vh;
  width: 100%;
  .bg-1 {
    position: relative;
    // opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg-1 {
    background-image: url("../../assets/img/parallax_bg1.png");
    min-height: 80vh;
    color: #f0f1f2;
    justify-content: center;
    align-items: center;
  }
}
</style>
