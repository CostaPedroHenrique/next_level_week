import express from "express";

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();

const pointController = new PointsController;
const itemController = new ItemsController;


routes.get("/items", itemController.index);

routes.post('/points', pointController.create );
routes.get('/points', pointController.index);

routes.get('/points/:id', pointController.show);



export default routes;