<?php
/**
 * User: TheCodeholic
 * Date: 7/25/2020
 * Time: 11:33 AM
 */
namespace app\core\middlewares;

use app\core\Application;
use app\core\exception\ForbiddenException;

/**
 * Class AuthMiddleware
 *
 * @author  Zura Sekhniashvili <zurasekhniashvili@gmail.com>
 * @package thecodeholic\phpmvc
 */
class AuthMiddleware extends BaseMiddleware
{
    protected array $actions = [];

    public function __construct($actions = [])
    {
        $this->actions = $actions;
    }

    public function execute()
    {
        if (Application::isGuest()) {
            if (empty($this->actions) || in_array(Application::$app->controller->action, $this->actions)) {
                throw new ForbiddenException();
            }
        }
    }
}
// function trung gian xử lý trước khi request đi vào router và controller
