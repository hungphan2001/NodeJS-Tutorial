const express = require('express');
const router = express.Router();
//Import controller
const TestController = require('../apps/controllers/test');
const AuthController = require('../apps/controllers/auth');
const AdminController = require('../apps/controllers/admin');
const ProductController = require('../apps/controllers/product');
router.get("/test",TestController.test);

router.post("/test1",TestController.test2);

//Router Admin

  router.get('/admin/login',AuthController.getLogin);
  router.post('/admin/login',AuthController.postLogin);

  router.get ('/admin/dashboard',AdminController.index);
  
  router.get('/admin/products',ProductController.products);
  
  router.get('/admin/products/create',ProductController.create);
  
  router.get('/admin/products/edit/:id',ProductController.edit);
  
  router.get('/admin/products/delete/:id',ProductController.del);

  //Router User

  router.get('/admin/users',(req,res)=>{
    res.send("<h1>Users</h1>");
  })

  router.get('/admin/users/create',(req,res)=>{
    res.send('<h1>Create user</h1>');
  })

  router.get('/admin/users/edit/:id',(req,res)=>{
    res.send('<h1>Edit</h1>')
  })

  router.get('/admin/users/delete/:id',(req,res)=>{
    res.send('<h1>Delete</h1>')
  })

  //Router Category

  router.get('/admin/category',(req,res)=>{
    res.send("<h1>Category</h1>");
  })

  router.get('/admin/category/users/create',(req,res)=>{
    res.send('<h1>Create user</h1>');
  })

  router.get('/admin/category/users/edit/:id',(req,res)=>{
    res.send('<h1>Edit</h1>')
  })

  router.get('/admin/category/users/delete/:id',(req,res)=>{
    res.send('<h1>Delete</h1>')
  })

  module.exports = router;
