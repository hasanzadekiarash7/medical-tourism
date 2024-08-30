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
          <h1 class="text-center font-size-15">medical tourism</h1>
          <p class="text-center font-size-5">
            Iran is rich in heritage and history. The country is home to hundreds of
            historically important sites.
          </p>
        </div>
        <div class="medical-tourism-description">
          <div class="content">
            <h1 class="font-size-6 text-center">History and Heritage</h1>
            <p class="font-size-3 text-center">
              Saudi Arabia has long occupied an important role at the center of the
              islamic and Arab worlds. Located at the heart of three continents.
            </p>
          </div>
          <div class="content">
            <h1 class="font-size-6 text-center">History and Heritage</h1>
            <p class="font-size-3 text-center">
              Saudi Arabia has long occupied an important role at the center of the
              islamic and Arab worlds. Located at the heart of three continents.
            </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url("../assets/layoutsStyle.scss");
</style>
