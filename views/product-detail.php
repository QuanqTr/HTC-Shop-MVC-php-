<?php

use app\core\Application;
?>

<?php Application::$app->showErrorMsgs('products', true) ?>
<?php Application::$app->showMsg('success') ?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>HTC Shop</title>
    <!-- Favicons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="assets/img/logo_png.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css">
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.simpleLens.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.simpleGallery.css">
    <link rel="stylesheet" type="text/css" href="css/demo.css">
    <link href="assets/css/main.css" rel="stylesheet" type="text/css">
    <link href="assets/css/site.css" rel="stylesheet">
    <script>
    !window.jQuery && document.write(unescape('%3Cscript src="js/jquery-1.8.1.min.js"%3E%3C/script%3E'))
    </script>
    <script>
    $(document).ready(function() {
        window.catalog_rotate = 0;

        window.sb_submenu = 1;
    });
    </script>
    <script src="js/menucatalog.js"></script>
    <script src="js/1399642332.js"></script>
    <script src="js/script.js"></script>
    <script src="js/demo.js"></script>
    <script src="js/jquery.magnific-popup.js"></script>
    <script src="js/jquery.fancybox.js"></script>
    <script src="js/jquery.fancybox-media.js"></script>
    <script src="js/jquery.simpleLens.js"></script>
    <script src="js/jquery.simpleGallery.js"></script>
    <script src="js/jquery.simpleLens-big-image.js"></script>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+Viet+Nam&display=swap"
        rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <style>

    </style>
    <style>
    body {

        font-family: 'Mukta', sans-serif;
        height: 100vh;
        min-height: 550px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 70px;
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
        background: linear-gradient(to top, rgb(236, 203, 180), rgb(206, 139, 98));
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
        padding: 10px 5px;
        width: 150px;
        margin-left: 30px;
        display: block;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;

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
        padding-right: 70px;
        padding-top: 30px;
        gap: 20px;


    }

    .show-log-panel {
        display: block;
        opacity: 0.9;
    }

    .login-show input[type="text"],
    .login-show input[type="password"] {
        width: 95%;
        display: block;
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #b5b5b5;
        outline: none;
    }

    .login-show input[type="button"] {
        max-width: 150px;
        width: 100%;
        background: #444444;
        border: none;
        margin: 10px 0;
        padding: 30px;
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
        margin: 10px 0;
        padding: 20px;
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
        line-height: 1.2;
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
        padding: 20px;
        line-height: 1.2;
        font-size: 18px;
        /* Tăng kích thước chữ */
        width: 100%;

    }

    label {
        font-size: 17px;
        margin: 4px;
    }

    .pop-up-section input[type="submit"] {
        background: linear-gradient(135deg, rgb(236, 203, 180), #e65a00);
        /* Gradient cam */
        color: white;
        cursor: pointer;
        border: none;
        padding: 12px 20px;
        padding-bottom: 30px;
        max-width: 200px;
        text-align: center;
        /* Điều chỉnh text bên trong nút */
        border-radius: 8px;
        font-size: 20px;
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
        background: linear-gradient(135deg, rgb(225, 186, 161), #ff6a00);
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
        background: linear-gradient(135deg, rgb(212, 170, 141), #e65a00);
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
        background: linear-gradient(135deg, rgb(216, 194, 181), rgb(208, 89, 4));
        /* Đảo chiều gradient khi hover */
    }

    #hero {
        position: relative;
        z-index: 1;
        /* Đảm bảo nội dung của hero section hiển thị phía trên hình nền */
    }

    .header .logo h1 {
        font-size: 30px;
        margin: 0;
        margin-left: 150px;
        font-weight: 700;
        color: var(--heading-color);
    }

    .header {
        background-color: rgb(62, 63, 69);
    }

    .comment {
        display: block;
        transition: all 1s;
    }

    .commentClicked {
        min-height: 0px;
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 5px 10px
    }

    textarea {
        width: 100%;
        border: none;
        background: #E8E8E8;
        padding: 5px 10px;
        height: 50%;
        border-radius: 5px 5px 0px 0px;
        border-bottom: 2px solid #016BA8;
        transition: all 0.5s;
        margin-top: 15px;
    }

    button.primaryContained {
        background: #016ba8;
        color: #fff;
        padding: 10px 10px;
        border: none;
        margin-top: 0px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 4px;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
        transition: 1s all;
        font-size: 10px;
        border-radius: 5px;
    }

    .message {
        font: 20px Helvetica, Arial, Sans-serif;
        display: none;
        width: 100%;
        padding: 20px;
        color: #fff;
    }

    .error {
        background: red;
    }

    .success {
        background: green;
    }

    button.primaryContained:hover {
        background: #9201A8;
    }

    /* Định dạng tổng thể */
    .navmenu ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
    }

    .navmenu a,
    .navmenu a,
    .navmenu a:focus {
        color: var(--nav-color);
        padding: 8px 20px;
        font-size: 14px;
        font-family: var(--nav-font);
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;
        white-space: nowrap;
        transition: 0.3s;
        border-radius: 50px;
    }

    .d-flex {
        display: flex !important;
    }

    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .align-items-center {
        -webkit-box-align: center !important;
        align-items: center !important;
    }

    .position-relative {
        position: relative !important;
    }

    .justify-content-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }

    .user-info {
        color: white;
        box-sizing: border-box;
        width: 150px;
        display: block;
        unicode-bidi: isolate;
        font-size: 15px;
    }

    #footer {
        color: var(--default-color);
        background-color: rgba(65, 65, 71, 0.91);
        font-size: 14px;
        text-align: center;
        padding: 30px 0;
        position: relative;
        z-index: 1000;
    }

    .Product-info {
        min-height: 70vh !important;
        margin-top: 20px;
        /* Đảm bảo phần nội dung chiếm tối thiểu 70% chiều cao trang */
    }

    .container {
        max-width: 100%;
        margin: 30px auto;
        background: #fff;
        border-radius: 8px;
        padding: 20px;
    }

    .dark-background-bottom {
        max-height: 250px;
        background-color: rgba(65, 65, 71, 0.91);
        color: white;
    }

    .centered-heading {
        text-align: center;
        /* Căn giữa */
        font-size: 2.5rem;
        /* Tăng kích thước chữ */
        font-weight: bold;
        /* Tăng độ đậm của chữ (tuỳ chọn) */
        margin-top: 30px;
        /* Thêm khoảng cách trên (tuỳ chọn) */
        color: #333;
        /* Đổi màu chữ (tuỳ chọn) */
    }
    </style>
</head>

<body class="index-page" data-control="Index">
    <header id="header-top" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" class="logo d-flex align-items-center">
                <h1 class="sitename">Heart To Community</h1>
            </a>
        </div>
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
                        <a id="open-pop-up-1" style="margin-right:100px" href="#">Đăng nhập/đăng ký</a>
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
                                        <input type="text" id="login_id" name="login_id" placeholder="Nhập tài khoản"
                                            required>
                                        <label for="password">Mật khẩu</label>
                                        <input type="password" id="password" name="password" placeholder="Nhập mật khẩu"
                                            required>
                                        <input type="submit" value="Đăng nhập">
                                    </form>
                                    <a href="">Forgot password?</a>
                                </div>

                                <!-- Phần đăng ký -->
                                <div class="register-show">
                                    <h2>REGISTER</h2>
                                    <form action="/register" method="POST">
                                        <label for="firstname">Họ và Tên</label>
                                        <input type="text" id="firstname" name="firstname" placeholder="Nhập họ và tên"
                                            required>
                                        <label for="phone">Số điện thoại</label>
                                        <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại"
                                            required>
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Nhập email" required>
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
                                <span class="user-name"><?= Application::$app->session->get('user_')->login_id ?></span>
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

        </nav>
    </header>
    <!----Bread-->

    <div
        class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between Product-info ">
        <div class="wrap">
            <h2 class="centered-heading">Thông tin sản phẩm</h2>
            <div class="product-details">
                <div class="img-details">
                    <div class="simpleLens-gallery-container" id="detail-1">
                        <div class="simpleLens-container">
                            <div class="simpleLens-big-image-container">
                                <a class="simpleLens-lens-image"
                                    data-lens-image="/uploads/<?php echo $product->avatar ?>">
                                    <img src="/uploads/<?php echo $product->avatar ?>" class="simpleLens-big-image">
                                </a>
                            </div>
                        </div>
                    </div>

                    <script type="text/javascript" src="js/jquery.simpleGallery.js"></script>
                    <script type="text/javascript" src="js/jquery.simpleLens.js"></script>

                    <script>
                    $(document).ready(function() {
                        $('#detail-1 .simpleLens-thumbnails-container img').simpleGallery({
                            loading_image: 'images/loading.gif'
                        });

                        $('#detail-1 .simpleLens-big-image').simpleLens({
                            loading_image: 'images/loading.gif'
                        });
                    });
                    </script>
                </div>


                <div class="info-details">
                    <h1 class="title-h1"><?= $product->name ?></h1>

                    <?php $data = (int) $product->price - ((int) $product->price * (int) $product->sale) / 100 ?>
                    <div class="cost"> Giá gốc: <span><?= number_format($product->price) ?> VNĐ</span></div>
                    <div class="price"> Giá bán:<span style="color:red; padding-left:5px;"><?= number_format($data) ?>
                            VNĐ</span></div>

                    <div class="info-">
                        <div class="colors">

                            <script>
                            $('.attrs-item.option').find('label').live('click', function() {
                                $(this).parent().find('label').removeClass('check');
                                $(this).addClass('check');
                            });
                            </script>


                        </div>
                        <style>
                        .wrap-custom {
                            width: 100% !important;
                        }

                        .attrs select {
                            width: 100px;
                            line-height: 22px;
                            height: 22px;
                        }

                        .quality input[type='text'] {
                            width: 50px;
                            height: 24px;
                            text-align: center;
                        }

                        .attrs .attrs-item label {
                            width: auto;
                            border: 1px solid #ccc;
                            background: #F2F2F2;
                            text-align: center;
                            display: block;
                            float: left;
                            cursor: pointer;
                            position: relative;
                            font-size: 13px;
                            margin-right: 10px;
                            margin-bottom: 5px;
                            padding: 1px;
                        }

                        .attrs .attrs-item label:hover,
                        .attrs .attrs-item label.check {
                            border: 2px solid #c00;
                            padding: 0
                        }

                        .attrs .attrs-item label.check:before {
                            display: block
                        }

                        .attrs .attrs-item label>input {
                            opacity: 0;
                            position: absolute;
                            top: 0;
                            left: 0;
                            cursor: pointer;
                        }

                        .attrs .attrs-item label .ic-check {
                            width: 0;
                            height: 0;
                            display: none;
                            z-index: -1;
                        }

                        .attrs .attrs-item label:before {
                            content: '';
                            background: url("http://static.sendo.vn/images/ecom/ic-sprite.gif") -462px -45px no-repeat;
                            width: 13px;
                            height: 13px;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            display: none;
                        }

                        .attrs .attrs-item label>span {
                            display: block;
                            height: 20px;
                            min-width: 26px;
                            line-height: 20px;
                            padding: 0 5px;
                        }

                        .attrs .attrs-item.color label {}

                        .attrs .attrs-item.color label span {
                            line-height: 25px;
                            height: 25px;
                        }

                        .buybtn {
                            margin-top: 10px;
                            position: relative;
                        }

                        .fav {
                            padding-left: 20px;
                            font-size: 11px;
                            font-weight: bold;
                            line-height: 20px;
                            clear: both;
                            position: absolute;
                            right: 0;
                            top: 10px;
                        }
                        </style>

                        <div class="purchase">

                            <div class="form-group">
                                <div class="purc">
                                    <a class="popup-with-zoom-shop" href="<?= '/add-cart?id=' . $product->id ?>">
                                        <button class="btn btn-primary"> <span>MUA NGAY</span></button></a>
                                </div>

                            </div>


                        </div>
                        <div class="Nati">
                            <div class="Nati-Delivery">Giao hàng miễn phí toàn quốc</div>
                        </div>
                        <div class="Purc-phone">
                            <h4>Hỗ trợ mua hàng: </h4>
                            <div class="phone-number">

                                <img alt="" src="images/phone.png">
                                <p>
                                    <span class="phone"> 0334424235 </span>
                                </p>
                            </div>

                            <div class="phone-number">

                                <img alt="" src="images/phone.png">
                                <p>
                                    <span class="phone"> 03344242xx </span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-catalog">
                <div class="wrap1">
                    <div class="box productTeaserBox prd-row">
                        <script src="JS_stor/tabcontent.js"></script>

                        <div class="header-title1">
                            <ul class="tabs" data-persist="true">
                                <li>

                                    <h3 class="lfloat "> <a href="#view1"> Chi tiết sản phẩm </a> </h3>

                                </li>
                                <li>
                                    <h3 class="lfloat "> <a href="#view2"> Nhận xét & bình luận </a> </h3>
                                </li>
                            </ul>
                        </div>
                        <div class="tabcontents">
                            <div id="view1">
                                <div class="content spen-plus">
                                    <div class="content-detail-info">
                                        <div><?php echo html_entity_decode($product->description) ?></div>
                                    </div>

                                </div>

                                <!-------end#page-all--->


                            </div>


                        </div>

                    </div>
                    <div id="view2">
                        <div class="content spen-plus">
                            <div class="col-md-12" id="fbcomment">
                                <div class="header_comment">
                                    <div class="row">
                                        <div class="col-md-6 text-left">
                                            <span class="count_comment">Bình luận sản phẩm</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="body_comment">
                                    <div class="row">

                                        <div class="avatar_comment col-md-1">
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar" />
                                        </div>
                                        <div class="box_comment col-md-11">
                                            <textarea class="commentar" placeholder="Bình luận ở đây..."
                                                name="commentDetail"></textarea>
                                            <div class="box_post">
                                                <div class="pull-right">
                                                    <span>
                                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                            alt="avatar" />
                                                        <i class="fa fa-caret-down"></i>
                                                    </span>
                                                    <button type="submit">Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <ul id="list_comment" class="col-md-12">
                                            <li class="box_result row" id="post_id">
                                                <div class="avatar_comment col-md-1">
                                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                        alt="avatar" />
                                                </div>
                                                <div class="result_comment col-md-11">
                                                    <h4>Ẩn danh</h4>
                                                    <p>Chi tiết bình luận</p>
                                                    <div class="tools_comment">
                                                        <a class="replay" href="#">Reply</a>
                                                        <span aria-hidden="true"> · </span>
                                                        <span aria-hidden="true"> · </span>
                                                    </div>
                                                    <ul class="child_replay">
                                                        <li class="box_reply row">
                                                            <div class="avatar_comment col-md-1">
                                                                <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                                    alt="avatar" />
                                                            </div>
                                                            <div class="result_comment col-md-11">
                                                                <h4>Ẩn danh</h4>
                                                                <p>Chi tiết trả lời</p>
                                                                <div class="tools_comment">
                                                                    <span aria-hidden="true"> · </span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <button class="show_more" type="button">Xem các bình luận khác</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer id="footer" class="footer dark-background-bottom">
        <div class=" content-wrapper" style="color: white; margin:10px">
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
            color: white !important;
            margin-bottom: 40px !important;
        }

        .dark-background-bottom {
            max-height: 250px;
            /* Áp dụng các biến CSS */
            background-color: rgba(65, 65, 71, 0.91);
            color: white;
        }
        </style>
    </footer>
    <!-------end#footer-top------->
    <!--End Container -->
    </section><!-- end App -->
    <!-- partial -->
    <script src='JS_stor/vue.min.js'></script>
    <script src='JS_stor/jquery.min.js'></script>


    <!-- </form></table> -->

    </script>
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
    <script src="assets/js/main.js"></script>
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
</body>

</html>