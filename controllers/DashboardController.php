<?php

namespace app\controllers;

use app\core\middlewares\AuthMiddleware;
use app\core\Application;
use app\core\Controller;
use app\models\Category;
use app\models\Order;
use app\models\Product;
use app\models\User;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->registerMiddleware(new AuthMiddleware(['index']));
    }

    public function index()
    {
        $products = Product::get();
        $categories = Category::get();
        $orders = Order::get();
        $users = User::get();

        $this->setLayout('admin');
        return $this->render(
            'dashboard',
            [
                'products' => $products,
                'categories' => $categories,
                'orders' => $orders,
                'users' => $users,
                'title' => 'Dashboard',
                'breadcrumbs' => [
                    [
                        'link' => '/admin/products',
                        'label' => 'Dashboard'
                    ]
                ]
            ]
        );
    }
}