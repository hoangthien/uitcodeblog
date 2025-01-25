---
date: 2025-01-25
contributors: false
category:
  - Drupal
  - Drupal Module Development
tag:
  - Drupal
  - Code
file_folder: 20220928
---

# Tạo một **custom module** trong Drupal 10:

---

### 1. **Tạo thư mục module**
- Truy cập thư mục `modules/custom` trong project của bạn.
- Tạo một thư mục mới, ví dụ: `my_custom_module`.

```bash
cd web/modules/custom
mkdir my_custom_module
```

---

### 2. **Tạo file `.info.yml`**
Tạo file `my_custom_module.info.yml` trong thư mục `my_custom_module`. File này cung cấp metadata cho module.

**Nội dung file:**
```yaml
name: 'My Custom Module'
type: module
description: 'This is a custom module for demonstration.'
core_version_requirement: ^10
package: Custom
dependencies:
  - drupal:field
  - drupal:user
```

---

### 3. **Tạo file `.module` (nếu cần)**
Tạo file `my_custom_module.module`. File này chứa các hook hoặc logic PHP cần thiết cho module.

**Ví dụ nội dung:**
```php
<?php

/**
 * @file
 * Contains hook implementations for My Custom Module.
 */

/**
 * Implements hook_help().
 */
function my_custom_module_help($route_name, \Drupal\Core\Routing\RouteMatchInterface $route_match) {
  switch ($route_name) {
    case 'help.page.my_custom_module':
      return '<p>' . t('This is the help section for My Custom Module.') . '</p>';
  }
}
```

---

### 4. **Tạo file routing.yml (nếu cần route)**
Nếu module của bạn cần route để hiển thị một trang, hãy tạo file `my_custom_module.routing.yml`.

**Ví dụ nội dung:**
```yaml
my_custom_module.content:
  path: '/custom-page'
  defaults:
    _controller: '\Drupal\my_custom_module\Controller\MyCustomController::content'
    _title: 'Custom Page'
  requirements:
    _permission: 'access content'
```

---

### 5. **Tạo Controller (nếu có route)**
Nếu bạn sử dụng route, tạo một Controller tại `src/Controller/MyCustomController.php`.

**Ví dụ nội dung:**
```php
<?php

namespace Drupal\my_custom_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for My Custom Module routes.
 */
class MyCustomController extends ControllerBase {
  /**
   * Returns a simple page.
   */
  public function content() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Hello, this is a custom page from My Custom Module!'),
    ];
  }
}
```

---

### 6. **Tạo file services.yml (nếu cần sử dụng service)**
Nếu bạn cần định nghĩa service, tạo file `my_custom_module.services.yml`.

**Ví dụ nội dung:**
```yaml
services:
  my_custom_module.example_service:
    class: Drupal\my_custom_module\ExampleService
    arguments: ['@logger.factory']
```

---

### 7. **Kích hoạt module**
- Đảm bảo rằng bạn đã clear cache:
  ```bash
  drush cr
  ```
- Kích hoạt module:
  ```bash
  drush en my_custom_module
  ```

---

### 8. **Kiểm tra module**
- Truy cập vào trang **Extend** (Quản lý module) trong Drupal Admin (`/admin/modules`) và kích hoạt module nếu chưa được kích hoạt.
- Nếu bạn tạo route, thử truy cập đường dẫn đã định nghĩa, ví dụ: `/custom-page`.

---

### 9. **Debug & Logging**
- Sử dụng `Drupal::logger('my_custom_module')->info('Message');` để log thông tin trong quá trình phát triển.
- Xem log trong **Reports > Recent log messages** hoặc sử dụng lệnh Drush:  
  ```bash
  drush watchdog:show
  ```

---

1. [Link text](/blog/xoa-nhieu-node.md)
1. [Home](../../README.md)

![Demo Image a](/assets/drupal/cover3.jpg)
