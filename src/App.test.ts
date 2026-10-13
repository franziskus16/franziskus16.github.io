import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from "./App.vue";
import { experience, profile, projects } from "./data/content";

describe("portfolio page", () => {
  const wrapper = mount(App);

  it("has a single h1 and a heading for every section", () => {
    expect(wrapper.findAll("h1")).toHaveLength(1);
    const headings = wrapper.findAll("h2").map((h) => h.text());
    expect(headings).toEqual(
      expect.arrayContaining(["Selected projects", "Experience", "What I do", "About", "Get in touch"]),
    );
  });

  it("shows every project with its code and demo links", () => {
    const cards = wrapper.findAll("article");
    expect(cards).toHaveLength(projects.length);

    projects.forEach((project, index) => {
      const card = cards[index]!;
      expect(card.find("h3").text()).toBe(project.title);
      const hrefs = card.findAll("a").map((a) => a.attributes("href"));
      expect(hrefs).toEqual([project.code, project.demo]);
      expect(card.find("img").attributes("alt")).toBe(project.imageAlt);
    });
  });

  it("lists the experience in order, marking the current job", () => {
    const jobs = wrapper.findAll(".job");
    expect(jobs).toHaveLength(experience.length);
    expect(jobs[0]!.find(".job__period--current").exists()).toBe(true);
  });

  it("links to email, LinkedIn, GitHub and the CV", () => {
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href"));
    expect(hrefs).toEqual(
      expect.arrayContaining([`mailto:${profile.email}`, profile.linkedin, profile.github, profile.cv]),
    );
  });

  it("uses only secure or relative links", () => {
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href") ?? "");
    for (const href of hrefs) {
      expect(href.startsWith("http://")).toBe(false);
    }
  });
});
