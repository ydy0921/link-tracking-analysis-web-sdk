import LinkTrackingTools from "../tracking-analysis-web-sdk/link-tracking-tools";
// 端链路SDK
export const linkTrackingTools = new LinkTrackingTools();
// 端链路SDK-默认设置
linkTrackingTools.setOptions({
    tracePageName: "首页",
    tracePagePath: "/home",
    traceAppName: "pmcp",
    traceAppType: "web",
    extend: {
        tracePageLoadedTime: Date.now(),
    },
});
//# sourceMappingURL=link-tracking-tools.js.map