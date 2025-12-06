import { FEATURED_REPOS } from '../constants/projects';

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export interface Project {
  title: string;
  description: string;
  primaryLanguage: string;
  languageColor: string;
  stars: number;
  forks: number;
  technologies: string[];
  githubUrl: string;
  lastUpdated: string;
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-blue-400',
  Rust: 'bg-orange-500',
  Go: 'bg-cyan-400',
  Java: 'bg-red-500',
  'C++': 'bg-pink-500',
  C: 'bg-gray-500',
  Ruby: 'bg-red-600',
  PHP: 'bg-purple-500',
  Swift: 'bg-orange-400',
  Kotlin: 'bg-purple-400',
  HTML: 'bg-orange-600',
  CSS: 'bg-purple-600',
  Shell: 'bg-green-500',
  Vue: 'bg-green-400',
  Svelte: 'bg-orange-500',
};

function getLanguageColor(language: string | null): string {
  if (!language) return 'bg-gray-400';
  return languageColors[language] || 'bg-gray-400';
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function transformRepo(repo: GitHubRepo): Project {
  const [owner, name] = repo.full_name.split('/');
  return {
    title: owner === 'htmujahid' ? name : repo.full_name,
    description: repo.description || 'No description available',
    primaryLanguage: repo.language || 'Unknown',
    languageColor: getLanguageColor(repo.language),
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    technologies: repo.topics.length > 0
      ? repo.topics.slice(0, 4).map(t => t.charAt(0).toUpperCase() + t.slice(1))
      : [repo.language || 'Code'].filter(Boolean),
    githubUrl: repo.html_url,
    lastUpdated: formatDate(repo.updated_at),
  };
}

async function fetchRepo(repoFullName: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoFullName}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'htmujahid-portfolio',
        },
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch ${repoFullName}: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`Error fetching ${repoFullName}:`, error);
    return null;
  }
}

export async function getTopRepos(): Promise<Project[]> {
  const repoPromises = FEATURED_REPOS.map(fetchRepo);
  const repos = await Promise.all(repoPromises);

  return repos
    .filter((repo): repo is GitHubRepo => repo !== null)
    .map(transformRepo);
}
