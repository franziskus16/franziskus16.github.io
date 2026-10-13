<script setup lang="ts">
import { profile, projects } from "../data/content";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section id="projects" class="page section" aria-labelledby="projects-title">
    <div class="heading">
      <h2 id="projects-title" class="section-title">Selected projects</h2>
      <a :href="`${profile.github}?tab=repositories`" class="mono all">All repositories</a>
    </div>
    <ul class="grid">
      <li v-for="project in projects" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 48px;
}

.all {
  font-size: 14px;
  color: var(--subtle);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
