import{_ as s,o as n,c as a,e}from"./app-poSTjqa8.js";const l={},i=e(`<h1 id="lc-139-中-单词拆分" tabindex="-1"><a class="header-anchor" href="#lc-139-中-单词拆分"><span>lc-139-中-单词拆分</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/word-break</span></span>
<span class="line"><span style="color:#6A9955;">给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;, &quot;code&quot;]</span></span>
<span class="line"><span style="color:#6A9955;">输出: true</span></span>
<span class="line"><span style="color:#6A9955;">解释: 返回 true 因为 &quot;leetcode&quot; 可以由 &quot;leet&quot; 和 &quot;code&quot; 拼接成。</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;, &quot;pen&quot;]</span></span>
<span class="line"><span style="color:#6A9955;">输出: true</span></span>
<span class="line"><span style="color:#6A9955;">解释: 返回 true 因为 &quot;applepenapple&quot; 可以由 &quot;apple&quot; &quot;pen&quot; &quot;apple&quot; 拼接成。</span></span>
<span class="line"><span style="color:#6A9955;">     注意，你可以重复使用字典中的单词。</span></span>
<span class="line"><span style="color:#6A9955;">示例 3：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;, &quot;dog&quot;, &quot;sand&quot;, &quot;and&quot;, &quot;cat&quot;]</span></span>
<span class="line"><span style="color:#6A9955;">输出: false</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= s.length &lt;= 300</span></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= wordDict.length &lt;= 1000</span></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= wordDict[i].length &lt;= 20</span></span>
<span class="line"><span style="color:#6A9955;">s 和 wordDict[i] 仅由小写英文字母组成</span></span>
<span class="line"><span style="color:#6A9955;">wordDict 中的所有字符串 互不相同</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> wordBreak</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">wordDict</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">// todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function p(o,c){return n(),a("div",null,t)}const d=s(l,[["render",p],["__file","lc-139-中-单词拆分.html.vue"]]),u=JSON.parse('{"path":"/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-139-%E4%B8%AD-%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.html","title":"lc-139-中-单词拆分","lang":"zh-CN","frontmatter":{"description":"lc-139-中-单词拆分","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%BE%85%E5%88%86%E7%B1%BB/lc-139-%E4%B8%AD-%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-139-中-单词拆分"}],["meta",{"property":"og:description","content":"lc-139-中-单词拆分"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-139-中-单词拆分\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/待分类/lc-139-中-单词拆分.md"}');export{d as comp,u as data};
