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
</head>

<body data-control="Index">
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
                <li><a href="/card" class="active">Giỏ hàng</a></li>
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
    <!-------end#page-top--->
    <div id="page-all">
        <div id="container">

            <style>
            .shopping-cart {
                width: 850px;
                margin: 80px auto;
                background: #FFFFFF;
                box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.10);
                border-radius: 6px;

                display: flex;
                flex-direction: column;
            }

            .alert-warning {
                background-color: white !important;
                border-color: white !important;
            }

            .cart-collaterals {
                width: 850px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }

            .title {
                height: 60px;
                border-bottom: 1px solid #E1E8EE;
                padding: 20px 30px;
                color: #5E6977;
                font-size: 18px;
                font-weight: 400;
            }

            .item {
                padding: 20px 30px;
                height: 120px;
                display: flex;
                align-items: center;
            }

            .item:nth-child(3) {
                border-top: 1px solid #E1E8EE;
                border-bottom: 1px solid #E1E8EE;
            }


            .buttons {
                display: flex;
                /* Sử dụng flexbox để căn giữa nút */
                justify-content: center;
                /* Căn giữa các phần tử */
                margin-right: 60px;
            }

            .button {
                background-color: #ee6603;
                /* Màu nền */
                color: rgb(255, 255, 255);
                /* Màu chữ */
                font-size: 15px;
                padding: 15px 30px;
                font-weight: bold;
                /* In đậm chữ */
                border-radius: 10px;
                border: 2px;
                /* Viền màu cam */
                margin-top: 40px;
                margin-left: 500px;

                transition: background-color 0.3s, color 0.3s;
                /* Hiệu ứng chuyển màu mượt mà */
            }

            /* Hover effect */
            .button:hover {
                background-color: orange;
                /* Màu nền thay đổi khi hover */
                color: white;
                /* Màu chữ thay đổi khi hover */
                cursor: pointer;
                /* Hiển thị con trỏ chuột như tay khi hover */
            }

            .delete-btn,
            .like-btn {
                display: inline-block;
                Cursor: pointer;
            }

            .delete-btn {
                width: 18px;
                height: 17px;
                background: url(&amp;quot;delete-icn.svg&amp;quot;) no-repeat center;
            }

            .like-btn {
                position: absolute;
                top: 9px;
                left: 15px;
                background: url('twitter-heart.png');
                width: 60px;
                height: 60px;
                background-size: 2900%;
                background-repeat: no-repeat;
            }

            .is-active {
                animation-name: animate;
                animation-duration: .8s;
                animation-iteration-count: 1;
                animation-timing-function: steps(28);
                animation-fill-mode: forwards;
            }

            @keyframes animate {
                0% {
                    background-position: left;
                }

                50% {
                    background-position: right;
                }

                100% {
                    background-position: right;
                }
            }

            .image {
                margin-right: 50px;
            }

            .description {
                flex: 1;
            }

            .description span {
                display: block;
                font-size: 14px;
                color: #43484D;
                font-weight: 400;
            }

            .description span:first-child {
                margin-bottom: 5px;
            }

            .description span:last-child {
                font-weight: 300;
                margin-top: 8px;
                color: #86939E;
            }

            .quantity {
                min-width: 80px;
                text-align: center;
            }

            .quantity input {
                -webkit-appearance: none;
                border: none;
                text-align: center;
                width: 32px;
                font-size: 16px;
                color: #43484D;
                font-weight: 300;
            }

            button[class*=btn] {
                width: 30px;
                height: 30px;
                background-color: #E1E8EE;
                border-radius: 6px;
                border: none;
                cursor: pointer;
            }

            .minus-btn img {
                margin-bottom: 3px;
            }

            .plus-btn img {
                margin-top: 2px;
            }

            button:focus,
            input:focus {
                outline: 0;
            }

            .total-price {
                width: 83px;
                text-align: center;
                font-size: 16px;
                color: #43484D;
                font-weight: 300;
            }

            @media (max-width: 800px) {
                .shopping-cart {
                    width: 100%;
                    height: auto;
                    overflow: hidden;
                }

                .item {
                    height: auto;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .image img {
                    width: 50%;
                }

                .image,
                .quantity,
                .description {
                    width: 100%;
                    text-align: center;
                    margin: 6px 0;
                }

                .buttons {
                    margin-right: 20px;
                }
            }

            .bill-body {
                display: flex;
                flex-direction: column;
                font-size: 16px;
                padding: 20px 0;
            }

            .centered-heading {
                text-align: center;
                /* Căn giữa */
                font-size: 2.5rem;
                /* Tăng kích thước chữ */
                font-weight: bold;
                /* Tăng độ đậm của chữ (tuỳ chọn) */
                margin-top: 60px;
                /* Thêm khoảng cách trên (tuỳ chọn) */
                color: #333;
                /* Đổi màu chữ (tuỳ chọn) */
            }

            .bill-body th {
                min-width: 160px;
                text-align: left;
            }
            </style>
            <div id="content">
                <h2 class="centered-heading">Giỏ hàng của tôi</h2>

                <div class="content-top">

                    <div class="wrap" style="margin-top: 100px !important;">
                        <div class="cart-total">
                            <h4>Tổng cộng giỏ hàng: <span id="cart-total">
                                    <?= number_format($total) . ' VNĐ' ?></span>
                            </h4>
                        </div>
                        <form action="<?= '/update-cart' ?>" method="post">

                            <div class="shoppcart">
                                <?php if (is_array($cart)) { ?>
                                <?php foreach ($cart as $item) { ?>
                                <div class="plans_table">
                                    <div class="ther">
                                        <div class="plans-list1">
                                            <h3>Tên sản phẩm</h3>
                                        </div>
                                        <div class="plans-list3">
                                            <h3>Giá</h3>
                                        </div>
                                        <div class="plans-list2">
                                            <h3>Số lượng</h3>
                                        </div>
                                        <div class="plans-list3">
                                            <h3>Tổng tiền</h3>
                                        </div>
                                        <div class="plans-list2">
                                            <h3></h3>
                                        </div>
                                    </div>
                                    <div class="tboo">
                                        <div class="plan_list_title">
                                            <a href="<?= ('product-detail?id=' . $item->id) ?>">
                                                <img src="/uploads/<?= $item->avatar ?>" alt="" width="160"
                                                    height="160">
                                            </a>
                                            <a href="<?= ('product-detail?id=' . $item->id) ?>">
                                                <h4><?= $item->name ?></h4>
                                            </a>
                                        </div>

                                        <div class="price_body1">
                                            <?= number_format($item->price * ((100 - $item->sale) / 100)) . ' VNĐ' ?>
                                        </div>
                                        <div class="price_body2">
                                            <input type="number" class="quantity" style="width: 50px;"
                                                max="<?= $item->quantity ?>" min="1" name="<?= $item->id ?>"
                                                id="quantity-<?= $item->id ?>" value="<?= $item->so_luong_mua ?>"
                                                data-price="<?= $item->price * ((100 - $item->sale) / 100) ?>"
                                                onchange="updateTotal(<?= $item->id ?>, <?= $item->price * ((100 - $item->sale) / 100) ?>)">

                                        </div>
                                        <div class="price_body1" id="total-price-<?= $item->id ?>">
                                            <?= number_format(($item->price * ((100 - $item->sale) / 100)) * $item->so_luong_mua) . ' VNĐ' ?>
                                        </div>
                                        <div class="price_body2">
                                            <a href="remove-product?id=<?= $item->id ?>">[Xóa]</a>
                                        </div>
                                    </div>

                                    <div class="summomy">
                                        <p>Đã bao gồm thuế</p>
                                    </div>
                                </div>
                                <?php } ?>

                                <div class="tfoo">
                                    <div class="order_now2" style="margin-bottom: 20px">
                                        <button type="submit" class="button" name="update-cart" value="Update cart">
                                            Tiến hành thanh toán
                                        </button>
                                    </div>
                                </div>

                                <?php } else { ?>
                                <h2 class="alert alert-warning"
                                    style="height: 40vh;color:green; width: 100%; font-size: 18px; display:flex; align-items:center; justify-content:center">
                                    Giỏ hàng của bạn chưa có sản phẩm nào !
                                </h2>
                                <?php } ?>
                            </div>

                        </form>

                        <script>
                        function updateTotal(productId, productPrice) {
                            var quantity = document.getElementById('quantity-' + productId).value;
                            var totalPrice = productPrice * quantity;
                            document.getElementById('total-price-' + productId).innerHTML = numberWithCommas(
                                totalPrice) + ' VNĐ';

                            // Cập nhật tổng cộng của giỏ hàng
                            updateCartTotal();
                        }

                        function updateCartTotal() {
                            var total = 0;
                            // Lặp qua tất cả các sản phẩm để tính tổng
                            var quantities = document.querySelectorAll('.quantity');
                            quantities.forEach(function(input) {
                                var price = parseFloat(input.dataset.price);
                                var quantity = parseInt(input.value);
                                total += price * quantity;
                            });

                            // Cập nhật tổng giỏ hàng
                            document.getElementById('cart-total').innerHTML = numberWithCommas(total) + ' VNĐ';
                        }

                        // Hàm format số với dấu phân cách
                        function numberWithCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }

                        window.onload = updateCartTotal; // Cập nhật tổng giỏ hàng khi trang tải
                        </script>
                        <script>
                        $(document).ready(function() {
                            $('.popup-with-zoom-shop').magnificPopup({
                                type: 'inline',

                                fixedContentPos: false,
                                fixedBgPos: true,

                                overflowY: 'auto',

                                closeBtnInside: true,
                                preloader: false,

                                midClick: true,
                                removalDelay: 300,
                                mainClass: 'my-mfp-zoom-on'
                            });

                        });
                        </script>


                    </div>
                    <!-----end#content----->

                </div>

            </div>

            <!-------end#page-all--->
            <!-------end#footer-top------->
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
                    /* Áp dụng các biến CSS */
                    background-color: rgba(65, 65, 71, 0.91);
                    color: white;
                }
                </style>
            </footer>
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