import { Router } from "express";
import greenRoutes from "./greenRoutes";
import votesRoutes from "./votes";

const routes = Router();

// Rotas reais
routes.use("/routes/green", greenRoutes);
routes.use("/votes", votesRoutes);

export default routes;
