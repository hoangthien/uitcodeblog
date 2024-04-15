---
icon: edit
date: 2022-09-26
contributors: false
category:
  - Drupal
  - Drupal 8
  - Drupal 9
  - Drupal module
  - Module Development
tag:
  - Drupal
  - Code
---

# Xóa nhiều user trong Drupal

Đầu tiên chúng ta cần nid của các node cần xóa.
## Để lấy nid của các node cần xóa chúng ta co thể dùng entityQuery như sau:

```php
$content_type = 'content_type_name';
$nids = \Drupal::entityQuery('node')
  ->condition('type', $content_type)
  ->execute();
```

## Để xóa nhiều node ta có thể dùng 1 trong 2 cách sau:

### Cách 1: Lặp hết các node và xóa tuần tự
Cách này xóa chậm hơn cách 2 nhưng phù hợp với các tác vụ đi kèm khi xóa node, ví dụ gửi mail và cần lấy các giá trị trong các field của node để bỏ vào nội dung mail chẳng hạn.

```php
use  \Drupal\node\Entity\Node;

$nodes = Node::loadMultiple($nids);
foreach($nodes as $node) {
  $node->delete();
}
```

### Cách 2: Sử dụng storage handler để xóa
Cách này xóa nhanh hơn cách 1, phù hợp với việc chỉ xóa node mà không làm gì thêm.

```php
$storage_handler = \Drupal::entityTypeManager()->getStorage('node');
$entities = $storage_handler->loadMultiple($ids);
$storage_handler->delete($entities);
```