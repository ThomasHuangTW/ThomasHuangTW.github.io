const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

const users = {
  'email': {
  'username': ,
  'password':
  }};
// 1. Register
router.post('signup', async (req, res) => {
  const {email, password, username} = req.body;
  console.log(email, password, username);
  if(users[email]) {
    return res.status(400).send({'error': "Existed"});
  }
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  users[email] = {
    username,
    password: hashPassword
})
// 2. Login
// 3. Verify account
