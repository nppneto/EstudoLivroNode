module.exports = (app) => {
    const ContatosController = {
        index: function(req, res) {
            const { usuario } = req.session;
            const { contatos } = usuario;
            res.render('contatos/index', { usuario, contatos });
        },
        create: function(req, res) {
            const { contato } = req.body;
            const { usuario } = req.session;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
        show: function(res, req) {
            const { id } = req.params;
            const { usuario } = req.session;
            const contato = usuario.contatos[id];
            res.render('contatos/show', { id, contato });
        },
        edit: function(req, res) {
            const { id } = req.params;
            const { usuario } = req.session;
            const contato = usuario.contatos[id];
            res.render('contatos/edit', { id, contato, usuario });
        },
        update: function(req, res) {
            const contato = req.body;
            const { usuario } = req.session;
            usuario.contatos[req.params.id] = contato;
            res.redirect('/contatos');
        },
        destroy: function(req, res) {
            const { id } = req.params;
            const { usuario } = req.session;
            usuario.contatos.splice(id, 1);
            res.redirect('/contatos');
        }
    };
    return ContatosController;
};