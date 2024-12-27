<?php
use app\core\Application;
?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from foxythemes.net/preview/products/beagle/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 03 Jan 2022 13:39:31 GMT -->

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Admin Page</title>
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
    <link href="assets/css/main.css" rel="stylesheet">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="/assets/img/logo-fav.png">
    <title>HTCShop</title>
    <link rel="stylesheet" type="text/css" href="/assets/lib/perfect-scrollbar/css/perfect-scrollbar.css" />
    <link rel="stylesheet" type="text/css"
        href="/assets/lib/material-design-icons/css/material-design-iconic-font.min.css" />
    <link rel="stylesheet" type="text/css" href="/assets/lib/jquery.vectormap/jquery-jvectormap-1.2.2.css" />
    <link rel="stylesheet" type="text/css" href="/assets/lib/jqvmap/jqvmap.min.css" />
    <link rel="stylesheet" type="text/css" href="/assets/lib/datetimepicker/css/bootstrap-datetimepicker.min.css" />
    <link rel="stylesheet" href="/assets/css/app.css" type="text/css" />
    <script src="https://cdn.tiny.cloud/1/bl53mermimquffv1vxi976v6waddhax2mvoolb16026sopsb/tinymce/5/tinymce.min.js">
    </script>
    <script>
    tinymce.init({
        selector: 'textarea'
    });
    </script>
</head>

<body>
    <div class="be-wrapper be-fixed-sidebar">
        <nav class="navbar navbar-expand fixed-top be-top-header">
            <div class="container-fluid">
                <div class="be-navbar-header">
                    <!-- <a class="navbar-brand" href="/admin/dashboard"></a> -->
                    <a href="/" style="font-size:18px; margin-left: 22px; color: gray">HTCShop</a>
                </div>
                <div class="page-title"><span>Trang quản trị</span></div>
                <div class="be-right-navbar">
                    <ul class="nav navbar-nav float-right be-user-nav">
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                                data-toggle="dropdown" role="button" aria-expanded="false"><img
                                    src="/assets/img/avatar.png" alt="Avatar"><span class="user-name"></span></a>
                            <div class="dropdown-menu" role="menu">
                                <div class="user-info">
                                    <div class="user-name"><?= Application::$app->session->get('user_')->firstname ?>
                                    </div>
                                    <div class="user-position online">Online</div>
                                </div><a class="dropdown-item" href="/admin/Information"><span
                                        class="icon mdi mdi-face"></span>Thông tin người quản trị</a><a
                                    class="dropdown-item" href="/logout?rd=1"><span
                                        class="icon mdi mdi-power"></span>Đăng xuất</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="be-left-sidebar">
            <div class="left-sidebar-wrapper"><a class="left-sidebar-toggle" href="#">Tổng quan</a>
                <div class="left-sidebar-spacer">
                    <div class="left-sidebar-scroll">
                        <div class="left-sidebar-content">
                            <ul class="sidebar-elements">
                                <li class="divider">Menu</li>
                                <li><a href="/admin/dashboard"><i class="icon mdi mdi-home"></i><span>Tổng
                                            quan</span></a>
                                </li>
                                <li><a href="/admin/Information"><i class="icon mdi mdi-face"></i><span>Thông tin người
                                            dùng</span></a>
                                </li>
                                <li><a href="/admin/orderdetails"><i class="icon mdi mdi-view-web"></i><span>Đơn
                                            hàng</span></a>
                                </li>
                                <li><a href="/admin/products"><i class="icon mdi mdi-view-web"></i><span>Sản
                                            phẩm</span></a>
                                </li>
                                <li><a href="/admin/categories"><i class="icon mdi mdi-view-web"></i><span>Loại sản
                                            phẩm</span></a>
                                </li>
                                <li><a href="/admin/user"><i class="icon mdi mdi-view-web"></i><span>Tài
                                            khoản</span></a>
                                </li>
                                <li><a href="/admin/user/reset-password"><i class="icon mdi mdi-view-web"></i><span>Đặt
                                            lại mật khẩu</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="be-content">
            <div class="page-head">
                <!-- <h2 class="page-head-title"><?= $title; ?></h2> -->
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb page-head-nav">
                        <?php foreach ($breadcrumbs as $value): ?>
                        <!-- <li class="breadcrumb-item"><a href="<?= $value['link'] ?>"><?= $value['label'] ?></a></li> -->
                        <?php endforeach ?>
                    </ol>
                </nav>
            </div>
            <div class="main-content container-fluid">
                {{content}}
            </div>
        </div>
        <nav class="be-right-sidebar">
            <div class="sb-content">
                <div class="tab-navigation">
                    <ul class="nav nav-tabs nav-justified" role="tablist">
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="#tab1"
                                aria-controls="tab1" role="tab" data-toggle="tab">Chat</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tab2" aria-controls="tab2"
                                role="tab" data-toggle="tab">Todo</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tab3" aria-controls="tab3"
                                role="tab" data-toggle="tab">Settings</a></li>
                    </ul>
                </div>
                <div class="tab-panel">
                    <div class="tab-content">
                        <div class="tab-pane tab-chat active" id="tab1" role="tabpanel">
                            <div class="chat-contacts">
                                <div class="chat-sections">
                                    <div class="be-scroller-chat">
                                        <div class="content">
                                            <h2>Recent</h2>
                                            <div class="contact-list contact-list-recent">
                                                <div class="user"><a href="#"><img src="/assets/img/avatar1.png"
                                                            alt="Avatar">
                                                        <div class="user-data"><span class="status away"></span><span
                                                                class="name">Claire Sassu</span><span
                                                                class="message">Can you share the...</span></div>
                                                    </a></div>
                                                <div class="user"><a href="#"><img src="/assets/img/avatar2.png"
                                                            alt="Avatar">
                                                        <div class="user-data"><span class="status"></span><span
                                                                class="name">Maggie jackson</span><span
                                                                class="message">I confirmed the info.</span></div>
                                                    </a></div>
                                                <div class="user"><a href="#"><img src="/assets/img/avatar3.png"
                                                            alt="Avatar">
                                                        <div class="user-data"><span class="status offline"></span><span
                                                                class="name">Joel King </span><span
                                                                class="message">Ready for the meeti...</span></div>
                                                    </a></div>
                                            </div>
                                            <h2>Contacts</h2>
                                            <div class="contact-list">
                                                <div class="user"><a href="#"><img src="/assets/img/avatar4.png"
                                                            alt="Avatar">
                                                        <div class="user-data2"><span class="status"></span><span
                                                                class="name">Mike Bolthort</span></div>
                                                    </a></div>
                                                <div class="user"><a href="#"><img src="/assets/img/avatar5.png"
                                                            alt="Avatar">
                                                        <div class="user-data2"><span class="status"></span><span
                                                                class="name">Maggie jackson</span></div>
                                                    </a></div>
                                                <div class="user"><a href="#"><img src="/assets/img/avatar6.png"
                                                            alt="Avatar">
                                                        <div class="user-data2"><span
                                                                class="status offline"></span><span class="name">Jhon
                                                                Voltemar</span></div>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-input">
                                    <input type="text" placeholder="Search..." name="q"><span
                                        class="mdi mdi-search"></span>
                                </div>
                            </div>
                            <div class="chat-window">
                                <div class="title">
                                    <div class="user"><img src="/assets/img/avatar2.png" alt="Avatar">
                                        <h2>Maggie jackson</h2><span>Active 1h ago</span>
                                    </div><span class="icon return mdi mdi-chevron-left"></span>
                                </div>
                                <div class="chat-messages">
                                    <div class="be-scroller-messages">
                                        <div class="content">
                                            <ul>
                                                <li class="friend">
                                                    <div class="msg">Hello</div>
                                                </li>
                                                <li class="self">
                                                    <div class="msg">Hi, how are you?</div>
                                                </li>
                                                <li class="friend">
                                                    <div class="msg">Good, I'll need support with my pc</div>
                                                </li>
                                                <li class="self">
                                                    <div class="msg">Sure, just tell me what is going on with your
                                                        computer?</div>
                                                </li>
                                                <li class="friend">
                                                    <div class="msg">I don't know it just turns off suddenly</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-input">
                                    <div class="input-wrapper"><span class="photo mdi mdi-camera"></span>
                                        <input type="text" placeholder="Message..." name="q" autocomplete="off"><span
                                            class="send-msg mdi mdi-mail-send"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane tab-todo" id="tab2" role="tabpanel">
                            <div class="todo-container">
                                <div class="todo-wrapper">
                                    <div class="be-scroller-todo">
                                        <div class="todo-content"><span class="category-title">Today</span>
                                            <ul class="todo-list">
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" checked=""
                                                            id="tck1">
                                                        <label class="custom-control-label" for="tck1">Initialize the
                                                            project</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck2">
                                                        <label class="custom-control-label" for="tck2">Create the main
                                                            structure </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck3">
                                                        <label class="custom-control-label" for="tck3">Updates changes
                                                            to GitHub </label>
                                                    </div>
                                                </li>
                                            </ul><span class="category-title">Tomorrow</span>
                                            <ul class="todo-list">
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck4">
                                                        <label class="custom-control-label" for="tck4">Initialize the
                                                            project </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck5">
                                                        <label class="custom-control-label" for="tck5">Create the main
                                                            structure </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck6">
                                                        <label class="custom-control-label" for="tck6">Updates changes
                                                            to GitHub </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-checkbox custom-control custom-control-sm"><span
                                                            class="delete mdi mdi-delete"></span>
                                                        <input class="custom-control-input" type="checkbox" id="tck7">
                                                        <label class="custom-control-label" for="tck7"
                                                            title="This task is too long to be displayed in a normal space!">This
                                                            task is too long to be displayed in a normal space! </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-input">
                                    <input type="text" placeholder="Create new task..." name="q"><span
                                        class="mdi mdi-plus"></span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane tab-settings" id="tab3" role="tabpanel">
                            <div class="settings-wrapper">
                                <div class="be-scroller-settings"><span class="category-title">General</span>
                                    <ul class="settings-list">
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st1" id="st1"><span>
                                                    <label for="st1"></label></span>
                                            </div><span class="name">Available</span>
                                        </li>
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st2" id="st2"><span>
                                                    <label for="st2"></label></span>
                                            </div><span class="name">Enable notifications</span>
                                        </li>
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st3" id="st3"><span>
                                                    <label for="st3"></label></span>
                                            </div><span class="name">Login with Facebook</span>
                                        </li>
                                    </ul><span class="category-title">Notifications</span>
                                    <ul class="settings-list">
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" name="st4" id="st4"><span>
                                                    <label for="st4"></label></span>
                                            </div><span class="name">Email notifications</span>
                                        </li>
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st5" id="st5"><span>
                                                    <label for="st5"></label></span>
                                            </div><span class="name">Project updates</span>
                                        </li>
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st6" id="st6"><span>
                                                    <label for="st6"></label></span>
                                            </div><span class="name">New comments</span>
                                        </li>
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" name="st7" id="st7"><span>
                                                    <label for="st7"></label></span>
                                            </div><span class="name">Chat messages</span>
                                        </li>
                                    </ul><span class="category-title">Workflow</span>
                                    <ul class="settings-list">
                                        <li>
                                            <div class="switch-button switch-button-sm">
                                                <input type="checkbox" name="st8" id="st8"><span>
                                                    <label for="st8"></label></span>
                                            </div><span class="name">Deploy on commit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <script src="/assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="/assets/lib/perfect-scrollbar/js/perfect-scrollbar.min.js" type="text/javascript"></script>
    <script src="/assets/lib/bootstrap/dist/js/bootstrap.bundle.min.js" type="text/javascript"></script>
    <script src="/assets/js/app.js" type="text/javascript"></script>
    <script>
    const path = window.location.pathname;
    const menuItem = document.querySelector(
        `.sidebar-elements a[href="${path}"]`
    );
    menuItem?.parentElement.classList.add("active");
    </script>

    @script


</body>

</html>