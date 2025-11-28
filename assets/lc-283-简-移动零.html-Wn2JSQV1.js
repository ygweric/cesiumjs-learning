import{_ as s,o as n,c as l,e as a}from"./app-poSTjqa8.js";const e={},p=a(`<h1 id="lc-283-简-移动零" tabindex="-1"><a class="header-anchor" href="#lc-283-简-移动零"><span>lc-283-简-移动零</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/move-zeroes/description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">请注意 ，必须在不复制数组的情况下原地对数组进行操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: nums = [0,1,0,3,12]</span></span>
<span class="line"><span style="color:#6A9955;">输出: [1,3,12,0,0]</span></span>
<span class="line"><span style="color:#6A9955;">示例 2:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: nums = [0]</span></span>
<span class="line"><span style="color:#6A9955;">输出: [0]</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= nums.length &lt;= 104</span></span>
<span class="line"><span style="color:#6A9955;">-231 &lt;= nums[i] &lt;= 231 - 1</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">进阶：你能尽量减少完成的操作次数吗？</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">1. 放假状态不好，边界状态判断乱七八糟 2024年2月5日</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> moveZeroes</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">  // todo</span></span>
<span class="line"><span style="color:#9CDCFE;">  hash</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">moveZeroes</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">12</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [1,3,12,0,0]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">moveZeroes</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [0]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">moveZeroes</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [1]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">moveZeroes</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [0, 1]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">moveZeroes</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">])); </span><span style="color:#6A9955;">// [2,1]</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(moveZeroes(xxxx)); // xxxxxxxxx</span></span>
<span class="line"><span style="color:#6A9955;">// console.log(moveZeroes(xxxx)); // xxxxxxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,r){return n(),l("div",null,o)}const d=s(e,[["render",c],["__file","lc-283-简-移动零.html.vue"]]),D=JSON.parse('{"path":"/interview/algorithm/%E6%8E%92%E5%BA%8F/%E6%8E%92%E5%BA%8F_%E5%8F%8C%E6%8C%87%E9%92%88/lc-283-%E7%AE%80-%E7%A7%BB%E5%8A%A8%E9%9B%B6.html","title":"lc-283-简-移动零","lang":"zh-CN","frontmatter":{"description":"lc-283-简-移动零","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E6%8E%92%E5%BA%8F/%E6%8E%92%E5%BA%8F_%E5%8F%8C%E6%8C%87%E9%92%88/lc-283-%E7%AE%80-%E7%A7%BB%E5%8A%A8%E9%9B%B6.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-283-简-移动零"}],["meta",{"property":"og:description","content":"lc-283-简-移动零"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-283-简-移动零\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/排序/排序+双指针/lc-283-简-移动零.md"}');export{d as comp,D as data};
