---
icon: edit
date: 2022-12-15
contributors: false
category:
  - Drupal
  - Drupal 10
  - Docker
  - Lando
  - Ubuntu
tag:
  - Drupal
---

# Cài đặt Drupal 10 mới ra mắt trên Docker với Lando

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac posuere dui, nec mattis justo. Mauris bibendum erat massa, at dignissim dolor dignissim eu. Donec eu sem eu nibh feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eget nisl ac nisi viverra pretium. Duis sit amet eros ultrices, rutrum justo vitae, egestas metus.

## Tạo dự án Drupal 10 với composer

```bash
composer create-project drupal/recommended-project:10.0.0 "drupal10"
```

## Tạo file .lando.yml như sau

```yml
name: drupaldev
recipe: drupal10
config:
  composer_version: '2'
  via: apache:2.4
  webroot: web
  database: mysql:5.7
  drush: '^10'
  xdebug: true
proxy:
  appserver:
    - drupaldev.lndo.site
  phpmyadmin:
    - pma.drupaldev.lndo.site
services:
  appserver:
    type: php:8.1
    xdebug: false
    config:
      conf: lando/php/php.ini
    overrides:
      environment:
        DRUSH_OPTIONS_URI: "https://drupaldev.lndo.site"
  phpmyadmin:
    type: phpmyadmin
    hosts:
      - database
  database:
    creds:
      user: drupaldev
      password: drupaldev
      database: drupaldev
```

## Khởi tạo

```bash
lando start
```

## Cài đặt drush

```bash
lando composer require drush/drush
```

## Cài đặt site

```bash
lando drush si

 Database name [drupal]:
 > drupaldev

 Database driver [mysql]:
 >

 Database username [drupal]:
 > drupaldev

 Database password [drupal]:
 > drupaldev

 Database host [127.0.0.1]:
 > database

 Database port [3306]:
 >


 You are about to:
 * Create a sites/default/settings.php file
 * DROP all tables in your 'drupaldev' database.

 Do you want to continue? (yes/no) [yes]:
 >

 [notice] Starting Drupal installation. This takes a while.
 [notice] Performed install task: install_select_language
 [notice] Performed install task: install_select_profile
 [notice] Performed install task: install_load_profile
 [notice] Performed install task: install_verify_requirements
 [notice] Performed install task: install_settings_form
 [notice] Performed install task: install_verify_database_ready
 [notice] Performed install task: install_base_system
 [notice] Performed install task: install_bootstrap_full
 [notice] Performed install task: install_profile_modules
 [notice] Performed install task: install_profile_themes
 [notice] Performed install task: install_install_profile
 [notice] Performed install task: install_configure_form
 [notice] Performed install task: install_finished
 [success] Installation complete.  User name: admin  User password: dfEJdY86QC
```

Site <https://drupaldev.lndo.site> được cài đặt thành công. Theme mặc định sẽ là Olivero và theme admin sẽ là Claro.

## Đặt lại mật khẩu với drush upwd

```bash
lando drush upwd admin admin
```

Truy cập <https://drupaldev.lndo.site> với user name và password lần lượt là admin admin.

## Giải pháp cài module contrib chưa có phiên bản tương thích Drupal 10

Để cài module chúng ta cần chỉnh sửa file composer.json như sau:

```json
{
    ...
    "require": {
        ...
        "drupal/core": "10.0.0 as 9.5"
    },
    ...
}
```

Tiếp đến dùng composer cài như bình thường mà không còn bị báo lỗi không có phiên bản tương thích

```bash
lando composer require drupal/module_filter
```

Phiên bản mới nhất của module_filter v3.2.0 sẽ được cài đặt, tuy nhiên chúng ta vẫn không thể bật module này vì trong mã của nó có chứa những phần chưa tương thích, chúng ta tiếp tục bước tiếp theo

## Giải pháp xử lý vấn đề tương thích Drupal 10 của module contrib

Vì Drupal 10 mới ra mắt nên các module contrib sẽ chưa tương thích đầy đủ, vì vậy chúng ta có thể dùng patch để sửa tạm thời chờ các bản cập nhật tương thích drupal 10 của cộng đồng drupal dev.

Để áp dụng các bản vá chúng ta cần tìm bản vá phù hợp trên drupal.org và thêm vào file composer.json như sau (ví dụ sau là trường hợp sửa cho module module_filter):

```json
{
    ...
    "extra": {
        "patches": {
            "drupal/module_filter": {
                "3297692: Automated Drupal 10 compatibility fixes": "https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch"
            }
        },
        ...
    }
}
```

Tiếp đến chạy lệnh

```bash
lando composer require cweagans/composer-patches
lando composer update drupal/module_filter
```

Lúc này bản vá <https://www.drupal.org/files/issues/2022-11-03/3297692-8.patch> sẽ được áp dụng cho module module_filter version 3.2.0, lúc này module đã tương thích với Drupal 10, chúng ta có thể bật module này trong admin hoặc dùng drush en để bật nó.

Sau này khi module module_filter đã có phiên bản mới tương thích Drupal 10 thì ta chỉ việc gỡ patch trong file composer.json và chạy lại composer update để lấy phiên bản module mới là được.
