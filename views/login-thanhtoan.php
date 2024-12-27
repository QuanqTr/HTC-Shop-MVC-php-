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
    <link href="assets/css/danhmuc.css" rel="stylesheet">
    <link rel="stylesheet" href="css/site.css">
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
    .centered-heading {
        text-align: center;
        /* Căn giữa */
        font-size: 2.5rem;
        /* Tăng kích thước chữ */
        font-weight: bold;
        /* Tăng độ đậm của chữ (tuỳ chọn) */
        margin-top: 30px;
        margin-bottom: 20px;
        /* Thêm khoảng cách trên (tuỳ chọn) */
        color: #333;
        /* Đổi màu chữ (tuỳ chọn) */
    }
    </style>
</head>

<body>
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
                    <a href="# "><span>Loại</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
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
    <div id="page-top">
        <div class="pagecuston">
            <div class="wrap">
                <ul class="menu-top">

                </ul>

            </div>
        </div>
    </div>

    <!-------end#page-top--->
    <div id="page-all">
        <div id="header">
            <div class="header_top">
                <div class="wrap">
                    <!-------end#logo--->
                    <div class="shopping-check">
                        <div class="breadcrumb-top">
                            <a href="/login-thanhtoan" class="active">Đăng nhập</a>
                            <a href="/thongtin">Thông tin giao hàng</a>
                            <a href="/checkout">Thanh toán</a>
                        </div>



                    </div>
                </div>
                <!-----end#shopping_header--->

            </div>
            <!-----end#header-top--->
            <!--------end#nav-top---->

        </div>
        <!-------end#header--->
        <div id="content">
            <div class="wrap">
                <div class="Login-checkout">
                    <div id="Login-check">

                        <h2><span class="fontawesome-lock"></span>Vui lòng đăng nhập trước khi mua hàng</h2>

                        <form action="/login?rd=1" method="post">

                            <fieldset>
                                <input type="hidden" value="/thongtin" name="url">
                                <p><label for="TDN">Tên Đăng Nhập(*) </label>
                                    <input type="TDN" id="TDN" value="Tên Đăng Nhập" name="login_id"
                                        onBlur="if(this.value=='')this.value='Tên Đăng Nhập'"
                                        onFocus="if(this.value=='Tên Đăng Nhập')this.value=''">
                                </p>
                                <p><label for="password">Mật Khẩu (*)</label>
                                    <input type="password" id="password" value="password" name="password"
                                        onBlur="if(this.value=='')this.value='password'"
                                        onFocus="if(this.value=='password')this.value=''">
                                </p>

                                <p class="bot"><label><input type="submit" name="login" value="Đăng nhập"> </label>
                                </p>


                            </fieldset>

                        </form>

                    </div> <!-- end login -->

                    <div class="CartShop">
                        <h1>Thông tin đơn hàng</h1>
                        <div class="compare_plan">


                            <div class="plans-list">
                                <p>Bạn đang có 1 sản phẩm </p>
                            </div>


                            <div class="sho-row">
                                <div class="plans-list1">
                                    <h3>Sản phẩm</h3>
                                </div>
                                <div class="plans-list2">
                                    <h3>Số lượng</h3>
                                </div>
                                <div class="plans-list3">
                                    <h3>Giá </h3>
                                </div>
                                <div class="clear-float"></div>
                            </div>


                            <div class="body-row">
                                <?php foreach ($cart as $item) { ?>
                                <div class="plans-list1">
                                    <img src="/uploads/<?php echo $item->avatar ?>" alt="" title="" width="60px"
                                        height="60" />

                                    <h4></h4>
                                </div>
                                <div class="plans-list2"><input type="text" id="soluongmua" name="so_luong_mua"
                                        value="<?php echo $item->so_luong_mua ?>" /></div>

                                <div class="plans-list3" id="test" value="<?= $item->price ?>">
                                    <?= number_format($item->price) ?> VNĐ</div>
                                <div class="clear-float"></div>
                                <?php } ?>
                            </div>
                            <div class="control-shop">
                                <div class="order_now1">Phí vận chuyển</div>
                                <div class="order_now2"><?= number_format($up) ?></div>
                                <div class="clear-float"></div>
                            </div>
                            <div class="control-shop">
                                <div class="order_now1">Tổng cộng</div>
                                <div class="order_now2"><?= number_format($tong + $up) ?>VNĐ</div>
                                <div class="clear-float"></div>

                                <div class="control-suse">
                                    <div class="order_now1">Thành tiền</div>
                                    <div class="order_now2"><?= number_format($total + $up) ?>VNĐ</div>
                                    <div class="clear-float"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <!-----end#content----->
            <footer id="footer" class="footer dark-background-bottom">
                <div class=" content-wrapper" style="color: white; margin:10px">
                    <h3 class="sitename">Heart to Community</h3>
                    "Vì một cuộc sống đầy đủ hơn, mọi khả năng đều có thể"
                    <div class="social-links d-flex justify-content-center">
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-youtube"></i></a>
                        <a href=""><i class="bi bi-tiktok"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <style>
                .footer .social-links {
                    margin: 0 0 30px 0;
                    margin-top: 20px !important;
                }

                .footer {
                    flex: 1;
                    position: fixed
                }

                .footer h3 {
                    color: white !important;
                    margin-bottom: 40px !important;
                }

                .dark-background-bottom {
                    max-height: 250px;
                    background-color: rgba(65, 65, 71, 0.91);
                    color: white;
                }
                </style>
            </footer>
            <!-------end#footer-top------->
        </div>
    </div>
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