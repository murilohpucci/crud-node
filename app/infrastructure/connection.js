var connection = function() {
    return require('mysql').createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'casadocodigo_nodejs'
    });
}

module.exports = function () {
    return connection;
}
