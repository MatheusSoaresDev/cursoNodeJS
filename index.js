const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro=> {
    if(erro){
        console.log("erro no BD")
    } else {
        console.log("sucesso no BD")

        Tabelas.init(conexao)

        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})
