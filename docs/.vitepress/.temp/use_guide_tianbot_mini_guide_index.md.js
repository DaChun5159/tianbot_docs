import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/index.md","filePath":"use_guide/tianbot_mini/guide/index.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">使用指引</p><h2 id="如何装机" tabindex="-1">如何装机 <a class="header-anchor" href="#如何装机" aria-label="Permalink to &quot;如何装机&quot;">​</a></h2><p>在检查收到产品无误后，需要将两根短天线安装在迷你机器人上，将一根长天线安装在接收器上，如下图所示：</p><p><img src="https://img.kancloud.cn/44/93/4493f767fd25dfc28fc2b4c05d7cada2_6290x3098.png" alt=""></p><ul><li>充电接口：5V充电器(推荐使用5V2A充电器)</li><li>开关机：长按3秒，蜂鸣器响起，开机或者关机</li><li>重启：短按重启</li><li>配置网络：配置Tianbot Mini网络</li></ul><h2 id="指示灯说明" tabindex="-1">指示灯说明 <a class="header-anchor" href="#指示灯说明" aria-label="Permalink to &quot;指示灯说明&quot;">​</a></h2><h3 id="系统状态指示灯" tabindex="-1">系统状态指示灯 <a class="header-anchor" href="#系统状态指示灯" aria-label="Permalink to &quot;系统状态指示灯&quot;">​</a></h3><ul><li>黄灯闪烁：热点模式启动30S内需要连接到TBMINI-XXX热点</li><li>绿色常亮：已有客户端正常连接到TBMINI-XXX热点</li><li>白灯常亮：进入遥控控制模式，可以在网页端进行遥控控制</li></ul><h3 id="雷达状态指示灯" tabindex="-1">雷达状态指示灯 <a class="header-anchor" href="#雷达状态指示灯" aria-label="Permalink to &quot;雷达状态指示灯&quot;">​</a></h3><ul><li>红灯常亮，蓝灯常亮，已正常配对连接。</li><li>红灯闪烁，此时雷达未连接成功，需检查线路以及接收器是否连接正常。</li></ul><h3 id="电量指示灯" tabindex="-1">电量指示灯 <a class="header-anchor" href="#电量指示灯" aria-label="Permalink to &quot;电量指示灯&quot;">​</a></h3><ul><li>在一格时指示灯闪烁，电量过低，处于该状态时，请立即充电，系统在此电量时，将无法保证正常工作。</li></ul><h2 id="如何开-关机" tabindex="-1">如何开/关机 <a class="header-anchor" href="#如何开-关机" aria-label="Permalink to &quot;如何开/关机&quot;">​</a></h2><p>开关机：长按3秒，蜂鸣器响起，开机或者关机</p><h2 id="如何充电" tabindex="-1">如何充电 <a class="header-anchor" href="#如何充电" aria-label="Permalink to &quot;如何充电&quot;">​</a></h2><p>使用我们提供的Micro USB数据线进行，充电时，电量指示灯会常亮，</p><h2 id="自检功能" tabindex="-1">自检功能 <a class="header-anchor" href="#自检功能" aria-label="Permalink to &quot;自检功能&quot;">​</a></h2><p>首先，同时按下配网按钮和开关机按钮，等待蜂鸣器发出响声，听到响声后仅松开电源键按钮，继续按住配网键按钮，等待系统状态指示灯由<strong>红-&gt;蓝-&gt;紫</strong>，此时小车进入自检模式。</p><p><img src="https://img.kancloud.cn/44/93/4493f767fd25dfc28fc2b4c05d7cada2_6290x3098.png" alt="" data-zoomable=""></p><h2 id="网页遥控" tabindex="-1">网页遥控 <a class="header-anchor" href="#网页遥控" aria-label="Permalink to &quot;网页遥控&quot;">​</a></h2><p>迷你机器人开机后使用电脑/手机等连接到TBMINI-XXXX热点后，可以打开浏览器访问tianbot_mini.local/joystick进行遥控控制，点击按键切换不同模式。</p><ul><li>智能模式（ROS），默认是这个模式，系统状态指示灯为绿色，此模式我们可以控制小车移动建图，如果上位机未运行ROS节点，此模式下网页控制小车移动会卡顿；</li><li>遥控模式（WEB），系统状态指示灯变为白色，此模式相当于遥控小车，我们可以拖动摇杆控制机器人运动。</li></ul><p>通用遥控页面：<a href="http://tianbot_mini.local/joystick" target="_blank" rel="noreferrer">tianbot_mini.local/joystick</a></p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=854021938&amp;bvid=BV1HL4y1F7wD&amp;cid=721821511&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
