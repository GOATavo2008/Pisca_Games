const express = require("express");

const router = express.Router();

const usuarioController =
  require("../controllers/UsuarioController");

const autenticar =
  require("../src/middlewares/authMiddleware");

router.post(
  "/usuarios",
  usuarioController.criarUsuario
);

router.get(
  "/usuarios",
  autenticar,
  usuarioController.consultarUsuarios
);

router.post(
  "/login",
  usuarioController.loginUsuario
);

module.exports = router;
