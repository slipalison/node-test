const express = require('express');
const testController = require('../api/controllers/testeController');

module.exports = server => {

    const protectedRoutes = express.Router();
    server.use('/api', protectedRoutes);

    protectedRoutes.get('/v1/test', testController.test);
}