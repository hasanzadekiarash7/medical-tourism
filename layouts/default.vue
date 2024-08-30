<template>
  <div class="bg-black text-white">
    <header>
      <div
        class="medical-tourism bg-black width-full height-full position-relative text-white"
      >
        <img
          class="medical-tourism-image position-relative"
          src="../assets/images/tourism.jpg"
          alt=""
        />
        <div class="medical-tourism-nav">
          <div>
            <img src="../assets/images/logo.png" alt="" />
          </div>
          <ul class="d-flex flex-center font-size-5">
            <li class="cursor-pointer">Destinations</li>
            <li class="cursor-pointer">Members</li>
            <li class="cursor-pointer">Gallery</li>
          </ul>
        </div>
        <div class="medical-tourism-title">
          <h1 class="text-center font-size-15">Iran</h1>
          <h1 class="text-center font-size-15">Medical Tourism</h1>
          <p class="text-center font-size-4">
            IMT is the most trusted Health Tourism Organizer in Iran. IMT provides international medical travel facilities with high quality healthcare services in IRAN.
          </p>
        </div>
        <div class="medical-tourism-description">
          <div class="content">
            <h1 class="font-size-6 text-center">Medical Visa</h1>
            <p class="font-size-3 text-center">
              As a health tourism brand, Iran Medical Tourism Organization (IMT) with its long-time experience in visa reception ...
            </p>
          </div>
          <div class="content">
            <h1 class="font-size-6 text-center">best packages</h1>
            <p class="font-size-3 text-center">
              Iran is home to the best healthcare specialists in the world and is increasingly gaining acceptance as the leading destination for affordable, world-class medical and cosmetic treatments; in consequence...
            </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="width-full bg-zinc-900 mt-5 d-flex flex-center">
      <div
        class="max-width-1200 width-full pa-6 d-flex flex-space-between"
        style="gap: 10px"
      >
        <img src="../assets/images/logo.png" alt="" />
        <div class="list d-flex flex-center" style="gap: 30px">
          <ul>
            <li>About</li>
            <li>About us</li>
            <li>Features</li>
            <li>News & Blogs</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>FAQs</li>
            <li>Support Centre</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url("../assets/layoutsStyle.scss");
.list {
  ul {
    li {
      font-size: $font-size-4;
      &:first-child {
        font-weight: bold;
        font-size: $font-size-5;
      }
    }
  }
}
</style>
