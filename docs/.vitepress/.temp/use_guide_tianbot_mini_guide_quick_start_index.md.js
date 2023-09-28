import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/quick_start/index.md","filePath":"use_guide/tianbot_mini/guide/quick_start/index.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/quick_start/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">命令行的讲解</p><p><strong>视频地址</strong></p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=932850135&amp;bvid=BV14M4y1G7CY&amp;cid=403735761&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div><h2 id="概要" tabindex="-1">概要： <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要：&quot;">​</a></h2><p>围绕<code>rostopic</code>、<code>roslaunch</code>、<code>rosrun</code> 进行，介绍话题的订阅和接收，查看话题内容，节点与话题的关系，运行turtlesim</p><h2 id="正文" tabindex="-1">正文： <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文：&quot;">​</a></h2><h3 id="_1-发布者与接收者" tabindex="-1">1. 发布者与接收者 <a class="header-anchor" href="#_1-发布者与接收者" aria-label="Permalink to &quot;1. 发布者与接收者&quot;">​</a></h3><p>Topic是主题，是发布者（publisher）和接受者（subscriber）用来通讯的数据总线。</p><p>按照快速入门成功连接Tianbot_mini机器人后，打开终端，运行</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianbot_mini</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">bringup.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们再来查看一下话题列表，再打开一个终端，运行<code>rostopic list</code>，会出现</p><p><img src="https://img.kancloud.cn/d5/a4/d5a420f298e1107ce1a1bdeab62935ef_319x232.png" alt=""></p><p>此时出现的就是打开<code>tianbot_mini bringup.launch</code>文件所运行的所有主题，可是怎么把发布者和接受者的主题分开呢？</p><p>只需运行</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">list</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/da/92/da92eca017071793c0c26cc4d37c2ebe_625x345.png" alt=""></p><p>发布者和接受者各自的主题就分别展现，它们有什么不同呢？</p><p><code>rostopic echo /topic</code> 将消息输入到屏幕上，按照格式依次分别运行如下命令。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">echo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/cmd_rxd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/27/ba/27baebd879146f5bb030416d262656a9_521x235.png" alt=""></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">echo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/info</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/02/16/0216107806644832da16b7d54bb56a19_512x233.png" alt=""></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">echo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/cmd_vel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/10/36/10364b6d336a822c748d1dcca28b074e_485x90.png" alt=""></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">echo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/led</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/34/0f/340f8fd4e6576361409f69bbf5db7e3b_474x82.png" alt=""></p><p>可以看到属于<code>Published Topic</code>都出现信息，而接受者<code>Subscribed Topic</code>都没有信息产生。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>说明发布者不断往外发信息，接受者是在倾听，需要与其对应的发布者的信息才会被接受。</p></div><h3 id="_2-节点" tabindex="-1">2. 节点 <a class="header-anchor" href="#_2-节点" aria-label="Permalink to &quot;2. 节点&quot;">​</a></h3><p>我们再深究一下，<strong>Topic</strong>是主题，是发布者（<code>publisher</code>）和接受者（<code>subscriber</code>）用来通讯的数据总线。到底是谁在进行通讯？</p><p>通讯的个体叫做节点，是独立可执行的C++或Python文件，是代码与实际功能的解耦。</p><p>机器人的启动需要很多节点.</p><p>我们在刚开始运行<code>roslaunch tianbot_mini bringup.launch</code>，Launch文件可一次运行多个节点，使用<code>roslauch</code>运行<code>.launch</code>文件。</p><p>具体使用用法为</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> [package] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">filename.launch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-turtlesim" tabindex="-1">3. Turtlesim <a class="header-anchor" href="#_3-turtlesim" aria-label="Permalink to &quot;3. Turtlesim&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">注意</p><ol><li>使用roslaunch运行.launch文件，一次启动多个节点无需打开节点管理器roscore</li><li>使用rosrun单独启动一个节点，首先需要打开节点管理器roscore</li></ol></div><p>我们用<code>rosrun</code>单独运行一个节点，我们采用仿真turtlesim</p><p>打开节点管理器 roscore</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rosrun</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">turtlesim</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">turtlesim_node</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/01/1c/011c39976e30083ad4f3ecdb68d94639_512x665.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/quick_start/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
