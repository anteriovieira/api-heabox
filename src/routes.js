const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.get('/', (req, res) => res.json({status: 'active'}));
routes.get('/box', BoxController.index);
routes.post('/box', BoxController.store);
routes.get('/box/:id', BoxController.show);
routes.post('/box/:id/file', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;
