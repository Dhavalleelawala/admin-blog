const admin = require("../models/adminSchema");

module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.addAdminPage = (req, res) => {
    return res.render('./pages/add_admin');
}

module.exports.viewAdminPage = async (req, res) => {
    try {
        let data = await admin.find({});
        return res.render('./pages/view_admin', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view_admin');
    }
}

module.exports.editAdminPage = async (req, res) => {
    try {
        let { id } = req.params;
        let adminData = await admin.findById(id);
        return res.render('./pages/edit_admin', { admin: adminData });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.signupPage = (req, res) => {
    return res.render('./pages/signup');
}

module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

module.exports.login = async (req, res) => {
    try {
        console.log(req.body);

        let { email, password } = req.body;
        const currAdmin = await admin.findOne({ email })
        console.log(currAdmin);

        return res.cookie('adminId', currAdmin.id).redirect('/');
    } catch (error) {
        console.log(error.message);
        return res.redirect('back');
    }
}
