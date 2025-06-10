# Heart To Community - Website bán hàng hỗ trợ người khuyết tật

## Giới thiệu
Heart To Community là website thương mại điện tử được phát triển với mục đích cung cấp các sản phẩm hỗ trợ cho người khuyết tật. Hệ thống được xây dựng bằng PHP thuần theo mô hình MVC.

## Tính năng

### Người dùng
- Đăng ký/đăng nhập tài khoản
- Xem và tìm kiếm sản phẩm theo danh mục
- Thêm sản phẩm vào giỏ hàng
- Đặt hàng và thanh toán
- Quản lý thông tin cá nhân
- Xem lịch sử đơn hàng

### Quản trị viên 
- Quản lý danh mục sản phẩm
- Quản lý sản phẩm
- Quản lý đơn hàng
- Quản lý tài khoản người dùng
- Phân quyền người dùng

## Công nghệ sử dụng
- PHP 7.4+
- MySQL
- HTML/CSS/JavaScript
- Bootstrap 4
- jQuery

## Cấu trúc thư mục
```
HTCShop/
├── controllers/     # Xử lý logic
├── core/           # Core framework
├── models/         # Tương tác CSDL  
├── views/          # Giao diện
├── public/         # Assets (CSS/JS/images)
├── assets/         # Resources
└── vendor/         # Dependencies
```

## Cài đặt
1. Clone repository
2. Cài đặt PHP 7.4+ và MySQL
3. Chạy `composer install`
4. Import database 
5. Config database trong file `.env`
6. Khởi chạy web server (Apache/Nginx)

## Tác giả
Heart To Community Team

## Giấy phép
[Thêm thông tin giấy phép]

## Liên hệ
Email: [Thêm email liên hệ]

## Preview
```
http://localhost/HTCShop
```

## Yêu cầu hệ thống
- PHP 7.4 trở lên
- MySQL 5.7 trở lên 
- Composer
- Web server (Apache/Nginx)

## Tính năng nổi bật
- Giao diện thân thiện, dễ sử dụng
- Responsive trên mọi thiết bị
- Tối ưu SEO
- Bảo mật cao
- Quản lý đơn hàng chuyên nghiệp
- Tích hợp nhiều phương thức thanh toán
