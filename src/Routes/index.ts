import { Router } from "express";
import {CreateUser, DeleteUser, homeController, UpdateUser} from '../controllers/userController'

const Routes = Router()

Routes.get('/', homeController);

Routes.post('/addnewUser', CreateUser);
Routes.get('/user/:id/update',UpdateUser)
Routes.get('/user/:id/delete', DeleteUser)

export default Routes