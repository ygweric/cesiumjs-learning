import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const p={},e=l(`<h1 id="背包-完全背包" tabindex="-1"><a class="header-anchor" href="#背包-完全背包"><span>背包-完全背包</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://zhuanlan.zhihu.com/p/377231783</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">完全背包和01背包问题唯一不同的地方就是，每种物品有无限件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">  dp(i, j) : </span></span>
<span class="line"><span style="color:#6A9955;">      i: 前(i-1)个物品， 1 ~ i-1, i最小为1</span></span>
<span class="line"><span style="color:#6A9955;">      j: 包容量 j</span></span>
<span class="line"><span style="color:#6A9955;">      dp(i, j)：前i个物品的总价值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  dp(i, j) =  max(</span></span>
<span class="line"><span style="color:#6A9955;">                  dp(i-1, j), // 不包含第i个</span></span>
<span class="line"><span style="color:#6A9955;">                  dp(i-1, j- weight[i] ) + value[i] // 包含第i个</span></span>
<span class="line"><span style="color:#6A9955;">              )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  j=0：dp(i, 0) = 0 // 背包容量为0， 无论多少个数，价值都是0 </span></span>
<span class="line"><span style="color:#6A9955;">  i=1: dp(1, j) = 0 // 物品个数为1，无论背包容量多少，价值都是 min(weight[i], size)</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">  1. 看了文章，算是一把搞定，主要算是有之前滚动数组的基础吧</span></span>
<span class="line"><span style="color:#6A9955;">  2. 2024年1月31日 又看了一遍dp推到公式，还算比较顺利写完了，算是加强了自己的理解</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#DCDCAA;"> getMaxBagValue</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">weights</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">values</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">size</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /*</span></span>
<span class="line"><span style="color:#6A9955;">    dp(i, j) = max(</span></span>
<span class="line"><span style="color:#6A9955;">        dp(i-1, j ),</span></span>
<span class="line"><span style="color:#6A9955;">        dp(i-1, j - weight(i)) +value[i]</span></span>
<span class="line"><span style="color:#6A9955;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    这个是二维数组，下面是推断为一维数组的原理===》</span></span>
<span class="line"><span style="color:#6A9955;">   由于取 max， dp(i, j) &gt; = dp(i-x, j), 因为可选的物品越多，价值肯定越大</span></span>
<span class="line"><span style="color:#6A9955;">   所以可以改写为下面的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    dp(i, j) = max(</span></span>
<span class="line"><span style="color:#6A9955;">      max(dp(i, j)， dp(i-1, j)),</span></span>
<span class="line"><span style="color:#6A9955;">     max(dp(i, j- weight(i)) +value[i], dp(i-1, j - weight(i)) +value[i])</span></span>
<span class="line"><span style="color:#6A9955;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    再次简化可得</span></span>
<span class="line"><span style="color:#6A9955;">    dp(i, j) = max(</span></span>
<span class="line"><span style="color:#6A9955;">       dp(i, j),</span></span>
<span class="line"><span style="color:#6A9955;">       dp(i, j- weight(i)) +value[i]</span></span>
<span class="line"><span style="color:#6A9955;">    )</span></span>
<span class="line"><span style="color:#6A9955;">    可以看到，dp(i, j)的值, 只和 &lt;j 有关系，因此可以用以为数组来推断</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Array</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">size</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">fill</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#6A9955;">  // i, j=0时候，全部为0，没有意思，所以直接从i, j=1开始</span></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">weights</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> j</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#6A9955;">      // console.log(\`i: \${i} j: \${j} nums: \${JSON.stringify(nums)}\`);</span></span>
<span class="line"><span style="color:#C586C0;">      if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">weights</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]&gt; </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">) { </span></span>
<span class="line"><span style="color:#6A9955;">        //----- 这个要价格判断，不要不然报错</span></span>
<span class="line"><span style="color:#9CDCFE;">        nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">Math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">], </span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">weights</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]] + </span><span style="color:#9CDCFE;">values</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">]);</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#9CDCFE;"> nums</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">nums</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  //</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#DCDCAA;">  getMaxBagValue</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">], </span><span style="color:#6A9955;">// weights</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">], </span><span style="color:#6A9955;">// values</span></span>
<span class="line"><span style="color:#B5CEA8;">    6</span><span style="color:#6A9955;"> // size</span></span>
<span class="line"><span style="color:#D4D4D4;">  )</span></span>
<span class="line"><span style="color:#D4D4D4;">); </span><span style="color:#6A9955;">// 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[e];function o(c,r){return n(),a("div",null,i)}const D=s(p,[["render",o],["__file","背包-完全背包.html.vue"]]),d=JSON.parse('{"path":"/interview/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E8%83%8C%E5%8C%85-%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html","title":"背包-完全背包","lang":"zh-CN","frontmatter":{"description":"背包-完全背包","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/%E8%83%8C%E5%8C%85-%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"背包-完全背包"}],["meta",{"property":"og:description","content":"背包-完全背包"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"背包-完全背包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/动态规划/背包-完全背包.md"}');export{D as comp,d as data};
