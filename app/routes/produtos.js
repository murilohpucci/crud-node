var routes = function(app) {
    app.get('/produtos', function(req, res){
        var connection = app.infrastructure.connection();
        connection.query('select * from livros', function(err, results){
            res.render("produtos/lista", {produtos : results});
        });
        connection.end();
    });
}

module.exports = function(app) {
    return routes(app);
}