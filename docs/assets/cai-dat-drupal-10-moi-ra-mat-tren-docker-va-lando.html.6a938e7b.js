import{_ as i}from"./plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,b as a,e as n,f as e,d as t,r as o}from"./app.02cacd0b.js";const c={},u=t(`<h1 id="cai-\u0111at-drupal-10-moi-ra-mat-tren-docker-voi-lando" tabindex="-1"><a class="header-anchor" href="#cai-\u0111at-drupal-10-moi-ra-mat-tren-docker-voi-lando" aria-hidden="true">#</a> C\xE0i \u0111\u1EB7t Drupal 10 m\u1EDBi ra m\u1EAFt tr\xEAn Docker v\u1EDBi Lando</h1><h2 id="tao-du-an-drupal-10-voi-composer" tabindex="-1"><a class="header-anchor" href="#tao-du-an-drupal-10-voi-composer" aria-hidden="true">#</a> T\u1EA1o d\u1EF1 \xE1n Drupal 10 v\u1EDBi composer</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project drupal/recommended-project:10.0.0 <span class="token string">&quot;drupal10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tao-file-lando-yml-nhu-sau" tabindex="-1"><a class="header-anchor" href="#tao-file-lando-yml-nhu-sau" aria-hidden="true">#</a> T\u1EA1o file .lando.yml nh\u01B0 sau</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> drupaldev
<span class="token key atrule">recipe</span><span class="token punctuation">:</span> drupal10
<span class="token key atrule">config</span><span class="token punctuation">:</span>
  <span class="token key atrule">composer_version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
  <span class="token key atrule">via</span><span class="token punctuation">:</span> apache<span class="token punctuation">:</span><span class="token number">2.4</span>
  <span class="token key atrule">webroot</span><span class="token punctuation">:</span> web
  <span class="token key atrule">database</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
  <span class="token key atrule">drush</span><span class="token punctuation">:</span> <span class="token string">&#39;^10&#39;</span>
  <span class="token key atrule">xdebug</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">proxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">appserver</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> drupaldev.lndo.site
  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> pma.drupaldev.lndo.site
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">appserver</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> php<span class="token punctuation">:</span><span class="token number">8.1</span>
    <span class="token key atrule">xdebug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">conf</span><span class="token punctuation">:</span> lando/php/php.ini
    <span class="token key atrule">overrides</span><span class="token punctuation">:</span>
      <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        <span class="token key atrule">DRUSH_OPTIONS_URI</span><span class="token punctuation">:</span> <span class="token string">&quot;https://drupaldev.lndo.site&quot;</span>
  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> phpmyadmin
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> database
  <span class="token key atrule">database</span><span class="token punctuation">:</span>
    <span class="token key atrule">creds</span><span class="token punctuation">:</span>
      <span class="token key atrule">user</span><span class="token punctuation">:</span> drupaldev
      <span class="token key atrule">password</span><span class="token punctuation">:</span> drupaldev
      <span class="token key atrule">database</span><span class="token punctuation">:</span> drupaldev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="khoi-tao" tabindex="-1"><a class="header-anchor" href="#khoi-tao" aria-hidden="true">#</a> Kh\u1EDFi t\u1EA1o</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lando start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cai-\u0111at-drush" tabindex="-1"><a class="header-anchor" href="#cai-\u0111at-drush" aria-hidden="true">#</a> C\xE0i \u0111\u1EB7t drush</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lando <span class="token function">composer</span> require drush/drush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cai-\u0111at-site" tabindex="-1"><a class="header-anchor" href="#cai-\u0111at-site" aria-hidden="true">#</a> C\xE0i \u0111\u1EB7t site</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lando drush si

 Database name <span class="token punctuation">[</span>drupal<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> drupaldev

 Database driver <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span>

 Database username <span class="token punctuation">[</span>drupal<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> drupaldev

 Database password <span class="token punctuation">[</span>drupal<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> drupaldev

 Database <span class="token function">host</span> <span class="token punctuation">[</span><span class="token number">127.0</span>.0.1<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> database

 Database port <span class="token punctuation">[</span><span class="token number">3306</span><span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span>


 You are about to:
 * Create a sites/default/settings.php <span class="token function">file</span>
 * DROP all tables <span class="token keyword">in</span> your <span class="token string">&#39;drupaldev&#39;</span> database.

 Do you want to continue? <span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span> <span class="token punctuation">[</span>yes<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span>

 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Starting Drupal installation. This takes a while.
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_select_language
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_select_profile
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_load_profile
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_verify_requirements
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_settings_form
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_verify_database_ready
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_base_system
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_bootstrap_full
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_profile_modules
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_profile_themes
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_install_profile
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_configure_form
 <span class="token punctuation">[</span>notice<span class="token punctuation">]</span> Performed <span class="token function">install</span> task: install_finished
 <span class="token punctuation">[</span>success<span class="token punctuation">]</span> Installation complete.  User name: admin  User password: dfEJdY86QC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r={href:"https://drupaldev.lndo.site",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="\u0111at-lai-mat-khau-voi-drush-upwd" tabindex="-1"><a class="header-anchor" href="#\u0111at-lai-mat-khau-voi-drush-upwd" aria-hidden="true">#</a> \u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u v\u1EDBi drush upwd</h2><div class="language-drush ext-drush line-numbers-mode"><pre class="language-drush"><code>lando drush upwd admin admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),v={href:"https://drupaldev.lndo.site",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="giai-phap-cai-module-contrib-chua-co-phien-ban-tuong-thich-drupal-10" tabindex="-1"><a class="header-anchor" href="#giai-phap-cai-module-contrib-chua-co-phien-ban-tuong-thich-drupal-10" aria-hidden="true">#</a> Gi\u1EA3i ph\xE1p c\xE0i module contrib ch\u01B0a c\xF3 phi\xEAn b\u1EA3n t\u01B0\u01A1ng th\xEDch Drupal 10</h2><p>\u0110\u1EC3 c\xE0i module ch\xFAng ta c\u1EA7n ch\u1EC9nh s\u1EEDa file composer.json nh\u01B0 sau:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...
        <span class="token property">&quot;drupal/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.0.0 as 9.5&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ti\u1EBFp \u0111\u1EBFn d\xF9ng composer c\xE0i nh\u01B0 b\xECnh th\u01B0\u1EDDng m\xE0 kh\xF4ng c\xF2n b\u1ECB b\xE1o l\u1ED7i kh\xF4ng c\xF3 phi\xEAn b\u1EA3n t\u01B0\u01A1ng th\xEDch</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lando <span class="token function">composer</span> require drupal/module_filter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Phi\xEAn b\u1EA3n m\u1EDBi nh\u1EA5t c\u1EE7a module_filter v3.2.0 s\u1EBD \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t, tuy nhi\xEAn ch\xFAng ta v\u1EABn kh\xF4ng th\u1EC3 b\u1EADt module n\xE0y v\xEC trong m\xE3 c\u1EE7a n\xF3 c\xF3 ch\u1EE9a nh\u1EEFng ph\u1EA7n ch\u01B0a t\u01B0\u01A1ng th\xEDch, ch\xFAng ta ti\u1EBFp t\u1EE5c b\u01B0\u1EDBc ti\u1EBFp theo</p><h2 id="giai-phap-xu-ly-van-\u0111e-tuong-thich-drupal-10-cua-module-contrib" tabindex="-1"><a class="header-anchor" href="#giai-phap-xu-ly-van-\u0111e-tuong-thich-drupal-10-cua-module-contrib" aria-hidden="true">#</a> Gi\u1EA3i ph\xE1p x\u1EED l\xFD v\u1EA5n \u0111\u1EC1 t\u01B0\u01A1ng th\xEDch Drupal 10 c\u1EE7a module contrib</h2><p>V\xEC Drupal 10 m\u1EDBi ra m\u1EAFt n\xEAn c\xE1c module contrib s\u1EBD ch\u01B0a t\u01B0\u01A1ng th\xEDch \u0111\u1EA7y \u0111\u1EE7, v\xEC v\u1EADy ch\xFAng ta c\xF3 th\u1EC3 d\xF9ng patch \u0111\u1EC3 s\u1EEDa t\u1EA1m th\u1EDDi ch\u1EDD c\xE1c b\u1EA3n c\u1EADp nh\u1EADt t\u01B0\u01A1ng th\xEDch drupal 10 c\u1EE7a c\u1ED9ng \u0111\u1ED3ng drupal dev.</p>`,8),k={href:"http://drupa.org",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;patches&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;drupal/module_filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;3297692: Automated Drupal 10 compatibility fixes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ti\u1EBFp \u0111\u1EBFn ch\u1EA1y l\u1EC7nh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lando <span class="token function">composer</span> require cweagans/composer-patches
lando <span class="token function">composer</span> update drupal/module_filter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b={href:"https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"Sau n\xE0y khi module module_filter \u0111\xE3 c\xF3 phi\xEAn b\u1EA3n m\u1EDBi t\u01B0\u01A1ng th\xEDch Drupal 10 th\xEC ta ch\u1EC9 vi\u1EC7c g\u1EE1 patch trong file composer.json v\xE0 ch\u1EA1y l\u1EA1i composer update \u0111\u1EC3 l\u1EA5y phi\xEAn b\u1EA3n module m\u1EDBi l\xE0 \u0111\u01B0\u1EE3c.",-1);function f(y,_){const s=o("ExternalLinkIcon");return l(),p("div",null,[u,a("p",null,[n("Site "),a("a",r,[n("https://drupaldev.lndo.site"),e(s)]),n(" \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t th\xE0nh c\xF4ng. Theme m\u1EB7c \u0111\u1ECBnh s\u1EBD l\xE0 Olivero v\xE0 theme admin s\u1EBD l\xE0 Claro.")]),d,a("p",null,[n("Truy c\u1EADp "),a("a",v,[n("https://drupaldev.lndo.site"),e(s)]),n(" v\u1EDBi user name v\xE0 password l\u1EA7n l\u01B0\u1EE3t l\xE0 admin admin.")]),m,a("p",null,[n("\u0110\u1EC3 \xE1p d\u1EE5ng c\xE1c b\u1EA3n v\xE1 ch\xFAng ta c\u1EA7n t\xECm b\u1EA3n v\xE1 ph\xF9 h\u1EE3p tr\xEAn "),a("a",k,[n("drupa.org"),e(s)]),n(" v\xE0 th\xEAm v\xE0o file composer.json nh\u01B0 sau (v\xED d\u1EE5 sau l\xE0 tr\u01B0\u1EDDng h\u1EE3p s\u1EEDa cho module module_filter):")]),h,a("p",null,[n("L\xFAc n\xE0y b\u1EA3n v\xE1 "),a("a",b,[n("https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch"),e(s)]),n(" s\u1EBD \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng cho module module_filter version 3.2.0, v\xE0 l\xFAc n\xE0y module \u0111\xE3 t\u01B0\u01A1ng th\xEDch v\u1EDBi Drupal 10, ch\xFAng ta c\xF3 th\u1EC3 b\u1EADt module n\xE0y trong admin ho\u1EB7c d\xF9ng drush en \u0111\u1EC3 b\u1EADt n\xF3.")]),g])}const w=i(c,[["render",f],["__file","cai-dat-drupal-10-moi-ra-mat-tren-docker-va-lando.html.vue"]]);export{w as default};
