const express = require('express');
const router = express.Router();
const chatController  =  require('../controllers/chatController');
const directoryController  =  require('../controllers/directoryController');
const messageController  =  require('../controllers/messageController');
const userController  =  require('../controllers/userController');

router.get('/chats', chatController.getChats);

router.get('/directorys', directoryController.getDirectorys);

router.get('/messages', messageController.getMessages);
router.get('/messages/:_id', messageController.getMessageById);

router.get('/users', userController.getUsers);
router.get('/users/:_id', userController.getUsereById);

module.exports = router;