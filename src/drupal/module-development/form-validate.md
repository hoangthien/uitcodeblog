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

# Hướng dẫn chi tiết Form Validate trong Drupal 11

Drupal là một hệ quản trị nội dung mạnh mẻ và linh hoạt, trong đó Form API của Drupal cho phép bạn tạo và xử lý các biểu mẫu một cách dễ dàng. Trong Drupal 11, quá trình xây dựng và validate form vẫn giữ được sự linh hoạt như các phiên bản trước, nhưng có một số nâng cấp quan trọng.

Dưới đây là hướng dẫn chi tiết về cách tạo và thêm validate cho một form trong Drupal 11.

## 1. Tạo Custom Form

Trong Drupal, bạn có thể tạo một form tùy chỉnh bằng cách tạo một lớp mới kế thừa Interface FormInterface.

### Các bước tạo form:

1. Tạo file PHP mới trong module của bạn, ví dụ:

```
modules/custom/my_module/src/Form/MyCustomForm.php
```

2. Cấu trúc lớp form cơ bản:

```php
<?php
namespace Drupal\my_module\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class MyCustomForm extends FormBase {
  
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'my_custom_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Name'),
      '#required' => TRUE,
    ];

    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Email'),
      '#required' => TRUE,
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->messenger()->addMessage($this->t('Form submitted successfully.'));
  }
}
```

## 2. Thêm Form Validate

Form API cho phép bạn xác thực dữ liệu trước khi submit bằng cách thêm hàm validateForm.

Thêm hàm validate:

```php
/**
 * {@inheritdoc}
 */
public function validateForm(array &$form, FormStateInterface $form_state) {
  $name = $form_state->getValue('name');
  $email = $form_state->getValue('email');

  // Kiểm tra tên phải tối thiểu 3 ký tự.
  if (strlen($name) < 3) {
    $form_state->setErrorByName('name', $this->t('Name must be at least 3 characters long.'));
  }

  // Kiểm tra email đúng định dạng.
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $form_state->setErrorByName('email', $this->t('Please enter a valid email address.'));
  }
}
```

## 3. Các loại Form Validate

Trong Drupal, bạn có thể áp dụng nhiều loại validate khác nhau cho biểu mẫu, bao gồm:

### 1. Validate mặc định:

Các thuộc tính như #required, #type (email, số, url, v.v.) tự động kiểm tra tính hợp lệ của dữ liệu đầu vào.

### 2. Validate tùy chỉnh:

Dùng hàm validateForm trong lớp Form để thêm các logic kiểm tra riêng, như kiểm tra độ dài chuỗi, giá trị số, hoặc logic phức tạp khác.

### 3. Validate qua Hook:

Sử dụng hook_form_FORM_ID_alter để thêm validate cho form của module khác:

```php
function my_module_form_my_custom_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  $form['#validate'][] = 'my_module_custom_validate';
}

function my_module_custom_validate(array &$form, FormStateInterface $form_state) {
  $value = $form_state->getValue('custom_field');
  if ($value < 0) {
    $form_state->setErrorByName('custom_field', t('Value must be positive.'));
  }
}
```

### 4. Validate bằng AJAX:

Kết hợp với AJAX để kiểm tra tính hợp lệ ngay khi người dùng nhập dữ liệu:

```php
$form['username'] = [
  '#type' => 'textfield',
  '#title' => t('Username'),
  '#ajax' => [
    'callback' => '::validateUsername',
    'event' => 'change',
  ],
];

public function validateUsername(array &$form, FormStateInterface $form_state) {
  $response = new AjaxResponse();
  $username = $form_state->getValue('username');

  if (strlen($username) < 5) {
    $response->addCommand(new HtmlCommand('#username-error', t('Username must be at least 5 characters long.')));
  }

  return $response;
}
```

## 4. Hiển thị Form

Bạn có thể hiển thị form bằng cách khai báo trong routing file:

1. Tạo file routing:

```yml
my_module.form:
  path: '/my-custom-form'
  defaults:
    _form: '\Drupal\my_module\Form\MyCustomForm'
    _title: 'My Custom Form'
  requirements:
    _permission: 'access content'
```

2. Truy cập URL /my-custom-form để xem form và test validate.

## 5. Kiểm tra và gỡ lỗi

- Dùng lệnh drush cr để clear cache sau khi tạo hoặc chỉnh sửa file.
- Đảm bảo khai báo đúng namespace và đường dẫn file.

## 6. Tổng kết

Với Form API trong Drupal 11, bạn có thể tạo và validate biểu mẫu một cách mạnh mẻ và linh hoạt. Hy vọng bài hướng dẫn này giúp bạn nắm rõ quá trình tạo form tùy chỉnh trong Drupal 11.