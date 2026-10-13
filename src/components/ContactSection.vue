<script setup lang="ts">
import { profile } from "../data/content";
</script>

<template>
  <section id="contact" class="page contact" aria-labelledby="contact-title">
    <h2 id="contact-title" class="kicker mono">Get in touch</h2>
    <a :href="`mailto:${profile.email}`" class="email">{{ profile.email }}</a>
    <ul class="links">
      <li><a :href="profile.linkedin">LinkedIn</a></li>
      <li><a :href="profile.github">GitHub</a></li>
      <li><a :href="profile.cv" download>Download CV (PDF)</a></li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  padding-block: 140px 100px;
}

.kicker {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: var(--subtle);
}

.email {
  display: inline-block;
  font-weight: 900;
  font-size: clamp(32px, 7vw, 96px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-decoration: none;
  border-bottom: 6px solid var(--accent);
  overflow-wrap: anywhere;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 36px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
}
</style>
