const n=JSON.parse('{"key":"v-2b38f0e2","path":"/blog/cai-moi-truong-drupal-voi-lando-docker-ubuntu-tren-windows-10.html","title":"Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10","lang":"vi-VN","frontmatter":{"icon":"edit","date":"2022-10-24T00:00:00.000Z","contributors":false,"category":["Drupal","Docker","Lando","Ubuntu"],"tag":["Drupal"],"description":"Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10 Install Ubuntu on WSL2 on Windows 10 Mở Turn Windows features on or off Check vào: Windows Subsystem for Linux Virtual Machine Platform và click ok rồi restart máy","head":[["meta",{"property":"og:url","content":"https://uitcode.com/blog/cai-moi-truong-drupal-voi-lando-docker-ubuntu-tren-windows-10.html"}],["meta",{"property":"og:site_name","content":"UITCODE"}],["meta",{"property":"og:title","content":"Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10"}],["meta",{"property":"og:description","content":"Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10 Install Ubuntu on WSL2 on Windows 10 Mở Turn Windows features on or off Check vào: Windows Subsystem for Linux Virtual Machine Platform và click ok rồi restart máy"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T04:49:15.000Z"}],["meta",{"property":"article:author","content":"Mr. Hoang Thien"}],["meta",{"property":"article:tag","content":"Drupal"}],["meta",{"property":"article:published_time","content":"2022-10-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T04:49:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-11-30T04:49:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Hoang Thien\\",\\"url\\":\\"https://www.youtube.com/c/HoangThienUITCODE\\"}]}"]]},"headers":[{"level":2,"title":"Install Ubuntu on WSL2 on Windows 10","slug":"install-ubuntu-on-wsl2-on-windows-10","link":"#install-ubuntu-on-wsl2-on-windows-10","children":[{"level":3,"title":"Mở Turn Windows features on or off","slug":"mo-turn-windows-features-on-or-off","link":"#mo-turn-windows-features-on-or-off","children":[]},{"level":3,"title":"Set WSL 2 as your default version","slug":"set-wsl-2-as-your-default-version","link":"#set-wsl-2-as-your-default-version","children":[]}]},{"level":2,"title":"Cài Ubuntu","slug":"cai-ubuntu","link":"#cai-ubuntu","children":[]},{"level":2,"title":"Tải docker về và cài https://www.docker.com/","slug":"tai-docker-ve-va-cai-https-www-docker-com","link":"#tai-docker-ve-va-cai-https-www-docker-com","children":[]},{"level":2,"title":"Cài php 7.4 để dùng cho composer trong ubuntu:","slug":"cai-php-7-4-đe-dung-cho-composer-trong-ubuntu","link":"#cai-php-7-4-đe-dung-cho-composer-trong-ubuntu","children":[]},{"level":2,"title":"Cài composer","slug":"cai-composer","link":"#cai-composer","children":[]},{"level":2,"title":"Cài lando https://github.com/lando/lando/releases bằng 2 lệnh sau:","slug":"cai-lando-https-github-com-lando-lando-releases-bang-2-lenh-sau","link":"#cai-lando-https-github-com-lando-lando-releases-bang-2-lenh-sau","children":[]},{"level":2,"title":"Khởi tạo dự án với lando và docker:","slug":"khoi-tao-du-an-voi-lando-va-docker","link":"#khoi-tao-du-an-voi-lando-va-docker","children":[]},{"level":2,"title":"Bây giờ clone code về trong thư mục chứa file .lando.yml vừa tạo và install site thôi.","slug":"bay-gio-clone-code-ve-trong-thu-muc-chua-file-lando-yml-vua-tao-va-install-site-thoi","link":"#bay-gio-clone-code-ve-trong-thu-muc-chua-file-lando-yml-vua-tao-va-install-site-thoi","children":[]},{"level":2,"title":"Trong quá trình sử dụng lando và docker xảy ra lỗi ta có thể gỡ cài đặt và cài lại như sau:","slug":"trong-qua-trinh-su-dung-lando-va-docker-xay-ra-loi-ta-co-the-go-cai-đat-va-cai-lai-nhu-sau","link":"#trong-qua-trinh-su-dung-lando-va-docker-xay-ra-loi-ta-co-the-go-cai-đat-va-cai-lai-nhu-sau","children":[{"level":3,"title":"File lando-x64-v3.6.4.deb đã được tải từ lúc cài đặt và nằm ở đó nên không cần tải lại, Nếu có phiên bản lando mới hơn thì có thể tải về và cài bản mới nếu muốn với lệnh:","slug":"file-lando-x64-v3-6-4-deb-đa-đuoc-tai-tu-luc-cai-đat-va-nam-o-đo-nen-khong-can-tai-lai-neu-co-phien-ban-lando-moi-hon-thi-co-the-tai-ve-va-cai-ban-moi-neu-muon-voi-lenh","link":"#file-lando-x64-v3-6-4-deb-đa-đuoc-tai-tu-luc-cai-đat-va-nam-o-đo-nen-khong-can-tai-lai-neu-co-phien-ban-lando-moi-hon-thi-co-the-tai-ve-va-cai-ban-moi-neu-muon-voi-lenh","children":[]},{"level":3,"title":"Trong quá trình gỡ cài đặt Docker và lando thì source cũ không bị ảnh hưởng, Bạn chỉ cần backup database thường xuyên thì sau khi cài lại Docker với lando chỉ cần import database vào là đã có site như cũ.","slug":"trong-qua-trinh-go-cai-đat-docker-va-lando-thi-source-cu-khong-bi-anh-huong-ban-chi-can-backup-database-thuong-xuyen-thi-sau-khi-cai-lai-docker-voi-lando-chi-can-import-database-vao-la-đa-co-site-nhu-cu","link":"#trong-qua-trinh-go-cai-đat-docker-va-lando-thi-source-cu-khong-bi-anh-huong-ban-chi-can-backup-database-thuong-xuyen-thi-sau-khi-cai-lai-docker-voi-lando-chi-can-import-database-vao-la-đa-co-site-nhu-cu","children":[]}]},{"level":2,"title":"Một số lệnh thường dùng với lando:","slug":"mot-so-lenh-thuong-dung-voi-lando","link":"#mot-so-lenh-thuong-dung-voi-lando","children":[]}],"git":{"createdTime":1666609220000,"updatedTime":1669783755000,"contributors":[{"name":"HoangThien UITCODE","email":"hoangthien.uit@gmail.com","commits":5}]},"readingTime":{"minutes":3.05,"words":916},"filePathRelative":"blog/cai-moi-truong-drupal-voi-lando-docker-ubuntu-tren-windows-10.md","localizedDate":"24 tháng 10 năm 2022","excerpt":"<h1> Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10</h1>\\n<h2> Install Ubuntu on WSL2 on Windows 10</h2>\\n<h3> Mở Turn Windows features on or off</h3>\\n<p>Check vào:</p>\\n<ul>\\n<li>Windows Subsystem for Linux</li>\\n<li>Virtual Machine Platform<br>\\nvà click ok rồi restart máy</li>\\n</ul>","autoDesc":true}');export{n as data};