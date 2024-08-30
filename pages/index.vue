<template>
  <div class="d-flex flex-center flex-column mt-5 width-full">
    <div class="width-full mt-7 max-width-1200">
      <medical-guide :cards="guideCards" />
    </div>
    <h1 class="text-center font-size-6 mt-10">best packages</h1>
    <p class="text-center font-size-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      aperiam?
    </p>
    <div class="width-full mt-7 max-width-1200">
      <abilities :items="cards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { abilities } from "~/components/types/abilities.t";
import type { guide } from "~/components/types/guide.t";
const cards = [
  {
    bigSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: false,
    },
    smallSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card2.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
    },
  },
  {
    bigSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card4.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: true,
    },
    smallSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card3.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
    },
  },
  {
    bigSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card5.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: false,
    },
    smallSize: {
      title: "Hisma Desert",
      description:
        "The hisma desert is a true marvel of nature, and several desert oasis.",
      cardImageLink: "/card6.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
    },
  },
];
const guideCards = ref<guide[]>([
  {
    icon: "ion:airplane",
    title: "Medical Travel",
    description:
      "Get assistance organizing flights, accommodation, aftercare and more",
  },
  {
    icon: "cib:cc-visa",
    title: "Medical Visa",
    description: "We prepare you medical visa on your treatment within 10 days",
  },
  {
    icon: "uiw:message",
    title: "Free Consulation",
    description:
      "You get free consultation on your treatment option 24H",
  },
  {
    icon: "fa6-solid:user-doctor",
    title: "Medical Treatment",
    description: "Learn more about the doctors and your treatment options",
  },
  {
    icon: "ion:shield-half-outline",
    title: "Health Arbitration",
    description:
      "The parties to a contract decide to settle their probable disputes in Privacy and Professionalism with Reasonable Costs",
  },
]);
</script>

<style lang="scss" scoped></style>
