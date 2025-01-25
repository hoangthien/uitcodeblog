---
date: 2024-09-01
contributors: false
category:
  - Drupal
  - Drupal Module Development
tag:
  - Drupal
  - Code
file_folder: 20220928
---

# Form API và cách sử dụng
Drupal có hệ thống Form API mạnh mẽ và linh hoạt. **Form API (FAPI)** trong Drupal cho phép bạn tạo, quản lý và xử lý các biểu mẫu một cách dễ dàng. Dưới đây là hướng dẫn cơ bản về cách sử dụng Form API.

---

### **Cách hoạt động của Form API**
1. **Định nghĩa biểu mẫu**: Bạn định nghĩa biểu mẫu bằng cách mô tả các phần tử (elements) trong mảng `$form`.
2. **Xử lý dữ liệu biểu mẫu**: Sử dụng callback để xử lý khi người dùng gửi biểu mẫu.
3. **Hiển thị biểu mẫu**: Sử dụng hàm hoặc plugin để hiển thị biểu mẫu trên giao diện.

---

### **Cách sử dụng**
#### 1. **Định nghĩa biểu mẫu**
Bạn tạo một lớp kế thừa từ `\Drupal\Core\Form\FormBase` hoặc `\Drupal\Core\Form\ConfigFormBase` (dành cho form cấu hình).

```php
namespace Drupal\example\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ExampleForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'example_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Your Name'),
      '#required' => TRUE,
    ];

    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Your Email'),
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    \Drupal::messenger()->addMessage($this->t('Submitted name: @name', ['@name' => $form_state->getValue('name')]));
  }
}
```

---

#### 2. **Tích hợp với hệ thống menu**
Để hiển thị form trên giao diện, bạn cần khai báo đường dẫn trong file `.routing.yml`.

```yaml
example.form:
  path: '/example-form'
  defaults:
    _form: '\Drupal\example\Form\ExampleForm'
    _title: 'Example Form'
  requirements:
    _permission: 'access content'
```

---

#### 3. **Thêm phần tử phức tạp**
Form API hỗ trợ nhiều loại phần tử khác nhau:

- `#type: textfield` (Text đơn giản)
- `#type: textarea` (Text nhiều dòng)
- `#type: select` (Danh sách thả xuống)
- `#type: checkbox` (Hộp kiểm)
- `#type: radios` (Các nút radio)
- `#type: managed_file` (Tải lên tệp)

Ví dụ thêm checkbox:

```php
$form['subscribe'] = [
  '#type' => 'checkbox',
  '#title' => $this->t('Subscribe to newsletter'),
];
```

---

#### 4. **Xử lý dữ liệu gửi**
Xử lý dữ liệu trong phương thức `submitForm()`:

```php
public function submitForm(array &$form, FormStateInterface $form_state) {
  $name = $form_state->getValue('name');
  $email = $form_state->getValue('email');

  \Drupal::messenger()->addMessage($this->t('Thank you @name for your submission!', ['@name' => $name]));
}
```

---

#### 5. **Thêm xác thực dữ liệu**
Sử dụng hàm `validateForm()`:

```php
public function validateForm(array &$form, FormStateInterface $form_state) {
  if (strlen($form_state->getValue('name')) < 5) {
    $form_state->setErrorByName('name', $this->t('The name must be at least 5 characters long.'));
  }
}
```

---

### **Lợi ích của Form API**
- Tái sử dụng mã nguồn dễ dàng.
- Bảo mật tự động với CSRF tokens.
- Hỗ trợ AJAX tích hợp.
- Quản lý form dễ dàng hơn với các lớp.

Nếu bạn muốn triển khai tính năng nâng cao (như AJAX, xác thực phức tạp), tôi có thể cung cấp thêm ví dụ cụ thể ở những bài viếp tiếp theo.
