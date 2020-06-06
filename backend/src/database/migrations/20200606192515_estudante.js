
exports.up = function(knex) {
    return knex.schema.createTable('estudante', function(table) {
        table.string('idEstudante').primary();
        table.string('nome').notNullable();
        table.date('dataNascimento').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('estudante');  
};
