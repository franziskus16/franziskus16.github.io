<script setup lang="ts">
import { about } from "../data/content";
</script>

<template>
  <section id="about" class="page section about" aria-labelledby="about-title">
    <h2 id="about-title" class="section-title">About</h2>
    <div class="text">
      <p v-for="paragraph in about" :key="paragraph">{{ paragraph }}</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 80px;
}

.about h2 {
  flex: 1 1 280px;
}

.text {
  flex: 2 1 560px;
  min-width: 0;
  font-size: 19px;
  color: var(--muted);
}

.text p + p {
  margin-top: 20px;
}
</style>
