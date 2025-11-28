import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const p={},e=l(`<h1 id="计数排序" tabindex="-1"><a class="header-anchor" href="#计数排序"><span>计数排序</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">Array.from({length:20, }, ()=&gt;(Math.floor(Math.random()*100)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">计数排序，看完介绍后，挺好理解的，</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">时间复杂度为 O(n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> countingSort</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> max</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Number</span><span style="color:#D4D4D4;">.MIN_SAFE_INTEGER;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> min</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Number</span><span style="color:#D4D4D4;">.MAX_SAFE_INTEGER;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> num</span><span style="color:#569CD6;"> of</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">    max</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">max</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">num</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">    min</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">min</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">min</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">num</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // 根据大小，从小到大放入countArr中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> countArr</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Array</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">max</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">min</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">fill</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> num</span><span style="color:#569CD6;"> of</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">    countArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">num</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">min</span><span style="color:#D4D4D4;">]++;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // 遍历 countArr， 从左到右，从小到大，依次展开到results中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> results</span><span style="color:#D4D4D4;"> = [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> index</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">countArr</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">countArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">] &gt; </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">      countArr</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">]--;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">      results</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">min</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> results</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">countingSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">countingSort</span><span style="color:#D4D4D4;">([</span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">]));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  countingSort</span><span style="color:#D4D4D4;">([</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">    68</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">46</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">99</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">23</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">45</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">27</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">28</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">18</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">50</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">60</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">71</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">64</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">83</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">29</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">25</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">39</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">33</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">    90</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  ])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  countingSort</span><span style="color:#D4D4D4;">([</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">    9</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">7</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">9</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B5CEA8;">    1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">9</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  ])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(D,r){return n(),a("div",null,o)}const t=s(p,[["render",c],["__file","计数排序.html.vue"]]),y=JSON.parse('{"path":"/interview/algorithm/%E6%8E%92%E5%BA%8F/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.html","title":"计数排序","lang":"zh-CN","frontmatter":{"description":"计数排序","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E6%8E%92%E5%BA%8F/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"计数排序"}],["meta",{"property":"og:description","content":"计数排序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计数排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/排序/计数排序.md"}');export{t as comp,y as data};
