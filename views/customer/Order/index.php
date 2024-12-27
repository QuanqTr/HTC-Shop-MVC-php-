<?php
use app\core\Application;
?>
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>HTC Shop</title>
    <meta name="description" content="">
    <meta name="keywords" content="">

    <!-- Favicons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="../assets/img/logo_png.png" rel="icon">
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+Viet+Nam&display=swap"
        rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="../assets/vendor/animate.css/animate.min.css" rel="stylesheet">
    <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="../assets/css/main.css" rel="stylesheet">
    <style>
    body {
        font-family: 'Mukta', sans-serif;
        height: 100vh;
        min-height: 550px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    a {
        text-decoration: none;
        color: #444444;
    }

    .login-reg-panel {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 140%;
        right: 0;
        left: 0;
        margin: auto;
        height: 550px;
        border-radius: 10px;
        background-color: rgba(236, 103, 20, 1);
    }

    .white-panel {
        background-color: rgba(255, 255, 255, 1);
        height: 650px;
        position: absolute;
        top: -50px;
        width: 50%;
        border-radius: 10px;
        right: calc(50% - 50px);
        transition: .3s ease-in-out;
        z-index: 0;
        box-shadow: 0 0 15px 9px #00000096;
    }

    .login-reg-panel input[type="radio"] {
        position: relative;
        display: none;
    }

    .login-reg-panel {
        color: rgb(255, 255, 255);
    }

    .login-reg-panel #label-login,
    .login-reg-panel #label-register {
        border: 1px solid rgb(255, 253, 253);
        padding: 5px 5px;
        width: 150px;
        margin-left: 30px;
        display: block;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;
        /* Thêm hiệu ứng chuyển đổi */
    }

    /* Thêm hiệu ứng hover */
    .login-reg-panel #label-login:hover,
    .login-reg-panel #label-register:hover {
        background-color: #f1f1f1;
        /* Màu nền khi hover */
        border-color: #ff9800;
        /* Đổi màu viền khi hover */
        color: #ff9800;
        /* Đổi màu chữ khi hover */
    }


    .login-info-box {
        width: 30%;
        padding: 0 50px;
        top: 20%;
        left: 0;
        position: absolute;
        text-align: left;
    }

    .register-info-box {
        width: 30%;
        padding: 0 50px;
        top: 20%;
        right: 0;
        position: absolute;
        text-align: left;

    }

    .right-log {
        right: 50px !important;
    }

    .login-show {
        z-index: 1;
        display: none;
        opacity: 0;
        transition: 0.3s ease-in-out;
        color: #242424;
        text-align: left;
        padding: 50px;
    }

    .register-show {
        z-index: 1;
        display: none;
        opacity: 0;
        transition: 0.3s ease-in-out;
        color: #242424;
        text-align: left;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;


    }

    .show-log-panel {
        display: block;
        opacity: 0.9;
    }

    .login-show input[type="text"],
    .login-show input[type="password"] {
        width: 100%;
        display: block;
        margin: 5px 0;
        padding: 15px;
        border: 1px solid #b5b5b5;
        outline: none;
    }

    .login-show input[type="button"] {
        max-width: 150px;
        width: 100%;
        background: #444444;
        border: none;
        margin: 10px 0;
        padding: 20px;
        text-transform: uppercase;
        border-radius: 2px;
        float: right;
        cursor: pointer;
    }

    .login-show a {
        display: inline-block;
        padding: 10px 0;
    }

    .register-show input[type="text"],
    .register-show input[type="password"] {
        width: 100%;
        display: block;
        margin: 5px 0;
        padding-left: 20px;
        border: 1px solid #b5b5b5;
        outline: none;
    }

    .register-show input[type="button"] {
        max-width: 150px;
        width: 100%;
        background: #444444;
        color: #f9f9f9;
        border: none;
        padding: 10px;
        text-transform: uppercase;
        border-radius: 2px;
        float: right;
        cursor: pointer;
    }

    .credit {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: #3B3B25;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        z-index: 99;
    }

    a {
        text-decoration: none;
        color: #2c7715;
    }

    /* Overlay che mờ nền */
    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        /* Tăng độ mờ của nền */
        z-index: 999;
    }

    /* Popup nội dung */
    .pop-up-display-content {
        display: none;
        position: fixed;
        z-index: 1000;
        top: 50%;
        left: 41%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        border-radius: 10px;
        padding: 30px;
        /* Làm bóng đổ nổi bật hơn */
        width: 90%;
        max-width: 800px;
        /* Giới hạn chiều rộng */
        display: flex;
        flex-direction: row;
        /* Tăng khoảng cách giữa các phần */
    }

    /* Phần Đăng nhập và Đăng ký */
    .pop-up-section {
        width: 100%;
        /* Chiếm hết chiều rộng của phần tử chứa */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-align: center;
    }

    /* Tiêu đề */
    .pop-up-section h2 {
        text-align: center;
        color: #333;
        margin-bottom: 10px;
        /* Tăng khoảng cách dưới tiêu đề */
        font-size: 24px;
        /* Tăng kích thước font tiêu đề */
        font-weight: 600;
    }

    /* Form trong popup */
    .pop-up-section form {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* Giới hạn chiều rộng form */
    }

    .pop-up-section input {
        /* Tăng kích thước padding */
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        /* Tăng kích thước chữ */
        width: 100%;

    }

    .pop-up-section input[type="submit"] {
        background: linear-gradient(135deg, #ff6a00, #e65a00);
        /* Gradient cam */
        color: white;
        cursor: pointer;
        border: none;
        padding: 12px 20px;
        max-width: 200px;
        text-align: center;
        /* Điều chỉnh text bên trong nút */
        border-radius: 8px;
        font-size: 16px;
        transition: background 0.3s ease-in-out;
        margin-top: 10px;
        /* Tăng khoảng cách phía trên nút */
        display: inline-block;
        /* Đảm bảo nút không chiếm 100% chiều ngang */
        margin-left: auto;
        margin-right: auto;
        /* Căn giữa nút */
    }

    .pop-up-section input[type="submit"]:hover {
        background: linear-gradient(135deg, #e65a00, #ff6a00);
        /* Đảo chiều gradient khi hover */
    }

    /* Nút tắt popup */
    .close-popup {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        /* Tăng kích thước nút tắt */
        cursor: pointer;
        color: rgb(255, 255, 255);
        transition: color 0.3s ease;
    }

    .close-popup:hover {
        color: rgb(117, 49, 0);
    }

    .header {
        background-color: #525258;
    }

    /* Dark background */
    .dark-background {
        position: relative;
        background: url('assets/img/BG.png') no-repeat center center;
        background-size: cover;
        z-index: -1;
        height: 100%;
        /* Đảm bảo chiều cao đầy đủ */
    }

    /* Nút Đăng ký tài khoản */
    .toggle-register,
    .toggle-login {
        background: linear-gradient(135deg, #ff6a00, #e65a00);
        /* Gradient cam */
        color: white;
        cursor: pointer;
        border: none;
        padding: 12px 20px;
        /* Điều chỉnh padding cho nút */
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        /* Tăng kích thước chữ */
        margin-top: 20px;
        /* Tăng khoảng cách giữa các nút */
        transition: background 0.3s ease-in-out;
    }

    .toggle-register:hover,
    .toggle-login:hover {
        background: linear-gradient(135deg, #e65a00, #ff6a00);
        /* Đảo chiều gradient khi hover */
    }

    #hero {
        position: relative;
        z-index: 1;
        /* Đảm bảo nội dung của hero section hiển thị phía trên hình nền */
    }

    .header-top {
        background-color: transparent;
        transition: background-color 0.3s ease;
    }

    /* Lớp khi cuộn xuống 200px */
    .header-scroll-top {
        background-color: rgba(48, 54, 64, 0.9);
        /* Màu nền xám */
        transition: background-color 0.3s ease;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background-color: rgb(255, 255, 255);
        /* Màu nền của toàn trang */
        padding: 20px;
    }

    /* Container chứa các menu */
    .container-lg {
        width: 100%;
        margin: 50px;
        margin-top: 100px;
        /* Giới hạn chiều rộng */
        background-color: #ffffff;
        /* Màu nền của container */
        border-radius: 8px;
        /* Bo góc */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        /* Tạo hiệu ứng bóng */
        padding: 20px;
        box-sizing: border-box;
    }

    /* Danh sách menu */
    .menu-list {
        list-style: none;
        /* Bỏ các dấu chấm */
        padding: 0;
        margin: 0;
    }

    .menu-list li {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #ddd;
        /* Viền dưới mỗi mục menu */
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .menu-list li:hover {
        background-color: #f1f1f1;
        /* Màu nền khi hover */
    }

    .menu-list i {
        margin-right: 10px;
        /* Khoảng cách giữa biểu tượng và văn bản */
        font-size: 24px;
        /* Kích thước biểu tượng */
        color: #4caf50;
        /* Màu icon */
    }

    .menu-list span {
        font-size: 16px;
        /* Kích thước chữ */
        color: #333;
        /* Màu chữ */
        font-weight: 500;
        /* Chữ đậm */
    }

    /* Tùy chỉnh icon nếu dùng thư viện Material Design Icons */
    .mdi {
        font-size: 20px;
        color: #4caf50;
        /* Màu sắc cho các icon */
    }
    </style>
</head>

<body class="index-page" data-control="Index">
    <header id="header-top" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" class="logo d-flex align-items-center">
                <!-- <img src="assets/img/logo.png" alt=""> -->
                <h1 class="sitename">Heart To Community</h1>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                    <li><a href="#sanpham">Mặc hàng</a></li>
                    <li class="dropdown">
                        <a href="#"><span>Loại</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="/find-categories?id=4">Nhận thức</a></li>
                            <li><a href="/find-categories?id=5">Môi trường</a></li>
                            <li><a href="/find-categories?id=6">Thị giác</a></li>
                            <li><a href="/find-categories?id=8">Thính giác</a></li>
                            <li><a href="/find-categories?id=9">Giải trí</a></li>
                            <li><a href="/find-categories?id=10">Chăm sóc sức khỏe</a></li>
                            <li><a href="/find-categories?id=11">Vận động</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Liên hệ</a></li>
                    <li><a href="/card">Giỏ hàng</a></li>
                    <?php if (!Application::$app->session->get('user_')) { ?>
                    <ul>
                        <li>
                            <a id="open-pop-up-1" href="#">Đăng nhập/đăng ký</a>
                        </li>
                    </ul>
                    <div class="overlay" id="popup-overlay"></div>

                    <div id="pop-up-1" class="pop-up-display-content " style="display:none;">

                        <div class="pop-up-section">

                            <div class="login-reg-panel">
                                <span class="close-popup">&times;</span> <!-- Nút tắt popup -->
                                <div class="login-info-box">

                                    <h2 style="color: white;">Bạn đã có tài khoản</h2>
                                    <label id="label-register" for="log-reg-show">Login</label>
                                    <input type="radio" name="active-log-panel" id="log-reg-show" checked="checked">
                                </div>

                                <div class="register-info-box">
                                    <h2 style="color: white;">Bạn chưa có tài khoản?</h2>
                                    <label id="label-login" for="log-login-show">Register</label>
                                    <input type="radio" name="active-log-panel" id="log-login-show">
                                </div>

                                <div class="white-panel">
                                    <!-- Phần đăng nhập -->
                                    <div class="login-show">
                                        <h2>LOGIN</h2>
                                        <form action="/login" method="POST">
                                            <label for="login_id">Tên tài khoản</label>
                                            <input type="text" id="login_id" name="login_id"
                                                placeholder="Nhập tài khoản" required>
                                            <label for="password">Mật khẩu</label>
                                            <input type="password" id="password" name="password"
                                                placeholder="Nhập mật khẩu" required>
                                            <input type="submit" value="Đăng nhập">
                                        </form>
                                        <a href="">Forgot password?</a>
                                    </div>

                                    <!-- Phần đăng ký -->
                                    <div class="register-show">
                                        <h2>REGISTER</h2>
                                        <form action="/register" method="POST">
                                            <label for="firstname">Họ và Tên</label>
                                            <input type="text" id="firstname" name="firstname"
                                                placeholder="Nhập họ và tên" required>
                                            <label for="phone">Số điện thoại</label>
                                            <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại"
                                                required>
                                            <label for="email">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Nhập email"
                                                required>
                                            <label for="reg_login_id">Tên đăng nhập</label>
                                            <input type="text" id="reg_login_id" name="login_id"
                                                placeholder="Nhập tên đăng nhập" required>
                                            <label for="reg_password">Mật khẩu</label>
                                            <input type="password" id="reg_password" name="password"
                                                placeholder="Nhập mật khẩu" required>
                                            <label for="confirm_password">Xác nhận mật khẩu</label>
                                            <input type="password" id="confirm_password" name="confirm_password"
                                                placeholder="Xác nhận mật khẩu" required>
                                            <input type="submit" value="Đăng ký">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php } else { ?>
                        <ul>
                            <li class="dropdown" style=" margin-left: 5px">
                                <div class="user-info" style="color:white">
                                    <i class="bi bi-person-circle" style="margin-right: 5px;"></i>
                                    <span
                                        class="user-name"><?= Application::$app->session->get('user_')->login_id ?></span>
                                    <i class="bi bi-chevron-down toggle-dropdown" style="margin-left: 5px;"></i>
                                    <!-- Icon chỉ mở dropdown -->
                                </div>
                                <!-- Dropdown menu -->
                                <ul class="dropdown-menu">
                                    <?php if (Application::$app->session->get('user_')->role == 0) { ?>
                                    <li><a href="/user">Thông tin tài khoản</a></li>
                                    <?php } ?>
                                    <li><a href="/logout?rd=3">Đăng xuất</a></li>
                                </ul>
                            </li>
                        </ul>
                        <?php } ?>
                    </div>

                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

        </div>
    </header>

    <main class="main">
        <div class="container mt-4">
            <div class="row">
                <div class="col-4 mx-auto">
                    <div class="card-body">

                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <label style="font-size:14px;font-weight: 500; color: #009688">Số bản ghi tìm thấy:
                        <?= count($data) ?></label>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-table">
                        <div class="card-header">Chi tiết đơn hàng
                            <!-- <div class="tools dropdown"> -->
                            </span>
                            <!-- <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"><span class="icon mdi mdi-more-vert"></span></a> -->
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" href="/admin/orderdetails/create">Thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-borderless">
                            <thead>
                                <tr>
                                    <th style="width:10%;">Số thứ tự</th>
                                    <th style="width:20%;">Tên sản phẩm</th>
                                    <th style="width:20%;">Ảnh sản phẩm</th>
                                    <th style="width:10%;">Giá</th>
                                    <th style="width:10%;">Địa chỉ</th>
                                    <th style="width:15%;">Ngày đặt hàng</th>
                                    <th style="width:10%;">Phương thức thanh toán</th>
                                    <th colspan="2" class="actions">Trạng thái đơn hàng</th>
                                </tr>
                            </thead>
                            <tbody class="no-border-x">
                                <?php $i = 1 ?>
                                <?php foreach ($data as $item): ?>
                                <tr>
                                    <td><label> <?= $item['ido']; ?> </label></td>
                                    <td><label> <?= $item['name']; ?> </label></td>
                                    <td><img width="100px"
                                            src="/uploads/<?= (!$item['av']) ? 'slider2.jpg' : $item['av'] ?>" alt=""
                                            srcset=""></td>
                                    <td><label> <?= $item['price']; ?> </label></td>
                                    <td><label> <?= $item['diachiOrder']; ?></label></td>
                                    <?php
                                    $timeReal = date('Y-m-d');
                                    $time = date('Y-m-d', strtotime($item['time']));
                                    $muoi_ngay_truoc = date('Y-m-d', strtotime('+1 day', strtotime($time)));
                                    ?>
                                    <td><label> <?= $item['time']; ?></label></td>
                                    <td><label class="btn btn-success">
                                            <?php echo ($item['paymentType'] == 0) ? 'COD' : 'VNPay' ?>
                                        </label></td>
                                    <?php if ($item['st'] == 0 && $muoi_ngay_truoc >= $timeReal) { ?>
                                    <td style="width:60px" class="actions"><a class="btn btn-warning btn-sm"
                                            href="/user/update?id=<?= $item['ido'] ?> status=0">Chọn hủy đơn</a></td>
                                    <?php } else if ($item['st'] == 0) { ?>
                                    <td style="width:60px" class="actions"><label class="btn btn-secondary btn-sm"
                                            href="">Đang
                                            chuyển hàng</label></td>
                                    <?php } else if ($item['st'] == 1) { ?>
                                    <td style="width:60px" class="actions"><label class="btn btn-success btn-sm"
                                            href="">Đang
                                            giao
                                            hàng</label></td>
                                    <?php } else if ($item['st'] == 2) { ?>
                                    <td style="width:60px" class="actions"><label class="btn btn-warning btn-sm"
                                            href="">Đã hủy
                                            đơn</label></td>
                                    <?php } else if ($item['st'] == 3) { ?>
                                    <td style="width:60px" class="actions"><label class="btn btn-info btn-sm" href="">Đã
                                            hủy
                                            đơn</label></td>
                                    <?php } ?>
                                </tr>
                                <?php $i++?>
                                <?php endforeach ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer id=" footer" class="footer dark-background-bottom">
        <div class="container">
            <h3 class="sitename">Heart to Community</h3>
            "Vì một cuộc sống đầy đủ hơn, mọi khả năng đều có thể"</p>
            <div class="social-links d-flex justify-content-center">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-youtube"></i></a>
                <a href=""><i class="bi bi-tiktok"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
            </div>
        </div>
        <style>
        .footer h3 {
            color: white;
        }

        .dark-background-bottom {
            max-height: 250px;
            /* Áp dụng các biến CSS */
            background-color: rgba(65, 65, 71, 0.91);
            color: white;
            top: 150px;
        }
        </style>
    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Preloader -->
    <div id="preloader"></div>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

    <!-- Main JS File -->
    <script src="../assets/js/main.js"></script>
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const openPopup = document.getElementById("open-pop-up-1");
        const popup = document.getElementById("pop-up-1");
        const overlay = document.getElementById("popup-overlay");
        const closePopup = document.querySelector(".close-popup");

        // Đảm bảo popup không hiển thị khi trang tải
        popup.style.display = "none";
        overlay.style.display = "none";

        // Mở popup khi nhấn vào nút
        openPopup.addEventListener("click", function(e) {
            e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            popup.style.display = "flex"; // Hiển thị popup
            overlay.style.display = "block"; // Hiển thị overlay
        });

        // Đóng popup khi nhấn vào nút đóng
        closePopup.addEventListener("click", function() {
            popup.style.display = "none";
            overlay.style.display = "none";
        });

        // Đóng popup khi nhấn phím Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                popup.style.display = "none";
                overlay.style.display = "none";
            }
        });

        // Đóng popup khi click vào overlay
        overlay.addEventListener("click", function() {
            popup.style.display = "none";
            overlay.style.display = "none";
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        const openVideo = document.getElementById("open-video"); // Nút mở video
        const videoPopup = document.getElementById("video-popup"); // Popup video
        const overlay = document.getElementById("popup-overlay"); // Overlay nền mờ
        const closeVideo = document.querySelector(".close-popup"); // Nút đóng video
        const videoFrame = document.getElementById("video-frame"); // Thẻ iframe video

        // Ẩn phần chứa video khi tải trang
        videoPopup.style.display = "none";
        overlay.style.display = "none";
        videoFrame.src = ""; // Đảm bảo video không hiển thị khi trang tải

        // Mở video popup khi người dùng bấm vào nút
        openVideo.addEventListener("click", function() {
            videoFrame.src =
                "https://www.youtube.com/embed/hjvmAUbfXdw"; // Thêm URL video vào iframe
            videoPopup.style.display = "flex"; // Hiển thị popup video
            overlay.style.display = "block"; // Hiển thị overlay nền mờ
        });

        // Đóng video popup khi người dùng bấm vào nút đóng
        closeVideo.addEventListener("click", function() {
            videoPopup.style.display = "none";
            overlay.style.display = "none";
            videoFrame.src = ""; // Dừng video khi đóng popup
        });

        // Đóng video popup khi người dùng bấm phím Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                videoPopup.style.display = "none";
                overlay.style.display = "none";
                videoFrame.src = ""; // Dừng video khi đóng popup
            }
        });

        // Đóng video popup khi người dùng click ra ngoài popup (trên overlay)
        overlay.addEventListener("click", function() {
            videoPopup.style.display = "none";
            overlay.style.display = "none";
            videoFrame.src = ""; // Dừng video khi đóng popup
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        window.onscroll = function() {
            var header = document.getElementById(
                'header-top'); // Lấy phần tử header với id 'header-top'
            console.log("scrollY:", window.scrollY); // Log giá trị scrollY để kiểm tra
            if (window.scrollY > 200) {
                header.classList.add(
                    'header-scroll-top'); // Thêm lớp 'header-scroll-top' khi cuộn xuống 200px
            } else {
                header.classList.remove(
                    'header-scroll-top'); // Xóa lớp 'header-scroll-top' khi cuộn lên trên 200px
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        var showRegisterButton = document.getElementById('show-register');
        var showLoginButton = document.getElementById('show-login');
        var loginSection = document.getElementById('login-section');
        var registerSection = document.getElementById('register-section');

        // Hiển thị phần đăng ký
        showRegisterButton.addEventListener('click', function() {
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
        });

        // Quay lại phần đăng nhập
        showLoginButton.addEventListener('click', function() {
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    });

    $(document).ready(function() {
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    });


    $('.login-reg-panel input[type="radio"]').on('change', function() {
        if ($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut();
            $('.login-info-box').fadeIn();

            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');

        } else if ($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();

            $('.white-panel').removeClass('right-log');

            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
    });
    </script>
    <link rel="stylesheet" href="/assets/lib/jquery.gritter/css/jquery.gritter.css">
    <?php Application::$app->showErrorMsgs(); ?>
    <?php Application::$app->showMsg('success'); ?>
    <script src="/assets/lib/jquery.gritter/js/jquery.gritter.js"></script>
    <script>
    $(document).ready(function() {
        // Initialize the app
        App.init();
        App.uiNotifications();

        // Preview uploaded avatar
        $('#files').on('change', function() {
            const src = URL.createObjectURL(this.files[0]);
            $('#image').attr('src', src);
        });

        // Handle avatar upload
        $('#uploadForm').on('submit', function(e) {
            e.preventDefault();

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: new FormData(this),
                contentType: false,
                processData: false,
                success: function(response) {
                    $('input[name="avatar"]').val(response.url);

                    $.gritter.add({
                        title: 'Notification',
                        text: 'Upload file success',
                        class_name: 'color success'
                    });
                },
                error: function(err) {
                    $.gritter.add({
                        title: 'Notification',
                        text: err.responseJSON?.errors[0] || 'Upload failed',
                        class_name: 'color danger'
                    });
                }
            });
        });
    });
    </script>
</body>

</html>