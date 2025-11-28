import{_ as s,o as n,c as a,e}from"./app-poSTjqa8.js";const l={},i=e(`<h1 id="lc-136-简-只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#lc-136-简-只出现一次的数字"><span>lc-136-简-只出现一次的数字</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/single-number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1 ：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [2,2,1]</span></span>
<span class="line"><span style="color:#6A9955;">输出：1</span></span>
<span class="line"><span style="color:#6A9955;">示例 2 ：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [4,1,2,1,2]</span></span>
<span class="line"><span style="color:#6A9955;">输出：4</span></span>
<span class="line"><span style="color:#6A9955;">示例 3 ：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：nums = [1]</span></span>
<span class="line"><span style="color:#6A9955;">输出：1</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= nums.length &lt;= 3 * 104</span></span>
<span class="line"><span style="color:#6A9955;">-3 * 104 &lt;= nums[i] &lt;= 3 * 104</span></span>
<span class="line"><span style="color:#6A9955;">除了某个元素只出现一次以外，其余每个元素均出现两次。</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> singleNumber</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">// todo 没有头绪</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function c(t,o){return n(),a("div",null,p)}const d=s(l,[["render",c],["__file","lc-136-简-只出现一次的数字.html.vue"]]),m=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-136-%E7%AE%80-%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.html","title":"lc-136-简-只出现一次的数字","lang":"zh-CN","frontmatter":{"description":"lc-136-简-只出现一次的数字","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-136-%E7%AE%80-%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-136-简-只出现一次的数字"}],["meta",{"property":"og:description","content":"lc-136-简-只出现一次的数字"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-136-简-只出现一次的数字\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-136-简-只出现一次的数字.md"}');export{d as comp,m as data};
