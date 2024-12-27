<?php

namespace app\controllers;

use app\core\middlewares\AuthMiddleware;
use app\core\Application;
use app\core\Controller;
use app\core\Request;
use app\models\Category;
use app\models\Comment;
use app\models\Order;
use app\models\OrderDetails;
use app\models\Product;
use app\models\User;
use DateTime;

class PageController extends Controller
{
    public function index()
    {
        $q = isset($_GET['q']) ? $_GET['q'] : null;

        $where = 'where true ';

        $filter = [];

        if ($q) {
            $where .= "and products.name like '%$q%'";
        }

        $user = Application::$app->session->get('user_');
        $cart = Application::$app->session->get('card');
        $sql = 'SELECT * FROM post where status = 1 ORDER BY created_at DESC LIMIT 4';
        $productNews = Application::$app->db->query($sql);
        $sql = "SELECT products.*, categories.name as namect, products.name as name FROM products JOIN categories ON products.category_id = categories.id $where and products.quantity >1 ORDER BY categories.id DESC";
        $productHots = Application::$app->db->query($sql);

        $sql = "SELECT products.*, categories.name as namect, products.name as name FROM products JOIN categories ON products.category_id = categories.id $where and products.quantity >1 and products.sold_out > 10 ORDER BY products.id DESC LIMIT 4";
        $productTopRate = Application::$app->db->query($sql);

        $sql = "SELECT products.*, categories.name as namect, products.name as name FROM products JOIN categories ON products.category_id = categories.id  $where and products.quantity >1 and products.sale > 0  LIMIT 4";
        $productGirls = Application::$app->db->query($sql);
        $sql = 'SELECT * FROM categories';
        $danhmuc = Application::$app->db->query($sql);

        $sql = 'SELECT * FROM post where status = 1 ORDER BY created_at DESC';
        $post = Application::$app->db->query($sql);
        return $this->render('home-page', [
            'user' => $user,
            'productNews' => $productNews,
            'post' => $post,
            'cart' => $cart,
            'productHots' => $productHots,
            'productTopRate' => $productTopRate,
            'productGirls' => $productGirls,
            'productNews' => $productNews,
            'danhmuc' => $danhmuc,
            'title' => 'index',
            'breadcrumbs' => [
                [
                    'link' => '/',
                    'label' => 'Product'
                ],
                [
                    'link' => '#',
                    'label' => 'index'
                ],
            ]
        ]);
    }

    public function order()
    {
        $productRelated = Product::get();
        $id_sanpham = (int) $_GET['id'];
        $product = Product::findOne(['id' => $id_sanpham]);
        $sql = "SELECT comment.*, users.* ,comment.id as idc FROM comment JOIN products ON products.id = comment.product_id JOIN users ON users.id = comment.user_id where product_id = $id_sanpham";
        $data = Application::$app->db->query($sql);
        $danhmuc = Category::get();
        $user = Application::$app->session->get('user_');
        $cart = Application::$app->session->get('card');

        // Set layout là 'main' hoặc tên layout chứa header
        $this->setLayout(false);

        return $this->render('product-detail', [
            'cart' => $cart,
            'danhmuc' => $danhmuc,
            'user' => $user,
            'id_sanpham' => $id_sanpham,
            'product' => $product,
            'productRelated' => $productRelated,
            'comment' => $data,
            'breadcrumbs' => [
                [
                    'link' => '/product-detail',
                    'label' => 'Product'
                ],
                [
                    'link' => '#',
                    'label' => 'order'
                ],
            ]
        ]);
    }

    public function showProduct()
    {
        $categories = (int) $_GET['id'];
        $sql = "SELECT products.*, categories.name as namect, products.name as name FROM products JOIN categories ON products.category_id = categories.id  where categories.id = $categories";
        $sanpham = Category::findOne(['id' => $categories]);
        $danhmuc = Category::get();
        $cart = Application::$app->session->get('card') ?? 0;

        $products = Application::$app->db->query($sql);
        $this->setLayout(false);
        return $this->render('danhmuc', [
            'products' => $products,
            'danhmuc' => $danhmuc,
            'dmuc' => $sanpham,
            'cart' => $cart,
            'breadcrumbs' => [
                [
                    'link' => '/product-detail',
                    'label' => 'Product'
                ],
                [
                    'link' => '#',
                    'label' => 'order'
                ],
            ]
        ]);
    }

    public function card()
    {
        $id_sanpham = (int) $_GET['id'];
        $sanpham = Product::findOne(['id' => $id_sanpham]);
        $so_luong_mua = $_GET['so_luong'] ?? 1;
        if (isset($_SESSION['card'])) {
            foreach ($_SESSION['card'] as $product) {
                if ($product->id === $id_sanpham) {
                    $_SESSION['card'][$id_sanpham]->so_luong_mua = $product->so_luong_mua + $so_luong_mua;
                    $_SESSION['card'][$id_sanpham]->thanh_tien = $_SESSION['card'][$id_sanpham]->so_luong_mua * ($product->price * ((100 - $product->sale) / 100));

                    Application::$app->session->set('card', $_SESSION['card']);
                    Application::$app->response->redirect('/card');
                } else {
                    $thanh_tien = $so_luong_mua * ($sanpham->price * ((100 - $sanpham->sale) / 100));  // cong thuc anh tinh ra thanh tien = gia ban * gia ban sale ./..
                    $sanpham->thanh_tien = $thanh_tien;
                    $sanpham->so_luong_mua = $so_luong_mua;;
                    $_SESSION['card'][$id_sanpham] = $sanpham;
                    Application::$app->session->set('card', $_SESSION['card']);
                    Application::$app->response->redirect('/card');
                }
            }
        } else {
            $thanh_tien = $so_luong_mua * ($sanpham->price * ((100 - $sanpham->sale) / 100));
            $sanpham->thanh_tien = $thanh_tien;
            $sanpham->so_luong_mua = $so_luong_mua;
            $_SESSION['card'][$id_sanpham] = $sanpham;
            Application::$app->session->set('card', $_SESSION['card']);
            Application::$app->response->redirect('/card');
        }
    }

    public function showcard()
    {
        $productRelated = Product::get();
        $Comment = Comment::get();
        $danhmuc = Category::get();
        $product = Application::$app->session->get('card');
        $this->setLayout(false);
        return $this->render('card', [
            'productRelated' => $productRelated,
            'cart' => $product,
            'danhmuc' => $danhmuc,
            'comment' => $Comment,
        ]);
    }

    public function checkout_success()
    {
        $this->setLayout(false);
        return $this->render('checkout_success', []);
    }

    public function updateCart()
    {
        if (isset($_POST['update-cart'])) {
            foreach ($_SESSION['card'] as $product) {
                $_SESSION['card'][$product->id]->so_luong_mua = $_POST[$product->id];
                $_SESSION['card'][$product->id]->thanh_tien = $product->so_luong_mua * ($product->gia_ban * ((100 - $product->sale) / 100));
                Application::$app->response->redirect('/login-thanhtoan');
            }
        } else {
            foreach ($_SESSION['card'] as $product) {
                $_SESSION['card'][$product->id]->so_luong_mua = $_POST[$product->id];
                $_SESSION['card'][$product->id]->thanh_tien = $product->so_luong_mua * ($product->gia_ban * ((100 - $product->sale) / 100));
                Application::$app->response->redirect('/');
            }
        }
    }

    public function loginThanhToan()
    {
        $cart = Application::$app->session->get('card');
        $total = 0;
        $countProduct = 0;
        $up = 0;
        $tong = 0;

        if (is_array($cart)) {
            foreach ($cart as $item) {
                $total += $item->so_luong_mua * $item->price;
                $countProduct++;
            }
        }
        $tong = $total - $up;

        $this->setLayout(false);

        if (Application::$app->session->get('user_')) {
            Application::$app->response->redirect('/thongtin');
        }
        $user = Application::$app->session->get('user_');
        return $this->render('login-thanhtoan', [
            'cart' => $cart,
            'total' => $total,
            'user' => $user,
            'tong' => $tong,
            'up' => $up,
            'breadcrumbs' => [
                [
                    'link' => '/product-detail',
                    'label' => 'Product'
                ],
                [
                    'link' => '#',
                    'label' => 'order'
                ],
            ]
        ]);
    }

    public function thongtin()
    {
        $cart = Application::$app->session->get('card');
        $total = 0;
        $countProduct = 0;
        $up = 0;
        $tong = 0;

        if (is_array($cart)) {
            foreach ($cart as $item) {
                $total += $item->so_luong_mua * $item->price;
                $countProduct++;
            }
        }
        $tong = $total - $up;

        if (!Application::$app->session->get('user_')) {
            Application::$app->response->redirect('/login-thanhtoan');
        }

        $data = Application::$app->session->get('user_');
        $user = User::findOne(['id' => $data->id]);
        $this->setLayout(false);

        return $this->render('thongtin', [
            'user' => $user,
            'cart' => $cart,
            'total' => $total,
            'tong' => $tong,
            'up' => $up,
            'breadcrumbs' => [
                [
                    'link' => '/product-detail',
                    'label' => 'Product'
                ],
                [
                    'link' => '#',
                    'label' => 'order'
                ],
            ]
        ]);
    }

    public function thanhtoan(Request $request)
    {
        $user = Application::$app->session->get('user_');
        $cart = Application::$app->session->get('card');
        $diachiOrder = Application::$app->session->get('diachi_order');  // Địa chỉ từ session
        $classModelOrder = new Order();
        $classModelOrderDetails = new OrderDetails();
        $classModelProduct = new Product();

        $total = 0;
        $orders = [];

        // Tính tổng giá trị đơn hàng
        if (is_array($cart)) {
            foreach ($cart as $item) {
                $total += $item->so_luong_mua * $item->price;
            }
        }

        // Thông tin đơn hàng
        $orders['price'] = $total;
        $orders['customer_id'] = $user->id;
        $orders['status'] = 0;  // Trạng thái đơn hàng (0: chưa xử lý)
        $orders['paymentType'] = 0;  // Loại thanh toán (0: chưa thanh toán)
        $orders['datereal'] = date('Y-m-d');  // Ngày tạo đơn hàng
        $classModelOrder->loadData($orders);

        // Lưu đơn hàng vào cơ sở dữ liệu
        if ($classModelOrder->save()) {
            // Lấy ID của đơn hàng vừa tạo
            $idOrder = Application::$app->db->lastInsertId();

            // Lưu chi tiết đơn hàng
            foreach ($cart as $value) {
                $product = Product::findOne(['id' => $value->id]);

                // Thông tin chi tiết đơn hàng
                $data = [
                    'order_id' => $idOrder,
                    'product_id' => $value->id,
                    'amount' => $value->so_luong_mua,
                    'price' => $value->price,
                    'sale' => $value->sale,
                    'diachi' => $diachiOrder,  // Địa chỉ giao hàng
                ];

                // Cập nhật lại số lượng sản phẩm trong kho
                $productData = [
                    'id' => $value->id,
                    'quantity' => $product->quantity - $value->so_luong_mua,  // Cập nhật số lượng sản phẩm
                    'name' => $product->name,
                    'avatar' => $product->avatar,
                    'description' => $product->description,
                    'price' => $product->price,
                    'sale' => $product->sale,
                    'sold_out' => $product->sold_out,
                    'category_id' => $product->category_id,
                ];

                // Cập nhật lại sản phẩm trong cơ sở dữ liệu
                $classModelProduct->loadData($productData);
                $classModelProduct->update();

                // Lưu chi tiết đơn hàng vào cơ sở dữ liệu
                $classModelOrderDetails->loadData($data);
                $classModelOrderDetails->save();
            }

            // Xóa giỏ hàng sau khi thanh toán
            Application::$app->session->remove('card');

            // Chuyển hướng đến trang thành công
            Application::$app->response->redirect('/checkout_success');
        } else {
            // Nếu có lỗi khi lưu đơn hàng
            Application::$app->session->setFlash('errors', $classModelOrder->errors);
            Application::$app->response->redirect('/thongtin');
        }
    }

    public function saveUser(Request $request)
    {
        $classModel = new User();
        $user_id = Application::$app->session->get('user_');
        $data = $request->getBody();
        $data['password'] = $user_id->password;
        $classModel->loadData($data);
        Application::$app->session->set('diachi_order', $classModel->diachi);
        $update = Application::$app->db->execute("UPDATE `users` SET `id`='$user_id->id',`email`='$classModel->email',`firstname`='$classModel->firstname',`lastname`='$classModel->lastname',`avatar`='$classModel->avatar',`phone`='$classModel->phone',`namsinh`='$classModel->namsinh',`status`='$classModel->status',`role`='$classModel->role',`password`='$classModel->password',`login_id`='$user_id->login_id',`reset_password_token`='0' where id = $user_id->id");
        $classModel->id = $user_id->id;
        $now = new DateTime();
        $classModel->updated_at = $now->format('Y-m-d H:i:s');
        if ($data['firstname'] == '' || $data['email'] == '' || $data['phone'] == '' || $data['diachi'] == '') {
            return Application::$app->response->redirect('/thongtin');
        }
        if ($update) {
            Application::$app->response->redirect('/checkout_success');
        } else {
            Application::$app->session->setFlash('msg', 'Delete item error');
            Application::$app->response->redirect('/checkout_success');
        }
    }

    public function removeCard()
    {
        if (isset($_GET['id']) && isset($_SESSION['card'])) {
            unset($_SESSION['card'][$_GET['id']]);
            if (empty($_SESSION['card'])) {
                unset($_SESSION['card']);
            }
            Application::$app->response->redirect('/card');
        } else {
            Application::$app->response->redirect('/card');
        }
    }
}