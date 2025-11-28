import{_ as s,o as n,c as a,e}from"./app-poSTjqa8.js";const l={},i=e(`<h1 id="lc-53-中-最大子数组和" tabindex="-1"><a class="header-anchor" href="#lc-53-中-最大子数组和"><span>lc-53-中-最大子数组和</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/maximum-subarray/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。</span></span>
<span class="line"><span style="color:#6A9955;">给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">子数组 是数组中的一个连续部分。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</span></span>
<span class="line"><span style="color:#6A9955;">输出：6</span></span>
<span class="line"><span style="color:#6A9955;">解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [1]</span></span>
<span class="line"><span style="color:#6A9955;">输出：1</span></span>
<span class="line"><span style="color:#6A9955;">示例 3：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [5,4,-1,7,8]</span></span>
<span class="line"><span style="color:#6A9955;">输出：23</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> maxSubArray</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">  // todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function p(t,o){return n(),a("div",null,c)}const d=s(l,[["render",p],["__file","lc-53-中-最大子数组和.html.vue"]]),m=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-53-%E4%B8%AD-%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C.html","title":"lc-53-中-最大子数组和","lang":"zh-CN","frontmatter":{"description":"lc-53-中-最大子数组和","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-53-%E4%B8%AD-%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-53-中-最大子数组和"}],["meta",{"property":"og:description","content":"lc-53-中-最大子数组和"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-53-中-最大子数组和\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-53-中-最大子数组和.md"}');export{d as comp,m as data};
