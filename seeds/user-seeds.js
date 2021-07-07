// import User model
const { User } = require('../models');

const userData = [
  {

    username: 'iamalittleforest',
    password: 'password1'
  },
  {
    username: 'HardJumper',
    password: 'test1234'
  },
  {
    username: 'oms_ronen',
    password: 'password'
  },
  {
    username: 'dude',
    password: '123456789'
  },
  {
    username: 'fake',
    password: '12345678'
  },
  {
    username: 'beachlover',
    password: 'ocean1234'
  },
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
  });

module.exports = seedUsers;