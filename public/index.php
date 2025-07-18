<?php

require_once __DIR__ . './../vendor/autoload.php';

use app\controllers\AboutController;
use app\controllers\AdminController;
use app\controllers\AuthController;
use app\controllers\CategoriesController;
use app\controllers\CategoryController;
use app\controllers\CustomerController;
use app\controllers\DashboardController;
use app\controllers\OrderDetailsController;
use app\controllers\PageController;
use app\controllers\PostController;
use app\controllers\ProductController;
use app\controllers\SiteController;
use app\controllers\UploadController;
use app\controllers\UserController;
use app\core\db\Database;
use app\core\Application;
use app\models\User;

$dotenv = \Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();
$config = [
    'userClass' => \app\models\User::class,
    'db' => [
        'dsn' => $_ENV['DB_DSN'],
        'user' => $_ENV['DB_USER'],
        'password' => $_ENV['DB_PASSWORD'],
    ]
];

$app = new Application(dirname(path: __DIR__), $config);
// Page

$app->router->get('/', [PageController::class, 'index']);
$app->router->get('/about', [AboutController::class, 'index']);
$app->router->get('/product-detail', [PageController::class, 'order']);
$app->router->get('/add-cart', [PageController::class, 'card']);
$app->router->post('/update-cart', [PageController::class, 'updateCart']);
$app->router->get('/card', [PageController::class, 'showcard']);
$app->router->get('/login-thanhtoan', [PageController::class, 'loginThanhToan']);
$app->router->get('/thongtin', [PageController::class, 'thongtin']);
$app->router->post('/saveUser', [PageController::class, 'saveUser']);
$app->router->get('/remove-product', [PageController::class, 'removeCard']);
$app->router->get('/find-categories', [PageController::class, 'showProduct']);
$app->router->get('/checkout_success', [PageController::class, 'checkout_success']);
$app->router->post('/thanhtoan', [PageController::class, 'thanhtoan']);

// XU LY XAC THUC NGUOI DUNG [DANG KY , DANG NHAP]
$app->router->get('/register', [AuthController::class, 'showRegister']);
$app->router->post('/register', [AuthController::class, 'register']);
$app->router->get('/login', [AuthController::class, 'showLogin']);
$app->router->post('/login', [AuthController::class, 'login']);
$app->router->get('/logout', [AuthController::class, 'logout']);

// UPLOAD FILE
$app->router->post('/upload', [UploadController::class, 'upload']);

if (Application::$app->session->get('user_') && Application::$app->session->get('user_')->role === 1) {
    $app->router->get('/admin/Information', [AdminController::class, 'index']);
    $app->router->get('/admin/edit', [AdminController::class, 'editView']);
    $app->router->post('/admin/edit', [AdminController::class, 'edit']);
    // ADMIN DASHBOARD

    $app->router->get('/admin/dashboard', [DashboardController::class, 'index']);

    // ADMIN CATEGORY
    $app->router->get('/admin/categories', [CategoriesController::class, 'index']);
    $app->router->get('/admin/categories/create', [CategoriesController::class, 'createView']);
    $app->router->post('/admin/categories/create', [CategoriesController::class, 'create']);

    $app->router->get('/admin/categories/confirm', [CategoriesController::class, 'confirmView']);
    $app->router->post('/admin/categories/confirm', [CategoriesController::class, 'confirm']);
    $app->router->get('/admin/categories/complete', [CategoriesController::class, 'completeView']);
    $app->router->get('/admin/categories/complete', [CategoriesController::class, 'completeView']);

    $app->router->get('/admin/categories/edit', [CategoriesController::class, 'editView']);
    $app->router->get('/admin/categories/destroy', [CategoriesController::class, 'destroy']);
    $app->router->post('/admin/categories/edit', [CategoriesController::class, 'edit']);

    // ADMIN PRODUCT
    $app->router->get('/admin/products', [ProductController::class, 'index']);
    $app->router->get('/admin/products/create', [ProductController::class, 'createView']);
    $app->router->post('/admin/products/create', [ProductController::class, 'create']);

    $app->router->get('/admin/products/confirm', [ProductController::class, 'confirmView']);
    $app->router->post('/admin/products/confirm', [ProductController::class, 'confirm']);
    $app->router->get('/admin/products/complete', [ProductController::class, 'completeView']);

    $app->router->get('/admin/products/edit', [ProductController::class, 'editView']);
    $app->router->post('/admin/products/edit', [ProductController::class, 'edit']);
    $app->router->get('/admin/products/destroy', [ProductController::class, 'destroy']);

    // ADMIN ORDER DETAILS
    $app->router->get('/admin/orderdetails', [OrderDetailsController::class, 'index']);
    $app->router->get('/admin/orderdetails/edit', [OrderDetailsController::class, 'edit']);
    $app->router->get('/admin/orderdetails/destroy', [OrderDetailsController::class, 'destroy']);
    // ADMIN USER

    $app->router->get('/admin/user', [UserController::class, 'index']);
    $app->router->get('/admin/user/create', [UserController::class, 'createView']);
    $app->router->post('/admin/user/create', [UserController::class, 'create']);

    $app->router->get('/admin/user/confirm', [UserController::class, 'confirmView']);
    $app->router->post('/admin/user/confirm', [UserController::class, 'confirm']);
    $app->router->get('/admin/user/complete', [UserController::class, 'completeView']);

    $app->router->get('/admin/user/edit', [UserController::class, 'editView']);
    $app->router->post('/admin/user/edit', [UserController::class, 'edit']);
    $app->router->get('/admin/user/destroy', [UserController::class, 'destroy']);

    $app->router->get('/admin/user/reset-password', [UserController::class, 'resetPasswordView']);
    $app->router->post('/admin/user/reset-password', [UserController::class, 'resetPassword']);
}
if (Application::$app->session->get('user_') && Application::$app->session->get('user_')->role === 0) {
    $app->router->get('/user', [CustomerController::class, 'index']);
    $app->router->get('/user/edit', [CustomerController::class, 'editView']);
    $app->router->post('/user/edit', [CustomerController::class, 'edit']);
    $app->router->get('/user/showDetail', [CustomerController::class, 'showDetail']);
    $app->router->get('/user/update', [CustomerController::class, 'update']);
}

// CLIENT PAGE

$app->router->get('/make-user', function () use ($app) {
    $classModel = new User();
    $classModel->login_id = 'admin';
    $classModel->password = 'admin';
    $classModel->status = 1;
    $classModel->role = 1;
    $classModel->save();
    echo ('success');
});

$app->router->get('/test', function () use ($app) {
    $app->db->query('SELECT * FROM users WHERE login_id = :login_id', ['login_id' => 'A123456789']);
});

$app->router->get('/category', [CategoriesController::class, 'index']);

$app->run();
