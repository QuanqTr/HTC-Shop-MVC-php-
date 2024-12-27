<?php

namespace app\controllers;

use app\core\Application;
use app\core\Controller;

class AboutController extends Controller
{
     public function __construct()
    {
        // Thay đổi layout cho AboutController thành 'about.php'
        $this->setLayout('about');
    }
    
    public function index()
    {
       return $this->render('about');
        
    }
}