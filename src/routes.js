const express = require('express');
const routes = express.Router();

const videoController = require('./controllers/videoController');
const VideoMiddleware = require('./middlewares/VideoMiddleware');


routes.get("/videos", videoController.index);
routes.post("/videos", videoController.store);
routes.put("/videos/:id", VideoMiddleware.validateId, videoController.update);
routes.delete("/videos/:id", VideoMiddleware.validateId, videoController.delete);
routes.patch("/videos/:id", VideoMiddleware.validateId, videoController.updateLike);

module.exports = routes;