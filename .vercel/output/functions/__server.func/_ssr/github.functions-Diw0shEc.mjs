import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/github.functions-Diw0shEc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var GITHUB_USERNAME = "Skygazer1111";
function getContributionsWindow(contributions) {
	const today = /* @__PURE__ */ new Date();
	today.setHours(23, 59, 59, 999);
	const start = new Date(today);
	start.setDate(start.getDate() - 364);
	start.setHours(0, 0, 0, 0);
	const inRange = contributions.filter((day) => {
		const date = /* @__PURE__ */ new Date(`${day.date}T12:00:00`);
		return date >= start && date <= today;
	}).sort((a, b) => a.date.localeCompare(b.date));
	const total = inRange.reduce((sum, day) => sum + day.count, 0);
	const recent = inRange.slice(-60);
	while (recent.length < 60) recent.unshift({
		date: "",
		count: 0,
		level: 0
	});
	return {
		total,
		recent
	};
}
async function fetchContributionsFromApi() {
	const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`, { headers: { Accept: "application/json" } });
	if (!response.ok) throw new Error(`GitHub contributions API failed: ${response.status}`);
	return getContributionsWindow((await response.json()).contributions);
}
var getGitHubContributions_createServerFn_handler = createServerRpc({
	id: "8e51eb4972d6546da11e87b211326f0cb8ffbba36ae2fc13983f397e3fbcd194",
	name: "getGitHubContributions",
	filename: "src/lib/api/github.functions.ts"
}, (opts) => getGitHubContributions.__executeServer(opts));
var getGitHubContributions = createServerFn({ method: "GET" }).handler(getGitHubContributions_createServerFn_handler, async () => fetchContributionsFromApi());
//#endregion
export { getGitHubContributions_createServerFn_handler };
