<script setup lang="ts">
import { skills } from "../data/content";
</script>

<template>
  <section class="page section" aria-labelledby="skills-title">
    <h2 id="skills-title" class="section-title">What I do</h2>
    <ul class="skills">
      <li v-for="group in skills" :key="group.title">
        <h3>{{ group.title }}</h3>
        <p>{{ group.items }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 28px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
}

li {
  padding-top: 20px;
  border-top: 3px solid var(--accent);
}

h3 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 800;
}

p {
  font-size: 16px;
  color: var(--muted);
}
</style>
