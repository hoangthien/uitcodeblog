---
icon: edit
date: 2022-10-24
contributors: false
category:
  - Drupal
  - Docker
  - Lando
  - Ubuntu
tag:
  - Drupal
---

# Cài môi trường Drupal với Lando Docker Ubuntu trên Windows 10

## Install Ubuntu on WSL2 on Windows 10

### Mở Turn Windows features on or off
Check vào:
- Windows Subsystem for Linux
- Virtual Machine Platform
và click ok rồi restart máy

### Set WSL 2 as your default version
Tải https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi rồi cài đặt
Cài xong mở PowerShell chạy lệnh:

```bash
wsl --set-default-version 2
```

## Cài Ubuntu
Vào store cài ubuntu bản 20.4, mở lên rồi nhập user, pass


## Tải docker về và cài https://www.docker.com/

## Cài php 7.4 để dùng cho composer trong ubuntu:
Mở cửa sổ dòng lệnh với ubuntu vừa cài lên và chạy các lệnh sau:

```bash
sudo apt-get update
sudo apt -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt -y install php7.4
sudo apt-get install -y php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath
```

php -v nếu có xuất hiện phiên bản php là cài thành công

## Cài composer

```bash
cd ~
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Gõ lệnh composer -V nếu có xuất hiện phiên bản là cài thành công

## Cài lando https://github.com/lando/lando/releases bằng 2 lệnh sau:

```bash
wget https://github.com/lando/lando/releases/download/v3.6.4/lando-x64-v3.6.4.deb
sudo dpkg -i --ignore-depends=docker-ce lando-x64-v3.6.4.deb
```

## Khởi tạo dự án với lando và docker:
Mở ubuntu lên rồi chạy lệnh tạo thư mục chứa code. Ví dụ

```bash
mkdir drupaldemo
```

vào trong thư mục vừa tạo và tạo file .lando.yml như sau:

```yml
name: drupaldev
recipe: drupal9
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
    type: php:8.0
    xdebug: false
    config:
      conf: lando/php/php.ini
    build:
      - composer install
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
# tooling:
#   blt:
#     service: appserver
#     cmd: /app/vendor/acquia/blt/bin/blt
#   drupal:
#     service: appserver
#     cmd: /app/vendor/bin/drupal

```

rồi chạy tiếp lệnh sau để khởi tạo môi trường

```bash
lando start
```

## Bây giờ clone code về trong thư mục chứa file .lando.yml vừa tạo và install site thôi.

```bash
composer create-project drupal/recommended-project . 
```
để tải source về và truy cập link tại DRUSH_OPTIONS_URI cài đặt drupal như bình thường

```bash
lando drush si
```

