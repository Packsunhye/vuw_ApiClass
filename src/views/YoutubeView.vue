<template>
  <div>
    <HeaderCont />
    <TilteCont />
    <ContactCont />
    <FooterCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TilteCont from "@/components/TilteCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    TilteCont,
    ContactCont,
    FooterCont,
  },
};
</script>
