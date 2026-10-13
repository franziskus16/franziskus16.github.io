<script setup lang="ts">
import { highlights, profile } from "../data/content";
</script>

<template>
  <section id="top" class="page hero" aria-labelledby="hero-title">
    <p class="kicker mono"><span class="dot" aria-hidden="true" />{{ profile.name }} · {{ profile.location }}</p>
    <h1 id="hero-title">Front-end developer <span class="amp">&amp;</span> UX/UI designer.</h1>
    <p class="intro">{{ profile.intro }}</p>
    <div class="actions">
      <a href="#projects" class="button button--primary">
        See projects
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
        </svg>
      </a>
      <a :href="profile.github" class="button">GitHub</a>
    </div>
  </section>

  <section aria-label="Highlights" class="highlights">
    <dl class="page highlights__inner">
      <div v-for="item in highlights" :key="item.value" class="highlight">
        <dt class="visually-hidden">{{ item.label }}</dt>
        <dd>
          <span class="highlight__value" :class="{ 'highlight__value--accent': item.accent }">{{ item.value }}</span>
          <span class="highlight__label">{{ item.label }}</span>
        </dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.hero {
  padding-block: 96px 72px;
}

.kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  font-size: 14px;
  color: var(--subtle);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

h1 {
  max-width: 1100px;
  font-weight: 900;
  font-size: clamp(48px, 8vw, 112px);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.amp {
  color: var(--accent);
}

.intro {
  max-width: 720px;
  margin-top: 36px;
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.45;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 44px;
}

.highlights {
  border-block: 1px solid var(--line);
}

.highlights__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 32px 64px;
  margin-block: 0;
  padding-block: 36px;
}

.highlight {
  flex: 1 1 220px;
}

.highlight dd {
  margin: 0;
}

.highlight__value {
  display: block;
  font-weight: 900;
  font-size: clamp(32px, 3.2vw, 44px);
  line-height: 1.05;
}

.highlight__value--accent {
  color: var(--accent);
}

.highlight__label {
  display: block;
  margin-top: 8px;
  font-size: 15px;
  color: var(--subtle);
}
</style>
