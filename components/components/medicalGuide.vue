<template>
  <div
    class="d-grid details flex-start align-center"
    style="gap: 10px; padding: 10px 0px"
    
  >
    <div
      class="d-flex flex-center flex-column"
      style="gap: 5px"
      v-for="item in cards"
    >
      <Icon :name="item.icon" />
      <h1 class="text-center font-size-4">{{ item.title }}</h1>
      <p class="text-center font-size-3">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { guide } from "../types/guide.t";

interface cardProps {
  cards: guide[];
}

const props = defineProps<cardProps>();
</script>

<style lang="scss" scoped>
.details {
    div{
        filter: brightness(60%);
        span {
          transform: rotate(0deg);
          width: 50px;
          height: 50px;
          background-color: $green-400;
        }
    }
}
</style>
