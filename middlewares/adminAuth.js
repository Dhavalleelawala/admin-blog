module.exports.loginAuth =(req,res,next)=>{
    let {adminId} = req.cookies;
    if(adminId)
    {
        return next();
    }
    else
    {
        return res.redirect('/login');
    }
}