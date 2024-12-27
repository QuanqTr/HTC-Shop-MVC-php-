<?php

use app\core\Application;
?>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Trang chủ</title>
<meta name="description" content="">
<meta name="keywords" content="">

<!-- Favicons -->
<link href="assets/img/favicon.png" rel="icon">
<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">

<!-- Vendor CSS Files -->
<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="assets/vendor/aos/aos.css" rel="stylesheet">
<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

<!-- Main CSS File -->
<link href="assets/css/site.css" rel="stylesheet">

<div id="content">
    <!-- Sản phẩm nổi bật -->
    <div class="product-hight" data-aos="fade-up">
        <div class="wrap">
            <div class="box productTeaserBox prd-row">
                <ul class="itemlist" id="flexiselDemo3" data-aos="fade-up">
                    <?php foreach ($productHots as $product) { ?>
                    <li class="item">
                        <div class="item-inner">
                            <a href="/product-detail?id=<?= $product['id'] ?>">
                                <img src="/uploads/<?php echo $product['avatar'] ?>" alt="" />
                                <div class="item-prodinfo">
                                    <?php if ($product['sale'] >= 1) { ?>
                                    <div class="sb-gdv-disc">
                                        <div class="sb-gdv-disc__content"><?php echo $product['sale'] ?>%</div>
                                    </div>
                                    <?php } ?>
                                    <div class="item-title"> <?php echo $product['name'] ?> </div>
                                    <div class="item-price">
                                        <?php echo number_format((int)$product['price'] - ((int)$product['price'] * (int)$product['sale']) / 100) ?>
                                        VNĐ
                                    </div>
                                </div>
                            </a>
                            <div class="item-hover">
                                <a href="/product-detail?id=<?= $product['id'] ?>" class="shopping"><i
                                        class="fas fa-shopping-cart cart-icon"></i>Mua hàng</a>
                            </div>
                        </div>
                    </li>
                    <?php } ?>
                </ul>
                <br>
                <hr>
            </div>
        </div>
    </div>

    <!-- Giỏ hàng -->
    <div class="product-catalog " data-aos="fade-up">
        <div class="wrap">
            <link rel="stylesheet" type="text/css" href="css/Cart.css">
            <script src="js/jquery.shopping.js"></script>
            <div id="BeeperBox" class="UIBeeper">
                <div class="UIBeeper_Full">
                    <div class="Beeps">
                        <div class="UIBeep UIBeep_Top UIBeep_Bottom UIBeep_Selected" style="opacity: 1;">
                            <a class="UIBeep_NonIntentional" href="giohang.php">
                                <div class="UIBeep_Icon">
                                    <i class="beeper_icon image2"></i>
                                </div>
                                <span class="beeper_x"></span>
                                <div class="UIBeep_Title">
                                    <span class="blueName">Bạn đã mua </span> 1 sản phẩm<span class="blueName"></span>.
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sản phẩm đang giảm giá -->
            <div class="box productTeaserBox prd-row">
                <script src="JS_stor/tabcontent.js"></script>

                <div class="header-title">
                    <h2 class="lfloat h3" style="margin: 20px;">
                        Đang giảm giá
                        <img src="images/hot.gif" alt="" />
                    </h2>
                </div>
                <div class="tabcontents">
                    <div id="view1">
                        <div class="content spen-plus">
                            <ul class="itemlist" id="myList1">
                                <?php foreach ($productGirls as $product) { ?>
                                <li class="item">
                                    <div class="item-inner">
                                        <a href="/product-detail?id=<?= $product['id'] ?>">
                                            <img src="/uploads/<?php echo $product['avatar'] ?>" alt="" />
                                            <div class="item-prodinfo">
                                                <?php if ($product['sale'] >= 1) { ?>
                                                <div class="sb-gdv-disc">
                                                    <div class="sb-gdv-disc__content"><?php echo $product['sale'] ?>%
                                                    </div>
                                                </div>
                                                <?php } ?>
                                                <div class="item-title"> <?php echo $product['name'] ?> </div>
                                                <div class="item-price">
                                                    <?php echo number_format((int)$product['price'] - ((int)$product['price'] * (int)$product['sale']) / 100) ?>
                                                    VNĐ
                                                </div>
                                            </div>
                                        </a>
                                        <div class="item-hover">
                                            <a href="/product-detail?id=<?= $product['id'] ?>" class="shopping">Mua
                                                hàng</a>
                                        </div>
                                    </div>
                                </li>
                                <?php } ?>
                            </ul>

                            <script type="text/javascript">
                            $(document).ready(function() {
                                $('#myList1 li:lt(4)').show();
                                $('#loadMore1').click(function() {
                                    $('#myList1 li:lt(8)').show();
                                });
                                $('#showLess1').click(function() {
                                    $('#myList1 li').not(':lt(8)').hide();
                                });
                            });
                            </script>
                        </div>
                    </div>
                </div>
                <!-- End Sản phẩm giảm giá -->

            </div>
        </div>
    </div>
</div>