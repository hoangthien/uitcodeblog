import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as i}from"./app-II9TJMdW.js";const a={},o=i('<h1 id="tro-ten-mien-tuy-chinh-cho-github-page" tabindex="-1"><a class="header-anchor" href="#tro-ten-mien-tuy-chinh-cho-github-page"><span>Trỏ tên miền tùy chỉnh cho github page</span></a></h1><h2 id="xac-minh-domain-moi-mua-đe-su-dung-cho-github-page" tabindex="-1"><a class="header-anchor" href="#xac-minh-domain-moi-mua-đe-su-dung-cho-github-page"><span>Xác minh domain mới mua để sử dụng cho github page</span></a></h2><p>Đăng nhập và vào trang https://github.com/settings/pages</p><p>Thêm domain bạn mới mua và bấm thêm, lúc này github sẽ cho bạn DNS TXT record:</p><ul><li>Copy dòng Create a TXT record in your DNS configuration for the following hostname bỏ vào tên lưu trữ trong bản ghi tùy chỉnh của Google domain</li><li>Copy dòng Use this code for the value of the TXT record bỏ vào Dữ liệu trong bản ghi tùy chỉnh của Google domain</li><li>Loại chọn TXT, thời gian tồn tại để mặc định 3600</li></ul><p>Bấm lưu trong bản ghi tùy chỉnh của Google domain.</p><p>Quay lại trang github đang mở để copy giá trị lúc nãy, bấm Verify. Xuất hiện dấu tích xanh báo Verified bên domain bạn vừa add là thành công</p><h2 id="cap-nhat-thong-tin-dns" tabindex="-1"><a class="header-anchor" href="#cap-nhat-thong-tin-dns"><span>Cập nhật thông tin DNS</span></a></h2><p>Truy cập https://domains.google.com/registrar/{your_domain}/dns</p><p>Ví dụ: https://domains.google.com/registrar/uitcode.com/dns</p><p>Tại đây tạo 3 bản ghi tùy chỉnh sau:</p><table><thead><tr><th style="text-align:left;">Tên máy chủ lưu trữ</th><th style="text-align:left;">Loại</th><th style="text-align:left;">Thời gian tồn tại</th><th style="text-align:left;">Dữ liệu</th></tr></thead><tbody><tr><td style="text-align:left;">www</td><td style="text-align:left;">CNAME</td><td style="text-align:left;">3600</td><td style="text-align:left;">{acount_github}.github.io.</td></tr><tr><td style="text-align:left;">_github-pages-challenge-demo</td><td style="text-align:left;">TXT</td><td style="text-align:left;">3600</td><td style="text-align:left;">&quot;demo&quot;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">A</td><td style="text-align:left;">3600</td><td style="text-align:left;">185.199.108.153</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">185.199.109.153</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">185.199.110.153</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">185.199.111.153</td></tr></tbody></table><h2 id="gan-domain-cho-repo-vua-tao" tabindex="-1"><a class="header-anchor" href="#gan-domain-cho-repo-vua-tao"><span>Gắn domain cho repo vừa tạo</span></a></h2><p>Truy cập https://github.com/{acount_github}/{repo_name}/settings/pages</p><p>Mục Custom domain bạn nhập domain mới mua và Save lại, chờ check DNS đúng với cấu hình bên DNS của Google domain thì tick chọn vào mục Enforce HTTPS nữa là xong.</p><h2 id="build-and-deployment" tabindex="-1"><a class="header-anchor" href="#build-and-deployment"><span>Build and deployment</span></a></h2><p>Truy cập https://github.com/{acount_github}/{repo_name}/settings/pages</p><p>Tại đây bạn chọn branch chứa html, cụ thể là branch main và thư mục /docs. Bấm save. Bây giờ có thể truy cập site với html đã trỏ domain vừa mua thành công.</p>',18),h=[o];function l(g,d){return e(),n("div",null,h)}const r=t(a,[["render",l],["__file","tro-ten-mien-tuy-chinh-cho-github-page.html.vue"]]),p=JSON.parse('{"path":"/blog/tro-ten-mien-tuy-chinh-cho-github-page.html","title":"Trỏ tên miền tùy chỉnh cho github page","lang":"vi-VN","frontmatter":{"icon":"edit","date":"2022-09-26T00:00:00.000Z","contributors":false,"category":["Domain","Hosting"],"description":"Trỏ tên miền tùy chỉnh cho github page Xác minh domain mới mua để sử dụng cho github page Đăng nhập và vào trang https://github.com/settings/pages Thêm domain bạn mới mua và bấm...","head":[["meta",{"property":"og:url","content":"https://uitcode.com/blog/tro-ten-mien-tuy-chinh-cho-github-page.html"}],["meta",{"property":"og:site_name","content":"UITCODE"}],["meta",{"property":"og:title","content":"Trỏ tên miền tùy chỉnh cho github page"}],["meta",{"property":"og:description","content":"Trỏ tên miền tùy chỉnh cho github page Xác minh domain mới mua để sử dụng cho github page Đăng nhập và vào trang https://github.com/settings/pages Thêm domain bạn mới mua và bấm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T13:05:08.000Z"}],["meta",{"property":"article:author","content":"Mr. Hoang Thien"}],["meta",{"property":"article:published_time","content":"2022-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T13:05:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Trỏ tên miền tùy chỉnh cho github page\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T13:05:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Hoang Thien\\",\\"url\\":\\"https://www.youtube.com/c/HoangThienUITCODE\\"}]}"]]},"headers":[{"level":2,"title":"Xác minh domain mới mua để sử dụng cho github page","slug":"xac-minh-domain-moi-mua-đe-su-dung-cho-github-page","link":"#xac-minh-domain-moi-mua-đe-su-dung-cho-github-page","children":[]},{"level":2,"title":"Cập nhật thông tin DNS","slug":"cap-nhat-thong-tin-dns","link":"#cap-nhat-thong-tin-dns","children":[]},{"level":2,"title":"Gắn domain cho repo vừa tạo","slug":"gan-domain-cho-repo-vua-tao","link":"#gan-domain-cho-repo-vua-tao","children":[]},{"level":2,"title":"Build and deployment","slug":"build-and-deployment","link":"#build-and-deployment","children":[]}],"git":{"createdTime":1664114641000,"updatedTime":1713186308000,"contributors":[{"name":"Hoang Thien","email":"hoangthien.uit@gmail.com","commits":1}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"blog/tro-ten-mien-tuy-chinh-cho-github-page.md","localizedDate":"26 tháng 9 năm 2022","excerpt":"\\n<h2>Xác minh domain mới mua để sử dụng cho github page</h2>\\n<p>Đăng nhập và vào trang https://github.com/settings/pages</p>\\n<p>Thêm domain bạn mới mua và bấm thêm, lúc này github sẽ cho bạn DNS TXT record:</p>","autoDesc":true}');export{r as comp,p as data};
