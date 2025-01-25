---
date: 2025-01-25
category:
  - Drupal
  - Template twig
tag:
  - Twig
---

# Hướng dẫn sử dụng template Twig trong Drupal

## 1. Giới thiệu về Twig trong Drupal
Twig là một engine template mạnh mẽ và hiện đại được tích hợp sẵn trong Drupal từ phiên bản 8 trở lên. Nó giúp phát triển giao diện người dùng dễ dàng hơn với cú pháp rõ ràng, an toàn và dễ bảo trì.

## 2. Cấu trúc cơ bản của Twig
Twig sử dụng cú pháp đơn giản, gồm ba loại dấu phân cách chính:

- `{{ }}`: Hiển thị dữ liệu.
- `{% %}`: Thực thi các lệnh logic.
- `{# #}`: Thêm chú thích (comment).

Ví dụ cơ bản:
```twig
<h1>{{ title }}</h1>
<p>{% if content %}{{ content }}{% else %}Nội dung trống{% endif %}</p>
```

## 3. Các thành phần chính Twig hỗ trợ trong Drupal
### 3.1 Biến (Variables)
Trong Twig, biến được truyền từ các file PHP hoặc các hook của Drupal. Ví dụ:
```twig
{{ node.title }}
{{ user.name }}
```

### 3.2 Filters (Bộ lọc)
Filters được sử dụng để xử lý và định dạng dữ liệu. Ví dụ:
```twig
{{ title|lower }} {# Chuyển thành chữ thường #}
{{ date|date('d/m/Y') }} {# Định dạng ngày #}
```
Một số bộ lọc thông dụng:
- `capitalize`: Viết hoa chữ cái đầu.
- `length`: Lấy độ dài chuỗi hoặc danh sách.
- `raw`: Hiển thị HTML mà không escape.
- `join`: Nối các phần tử của danh sách thành chuỗi.
- `replace`: Thay thế chuỗi con trong chuỗi chính.
- `default`: Đặt giá trị mặc định nếu biến không tồn tại hoặc rỗng.

### 3.3 Functions (Hàm)
Hàm trong Twig cung cấp các tính năng tiện ích:
```twig
{{ path('route_name') }} {# Tạo URL từ tên route #}
{{ render(block('block_id')) }} {# Render một block #}
```
Một số hàm phổ biến:
- `include`: Bao gồm một file Twig khác.
- `dump`: Debug dữ liệu.
- `attach_library`: Đính kèm thư viện CSS/JS của Drupal.
- `url`: Tạo URL từ route hoặc đường dẫn nội bộ.
- `file_url`: Lấy URL đầy đủ của một file.
- `image_style`: Render ảnh với một style cụ thể.
- `t`: Dịch một chuỗi sang ngôn ngữ hiện tại.

### 3.4 Loops (Vòng lặp)
Twig hỗ trợ vòng lặp để xử lý danh sách:
```twig
{% for item in items %}
  <li>{{ item }}</li>
{% endfor %}
```
Các biến đặc biệt trong vòng lặp:
- `loop.index`: Chỉ số bắt đầu từ 1.
- `loop.index0`: Chỉ số bắt đầu từ 0.
- `loop.length`: Số phần tử trong danh sách.
- `loop.last`: Xác định phần tử cuối cùng.

### 3.5 Conditions (Điều kiện)
Twig hỗ trợ các cấu trúc điều kiện như:
```twig
{% if logged_in %}
  <p>Chào {{ user.name }}</p>
{% else %}
  <p>Xin mời đăng nhập</p>
{% endif %}
```

### 3.6 Macros (Hàm dùng lại)
Macros giúp tái sử dụng các đoạn mã lặp lại:
```twig
{% macro render_item(item) %}
  <li>{{ item }}</li>
{% endmacro %}

<ul>
  {{ _self.render_item('Item 1') }}
  {{ _self.render_item('Item 2') }}
</ul>
```

### 3.7 Test (Kiểm tra)
Test được sử dụng để kiểm tra kiểu dữ liệu hoặc giá trị:
```twig
{% if variable is empty %}Biến rỗng{% endif %}
{% if variable is defined %}Biến đã được định nghĩa{% endif %}
```
Một số test phổ biến:
- `empty`: Kiểm tra biến có rỗng không.
- `defined`: Kiểm tra biến có được định nghĩa không.
- `iterable`: Kiểm tra biến có thể lặp qua không.
- `divisible by`: Kiểm tra số chia hết.
- `even`: Kiểm tra số chẵn.
- `odd`: Kiểm tra số lẻ.
- `same as`: So sánh giá trị.

## 4. Cách tạo template Twig trong Drupal
### 4.1 Cấu trúc thư mục
Các file Twig thường nằm trong thư mục `templates` của theme:
```
/themes/custom/my_theme/templates
```

### 4.2 Quy tắc đặt tên file
Drupal sử dụng các quy tắc cụ thể để đặt tên file template. Ví dụ:
- `node--article.html.twig`: Template cho nội dung loại Article.
- `page--front.html.twig`: Template cho trang chủ.
- `block--block-id.html.twig`: Template cho block cụ thể.

### 4.3 Debug template
Để bật chế độ debug, sửa file `services.yml`:
```yaml
parameters:
  twig.config:
    debug: true
    auto_reload: true
    cache: false
```
Sau đó, xóa cache với lệnh:
```bash
drush cr
```

Khi debug bật, bạn có thể xem tên template được sử dụng bằng cách inspect HTML.

## 5. Best Practices khi sử dụng Twig
- Tránh logic phức tạp trong Twig; logic nên được xử lý trong PHP.
- Luôn escape dữ liệu để đảm bảo an toàn.
- Tái sử dụng template bằng cách chia nhỏ các file hoặc dùng `include`.
- Sử dụng comment `{# #}` để ghi chú rõ ràng.
- Tận dụng các hàm và filter sẵn có để giảm bớt mã.

## 6. Kết luận
Twig là công cụ mạnh mẽ giúp tăng tốc phát triển giao diện trong Drupal. Hiểu rõ các thành phần mà Twig hỗ trợ sẽ giúp bạn dễ dàng xây dựng các template đẹp, an toàn và tối ưu hơn.