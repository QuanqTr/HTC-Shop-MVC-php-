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
    <link href="assets/img/logo_png.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+Viet+Nam&display=swap"
        rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="assets/css/main.css" rel="stylesheet">

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

    /* Giao diện tổng thể */
    /* Giao diện tổng thể */
    /* Giao diện tổng thể */
    .search-home {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        /* Màu nền sáng */
    }

    #search-box {
        width: 100%;
        max-width: 600px;
        /* Chiều rộng tối đa */
    }

    /* Style cho input */
    .search-wapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .text-search {
        flex: 1;
        /* Chiếm hết chiều rộng còn lại */
        padding: 10px;
        font-size: 16px;
        border-radius: 10px;
        border: 1px solid #ccc;
        transition: border-color 0.3s;
    }

    .text-search:focus {
        outline: none;
        border-color: #ff6f00;
        /* Đổi màu viền khi focus */
    }

    /* Style cho nút tìm kiếm */
    .search-btn {
        background: linear-gradient(45deg, #ff6f00, #ff9e00);
        /* Gradient màu cam */
        color: #fff;
        border: none;
        padding: 0 10px;
        /* Padding ngang */
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s ease-in-out;
        height: 100%;
        /* Chiều cao nút bằng chiều cao của input */
        white-space: nowrap;
        /* Giữ chữ không xuống dòng */
        min-width: 60px;
        /* Đảm bảo nút đủ rộng */
    }

    .search-btn:hover {
        background: linear-gradient(45deg, #e65c00, #ff9e00);
        /* Gradient tối hơn khi hover */
        transform: translateY(-2px);
        /* Đẩy nút lên khi hover */
    }

    .search-btn:focus {
        outline: none;
    }

    /* Làm cho cả input và button có chiều cao tương tự */
    .search-wapper .form-control {
        height: 50px;
        /* Đặt chiều cao input */
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
        background: linear-gradient(135deg, rgb(236, 203, 180), #e65a00);
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
        background: linear-gradient(135deg, rgb(206, 88, 3), rgb(231, 186, 158));
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
        background: linear-gradient(135deg, rgb(236, 203, 180), #e65a00);
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
        background: linear-gradient(135deg, rgb(211, 95, 12), rgb(226, 193, 172));
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
                    <li><a href="/" class="active">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                    <li><a href="#sanpham">Mặc hàng</a></li>
                    <li class="dropdown"><a href="#"><span>Loại</span> <i
                                class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <?php foreach ($danhmuc as $item) { ?>
                            <li><a href="/find-categories?id=<?= $item['id'] ?>"><?= $item['name'] ?></a></li>
                            <?php } ?>
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
        <!-- Hero Section -->
        <section id="hero" class="hero section dark-background">
            <div id="hero-carousel" data-bs-interval="5000" class="container carousel carousel-fade"
                data-bs-ride="carousel">


                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <div class="carousel-container">
                        <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Heart to Community</span>
                        </h2>
                        <p class="animate__animated animate__fadeInUp">Heart to Community là một website chuyên cung cấp
                            các dụng cụ hỗ trợ cho người khuyết tật, nhằm mang lại sự tiện nghi và độc lập cho người sử
                            dụng. Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, được thiết kế đặc biệt để
                            đáp ứng nhu cầu đa dạng của người khuyết tật, từ các dụng cụ di chuyển, hỗ trợ sinh hoạt
                            hàng ngày, đến các thiết bị hỗ trợ sức khỏe.</p>
                        <a href="/about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Xem
                            thêm</a>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-item">
                    <div class="carousel-container">
                        <h2 class="animate__animated animate__fadeInDown">Heart to Community</h2>
                        <p class="animate__animated animate__fadeInUp">Với tôn chỉ "Chia sẻ yêu thương, mang lại sự tự
                            tin", Heart to Community không chỉ cung cấp sản phẩm mà còn mang đến giải pháp toàn diện
                            giúp người khuyết tật cải thiện chất lượng cuộc sống. Chúng tôi hiểu rằng mỗi người có một
                            nhu cầu khác nhau, vì vậy chúng tôi luôn nỗ lực để mang đến những sản phẩm phù hợp và tiện
                            dụng nhất.</p>
                        <a href="/about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Xem
                            thêm</a>
                    </div>
                </div>

                <!-- Slide 3 -->
                <div class="carousel-item">
                    <div class="carousel-container">
                        <h2 class="animate__animated animate__fadeInDown">Heart to Community</h2>
                        <p class="animate__animated animate__fadeInUp">Website của chúng tôi dễ dàng truy cập, với giao
                            diện thân thiện và dễ sử dụng. Các sản phẩm được phân loại rõ ràng, giúp người mua dễ dàng
                            tìm thấy các dụng cụ hỗ trợ mà họ cần. Chúng tôi cam kết mang lại dịch vụ chăm sóc khách
                            hàng chu đáo, sẵn sàng hỗ trợ người dùng 24/7.</p>
                        <a href="/about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Xem
                            thêm</a>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

            </div>

            <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                    </path>
                </defs>
                <g class="wave1">
                    <use xlink:href="#wave-path" x="50" y="3"></use>
                </g>
                <g class="wave2">
                    <use xlink:href="#wave-path" x="50" y="0"></use>
                </g>
                <g class="wave3">
                    <use xlink:href="#wave-path" x="50" y="9"></use>
                </g>
            </svg>
        </section><!-- /Hero Section -->
        <br>
        <br>
        <div class="search-home">
            <form action="/" id="search-box" class="d-flex" onsubmit="return handleSearch(event)">
                <div class="search-wapper w-30">
                    <input type="text" class="form-control me-2" name="q" id="search-input"
                        placeholder="Nhập tên sản phẩm cần tìm" />
                    <button type="submit" class="search-btn"><i class="bi bi-search"></i></button>
                </div>
            </form>
        </div>
        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section">
            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2 style="margin-bottom: 10px;">Danh mục</h2>
                <p>Sản phẩm nổi bật</p>
            </div><!-- End Section Title -->

            <div class="container">
                {{content}}
            </div>
        </section>
        <section id="sanpham" class="portfolio section">
            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2 style="margin-bottom: 10px;">Sản Phẩm</h2>
                <p>Tất cả sản phẩm</p>
            </div><!-- End Section Title -->
            <div class="container">
                <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-nhanthuc">Nhận Thức</li>
                        <li data-filter=".filter-thigiac">Thị Giác</li>
                        <li data-filter=".filter-thinhgiac">Thính Giác</li>
                        <li data-filter=".filter-moitruong">Môi trường</li>
                        <li data-filter=".filter-giaitri">Giải Trí</li>
                        <li data-filter=".filter-cssk">CSSK</li>
                        <li data-filter=".filter-vandong">Vận động</li>
                        <hr>

                    </ul><!-- End Portfolio Filters -->

                    <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-nhanthuc">
                            <img src="\images\4.-hộp-quản-lý-thuốc-768x768.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Nhận thức</h4>
                                <p>Hộp quản lý thuốc</p>
                                <a href="\images\4.-hộp-quản-lý-thuốc-768x768.jpg" title="Hộp thuốc quản lý"
                                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 14;
                                ?>
                                <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>


                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-nhanthuc">
                            <img src="\images\chonguoigia.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Nhận thức</h4>
                                <p>Chuông báo động khẩn cấp</p>
                                <a href="\images\chonguoigia.jpg" title="Chuông báo động khẩn cấp"
                                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 16;
                                ?>
                                <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->
                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-moitruong">
                            <img src="\images\Amazon-Alexa-Echo-2nd-01.png" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Môi trường</h4>
                                <p>Thiết bị điều khiển từ xa</p>
                                <a href="\images\Amazon-Alexa-Echo-2nd-01.png" title="Thiết bị điều khiển từ xa"
                                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 11;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-moitruong">
                            <img src="\images\20-thìa-liftware-level.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Môi trường</h4>
                                <p>Thìa thông minh Liftware level</p>
                                <a href="\images\20-thìa-liftware-level.jpg" title="Thìa thông minh Liftware level"
                                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 15;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-thinhgiac">
                            <img src="\images\maytrothinh.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Thính giác</h4>
                                <p>Máy trợ thính bỏ túi</p>
                                <a href="\images\maytrothinh.jpg" title="Máy trợ thính bỏ túi"
                                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 17;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-giaitri">
                            <img src="\images\ghe-travel-chain.png" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Giải trí</h4>
                                <p>Ghế TravelChair</p>
                                <a href="\images\ghe-travel-chain.png" title="Ghế TravelChair"
                                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 18;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cssk">
                            <img src="\images\dailung.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Chăm sóc sức khỏe</h4>
                                <p>Đai Lưng định hình cột sống</p>
                                <a href="\images\dailung.jpg" title="Đai Lưng định hình cột sống"
                                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 21;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-cssk">
                            <img src="\images\thiet-bi-cham-soc-suc-khoe.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Chăm sóc sức khỏe</h4>
                                <p>Thiết bị đo huyết áp</p>
                                <a href="\images\thiet-bi-cham-soc-suc-khoe.jpg" title="Thiết bị đo huyết áp"
                                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 22;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->
                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-thigiac">
                            <img src="\images\7.-KNFB-reader-1.png" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Thị giác</h4>
                                <p>Phần mềm đọc màn hình KNFB</p>
                                <a href="\images\7.-KNFB-reader-1.png" title="Phần mềm đọc màn hình KNFB"
                                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 12;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-vandong">
                            <img src="\images\xe-lan-dien.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Vận động</h4>
                                <p>Xe lăn điện</p>
                                <a href="\images\xe-lan-dien.jpg" title="Xe lăn điện"
                                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 19;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-vandong">
                            <img src="\images\xelan.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Vận động</h4>
                                <p>Xe lăn</p>
                                <a href="\images\xelan.jpg" title="Xe lăn" data-gallery="portfolio-gallery-branding"
                                    class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 20;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-thigiac">
                            <img src="\images\8679778266_1086395332.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>Thị Giác</h4>
                                <p>Thiết bị hỗ trợ thị giác</p>
                                <a href="\images\8679778266_1086395332.jpg" title="Thiết bị hỗ trợ thị giác"
                                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                                        class="bi bi-zoom-in"></i></a>
                                <?php
                                $product_id = isset($_GET['id']) ? $_GET['id'] : 13;
                                ?> <a href="product-detail?id=<?php echo $product_id; ?>" title="More Details"
                                    class="details-link">
                                    <i class="bi bi-link-45deg"></i>
                                </a>
                            </div>
                        </div><!-- End Portfolio Item -->

                    </div><!-- End Portfolio Container -->

                </div>

            </div>

        </section><!-- sanpham -->

        <!-- Team Section -->
        <section id="team" class="team section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Nhà Báo</p>
            </div><!-- End Section Title -->

            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Trần Đại Quang</h4>
                                <span>Leader</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href="https://www.facebook.com/quang.contact"><i class="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/_quanq.tr/"><i class="bi bi-instagram"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Trần Đức Kiệt</h4>
                                <span>Member</span>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Dương Vũ Hùng</h4>
                                <span>Member</span>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Lê Thị Thanh Thùy</h4>
                                <span>Member</span>
                            </div>
                        </div>
                    </div><!-- End Team Member -->

                </div>

            </div>

        </section><!-- /Team Section -->


        <!-- Contact Section -->
        <section id="contact" class="contact section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Contact Us</p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade" data-aos-delay="100">

                <div class="row gy-4">

                    <div class="col-lg-4">
                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Thành Phố Thừa Thiên Huế, mới lên Trung Ương</p>
                            </div>
                        </div><!-- End Info Item -->

                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i class="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>033 442 4235</p>
                            </div>
                        </div><!-- End Info Item -->

                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i class="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>21t1020870@example.com</p>
                            </div>
                        </div><!-- End Info Item -->

                    </div>

                    <div class="col-lg-8">
                        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                            data-aos-delay="200">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <input type="text" name="name" class="form-control" placeholder="Your Name"
                                        required="">
                                </div>

                                <div class="col-md-6 ">
                                    <input type="email" class="form-control" name="email" placeholder="Your Email"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject"
                                        required="">
                                </div>

                                <div class="col-md-12">
                                    <textarea class="form-control" name="message" rows="6" placeholder="Message"
                                        required=""></textarea>
                                </div>

                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div><!-- End Contact Form -->

                </div>

            </div>

        </section><!-- /Contact Section -->

    </main>

    <footer id="footer" class="footer dark-background-bottom">
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
        .dark-background-bottom {
            max-height: 250px;
            /* Áp dụng các biến CSS */
            background-color: rgba(65, 65, 71, 0.91);
            color: white;
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
            videoFrame.src = "https://www.youtube.com/embed/hjvmAUbfXdw"; // Thêm URL video vào iframe
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
            var header = document.getElementById('header-top'); // Lấy phần tử header với id 'header-top'
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

    // Giữ lại nội dung tìm kiếm khi tải lại trang
    window.onload = function() {
        var params = new URLSearchParams(window.location.search);
        var query = params.get('q');
        if (query) {
            document.getElementById('search-input').value = query;
        }
    };
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