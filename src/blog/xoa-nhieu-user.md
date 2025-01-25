---
icon: edit
date: 2025-01-25
contributors: false
category:
  - Drupal
  - Drupal module
  - Module Development
tag:
  - Drupal
  - Code
---

# Xóa nhiều user trong Drupal

Khi cần xóa hàng triệu user trong Drupal 10, bạn có thể sử dụng nhiều phương pháp khác nhau, tùy thuộc vào khối lượng dữ liệu và yêu cầu về tính toàn vẹn dữ liệu. Dưới đây là các phương pháp phổ biến, ưu nhược điểm và trường hợp ứng dụng.

---

## 1. Xóa Từng User Theo Vòng Lặp (Loop)

### Code mẫu:

```php
use Drupal\user\Entity\User;

function delete_users_in_loop($uids) {
    foreach ($uids as $uid) {
        $user = User::load($uid);
        if ($user) {
            $user->delete();
        }
    }
}
```

### Ưu điểm:

- Dễ triển khai và hiểu.
- Phù hợp cho dữ liệu nhỏ hoặc trung bình.
- Đảm bảo tính toàn vẹn dữ liệu.

### Nhược điểm:

- Không tối ưu cho dữ liệu lớn (hàng triệu user).
- Dễ gặp lỗi timeout hoặc hết tài nguyên server.

### Ứng dụng:

- Xử lý thử nghiệm hoặc dữ liệu nhỏ.

---

## 2. Xóa Theo Nhóm (Batch API)

### Code mẫu:

```php
use Drupal\user\Entity\User;

function delete_users_batch($uids) {
    $operations = [];
    foreach (array_chunk($uids, 100) as $chunk) {
        $operations[] = [
            'delete_user_batch_callback',
            [$chunk],
        ];
    }
    $batch = [
        'title' => t('Deleting users...'),
        'operations' => $operations,
        'finished' => 'delete_user_batch_finished',
    ];
    batch_set($batch);
}

function delete_user_batch_callback($uids, &$context) {
    foreach ($uids as $uid) {
        $user = User::load($uid);
        if ($user) {
            $user->delete();
        }
    }
}

function delete_user_batch_finished($success, $results, $operations) {
    if ($success) {
        drupal_set_message(t('All users have been deleted.'));
    }
}
```

### Ưu điểm:

- Tránh lỗi timeout bằng cách xử lý từng nhóm nhỏ.
- Giao diện hiển thị tiến trình thân thiện.

### Nhược điểm:

- Cần cấu hình thêm Batch API.
- Tốc độ không cao với dữ liệu rất lớn.

### Ứng dụng:

- Dữ liệu lớn mà vẫn cần giao diện quản trị viên dễ sử dụng.

---

## 3. Sử Dụng Drush Command Qua Controller

### Code mẫu:

```php
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserDeleteController extends ControllerBase {
    public function deleteUsers() {
        \Drupal::service('drush.service')->runCommand('user:cancel --all');
        return new JsonResponse(['status' => 'ok', 'message' => 'All users are being deleted']);
    }
}
```

### Ưu điểm:

- Hiệu suất cao với số lượng user lớn.
- Dễ triển khai nếu có quyền truy cập CLI.

### Nhược điểm:

- Phụ thuộc vào Drush và CLI.
- Không có giao diện trực quan.

### Ứng dụng:

- Xóa nhanh số lượng lớn user khi có quyền truy cập server.

---

## 4. Xóa Trực Tiếp Qua Query Database

### Code mẫu:

```php
function delete_users_via_query($uids) {
    $connection = \Drupal::database();
    $connection->delete('users_field_data')
        ->condition('uid', $uids, 'IN')
        ->execute();
}
```

### Ưu điểm:

- Tốc độ nhanh nhất.
- Phù hợp khi không cần kích hoạt các hook liên quan.

### Nhược điểm:

- Dễ gây lỗi toàn vẹn dữ liệu.
- Có thể bỏ sót các dữ liệu liên quan.

### Ứng dụng:

- Khi cần xử lý nhanh và không quan tâm đến dữ liệu liên quan.

---

## 5. Sử Dụng Storage Handler

### Code mẫu:

```php
use Drupal\user\Entity\User;

function delete_users_with_storage_handler($uids) {
    $user_storage = \Drupal::entityTypeManager()->getStorage('user');
    $users = $user_storage->loadMultiple($uids);
    if (!empty($users)) {
        $user_storage->delete($users);
    }
}
```

### Ưu điểm:

- Sử dụng API chính thức của Drupal, đảm bảo tính toàn vẹn dữ liệu.
- Linh hoạt, dễ tích hợp thêm logic khác.

### Nhược điểm:

- Không tối ưu cho dữ liệu cực lớn.
- Tiêu tốn nhiều bộ nhớ và thời gian xử lý.

### Ứng dụng:

- Dữ liệu vừa và nhỏ, hoặc khi cần đảm bảo toàn vẹn dữ liệu.

---

## 6. Kết Hợp Storage Handler Và Batch API

### Code mẫu:

```php
use Drupal\user\Entity\User;

function batch_delete_users($uids) {
    $operations = [];
    foreach (array_chunk($uids, 100) as $chunk) {
        $operations[] = [
            'batch_delete_users_operation',
            [$chunk],
        ];
    }

    $batch = [
        'title' => t('Deleting users...'),
        'operations' => $operations,
        'finished' => 'batch_delete_users_finished',
    ];
    batch_set($batch);
}

function batch_delete_users_operation($uids, &$context) {
    $user_storage = \Drupal::entityTypeManager()->getStorage('user');
    $users = $user_storage->loadMultiple($uids);
    $user_storage->delete($users);
}

function batch_delete_users_finished($success, $results, $operations) {
    if ($success) {
        drupal_set_message(t('All users have been deleted.'));
    }
}
```

### Ưu điểm:

- Hiệu quả cao, tránh lỗi timeout.
- Tích hợp tốt với hệ thống, đảm bảo toàn vẹn dữ liệu.

### Nhược điểm:

- Phức tạp hơn các phương pháp khác.

### Ứng dụng:

- Xử lý số lượng lớn user với yêu cầu tính toàn vẹn dữ liệu và hiệu suất.

---

## So Sánh Các Phương Pháp

| Phương pháp | Tính toàn vẹn dữ liệu | Hiệu suất (dữ liệu lớn) | Độ phức tạp triển khai | Ứng dụng |
| ----------- | --------------------- | ----------------------- | ---------------------- | -------- |
|             |                       |                         |                        |          |

| **Loop**                        | ✅ | Thấp       | Thấp       | Dữ liệu nhỏ                   |
| ------------------------------- | - | ---------- | ---------- | ----------------------------- |
| **Batch API**                   | ✅ | Trung bình | Trung bình | Dữ liệu lớn                   |
| **Drush Command**               | ✅ | Cao        | Thấp       | Dữ liệu rất lớn               |
| **Query trực tiếp**             | ❌ | Rất cao    | Thấp       | Xóa nhanh, không cần toàn vẹn |
| **Storage Handler**             | ✅ | Trung bình | Thấp       | Dữ liệu vừa và nhỏ            |
| **Storage Handler + Batch API** | ✅ | Cao        | Trung bình | Dữ liệu rất lớn               |

---

## Kết Luận

- Đối với **dữ liệu nhỏ**: Sử dụng phương pháp **Loop** hoặc **Storage Handler**.
- Đối với **dữ liệu lớn**: Kết hợp **Batch API** với **Storage Handler** hoặc sử dụng **Drush Command**.
- Nếu cần tốc độ cao và không cần toàn vẹn dữ liệu: Chọn **Query trực tiếp**.

Bạn nên cân nhắc kỹ yêu cầu dự án và hạ tầng để chọn phương pháp phù hợp nhất.

