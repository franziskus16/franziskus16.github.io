<script setup lang="ts">
import { profile } from "../data/content";
import LogoMark from "./LogoMark.vue";
</script>

<template>
  <header class="page header">
    <a href="#top" class="brand">
      <LogoMark />
      <span>{{ profile.shortName }}</span>
    </a>
    <nav aria-label="Main" class="nav">
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#about">About</a>
      <a :href="profile.cv" class="button button--primary cv" download><span class="cv__long">Download </span>CV</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-block: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 28px;
  font-size: 15px;
}

.nav a:not(.button) {
  color: var(--muted);
  text-decoration: none;
}

.nav a:not(.button):hover {
  color: var(--ink);
  text-decoration: underline;
}

.cv {
  min-height: 42px;
  padding: 0 18px;
}

@media (max-width: 600px) {
  .header {
    flex-wrap: nowrap;
  }
  .nav a:not(.button),
  .cv__long {
    display: none;
  }
}
</style>
