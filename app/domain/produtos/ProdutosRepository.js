function ProdutosRepository(connection) {
    this._connection = connection;
}

ProdutosRepository.prototype.lista = function(callback) {
    this._connection.query('select * from livros', callback);
    this._connection.end();
}

module.exports = function() {
    return ProdutosRepository;
}