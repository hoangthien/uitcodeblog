import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as t}from"./app-II9TJMdW.js";const e={},c=t(`<h1 id="xoa-nhieu-user-trong-drupal" tabindex="-1"><a class="header-anchor" href="#xoa-nhieu-user-trong-drupal"><span>Xóa nhiều user trong Drupal</span></a></h1><p>Đầu tiên chúng ta cần nid của các node cần xóa.</p><h2 id="đe-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau" tabindex="-1"><a class="header-anchor" href="#đe-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau"><span>Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau:</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$content_type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;content_type_name&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$nids</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">entityQuery</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;node&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">condition</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token variable">$content_type</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="đe-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau" tabindex="-1"><a class="header-anchor" href="#đe-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau"><span>Để xóa nhiều node ta có thể dùng 1 trong 2 cách sau:</span></a></h2><h3 id="cach-1-lap-het-cac-node-va-xoa-tuan-tu" tabindex="-1"><a class="header-anchor" href="#cach-1-lap-het-cac-node-va-xoa-tuan-tu"><span>Cách 1: Lặp hết các node và xóa tuần tự</span></a></h3><p>Cách này xóa chậm hơn cách 2 nhưng phù hợp với các tác vụ đi kèm khi xóa node, ví dụ gửi mail và cần lấy các giá trị trong các field của node để bỏ vào nội dung mail chẳng hạn.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span>  <span class="token package"><span class="token punctuation">\\</span>Drupal<span class="token punctuation">\\</span>node<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Node</span><span class="token punctuation">;</span>

<span class="token variable">$nodes</span> <span class="token operator">=</span> <span class="token class-name static-context">Node</span><span class="token operator">::</span><span class="token function">loadMultiple</span><span class="token punctuation">(</span><span class="token variable">$nids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$nodes</span> <span class="token keyword">as</span> <span class="token variable">$node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$node</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cach-2-su-dung-storage-handler-đe-xoa" tabindex="-1"><a class="header-anchor" href="#cach-2-su-dung-storage-handler-đe-xoa"><span>Cách 2: Sử dụng storage handler để xóa</span></a></h3><p>Cách này xóa nhanh hơn cách 1, phù hợp với việc chỉ xóa node mà không làm gì thêm.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$storage_handler</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Drupal</span><span class="token operator">::</span><span class="token function">entityTypeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$entities</span> <span class="token operator">=</span> <span class="token variable">$storage_handler</span><span class="token operator">-&gt;</span><span class="token function">loadMultiple</span><span class="token punctuation">(</span><span class="token variable">$ids</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$storage_handler</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">$entities</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[c];function p(i,l){return a(),s("div",null,o)}const d=n(e,[["render",p],["__file","xoa-nhieu-user.html.vue"]]),h=JSON.parse(`{"path":"/blog/xoa-nhieu-user.html","title":"Xóa nhiều user trong Drupal","lang":"vi-VN","frontmatter":{"icon":"edit","date":"2022-09-26T00:00:00.000Z","contributors":false,"category":["Drupal","Drupal 8","Drupal 9","Drupal module","Module Development"],"tag":["Drupal","Code"],"description":"Xóa nhiều user trong Drupal Đầu tiên chúng ta cần nid của các node cần xóa. Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau: Để xóa nhiều node ta có thể...","head":[["meta",{"property":"og:url","content":"https://uitcode.com/blog/xoa-nhieu-user.html"}],["meta",{"property":"og:site_name","content":"UITCODE"}],["meta",{"property":"og:title","content":"Xóa nhiều user trong Drupal"}],["meta",{"property":"og:description","content":"Xóa nhiều user trong Drupal Đầu tiên chúng ta cần nid của các node cần xóa. Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau: Để xóa nhiều node ta có thể..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T13:05:08.000Z"}],["meta",{"property":"article:author","content":"Mr. Hoang Thien"}],["meta",{"property":"article:tag","content":"Drupal"}],["meta",{"property":"article:tag","content":"Code"}],["meta",{"property":"article:published_time","content":"2022-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T13:05:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Xóa nhiều user trong Drupal\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T13:05:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Hoang Thien\\",\\"url\\":\\"https://www.youtube.com/c/HoangThienUITCODE\\"}]}"]]},"headers":[{"level":2,"title":"Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau:","slug":"đe-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau","link":"#đe-lay-nid-cua-cac-node-can-xoa-chung-ta-co-the-dung-entityquery-nhu-sau","children":[]},{"level":2,"title":"Để xóa nhiều node ta có thể dùng 1 trong 2 cách sau:","slug":"đe-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau","link":"#đe-xoa-nhieu-node-ta-co-the-dung-1-trong-2-cach-sau","children":[{"level":3,"title":"Cách 1: Lặp hết các node và xóa tuần tự","slug":"cach-1-lap-het-cac-node-va-xoa-tuan-tu","link":"#cach-1-lap-het-cac-node-va-xoa-tuan-tu","children":[]},{"level":3,"title":"Cách 2: Sử dụng storage handler để xóa","slug":"cach-2-su-dung-storage-handler-đe-xoa","link":"#cach-2-su-dung-storage-handler-đe-xoa","children":[]}]}],"git":{"createdTime":1664105298000,"updatedTime":1713186308000,"contributors":[{"name":"Hoang Thien","email":"hoangthien.uit@gmail.com","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"blog/xoa-nhieu-user.md","localizedDate":"26 tháng 9 năm 2022","excerpt":"\\n<p>Đầu tiên chúng ta cần nid của các node cần xóa.</p>\\n<h2>Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau:</h2>\\n<div class=\\"language-php\\" data-ext=\\"php\\" data-title=\\"php\\"><pre class=\\"language-php\\"><code><span class=\\"token variable\\">$content_type</span> <span class=\\"token operator\\">=</span> <span class=\\"token string single-quoted-string\\">'content_type_name'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token variable\\">$nids</span> <span class=\\"token operator\\">=</span> <span class=\\"token class-name class-name-fully-qualified static-context\\"><span class=\\"token punctuation\\">\\\\</span>Drupal</span><span class=\\"token operator\\">::</span><span class=\\"token function\\">entityQuery</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'node'</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">condition</span><span class=\\"token punctuation\\">(</span><span class=\\"token string single-quoted-string\\">'type'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token variable\\">$content_type</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token operator\\">-&gt;</span><span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{d as comp,h as data};