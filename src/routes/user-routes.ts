import { Router } from "express";
import { userController } from "../controllers/user-controller";
const router: Router = Router();

router.post("/create-user", userController.createUser);

router.post("/add-cryptocurrencies", userController.addCryptocurrencies);

router.get("/top-cryptocurrencies", userController.topCryptocurrencies);

export default router;
