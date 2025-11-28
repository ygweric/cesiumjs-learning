import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const e={},i=l(`<h1 id="lc-200-中-岛屿数量" tabindex="-1"><a class="header-anchor" href="#lc-200-中-岛屿数量"><span>lc-200-中-岛屿数量</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/number-of-islands/description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给你一个由 &#39;1&#39;（陆地）和 &#39;0&#39;（水）组成的的二维网格，请你计算网格中岛屿的数量。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">此外，你可以假设该网格的四条边均被水包围。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：grid = [</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]</span></span>
<span class="line"><span style="color:#6A9955;">]</span></span>
<span class="line"><span style="color:#6A9955;">输出：1</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：grid = [</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],</span></span>
<span class="line"><span style="color:#6A9955;">  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]</span></span>
<span class="line"><span style="color:#6A9955;">]</span></span>
<span class="line"><span style="color:#6A9955;">输出：3</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">m == grid.length</span></span>
<span class="line"><span style="color:#6A9955;">n == grid[i].length</span></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= m, n &lt;= 300</span></span>
<span class="line"><span style="color:#6A9955;">grid[i][j] 的值为 &#39;0&#39; 或 &#39;1&#39;</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> numIslands</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">grid</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function o(p,c){return n(),a("div",null,t)}const u=s(e,[["render",o],["__file","lc-200-中-岛屿数量.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-200-%E4%B8%AD-%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F.html","title":"lc-200-中-岛屿数量","lang":"zh-CN","frontmatter":{"description":"lc-200-中-岛屿数量","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-200-%E4%B8%AD-%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-200-中-岛屿数量"}],["meta",{"property":"og:description","content":"lc-200-中-岛屿数量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-200-中-岛屿数量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-200-中-岛屿数量.md"}');export{u as comp,d as data};
