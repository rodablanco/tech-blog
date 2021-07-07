// import models
const Comment = require("./Comment")
const Post = require("./Post")
const User = require("./User")

//User to Post relation
User.hasMany(Post, {
    foreignKey:'user_id',
});

//User to comment relation
User.hasMany(Comment,{
    foreignKey:'user_id',
});

Post.belongsTo(User, {
    foreignKey:'user_id'
})
//Post to Comment relation
Post.hasMany(Comment, {
    foreignKey:'post_id',
});

Comment.belongsTo(User,{
    foreignKey:'user_id',
});

//
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = {Post, User, Comment};


