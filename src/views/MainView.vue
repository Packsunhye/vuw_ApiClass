<template>
  <div>
    <HeaderCont />
    <section class="main__cont">
      <div class="container">
        <div class="main__inner">
          <div v-for="title in titles" v-bind:key="title.text">
            {{ title.text }}
          </div>
        </div>
      </div>
    </section>
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
  },
  data: function () {
    return {
      titles: [
        { text: "we provide" },
        { text: "visual coding" },
        { text: "solutions" },
        { text: "for you API" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main__inner {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  color: var(--000);
  flex-direction: column;

  > div {
    font-size: 8.9vw;
    font-weight: 100;
    line-height: 0.9;
    text-transform: uppercase;
    text-align: left;
  }
}
</style>
