const bcrypt = require("brcrypt");

const usuarioModel = require("../model/UsuarioModel");

const criarUsuario = async (req,res) => {
  try {
    const{
      nome,
      login,
      senha
    } = req.body;

  const senhaSecreta = await brcrypt.hash(senha);

  await usuarioModel.criarUsuario (
    nome,
    login,
    senhaSecreta
    );

  res.status(201).json({
    mensagem:"Usuário criado com sucesso!"
  })
    
  } catch (erro) {
    res.status(502).json({
      mensagem:"Erro ao cadastrar usuário!"
    })
  }
}
