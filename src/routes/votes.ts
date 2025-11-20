import { Router } from "express";

const votesRoutes = Router();

/**
 * POST /votes
 * Body: { segmentId: string }
 */
votesRoutes.post("/", (req, res) => {
  return res.json({
    message: "Voto registrado (mock)",
    data: req.body,
  });
});

/**
 * GET /votes
 * Lista votos acumulados
 */
votesRoutes.get("/", (_req, res) => {
  return res.json({
    votes: [],
    message: "Ainda sem implementação",
  });
});

export default votesRoutes;


//essa rota aqui vai ser a rota dos votos