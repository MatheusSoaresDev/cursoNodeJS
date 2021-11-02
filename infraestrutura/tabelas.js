class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL\n' +
            '        AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),\n' +
            '        servico varchar(20) NOT NULL, status varchar(20) NOT NULL,\n' +
            '        observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log("Tabela atendimento criada")
            }
        })
    }
}

module.exports = new Tabelas