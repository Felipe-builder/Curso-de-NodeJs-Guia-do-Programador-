const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'password', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "UMA NOITE DE AFETOS",
//     conteudo: "Ele gostava de dançar com a sua amada no baile, e lhe enchia de afagos para preencher o coração de sua bela com pugente regozijo"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})

// Usuario.create({
//     nome: "Lincoln",
//     sobrenome: "Farias",
//     idade: 18,
//     email: "lincoln-kiser@gmail.com"
// })