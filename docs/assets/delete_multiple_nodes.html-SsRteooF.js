import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-B3oCLxwh.js";const t={},n=e(`<h1 id="delete-multiple-nodes-in-drupal" tabindex="-1"><a class="header-anchor" href="#delete-multiple-nodes-in-drupal"><span>Delete multiple nodes in Drupal</span></a></h1><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$content_type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;content_type_name&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$nids</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Drupal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">entityQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;node&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  -&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;type&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$content_type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  -&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  \\Drupal\\node\\Entity\\</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$nodes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadMultiple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$nids</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">foreach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$nodes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> as</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  $node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">delete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$storage_handler</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \\</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Drupal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">entityTypeManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;node&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$entities</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $storage_handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadMultiple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$ids</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$storage_handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">delete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$entities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[n];function h(p,k){return a(),s("div",null,l)}const g=i(t,[["render",h],["__file","delete_multiple_nodes.html.vue"]]),o=JSON.parse(`{"path":"/en/blog/delete_multiple_nodes.html","title":"Delete multiple nodes in Drupal","lang":"en-US","frontmatter":{"icon":"edit","date":"2022-09-25T00:00:00.000Z","contributors":false,"category":["Drupal","Drupal 8","Drupal 9","Drupal module","Module Development"],"tag":["Drupal","Code"],"description":"Delete multiple nodes in Drupal","head":[["meta",{"property":"og:url","content":"https://uitcode.com/en/blog/delete_multiple_nodes.html"}],["meta",{"property":"og:site_name","content":"UITCODE"}],["meta",{"property":"og:title","content":"Delete multiple nodes in Drupal"}],["meta",{"property":"og:description","content":"Delete multiple nodes in Drupal"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-15T13:05:08.000Z"}],["meta",{"property":"article:author","content":"Mr. Hoang Thien"}],["meta",{"property":"article:tag","content":"Drupal"}],["meta",{"property":"article:tag","content":"Code"}],["meta",{"property":"article:published_time","content":"2022-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T13:05:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Delete multiple nodes in Drupal\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T13:05:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Hoang Thien\\",\\"url\\":\\"https://www.youtube.com/c/HoangThienUITCODE\\"}]}"]]},"headers":[],"git":{"createdTime":1664105298000,"updatedTime":1713186308000,"contributors":[{"name":"Hoang Thien","email":"hoangthien.uit@gmail.com","commits":1}]},"readingTime":{"minutes":0.22,"words":66},"filePathRelative":"en/blog/delete_multiple_nodes.md","localizedDate":"September 25, 2022","excerpt":"\\n<div class=\\"language-php line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"php\\" data-title=\\"php\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$content_type</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'content_type_name'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$nids</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> \\\\</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Drupal</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">::</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">entityQuery</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'node'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  -&gt;</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">condition</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'type'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">$content_type</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  -&gt;</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">execute</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{g as comp,o as data};
