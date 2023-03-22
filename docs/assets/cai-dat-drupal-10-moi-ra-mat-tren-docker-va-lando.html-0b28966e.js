import{_ as i,V as l,W as p,X as a,Y as n,$ as e,Z as t,F as o}from"./framework-522cfab5.js";const c={},u=t(`<h1 id="cai-đat-drupal-10-moi-ra-mat-tren-docker-voi-lando" tabindex="-1"><a class="header-anchor" href="#cai-đat-drupal-10-moi-ra-mat-tren-docker-voi-lando" aria-hidden="true">#</a> Cài đặt Drupal 10 mới ra mắt trên Docker với Lando</h1><h2 id="tao-du-an-drupal-10-voi-composer" tabindex="-1"><a class="header-anchor" href="#tao-du-an-drupal-10-voi-composer" aria-hidden="true">#</a> Tạo dự án Drupal 10 với composer</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> create-project drupal/recommended-project:10.0.0 <span class="token string">&quot;drupal10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tao-file-lando-yml-nhu-sau" tabindex="-1"><a class="header-anchor" href="#tao-file-lando-yml-nhu-sau" aria-hidden="true">#</a> Tạo file .lando.yml như sau</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> drupaldev
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="khoi-tao" tabindex="-1"><a class="header-anchor" href="#khoi-tao" aria-hidden="true">#</a> Khởi tạo</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lando start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cai-đat-drush" tabindex="-1"><a class="header-anchor" href="#cai-đat-drush" aria-hidden="true">#</a> Cài đặt drush</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lando <span class="token function">composer</span> require drush/drush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cai-đat-site" tabindex="-1"><a class="header-anchor" href="#cai-đat-site" aria-hidden="true">#</a> Cài đặt site</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lando drush si

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d={href:"https://drupaldev.lndo.site",target:"_blank",rel:"noopener noreferrer"},r=t(`<h2 id="đat-lai-mat-khau-voi-drush-upwd" tabindex="-1"><a class="header-anchor" href="#đat-lai-mat-khau-voi-drush-upwd" aria-hidden="true">#</a> Đặt lại mật khẩu với drush upwd</h2><div class="language-drush line-numbers-mode" data-ext="drush"><pre class="language-drush"><code>lando drush upwd admin admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),v={href:"https://drupaldev.lndo.site",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="giai-phap-cai-module-contrib-chua-co-phien-ban-tuong-thich-drupal-10" tabindex="-1"><a class="header-anchor" href="#giai-phap-cai-module-contrib-chua-co-phien-ban-tuong-thich-drupal-10" aria-hidden="true">#</a> Giải pháp cài module contrib chưa có phiên bản tương thích Drupal 10</h2><p>Để cài module chúng ta cần chỉnh sửa file composer.json như sau:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...
        <span class="token property">&quot;drupal/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.0.0 as 9.5&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tiếp đến dùng composer cài như bình thường mà không còn bị báo lỗi không có phiên bản tương thích</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lando <span class="token function">composer</span> require drupal/module_filter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Phiên bản mới nhất của module_filter v3.2.0 sẽ được cài đặt, tuy nhiên chúng ta vẫn không thể bật module này vì trong mã của nó có chứa những phần chưa tương thích, chúng ta tiếp tục bước tiếp theo</p><h2 id="giai-phap-xu-ly-van-đe-tuong-thich-drupal-10-cua-module-contrib" tabindex="-1"><a class="header-anchor" href="#giai-phap-xu-ly-van-đe-tuong-thich-drupal-10-cua-module-contrib" aria-hidden="true">#</a> Giải pháp xử lý vấn đề tương thích Drupal 10 của module contrib</h2><p>Vì Drupal 10 mới ra mắt nên các module contrib sẽ chưa tương thích đầy đủ, vì vậy chúng ta có thể dùng patch để sửa tạm thời chờ các bản cập nhật tương thích drupal 10 của cộng đồng drupal dev.</p>`,8),k={href:"http://drupa.org",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tiếp đến chạy lệnh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lando <span class="token function">composer</span> require cweagans/composer-patches
lando <span class="token function">composer</span> update drupal/module_filter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b={href:"https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"Sau này khi module module_filter đã có phiên bản mới tương thích Drupal 10 thì ta chỉ việc gỡ patch trong file composer.json và chạy lại composer update để lấy phiên bản module mới là được.",-1);function f(y,_){const s=o("ExternalLinkIcon");return l(),p("div",null,[u,a("p",null,[n("Site "),a("a",d,[n("https://drupaldev.lndo.site"),e(s)]),n(" được cài đặt thành công. Theme mặc định sẽ là Olivero và theme admin sẽ là Claro.")]),r,a("p",null,[n("Truy cập "),a("a",v,[n("https://drupaldev.lndo.site"),e(s)]),n(" với user name và password lần lượt là admin admin.")]),m,a("p",null,[n("Để áp dụng các bản vá chúng ta cần tìm bản vá phù hợp trên "),a("a",k,[n("drupa.org"),e(s)]),n(" và thêm vào file composer.json như sau (ví dụ sau là trường hợp sửa cho module module_filter):")]),h,a("p",null,[n("Lúc này bản vá "),a("a",b,[n("https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch"),e(s)]),n(" sẽ được áp dụng cho module module_filter version 3.2.0, và lúc này module đã tương thích với Drupal 10, chúng ta có thể bật module này trong admin hoặc dùng drush en để bật nó.")]),g])}const q=i(c,[["render",f],["__file","cai-dat-drupal-10-moi-ra-mat-tren-docker-va-lando.html.vue"]]);export{q as default};
