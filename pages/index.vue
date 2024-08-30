<template>
  <div class="d-flex flex-center flex-column mt-5 width-full">
    <div class="width-full mt-7 max-width-1200">
      <medical-guide :cards="guideCards" />
    </div>
    <h1 class="text-center font-size-6 mt-10">Popular Treatments</h1>
    <p class="text-center font-size-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      aperiam?
    </p>
    <div class="width-full mt-7 max-width-1200">
      <abilities :items="cards" />
    </div>
    <h1 class="text-center font-size-6 mt-10">IRAN Medical Tourism</h1>
    <p class="text-center font-size-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      aperiam?
    </p>
    <div class="width-full mt-7 max-width-1200">
      <div class="bottom-card position-relative">
        <img src="../public/bottomCard.png" alt="" />
        <div class="bottom-card-content d-flex align-center flex-space-between">
          <div class="ml-4 mb-1">
            <h1>Iran</h1>
            <h1>Medical Tourism</h1>
          </div>
          <div class="mr-4">
            <Icon name="mdi:arrow-right-circle-outline" size="80" />
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-center font-size-6 mt-10">best packages</h1>
    <p class="text-center font-size-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      aperiam?
    </p>
    <div class="width-full mt-7 max-width-1200">
      <abilities :items="cards2" />
    </div>
    <h1 class="mt-10">Services Included in IRHTO Packages</h1>
    <div class="width-full mt-7 max-width-1200">
      <!-- <CardPack /> -->
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
const cards2 = [
  {
    bigSize: {
      title: "Hisma Desert",
      description: "The hisma desert is a .",
      cardImageLink: "/card_.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: true,
      isAuthorTextBlack: true,
    },
    smallSize: {
      title: "Hisma Desert",
      description: "",
      cardImageLink: "/card_2.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isAuthorTextBlack: true,
    },
  },
  {
    bigSize: {
      title: "Hisma Desert",
      description: "The hisma desert is ",
      cardImageLink: "/card_4.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: false,
      isAuthorTextBlack: true,
    },
    smallSize: {
      title: "Hisma Desert",
      description: "",
      cardImageLink: "/card_3.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isAuthorTextBlack: true,
    },
  },
  {
    bigSize: {
      title: "Hisma Desert",
      description: "The hisma ",
      cardImageLink: "/card_5.png",
      author: {
        imageLink: "/avatar.png",
        fullName: "Wazeem Al Mulk",
        tag: "Traveler",
      },
      isReverse: true,
      isAuthorTextBlack: true,
    },
    smallSize: {
      title: "Hisma Desert",
      description: "",
      cardImageLink: "/card_6.png",
      author: {
        imageLink: "",
        fullName: "",
        tag: "",
      },
      isAuthorTextBlack: true,
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
    description: "You get free consultation on your treatment option 24H",
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

<style lang="scss" scoped>
.bottom-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  color: $black;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 1 !important;
  }
  &-content {
    position: absolute;
    top: 10px;
    z-index: 10 !important;
    width: 100%;
    height: 100%;
  }
}
</style>
