var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                            if (resultadoAutenticar.length == 1) {
                               const usuario = resultadoAutenticar[0]
                                res.json({
                                    idFuncionario: resultadoAutenticar[0].idFuncionario,
                                    email: resultadoAutenticar[0].email,
                                    nome: resultadoAutenticar[0].nome,
                                    senha: resultadoAutenticar[0].senha,
                                });
                            }  else if (resultadoAutenticar.length == 0) {
                                    res.status(403).send("Email e/ou senha inválido(s)");
                                } else {
                                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                                }
                            } 
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
<<<<<<< HEAD
=======
    var senha = req.body.senhaServer;
>>>>>>> b98183120c83a218a2438e0f6db57d4fe5637a57
    var fkEmpresa = req.body.idEmpresaVincularServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
<<<<<<< HEAD
=======
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
>>>>>>> b98183120c83a218a2438e0f6db57d4fe5637a57
    } else if (cpf == undefined){
        res.status(400).send("Seu CPF está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
<<<<<<< HEAD
        usuarioModel.cadastrar(nome, email, cpf, senha, fkEmpresa)
=======
        usuarioModel.cadastrar(nome, email, senha, cpf, fkEmpresa)
>>>>>>> b98183120c83a218a2438e0f6db57d4fe5637a57
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}