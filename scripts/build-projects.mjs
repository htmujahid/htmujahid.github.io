// Adds live GitHub data (description, language, stars, homepage) to projects.json.
// Writes projects.live.json, which projects.html loads. Runs at deploy time so visitors
// never hit the GitHub API (60 requests/hour/IP unauthenticated).
import { readFile, writeFile } from "node:fs/promises";

const API = process.env.GITHUB_API || "https://api.github.com";
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "htmujahid.github.io",
  ...(token && { Authorization: `Bearer ${token}` }),
};

const list = JSON.parse(await readFile(new URL("../projects.json", import.meta.url), "utf8"));

const live = await Promise.all(
  list.map(async (p) => {
    const res = await fetch(`${API}/repos/${p.repo}`, { headers });
    if (!res.ok) {
      console.warn(`${p.repo}: ${res.status}, keeping the plain entry`);
      return p;
    }
    const g = await res.json();
    return { ...p, desc: g.description, lang: g.language, stars: g.stargazers_count, site: g.homepage || "" };
  }),
);

await writeFile(new URL("../projects.live.json", import.meta.url), JSON.stringify(live, null, 2) + "\n");
console.log(`projects.live.json: ${live.filter((p) => p.stars !== undefined).length}/${live.length} enriched`);
