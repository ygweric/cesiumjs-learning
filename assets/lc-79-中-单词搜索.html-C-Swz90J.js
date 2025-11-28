import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const e={},o=l(`<h1 id="lc-79-中-单词搜索" tabindex="-1"><a class="header-anchor" href="#lc-79-中-单词搜索"><span>lc-79-中-单词搜索</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/word-search/description</span></span>
<span class="line"><span style="color:#6A9955;">给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;</span></span>
<span class="line"><span style="color:#6A9955;">输出：true</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;SEE&quot;</span></span>
<span class="line"><span style="color:#6A9955;">输出：true</span></span>
<span class="line"><span style="color:#6A9955;">示例 3：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCB&quot;</span></span>
<span class="line"><span style="color:#6A9955;">输出：false</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">m == board.length</span></span>
<span class="line"><span style="color:#6A9955;">n = board[i].length</span></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= m, n &lt;= 6</span></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= word.length &lt;= 15</span></span>
<span class="line"><span style="color:#6A9955;">board 和 word 仅由大小写英文字母组成</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> exist</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">board</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">// todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[o];function i(p,c){return n(),a("div",null,t)}const u=s(e,[["render",i],["__file","lc-79-中-单词搜索.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-79-%E4%B8%AD-%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2.html","title":"lc-79-中-单词搜索","lang":"zh-CN","frontmatter":{"description":"lc-79-中-单词搜索","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-79-%E4%B8%AD-%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-79-中-单词搜索"}],["meta",{"property":"og:description","content":"lc-79-中-单词搜索"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-79-中-单词搜索\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-79-中-单词搜索.md"}');export{u as comp,d as data};
