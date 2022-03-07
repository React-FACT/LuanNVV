const express = require('express');
const appRouter = express.Router();
const handleCRUD = require('../controllers/user.handleCRUD')

// test router
appRouter.get('/', (req, res) => {
    return res.send('hello luahn master ne')
});

// CRUD for USER
appRouter.get('/api/v1/get_all/:id', handleCRUD.handleGetAllUser);
appRouter.post('/api/v1/add_user', handleCRUD.handleAddUser);
appRouter.delete('/api/v1/delete_user/:id', handleCRUD.handleDeleteUser);
appRouter.put('/api/v1/update_user', handleCRUD.handleUpdateUser);



module.exports = { appRouter };
