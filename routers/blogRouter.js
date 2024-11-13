const express = require('express');
const blogCtl = require('../controllers/blogController');
const { loginAuth } = require('../middlewares/adminAuth');

const blogRouter = express.Router();

blogRouter.post('/add_blog',blogCtl.add_blog);
blogRouter.get('/add_blog',loginAuth, blogCtl.add_blogPage);
blogRouter.get('/view_blog',loginAuth,blogCtl.view_blogPage);
blogRouter.get('/all_blog',loginAuth,blogCtl.All_blogPage);
blogRouter.get('/:id',blogCtl.blogLike);
module.exports = blogRouter;