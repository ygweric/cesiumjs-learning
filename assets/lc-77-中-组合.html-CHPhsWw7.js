import{_ as s,o as n,c as l,e as a}from"./app-poSTjqa8.js";const p={},e=a(`<h1 id="lc-77-中-组合" tabindex="-1"><a class="header-anchor" href="#lc-77-中-组合"><span>lc-77-中-组合</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/**</span></span>
<span class="line"><span style="color:#6A9955;"> https://leetcode.cn/problems/combinations/description/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">你可以按 任何顺序 返回答案。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ---------------------------------------------------</span></span>
<span class="line"><span style="color:#6A9955;">/**</span></span>
<span class="line"><span style="color:#6A9955;">  这是时间复杂度是 n²</span></span>
<span class="line"><span style="color:#6A9955;">  改进：用tmp来节省空间复杂度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  4: 2024年1月8日 复习</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> combine</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">n</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // let getCombine = (from, to , count) =&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> swap</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">l</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> tmp</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">l</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#9CDCFE;">    nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">l</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#9CDCFE;">    nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">tmp</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> nums</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Array</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">from</span><span style="color:#D4D4D4;">({</span><span style="color:#9CDCFE;">length:</span><span style="color:#9CDCFE;"> n</span><span style="color:#D4D4D4;">}, (</span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">,</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> index</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> results</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#DCDCAA;"> dfs</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">l</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">l</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#C586C0;">      for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> j</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">k</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span></span>
<span class="line"><span style="color:#D4D4D4;">        </span></span>
<span class="line"><span style="color:#DCDCAA;">        swap</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span></span>
<span class="line"><span style="color:#DCDCAA;">        dfs</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">+</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">        swap</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// [</span></span>
<span class="line"><span style="color:#6A9955;">//   [2,4],</span></span>
<span class="line"><span style="color:#6A9955;">//   [3,4],</span></span>
<span class="line"><span style="color:#6A9955;">//   [2,3],</span></span>
<span class="line"><span style="color:#6A9955;">//   [1,2],</span></span>
<span class="line"><span style="color:#6A9955;">//   [1,3],</span></span>
<span class="line"><span style="color:#6A9955;">//   [1,4],</span></span>
<span class="line"><span style="color:#6A9955;">// ]</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">combine</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">)); </span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">combine</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">));  </span><span style="color:#6A9955;">// [[1]]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,r){return n(),l("div",null,o)}const t=s(p,[["render",c],["__file","lc-77-中-组合.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E9%80%92%E5%BD%92_%E5%9B%9E%E6%BA%AF/lc-77-%E4%B8%AD-%E7%BB%84%E5%90%88.html","title":"lc-77-中-组合","lang":"zh-CN","frontmatter":{"description":"lc-77-中-组合","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E9%80%92%E5%BD%92_%E5%9B%9E%E6%BA%AF/lc-77-%E4%B8%AD-%E7%BB%84%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-77-中-组合"}],["meta",{"property":"og:description","content":"lc-77-中-组合"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-77-中-组合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/递归+回溯/lc-77-中-组合.md"}');export{t as comp,d as data};
