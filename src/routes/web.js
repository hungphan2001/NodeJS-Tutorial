const express = require('express');
const router = express.Router();
const session = require("express-session");
const AuthMiddlewares = require("../middlewares/auth");
//Import controller
const TestController = require('../apps/controllers/test');
const AuthController = require('../apps/controllers/auth');
const AdminController = require('../apps/controllers/admin');
const CategoryController = require('../apps/controllers/category');
const ProductController = require('../apps/controllers/product');
const UsersController = require('../apps/controllers/users');

//Upload

const UploadMiddleware = require("../middlewares/upload");
router.get("/test",(req,res,next)=>{
   
},TestController.test);

router.get("/test1",TestController.test1);
router.get("/test2",TestController.test2);
//Router Admin

  router.get('/admin/login',AuthMiddlewares.checkLogin,AuthController.getLogin);
  router.post('/admin/login',AuthMiddlewares.checkLogin,AuthController.postLogin);
  router.get('/admin/logout',AuthMiddlewares.checkAdmin,AuthController.logout);
  router.get ('/admin/dashboard',AuthMiddlewares.checkAdmin,AdminController.index);
  

  //Route Product
  router.get('/admin/products',AuthMiddlewares.checkAdmin,ProductController.index);

  router.get('/admin/products/create',AuthMiddlewares.checkAdmin,ProductController.create);
  router.post('/admin/products/store',AuthMiddlewares.checkAdmin,UploadMiddleware.single("thumbnail"),ProductController.store);
  router.get('/admin/products/edit/:id',AuthMiddlewares.checkAdmin,ProductController.edit);
  router.post('/admin/products/update/:id',AuthMiddlewares.checkAdmin,UploadMiddleware.single("thumbnail"),ProductController.update);
  router.get('/admin/products/delete/:id',AuthMiddlewares.checkAdmin,ProductController.del);

  //Router User

  router.get ('/admin/users',AuthMiddlewares.checkAdmin,UsersController.users);
  
  router.get('/admin/users/create',AuthMiddlewares.checkAdmin,UsersController.create);
  
  router.get('/admin/users/edit/:id',AuthMiddlewares.checkAdmin,UsersController.edit);
  
  router.get('/admin/users/delete/:id',AuthMiddlewares.checkAdmin,UsersController.del);

  //Router Category

  router.get('/admin/category',AuthMiddlewares.checkAdmin,CategoryController.category);

  router.get('/admin/category/create',AuthMiddlewares.checkAdmin,CategoryController.category);


  router.get('/admin/category/edit/:id',AuthMiddlewares.checkAdmin,CategoryController.category);

  router.get('/admin/category/delete/:id',(req,res)=>{
    res.render('admin/categories/edit_category>')
  })

  //Rounter Products


    // router.get('/admin/products',AuthMiddlewares.checkAdmin,ProductController.edit);

    // router.get('/admin/products',AuthMiddlewares.checkAdmin,ProductController.del);


  //  router.get('/admin/products',(req,res)=>{
  //   res.render('admin/products/product');
  // })

  // router.get('/admin/products/create',(req,res)=>{
  //   res.render('admin/products/add_product');
  // })

  // router.get('/admin/products/edit/:id',(req,res)=>{
  //   res.render('admin/products/edit_product')
  // })

  // router.get('/admin/products/delete/:id',(req,res)=>{
  //   res.render('admin/products/edit_product>')
  // })

  module.exports = router;
