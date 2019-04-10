const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/api/box', BoxController.store);
routes.get('/api/box/:id', BoxController.show);
routes.post('/api/box/:id/file', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;
