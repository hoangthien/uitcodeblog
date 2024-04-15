---
icon: edit
date: 2022-09-25
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

# Delete multiple nodes in Drupal


```php
$content_type = 'content_type_name';
$nids = \Drupal::entityQuery('node')
  ->condition('type', $content_type)
  ->execute();
```

```php
use  \Drupal\node\Entity\Node;

$nodes = Node::loadMultiple($nids);
foreach($nodes as $node) {
  $node->delete();
}
```

```php
$storage_handler = \Drupal::entityTypeManager()->getStorage('node');
$entities = $storage_handler->loadMultiple($ids);
$storage_handler->delete($entities);
```
