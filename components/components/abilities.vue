<template>
  <div class="d-grid grid-col-3" style="gap: 10px; padding: 10px 0">
    <div
      v-for="item in items"
      :class="item.bigSize.isReverse == true ? 'flex-column-reverse' : ''"
      class="d-flex flex-center flex-column"
    >
      <div class="card size-big position-relative" :class="item.bigSize.hoverAble ? 'hover-style': ''">
        <img :src="item.bigSize.cardImageLink" alt="" />
        <div class="card-title d-flex flex-start">
          <h1 class="font-size-6">{{ item.bigSize.title }}</h1>
          <p class="font-size-4">
            {{ item.bigSize.description }}
          </p>
        </div>
        <div class="card-author d-flex flex-start">
          <div class="avatar d-flex flex-center">
            <img :src="item.bigSize.author.imageLink" alt="" />
            <div class="d-flex flex-start flex-column" :class="item.bigSize.isAuthorTextBlack ? 'text-black' : ''">
              <strong class="font-size-4">{{
                item.bigSize.author.fullName
              }}</strong>
              <p class="font-size-3">{{ item.bigSize.author.tag }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card size-small position-relative" :class="item.smallSize?.hoverAble ? 'hover-style': ''">
        <img :src="item.smallSize?.cardImageLink" alt="" />
        <div class="card-title d-flex flex-start">
          <h1 class="font-size-6">{{ item.smallSize?.title }}</h1>
          <p class="font-size-4">
            {{ item.smallSize?.description }}
          </p>
        </div>
        <div class="card-author d-flex flex-start">
          <div class="avatar d-flex flex-center">
            <img :src="item.smallSize?.author.imageLink" v-if="item.smallSize?.author.imageLink" alt="" />
            <div class="d-flex flex-start flex-column" :class="item.smallSize?.isAuthorTextBlack ? 'text-black' : ''">
              <strong class="font-size-4">{{
                item.smallSize?.author.fullName
              }}</strong>
              <p class="font-size-3">{{ item.smallSize?.author.tag }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { abilities } from "../types/abilities.t";

const props = defineProps<abilities>();
</script>

<style lang="scss" scoped>
@import url("../../assets/mainStyles.scss");
</style>
