---
icon: edit
date: 2022-09-26
contributors: false
category:
  - Domain
  - Hosting
---

# Trỏ tên miền tùy chỉnh cho github page

## Xác minh domain mới mua để sử dụng cho github page
Đăng nhập và vào trang https://github.com/settings/pages

Thêm domain bạn mới mua và bấm thêm, lúc này github sẽ cho bạn DNS TXT record:
- Copy dòng Create a TXT record in your DNS configuration for the following hostname bỏ vào tên lưu trữ trong bản ghi tùy chỉnh của Google domain
- Copy dòng Use this code for the value of the TXT record bỏ vào Dữ liệu trong bản ghi tùy chỉnh của Google domain
- Loại chọn TXT, thời gian tồn tại để mặc định 3600

Bấm lưu trong bản ghi tùy chỉnh của Google domain.

Quay lại trang github đang mở để copy giá trị lúc nãy, bấm Verify. Xuất hiện dấu tích xanh báo Verified bên domain bạn vừa add là thành công

## Cập nhật thông tin DNS
Truy cập https://domains.google.com/registrar/{your_domain}/dns 

Ví dụ: https://domains.google.com/registrar/uitcode.com/dns

Tại đây tạo 3 bản ghi tùy chỉnh sau:

| Tên máy chủ lưu trữ                | Loại       | Thời gian tồn tại| Dữ liệu	                        |
| :--------------------------------- | :--------  | :--------------- | :--------------                  |
| www                                | CNAME      | 3600             | {acount_github}.github.io.       |
| _github-pages-challenge-demo       | TXT        | 3600             | "demo"                           |
|                                    | A          | 3600             | 185.199.108.153                  |
|                                    |            |                  | 185.199.109.153                  |
|                                    |            |                  | 185.199.110.153                  |
|                                    |            |                  | 185.199.111.153                  |


## Gắn domain cho repo vừa tạo
Truy cập https://github.com/{acount_github}/{repo_name}/settings/pages

Mục Custom domain bạn nhập domain mới mua và Save lại, chờ check DNS đúng với cấu hình bên DNS của Google domain thì tick chọn vào mục Enforce HTTPS nữa là xong.

## Build and deployment
Truy cập https://github.com/{acount_github}/{repo_name}/settings/pages

Tại đây bạn chọn branch chứa html, cụ thể là branch main và thư mục /docs. Bấm save. Bây giờ có thể truy cập site với html đã trỏ domain vừa mua thành công.
