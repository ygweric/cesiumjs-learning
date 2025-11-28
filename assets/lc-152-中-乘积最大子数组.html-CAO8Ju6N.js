import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const e={},i=l(`<h1 id="lc-152-中-乘积最大子数组" tabindex="-1"><a class="header-anchor" href="#lc-152-中-乘积最大子数组"><span>lc-152-中-乘积最大子数组</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/maximum-product-subarray/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">测试用例的答案是一个 32-位 整数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">子数组 是数组的连续子序列。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: nums = [2,3,-2,4]</span></span>
<span class="line"><span style="color:#6A9955;">输出: 6</span></span>
<span class="line"><span style="color:#6A9955;">解释: 子数组 [2,3] 有最大乘积 6。</span></span>
<span class="line"><span style="color:#6A9955;">示例 2:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: nums = [-2,0,-1]</span></span>
<span class="line"><span style="color:#6A9955;">输出: 0</span></span>
<span class="line"><span style="color:#6A9955;">解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= nums.length &lt;= 2 * 104</span></span>
<span class="line"><span style="color:#6A9955;">-10 &lt;= nums[i] &lt;= 10</span></span>
<span class="line"><span style="color:#6A9955;">nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> maxProduct</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">// todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function p(t,o){return n(),a("div",null,c)}const d=s(e,[["render",p],["__file","lc-152-中-乘积最大子数组.html.vue"]]),m=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-152-%E4%B8%AD-%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84.html","title":"lc-152-中-乘积最大子数组","lang":"zh-CN","frontmatter":{"description":"lc-152-中-乘积最大子数组","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-152-%E4%B8%AD-%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-152-中-乘积最大子数组"}],["meta",{"property":"og:description","content":"lc-152-中-乘积最大子数组"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-152-中-乘积最大子数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-152-中-乘积最大子数组.md"}');export{d as comp,m as data};
