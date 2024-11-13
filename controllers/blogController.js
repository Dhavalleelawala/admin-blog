const blogs = require("../models/blogSchema");

module.exports.add_blogPage=(req,res)=>{
    const {adminId} = req.cookies;
    return res.render('./pages/add_blog',{authId:adminId});
}

module.exports.view_blogPage=async(req,res)=>{
    try {
        const Blogs = await blogs.find({adminId:req.cookies.adminId});
        return res.render('./pages/view_blog',{blogs:Blogs});
    } catch (error) {
        console.log(error.message);        
        return res.render('./pages/view_blog');
    }
    
}

module.exports.add_blog = async(req,res)=>{
    try {
        await blogs.create(req.body);
        console.log("Blog Created.");        
        return res.redirect('back');
    } catch (error) {
        console.log(error.message);
        return res.redirect('back');        
    }
}

module.exports.All_blogPage=async(req,res)=>{
    try {
       let blogsData = await blogs.find({});
       let {adminId} = req.cookies;
       return res.render('./pages/all_blog',{blogs:blogsData,adminId});
    } catch (error) {
        console.log(error);        
        return res.render('./pages/all_blog');
    }
}   

module.exports.blogLike =async(req,res)=>{
    try {
        let {id} = req.params;
        let {adminId} = req.cookies;
        let blog = await blogs.findById(id);

        let userIndex = blog.likeBy.indexOf(adminId);

        if(userIndex == -1)
        {
            blog.likeBy.push(adminId);
        }
        else
        {
            blog.likeBy.splice(userIndex,1);
        }

        await blog.save();
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');        
    }
}