// import Post model
const { Post } = require('../models');

const postData = [
  {
    title: 'CSS framework',
    description: 'Any suggestions on a good CSS framework?',
    user_id: 3,
  },
  {
    title: 'Insomnia',
    description: 'Opnions of Insomnia?',
    user_id: 1,
  },
  {
    title: 'Opnions on mySQL',
    description: 'Tell me why you like or dislike mySQL',
    user_id: 2,
  },
  {
    title: 'for loops',
    description: 'What is the basic for loop?',
    user_id: 4,
  },
 
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;