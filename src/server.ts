import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Porta vinda do ambiente ou padrão 
const PORT = process.env.PORT || 3333;

// Middlewares 
app.use(cors());
app.use(express.json());

// Rotas principais agregadas
app.use(routes);

// Healthcheck
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`role-api rodando na porta ${PORT}`);
});
