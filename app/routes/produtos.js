var routes = function(app) {
    app.get('/produtos', function(req, res){
        var connection = app.infrastructure.connection();

        new app.domain.produtos.ProdutosRepository(connection).lista(function(err, results){
            res.render("produtos/lista", {produtos : results});
        });

    });
}

module.exports = function(app) {
    return routes(app);
} 