import express from "express";
import routes from "../routes";
import {
  getJoin,
  postJoin,
  logoutController,
  getLogin,
  postLogin
} from "../controllers/userController";
import {
  videoHomeController,
  videoSearchController
} from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.home, videoHomeController);
globalRouter.get(routes.search, videoSearchController);
globalRouter.get(routes.logout, logoutController);
export default globalRouter;
