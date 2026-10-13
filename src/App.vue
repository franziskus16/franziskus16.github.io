<script setup lang="ts">
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SkillsSection from "./components/SkillsSection.vue";
import { profile } from "./data/content";
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <div class="page footer__inner">
      <span>{{ profile.name }} · {{ profile.location }}</span>
      <span>Built with Vue 3 and TypeScript · <a href="https://github.com/franziskus16/franziskus16.github.io">Source</a></span>
    </div>
  </footer>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -60px;
  left: 16px;
  z-index: 10;
  padding: 12px 16px;
  background: var(--accent);
  color: var(--accent-ink);
}

.skip-link:focus {
  top: 16px;
}

.footer {
  border-top: 1px solid var(--line);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-block: 28px;
  font-size: 14px;
  color: var(--subtle);
}

.footer a {
  color: var(--subtle);
}
</style>
