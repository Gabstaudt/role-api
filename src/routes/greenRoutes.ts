import { Router } from "express";

const greenRoutes = Router();

/**
 * POST /routes/green
 * Body: { origin: [lat, lon], destination: [lat, lon] }
 * Resposta futura: { route: [...], score: number }
 */

greenRoutes.post("/", (req, res) => {
  return res.json({
    message: "Rota verde ainda não implementada",
    recieved: req.body,
  });
});

export default greenRoutes;

//essa rota aqui vai ser a rota da rota verde