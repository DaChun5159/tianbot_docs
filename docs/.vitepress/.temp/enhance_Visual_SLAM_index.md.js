import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"视觉SLAM开发指南","description":"","frontmatter":{},"headers":[],"relativePath":"enhance/Visual_SLAM/index.md","filePath":"enhance/Visual_SLAM/index.md"}');
const _sfc_main = { name: "enhance/Visual_SLAM/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="视觉slam开发指南" tabindex="-1">视觉SLAM开发指南 <a class="header-anchor" href="#视觉slam开发指南" aria-label="Permalink to &quot;视觉SLAM开发指南&quot;">​</a></h1><h1 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("enhance/Visual_SLAM/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
