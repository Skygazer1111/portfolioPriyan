import { createServerFn } from "@tanstack/react-start";

const GITHUB_USERNAME = "Skygazer1111";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  contributions: ContributionDay[];
};

function getContributionsWindow(contributions: ContributionDay[]) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  start.setHours(0, 0, 0, 0);

  const inRange = contributions
    .filter((day) => {
      const date = new Date(`${day.date}T12:00:00`);
      return date >= start && date <= today;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const total = inRange.reduce((sum, day) => sum + day.count, 0);
  const recent = inRange.slice(-60);

  while (recent.length < 60) {
    recent.unshift({ date: "", count: 0, level: 0 });
  }

  return { total, recent };
}

async function fetchContributionsFromApi() {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
    { headers: { Accept: "application/json" } },
  );

  if (!response.ok) {
    throw new Error(`GitHub contributions API failed: ${response.status}`);
  }

  const data = (await response.json()) as ContributionsResponse;
  return getContributionsWindow(data.contributions);
}

export const getGitHubContributions = createServerFn({ method: "GET" }).handler(
  async () => fetchContributionsFromApi(),
);
