---
date: 2025-01-25
category:
  - Drupal
tag:
  - views
---

# Hướng Dẫn Sử Dụng Views trong Drupal: Tối Ưu Hiển Thị Dữ Liệu

Trong Drupal, Views là một trong những công cụ mạnh mẽ và linh hoạt nhất giúp người dùng tạo ra các danh sách dữ liệu động mà không cần phải viết mã thủ công. Với Views, bạn có thể dễ dàng hiển thị nội dung từ cơ sở dữ liệu của Drupal, thực hiện các thao tác lọc, sắp xếp, và phân nhóm dữ liệu một cách linh hoạt. Trong bài viết này, chúng ta sẽ cùng khám phá chi tiết các tính năng mạnh mẽ mà Views trong Drupal 10 hỗ trợ và cách sử dụng chúng để tối ưu hóa hiển thị dữ liệu trên website của bạn.

### 1. Cài Đặt Views trong Drupal 10

Trước tiên, Views là một module mặc định của Drupal Core, vì vậy bạn không cần phải cài đặt module này từ bên ngoài. Tuy nhiên, bạn cần phải kích hoạt module Views để có thể sử dụng các tính năng của nó.

**Cách kích hoạt module Views:**

1. Truy cập vào **Admin** -> **Extend** trong giao diện quản trị.
2. Tìm kiếm **Views** trong danh sách và chọn nó.
3. Bấm vào nút **Install** để kích hoạt module.

Sau khi kích hoạt module, bạn có thể bắt đầu tạo các Views cho trang web của mình.

### 2. Các Kiểu Hiển Thị Dữ Liệu (Display Formats)

Một trong những tính năng chính của Views là khả năng hiển thị dữ liệu theo nhiều dạng khác nhau. Tùy vào nhu cầu, bạn có thể chọn các kiểu hiển thị sau:

- **Unformatted List**: Hiển thị dữ liệu dưới dạng danh sách đơn giản, không có định dạng đặc biệt.
- **Table**: Dữ liệu được hiển thị dưới dạng bảng, giúp dễ dàng so sánh và tổ chức thông tin.
- **Grid**: Hiển thị dữ liệu trong lưới (grid), rất phù hợp với các bộ sưu tập ảnh hoặc các danh mục.
- **HTML List**: Tương tự như Unformatted List nhưng có thể sử dụng thêm các thẻ HTML tùy chỉnh như `<ul>` và `<li>`.
- **JSON**: Nếu bạn đang làm việc với các API hoặc cần xuất dữ liệu dưới dạng JSON, Views cũng hỗ trợ xuất dữ liệu theo định dạng này.

### 3. Thêm Trường (Fields)

Trong Views, bạn có thể dễ dàng thêm các trường (fields) từ các loại nội dung khác nhau để hiển thị thông tin cụ thể. Ví dụ, bạn có thể thêm các trường như:

- **Title**: Tiêu đề của bài viết.
- **Body**: Nội dung bài viết.
- **Image**: Hình ảnh đại diện của bài viết.
- **Author**: Tên tác giả của bài viết.
- **Date**: Ngày đăng bài viết.

Việc tùy chỉnh các trường này sẽ giúp bạn linh hoạt trong việc hiển thị dữ liệu và cung cấp thông tin đầy đủ cho người dùng.

### 4. Bộ Lọc Dữ Liệu (Filters)

Bộ lọc là một trong những tính năng mạnh mẽ của Views giúp bạn chỉ hiển thị những dữ liệu phù hợp với các tiêu chí đã chọn. Ví dụ về các bộ lọc bạn có thể sử dụng bao gồm:

- **Status**: Lọc bài viết theo trạng thái "Đã xuất bản" hoặc "Chưa xuất bản".
- **Author**: Lọc bài viết theo tác giả.
- **Date**: Chỉ hiển thị bài viết được đăng trong khoảng thời gian cụ thể.
- **Tags**: Lọc bài viết theo thẻ (taxonomy).
- **Content Type**: Lọc bài viết theo loại nội dung (ví dụ: bài viết, trang, v.v.).

Các bộ lọc giúp bạn dễ dàng quản lý và điều chỉnh nội dung hiển thị cho người dùng.

### 5. Bộ Lọc Có Thể Tùy Chỉnh (Exposed Filters)

Một tính năng rất thú vị của Views là khả năng cho phép người dùng tự lựa chọn bộ lọc để tùy chỉnh dữ liệu hiển thị. Điều này giúp nâng cao trải nghiệm người dùng bằng cách cho phép họ quyết định dữ liệu họ muốn xem. Ví dụ, bạn có thể tạo một bộ lọc cho phép người dùng chọn bài viết theo tác giả, ngày tháng, hoặc danh mục thẻ.

**Cách tạo bộ lọc exposed:**

1. Trong khi tạo hoặc chỉnh sửa View, chọn một bộ lọc và đánh dấu nó là "Exposed".
2. Drupal sẽ tự động tạo ra các ô nhập liệu hoặc danh sách thả xuống để người dùng có thể lựa chọn.

### 6. Sắp Xếp Dữ Liệu (Sort Criteria)

Với Views, bạn có thể sắp xếp dữ liệu theo các tiêu chí mà bạn muốn. Một số lựa chọn sắp xếp bao gồm:

- **Theo ngày đăng**: Sắp xếp các bài viết theo ngày tạo hoặc ngày cập nhật.
- **Theo tiêu đề**: Sắp xếp các bài viết theo tiêu đề.
- **Theo tác giả**: Sắp xếp bài viết theo tên tác giả.
- **Theo đánh giá**: Nếu trang của bạn có hệ thống đánh giá, bạn có thể sắp xếp bài viết theo điểm đánh giá.

Điều này giúp bạn dễ dàng kiểm soát thứ tự hiển thị của các dữ liệu trên trang web.

### 7. Tổng Hợp Dữ Liệu (Aggregation)

Nếu bạn muốn thực hiện các phép tính trên dữ liệu, chẳng hạn như đếm số lượng bài viết của mỗi tác giả hoặc tính tổng điểm của các bài viết, Views hỗ trợ tính năng tổng hợp (aggregation). Một số phép toán hỗ trợ bao gồm:

- **Count**: Đếm số lượng bản ghi.
- **Sum**: Tính tổng của một trường số.
- **Average**: Tính giá trị trung bình của một trường số.

Các tính năng này giúp bạn tạo ra các bảng tổng hợp dữ liệu mà không cần phải viết mã PHP.

### 8. Contextual Filters (Bộ Lọc Ngữ Cảnh)

Bộ lọc ngữ cảnh (Contextual Filters) cho phép bạn tạo các bộ lọc động tùy thuộc vào tham số trong URL. Điều này có nghĩa là bạn có thể sử dụng giá trị trong URL để thay đổi cách dữ liệu được hiển thị.

Ví dụ: Bạn có thể tạo một View hiển thị tất cả bài viết của một tác giả, và khi người dùng truy cập vào URL `/author/john`, chỉ những bài viết của "John" sẽ được hiển thị.

**Cách sử dụng bộ lọc ngữ cảnh:**

1. Trong cấu hình View, thêm một bộ lọc và chọn **Contextual Filter**.
2. Cấu hình bộ lọc để lấy giá trị từ URL.

### 9. Hiển Thị Dữ Liệu trong Block và Menu

Drupal Views không chỉ hỗ trợ hiển thị dữ liệu trên các trang riêng biệt mà còn có thể hiển thị trong các block hoặc menu. Điều này rất hữu ích khi bạn muốn hiển thị các danh sách nội dung, ví dụ như các bài viết mới nhất, trong các khu vực sidebar hoặc header của website.

- **Block**: Bạn có thể tạo một block và thêm View vào block này. Sau đó, block có thể được hiển thị ở bất kỳ đâu trong theme của bạn.
- **Menu**: Bạn cũng có thể thêm các View vào menu của website, giúp người dùng dễ dàng truy cập vào các trang dữ liệu động.

### 10. Tùy Chỉnh Giao Diện và Template

Drupal Views cho phép bạn tùy chỉnh giao diện hiển thị kết quả thông qua việc sử dụng templates và CSS:

- **Template**: Bạn có thể tạo các template riêng cho từng View hoặc từng phần tử trong View để thay đổi cách dữ liệu được hiển thị.
- **CSS**: Views tự động gán các lớp CSS cho mỗi phần tử trong View, giúp bạn dễ dàng tùy chỉnh giao diện của nó thông qua CSS.

### 11. Caching và Tối Ưu Hiệu Năng

Để tối ưu hóa hiệu suất, Views hỗ trợ caching giúp giảm tải cho máy chủ khi có nhiều người truy cập. Bạn có thể bật tính năng cache cho mỗi View để dữ liệu không cần phải tải lại mỗi lần người dùng truy cập.

### Kết Luận

Drupal 10 Views là một công cụ cực kỳ mạnh mẽ và linh hoạt, giúp bạn dễ dàng hiển thị và quản lý dữ liệu trên website mà không cần phải viết mã PHP phức tạp. Với các tính năng như các kiểu hiển thị, bộ lọc, sắp xếp, và tính toán tổng hợp, Views cho phép bạn tùy chỉnh việc hiển thị dữ liệu một cách dễ dàng và hiệu quả. Chắc chắn rằng nếu bạn sử dụng thành thạo Views, website của bạn sẽ trở nên mạnh mẽ và linh hoạt hơn bao giờ hết.

Hy vọng bài viết này sẽ giúp bạn hiểu rõ hơn về cách sử dụng Views trong Drupal 10 và tận dụng tối đa các tính năng mà nó cung cấp!