<script setup lang="ts">
import type { Project } from "../data/content";

defineProps<{ project: Project }>();
</script>

<template>
  <article class="card" :aria-labelledby="`project-${project.slug}`">
    <img
      :src="project.image"
      :alt="project.imageAlt"
      width="960"
      height="600"
      loading="lazy"
      class="card__image"
    />
    <div class="card__body">
      <ul class="tags mono" aria-label="Technologies">
        <li v-for="(tag, index) in project.tags" :key="tag" :class="{ 'tag--main': index === 0 }">{{ tag }}</li>
      </ul>
      <h3 :id="`project-${project.slug}`">{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <div class="links">
        <a :href="project.code">Code<span class="visually-hidden"> for {{ project.title }}</span></a>
        <a :href="project.demo">Live demo<span class="visually-hidden"> of {{ project.title }}</span></a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--surface);
  border: 1px solid var(--line);
}

.card__image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  background: var(--surface-2);
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 28px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
  font-size: 12px;
}

.tags li {
  padding: 4px 10px;
  border: 1px solid var(--line-strong);
  color: var(--muted);
}

.tags .tag--main {
  border-color: var(--accent);
  color: var(--accent);
}

h3 {
  margin-bottom: 8px;
  font-size: 26px;
  font-weight: 800;
}

p {
  margin-bottom: 20px;
  color: var(--muted);
}

.links {
  display: flex;
  gap: 20px;
  margin-top: auto;
  font-weight: 600;
  font-size: 15px;
}
</style>
