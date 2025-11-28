import{_ as s,o as n,c as a,e as l}from"./app-poSTjqa8.js";const e={},i=l(`<h1 id="lc-142-中-环形链表-ii" tabindex="-1"><a class="header-anchor" href="#lc-142-中-环形链表-ii"><span>lc-142-中-环形链表 II</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">https://leetcode.cn/problems/linked-list-cycle-ii</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">不允许修改 链表。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">示例 1：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：head = [3,2,0,-4], pos = 1</span></span>
<span class="line"><span style="color:#6A9955;">输出：返回索引为 1 的链表节点</span></span>
<span class="line"><span style="color:#6A9955;">解释：链表中有一个环，其尾部连接到第二个节点。</span></span>
<span class="line"><span style="color:#6A9955;">示例 2：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：head = [1,2], pos = 0</span></span>
<span class="line"><span style="color:#6A9955;">输出：返回索引为 0 的链表节点</span></span>
<span class="line"><span style="color:#6A9955;">解释：链表中有一个环，其尾部连接到第一个节点。</span></span>
<span class="line"><span style="color:#6A9955;">示例 3：</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">输入：head = [1], pos = -1</span></span>
<span class="line"><span style="color:#6A9955;">输出：返回 null</span></span>
<span class="line"><span style="color:#6A9955;">解释：链表中没有环。</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">链表中节点的数目范围在范围 [0, 104] 内</span></span>
<span class="line"><span style="color:#6A9955;">-105 &lt;= Node.val &lt;= 105</span></span>
<span class="line"><span style="color:#6A9955;">pos 的值为 -1 或者链表中的一个有效索引</span></span>
<span class="line"><span style="color:#6A9955;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">进阶：你是否可以使用 O(1) 空间解决此题？</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> detectCycle</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">head</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">//   todo  </span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function c(t,o){return n(),a("div",null,p)}const d=s(e,[["render",c],["__file","lc-142-中-环形链表 II.html.vue"]]),v=JSON.parse('{"path":"/interview/algorithm/%E9%93%BE%E8%A1%A8/lc-142-%E4%B8%AD-%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%20II.html","title":"lc-142-中-环形链表 II","lang":"zh-CN","frontmatter":{"description":"lc-142-中-环形链表 II","head":[["meta",{"property":"og:url","content":"https://cesium.guowei.fun/interview/algorithm/%E9%93%BE%E8%A1%A8/lc-142-%E4%B8%AD-%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%20II.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"lc-142-中-环形链表 II"}],["meta",{"property":"og:description","content":"lc-142-中-环形链表 II"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:12:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:12:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lc-142-中-环形链表 II\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-20T08:12:25.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"updatedTime":1732090345000,"contributors":[{"name":"国wei","email":"ygweric@gmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"interview/algorithm/链表/lc-142-中-环形链表 II.md"}');export{d as comp,v as data};
