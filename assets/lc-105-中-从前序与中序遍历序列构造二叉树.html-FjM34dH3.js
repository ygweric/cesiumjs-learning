import{_ as s,o as n,c as e,e as a}from"./app-poSTjqa8.js";const l={},i=a(`<h1 id="lc-105-中-从前序与中序遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#lc-105-中-从前序与中序遍历序列构造二叉树"><span>lc-105-中-从前序与中序遍历序列构造二叉树</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal</span></span>
<span class="line"><span style="color:#6A9955;">给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]</span></span>
<span class="line"><span style="color:#6A9955;">输出: [3,9,20,null,null,15,7]</span></span>
<span class="line"><span style="color:#6A9955;">示例 2:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入: preorder = [-1], inorder = [-1]</span></span>
<span class="line"><span style="color:#6A9955;">输出: [-1]</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">1 &lt;= preorder.length &lt;= 3000</span></span>
<span class="line"><span style="color:#6A9955;">inorder.length == preorder.length</span></span>
<span class="line"><span style="color:#6A9955;">-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</span></span>
<span class="line"><span style="color:#6A9955;">preorder 和 inorder 均 无重复 元素</span></span>
<span class="line"><span style="color:#6A9955;">inorder 均出现在 preorder</span></span>
<span class="line"><span style="color:#6A9955;">preorder 保证 为二叉树的前序遍历序列</span></span>
<span class="line"><span style="color:#6A9955;">inorder 保证 为二叉树的中序遍历序列</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> buildTree</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">preorder</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">inorder</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">// todo</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[i];function p(c,o){return n(),e("div",null,r)}const d=s(l,[["render",p],["__file","lc-105-中-从前序与中序遍历序列构造二叉树.html.vue"]]),v=JSON.parse('{"path":"/interview/algorithm/%E4%BA%8C%E5%8F%89%E6%A0%91/lc-105-%E4%B8%AD-%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html","title":"lc-105-中-从前序与中序遍历序列构造二叉树","lang":"zh-CN","frontmatter":{"description":"lc-105-中-从前序与中序遍历序列构造二叉树","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E4%BA%8C%E5%8F%89%E6%A0%91/lc-105-%E4%B8%AD-%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-105-中-从前序与中序遍历序列构造二叉树"}],["meta",{"property":"og:description","content":"lc-105-中-从前序与中序遍历序列构造二叉树"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-105-中-从前序与中序遍历序列构造二叉树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/二叉树/lc-105-中-从前序与中序遍历序列构造二叉树.md"}');export{d as comp,v as data};
