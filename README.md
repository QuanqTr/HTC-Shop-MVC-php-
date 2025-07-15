# Heart To Community - E-commerce Website for People with Disabilities

## Introduction
Heart To Community is an e-commerce platform designed to provide products and support for people with disabilities. The system is built using pure PHP following the MVC (Model-View-Controller) architecture.

## Features

### For Users
- Register/Login
- Browse and search products by category
- Add products to cart
- Place orders and checkout
- Manage personal information
- View order history

### For Admins
- Manage product categories
- Manage products
- Manage orders
- Manage user accounts
- User role management

## Technologies Used
- PHP 7.4+
- MySQL
- HTML/CSS/JavaScript
- Bootstrap 4
- jQuery

## Directory Structure & Functions

```
HTCShop/
├── controllers/     # Contains PHP files that handle business logic and user requests. Each controller corresponds to a specific feature (e.g., ProductController, UserController).
├── core/           # Core framework files, including base classes for controllers, models, routing, and configuration. Handles request dispatching and MVC workflow.
├── models/         # Data access layer. Each model represents a database table and contains methods for CRUD operations (e.g., Product.php, User.php).
├── views/          # Presentation layer. Contains HTML/PHP templates for rendering pages. Organized by feature (e.g., views/products/, views/users/).
├── public/         # Publicly accessible assets such as CSS, JS, images, and entry point (index.php). Web server should point to this folder.
├── assets/         # Additional resources like custom styles, scripts, fonts, and images used by the site.
├── helper/         # Utility functions and classes used throughout the project (e.g., validation, formatting).
├── vendor/         # Third-party libraries managed by Composer (e.g., autoload.php).
└── .env            # Environment configuration file for database credentials and other settings.
```

### Directory Details

- **controllers/**  
  Handles HTTP requests, processes input, interacts with models, and selects views to render. Example: `ProductController.php` manages product-related actions.
- **core/**  
  Contains the main framework logic, such as routing, base controller/model classes, and configuration loading.
- **models/**  
  Represents and manipulates data from the database. Example: `User.php` for user data, `Order.php` for order data.
- **views/**  
  Contains all UI templates. Each feature has its own folder (e.g., `views/products/list.php`, `views/users/profile.php`).
- **public/**  
  Entry point for the application (`index.php`). Stores static files and assets accessible by users.
- **assets/**  
  Custom stylesheets, JavaScript files, fonts, and images used for the website's appearance and functionality.
- **helper/**  
  Common helper functions (e.g., input validation, date formatting) used across controllers and models.
- **vendor/**  
  Composer-managed dependencies and autoloading.
- **.env**  
  Stores sensitive configuration such as database connection details.
# API List - Heart To Community
## User APIs
- `POST /api/register`  Register a new user
- `POST /api/login`   User login
- `GET /api/logout`  User logout
- `GET /api/user/{id}`   Get user profile
- `PUT /api/user/{id}`   Update user profile
- `PUT /api/user/{id}/password`  Change user password
## Product APIs
- `GET /api/products`    Get all products
- `GET /api/products/{id}`   Get product details
- `POST /api/products`   Add new product (admin)
- `PUT /api/products/{id}`  Update product (admin)
- `DELETE /api/products/{id}`   Delete product (admin)
- `GET /api/products/search?q={keyword}`  Search products by keyword
## Category APIs
- `GET /api/categories`  Get all categories
- `GET /api/categories/{id}`  Get category details
- `POST /api/categories`  Add new category (admin)
- `PUT /api/categories/{id}`  Update category (admin)
- `DELETE /api/categories/{id}`   Delete category (admin)
## Cart APIs
- `GET /api/cart/{user_id}`  Get user's cart
- `POST /api/cart/add`  Add product to cart
- `PUT /api/cart/update`  Update cart item quantity
- `DELETE /api/cart/remove`  Remove item from cart
## Order APIs
- `POST /api/orders`  Place an order
- `GET /api/orders/{user_id}`   Get user's order history
- `GET /api/orders/{id}`  Get order details
- `PUT /api/orders/{id}/status`  Update order status (admin)
- `DELETE /api/orders/{id}`  Cancel order
## Admin APIs
- `GET /api/admin/users`  List all users
- `PUT /api/admin/users/{id}/role`  Change user role
- `DELETE /api/admin/users/{id}`  Delete user
## Other APIs
- `GET /api/statistics`  Get sales statistics (admin)
- `GET /api/notifications/{user_id}`  Get user notifications


## System Requirements
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Composer
- Web server (Apache/Nginx)

## Author
Heart To Community Team

## Contact
Email: tdquang.203@gmail.com

## Preview
```
http://localhost/HTCShop
```
