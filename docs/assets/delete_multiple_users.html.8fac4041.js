import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,d as e}from"./app.21b5026e.js";const t={},p=e(`<h1 id="delete-multiple-users-in-drupal" tabindex="-1"><a class="header-anchor" href="#delete-multiple-users-in-drupal" aria-hidden="true">#</a> Delete multiple users in Drupal</h1><p>\u0110\u1EA7u ti\xEAn ch\xFAng ta c\u1EA7n nid c\u1EE7a c\xE1c node c\u1EA7n x\xF3a.</p><h2 id="\u0111e-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau" tabindex="-1"><a class="header-anchor" href="#\u0111e-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau" aria-hidden="true">#</a> \u0110\u1EC3 l\u1EA5y nid c\u1EE7a c\xE1c node c\u1EA7n x\xF3a ch\xFAng ta co th\u1EC3 d\xF9ng entityQuery nh\u01B0 sau:</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$content_type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;content_type_name&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$nids</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">entityQuery</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;node&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">condition</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token variable">$content_type</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u0111e-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau" tabindex="-1"><a class="header-anchor" href="#\u0111e-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau" aria-hidden="true">#</a> \u0110\u1EC3 x\xF3a nhi\u1EC1u node ta c\xF3 th\u1EC3 d\xF9ng 1 trong 2 c\xE1ch sau:</h2><h3 id="cach-1-lap-het-cac-node-va-xoa-tuan-tu" tabindex="-1"><a class="header-anchor" href="#cach-1-lap-het-cac-node-va-xoa-tuan-tu" aria-hidden="true">#</a> C\xE1ch 1: L\u1EB7p h\u1EBFt c\xE1c node v\xE0 x\xF3a tu\u1EA7n t\u1EF1</h3><p>C\xE1ch n\xE0y x\xF3a ch\u1EADm h\u01A1n c\xE1ch 2 nh\u01B0ng ph\xF9 h\u1EE3p v\u1EDBi c\xE1c t\xE1c v\u1EE5 \u0111i k\xE8m khi x\xF3a node, v\xED d\u1EE5 g\u1EEDi mail v\xE0 c\u1EA7n l\u1EA5y c\xE1c gi\xE1 tr\u1ECB trong c\xE1c field c\u1EE7a node \u0111\u1EC3 b\u1ECF v\xE0o n\u1ED9i dung mail ch\u1EB3ng h\u1EA1n.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span>  <span class="token package"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>node<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Node</span><span class="token punctuation">;</span>

<span class="token variable">$nodes</span> <span class="token operator">=</span> <span class="token class-name static-context">Node</span><span class="token operator">::</span><span class="token function">loadMultiple</span><span class="token punctuation">(</span><span class="token variable">$nids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$nodes</span> <span class="token keyword">as</span> <span class="token variable">$node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$node</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cach-2-su-dung-storage-handler-\u0111e-xoa" tabindex="-1"><a class="header-anchor" href="#cach-2-su-dung-storage-handler-\u0111e-xoa" aria-hidden="true">#</a> C\xE1ch 2: S\u1EED d\u1EE5ng storage handler \u0111\u1EC3 x\xF3a</h3><p>C\xE1ch n\xE0y x\xF3a nhanh h\u01A1n c\xE1ch 1, ph\xF9 h\u1EE3p v\u1EDBi vi\u1EC7c ch\u1EC9 x\xF3a node m\xE0 kh\xF4ng l\xE0m g\xEC th\xEAm.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$storage_handler</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">entityTypeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$entities</span> <span class="token operator">=</span> <span class="token variable">$storage_handler</span><span class="token operator">-&gt;</span><span class="token function">loadMultiple</span><span class="token punctuation">(</span><span class="token variable">$ids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$storage_handler</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">$entities</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function o(l,i){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","delete_multiple_users.html.vue"]]);export{d as default};
