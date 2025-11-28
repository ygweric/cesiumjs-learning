import{_ as s,o as n,c as l,e as a}from"./app-poSTjqa8.js";const e={},p=a(`<h1 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/**</span></span>
<span class="line"><span style="color:#6A9955;">1、在js语言中，没有类似于c语言这样的块级作用域。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">2、js作用域链变量访问规则：</span></span>
<span class="line"><span style="color:#6A9955;">  （1）、当前作用域内存在要访问的变量时，则使用当前作用域中的变量。</span></span>
<span class="line"><span style="color:#6A9955;">  （2）、当前作用域中不存在要访问的变量时，则会到上一层作用域中寻找，直到全局作用域。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">3、执行顺序：　　</span></span>
<span class="line"><span style="color:#6A9955;">  （1）代码的检查装载阶段（预编译阶段），此阶段进行变量和函数的声明，但是不对变量进行赋值，变量的默认值为undefined。</span></span>
<span class="line"><span style="color:#6A9955;">  （2）代码的执行阶段，此阶段对变量进行赋值和函数的声明。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">4、看上面的代码：第一个a输出undefined。原因：js作用域链的访问规则，当前作用域内存在要访问的变量a，</span></span>
<span class="line"><span style="color:#6A9955;">  所以使用当前作用域中的变量。再根据js代码的执行顺序，此时的a只是声明了而并未被赋值，默认为undefined，</span></span>
<span class="line"><span style="color:#6A9955;">  所以输出undefined。而第二个a，输出1，正是因为此时的a已经被声明且被赋值，所以a输出1。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">在当前作用域内存在要访问的变量a，则就会使用当前作用域的变量a，</span></span>
<span class="line"><span style="color:#6A9955;">  只要当前作用域存在该变量即是对该变量进行了声明（即不会再用作用域外的值），</span></span>
<span class="line"><span style="color:#6A9955;">  直到var a=2;才是对该变量进行赋值。在代码中先是执行了console.log(a);在执行var a=2;</span></span>
<span class="line"><span style="color:#6A9955;">  所以此时a在该作用域内只是进行了声明还未进行赋值，所以就会输出undefined.</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span><span style="color:#6A9955;">//1</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 1&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">  var</span><span style="color:#9CDCFE;"> a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">  function</span><span style="color:#DCDCAA;"> func</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">); </span><span style="color:#6A9955;">// undefined </span></span>
<span class="line"><span style="color:#569CD6;">    var</span><span style="color:#9CDCFE;"> a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">a</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  func</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 输出:</span></span>
<span class="line"><span style="color:#6A9955;">// undefined</span></span>
<span class="line"><span style="color:#6A9955;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span><span style="color:#6A9955;">// 2</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 2&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">  var</span><span style="color:#DCDCAA;"> hello</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;hello,zhangsan&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  hello</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#569CD6;">  var</span><span style="color:#DCDCAA;"> hello</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;hello,lisi&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  hello</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // output:</span></span>
<span class="line"><span style="color:#6A9955;">  // hello,zhangsan</span></span>
<span class="line"><span style="color:#6A9955;">  // hello,lisi</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/**</span></span>
<span class="line"><span style="color:#6A9955;"> * 定义式的函数语句会被提取出来优先执行。函数定义执行完后，才会按顺序执行其他代码。</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span><span style="color:#6A9955;">// 3</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 3&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">  function</span><span style="color:#DCDCAA;"> hello</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;hello,zhangsan&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  hello</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#569CD6;">  function</span><span style="color:#DCDCAA;"> hello</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;hello,lisi&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  hello</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&#39;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // output:</span></span>
<span class="line"><span style="color:#6A9955;">  // hello,lisi</span></span>
<span class="line"><span style="color:#6A9955;">  // hello,lisi</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function t(c,i){return n(),l("div",null,o)}const D=s(e,[["render",t],["__file","变量提升.html.vue"]]),d=JSON.parse('{"path":"/interview/code/%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87.html","title":"变量提升","lang":"zh-CN","frontmatter":{"description":"变量提升","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/code/%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"变量提升"}],["meta",{"property":"og:description","content":"变量提升"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T07:58:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T07:58:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"变量提升\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T07:58:35.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732089515000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/code/变量提升.md"}');export{D as comp,d as data};
