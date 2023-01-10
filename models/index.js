const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Driver = require('./Driver')
const Address = require('./Address')
const Truck = require('./Truck')
const Trailer = require('./Trailer')
const Order = require('./Order')
// users can make many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
}); 

// a post can only belong to one user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// a comment can only belong to one user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// a comment can only belong to one user 
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// users can make many comments 
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// users can make many posts 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Driver, Address, Order, Trailer, Truck };