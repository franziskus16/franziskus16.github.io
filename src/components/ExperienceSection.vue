<script setup lang="ts">
import { experience } from "../data/content";
</script>

<template>
  <section id="experience" class="page section" aria-labelledby="experience-title">
    <h2 id="experience-title" class="section-title">Experience</h2>
    <ol class="timeline">
      <li v-for="job in experience" :key="job.company + job.period" class="job">
        <p class="job__period mono" :class="{ 'job__period--current': job.current }">{{ job.period }}</p>
        <div>
          <h3>{{ job.role }}</h3>
          <p class="job__company">{{ job.company }} · {{ job.place }}</p>
          <p class="job__summary">{{ job.summary }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.job {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 8px 40px;
  padding-block: 32px;
  border-bottom: 1px solid var(--line);
}

.job__period {
  font-size: 14px;
  color: var(--subtle);
}

.job__period--current {
  color: var(--accent);
}

h3 {
  font-size: 22px;
  font-weight: 800;
}

.job__company {
  margin: 4px 0 12px;
  color: var(--subtle);
}

.job__summary {
  max-width: 70ch;
  color: var(--muted);
}

@media (max-width: 700px) {
  .job {
    grid-template-columns: 1fr;
  }
}
</style>
