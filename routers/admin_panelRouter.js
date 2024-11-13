const { Router } = require("express");
const AdminPCtl = require('../controllers/admin-panelController');
const { loginAuth } = require("../middlewares/adminAuth");


// admin panel Router.
const ApRouter = Router();

ApRouter.get('/',loginAuth, AdminPCtl.homePage);
ApRouter.get('/add_admin', AdminPCtl.addAdminPage);
ApRouter.get('/view_admin', AdminPCtl.viewAdminPage);
ApRouter.get('/edit_admin/:id', AdminPCtl.editAdminPage);
ApRouter.get('/signup', AdminPCtl.signupPage);
ApRouter.get('/login', AdminPCtl.loginPage);

ApRouter.post('/login',AdminPCtl.login)

module.exports = ApRouter;