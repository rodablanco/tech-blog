// import Comment model
const { Comment } = require('../models');

const commentData = [
  {
    
    body: 'Bootstrap, Bulma are 2 good ones',
    user_id: '1',
    post_id: '1', 
  },
  {

    body: 'Its the only one I use!',
    user_id: '2',
    post_id: '2', 
  },
  {

    body: 'Its tooo structured, noSQL is better because the structure adapts to the data. SQL you have to adapt the data to the structure',
    user_id: '5',
    post_id: '3', 
  },
  {
    
  
    body: 'for (statement 1; statement 2; statement 3) {Code block to be executed}',
    user_id: '5',
    post_id: '4', 
  },
  
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;