const admin = require("../models/adminSchema");
const fs = require('fs');
module.exports.addAdminData = async (req, res) => {
    try {

        if (req.file) {
            req.body.image = req.file.path;
        }
        req.body.name = req.body.fname + ' ' + req.body.lname;
        await admin.create(req.body);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports.deleteAdmin = async (req, res) => {
    try {
        let { adminId } = req.params;
        let deletedData = await admin.findByIdAndDelete(adminId);
        console.log("Admin Deleted..");
        fs.unlinkSync(deletedData.image);
        return res.redirect('/view_admin')
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin')
    }
}

module.exports.editAdmin = async (req, res) => {
    try {
        let { adminId } = req.params;
        req.body.name = req.body.fname + " " + req.body.lname;
        if (req.file) {
            req.body.image = req.file.path;
            fs.unlinkSync(req.body.oldImage)
        }
        console.log(req.body);
        let adminData = await admin.findByIdAndUpdate(adminId, req.body);
        return res.redirect('/view_admin');
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin');
    }
}

module.exports.logout=(req,res)=>{
    res.clearCookie('adminId');
    return res.redirect('/');
}