//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BFSU8T6U.js
var manifest = { "8e51eb4972d6546da11e87b211326f0cb8ffbba36ae2fc13983f397e3fbcd194": {
	functionName: "getGitHubContributions_createServerFn_handler",
	importer: () => import("./_ssr/github.functions-Diw0shEc.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
