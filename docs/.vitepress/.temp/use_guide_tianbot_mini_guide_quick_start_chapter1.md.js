import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/quick_start/chapter1.md","filePath":"use_guide/tianbot_mini/guide/quick_start/chapter1.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/quick_start/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">ROS控制机器人运动</p><p><strong>视频地址</strong></p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=675368339&amp;bvid=BV1tU4y1P7op&amp;cid=403771387&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div><h2 id="概要" tabindex="-1">概要： <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要：&quot;">​</a></h2><p>使用teleop.launch键盘控制节点，Rqt，rostopic_pub三种方法控制小车运动，讲解了QT界面，rostopic pub的使用，补充了坐标系知识</p><h2 id="正文" tabindex="-1">正文： <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文：&quot;">​</a></h2><h3 id="_1-键盘节点控制移动" tabindex="-1">1.键盘节点控制移动 <a class="header-anchor" href="#_1-键盘节点控制移动" aria-label="Permalink to &quot;1.键盘节点控制移动&quot;">​</a></h3><p>首先启动小车</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianbot_mini</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">bringup.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再新打开一个终端启动键盘控制节点</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianbot_mini</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">teleop.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这时把光标放在teleop.launch的命令框上就能键盘控制小车移动了</p><p>再来观察一下话题</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/d5/a4/d5a420f298e1107ce1a1bdeab62935ef_319x232.png" alt=""></p><p>添加键盘遥控，并没有新增新的话题，但小车为什么还能移动？</p><p><code>rostopic echo /topic</code>将消息输出屏幕</p><p>我们使用rostopic echo 分别监听各个话题，同时键盘遥控小车，发现cmd_vel话题随键盘控制发出了信息，上一小节我们使用<code>rostopic list -v</code>发现cmd_vel是subscribed topic,说明cmd_vel与小车运动相关。</p><p><img src="https://img.kancloud.cn/99/20/9920f5b4ed360da037c026e502b3677a_549x164.png" alt=""></p><p>实际上，cmd_vel发布Twist信息，包含了机器人期望前进速度和转向速度。</p><h3 id="_2-rostopic-pub使小车移动" tabindex="-1">2.rostopic_pub使小车移动 <a class="header-anchor" href="#_2-rostopic-pub使小车移动" aria-label="Permalink to &quot;2.rostopic_pub使小车移动&quot;">​</a></h3><p>我们还可以直接给话题topic发送命令，rostopic pub/topic type args 将数据发送到主题，它允许我们直接从命令行中对任意主题创建和发布命令</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">pub</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/cmd_vel</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">geometry_msgs/Twist</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">linear:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">X:0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Y:0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Z:0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Angular:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">X:0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Y:0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Z:0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://img.kancloud.cn/1a/77/1a77ea87bf069638ec2b16f871e866f6_733x181.png" alt=""></p><p>将angular的z改为0.8，就可看到Tianbot_mini开始转圈，我们就完成了rostopic pub 控制机器人移动</p><h3 id="_3-rqt时机器人移动" tabindex="-1">3.Rqt时机器人移动 <a class="header-anchor" href="#_3-rqt时机器人移动" aria-label="Permalink to &quot;3.Rqt时机器人移动&quot;">​</a></h3><p>Rqt图形化的方式使机器人运动起来 在已启动机器人的情况下，新打开一个终端，输入rqt</p><p>rqt直接打开,按下图配置，z轴设为1.8，Tianbot_mini开始原地转圈。</p><p><img src="https://img.kancloud.cn/d8/4e/d84e11934dad8dc5ede6efd7fa940d84_601x482.png" alt=""></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rostopic</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">echo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">/tianbot_mini/odom</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在此对机器人坐标系做出补充：</p><p>map:地图坐标系，一般设该坐标系为固定坐标系</p><p>base_link:机器人本体坐标系，与机器人中心重合</p><p>机器人的里程，上电的那一刻的位置信息和速度信息</p><p>odom：里程计坐标系</p><p>base_laser:激光雷达的坐标系，与激光雷达的安装点有关</p><p>按住小车走一下，观察里程计的变化</p><p><img src="https://img.kancloud.cn/2e/7a/2e7a6b7ba94bb8e818aa98043ae00217_727x483.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/quick_start/chapter1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter1 as default
};
