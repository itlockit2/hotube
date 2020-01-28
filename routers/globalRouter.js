import express from "express";
import routes from "../routes";
import { joinController, loginController, logoutController } from "../controllers/userController";
import { videoHomeController, videoSearchController} from "../controllers/videoController"
const globalRouter = express.Router();

globalRouter.get(routes.home, videoHomeController);
globalRouter.get(routes.search, videoSearchController);
globalRouter.get(routes.join, joinController);
globalRouter.get(routes.login, loginController);
globalRouter.get(routes.logout, logoutController);
export default globalRouter;