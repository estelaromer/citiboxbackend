var express = require('express');
var router = express.Router();
//Importamos el modelo
let modelOrder = require('../models/orders');


router.get('/nuevaorden/:id', function(req, res, next) {
    //Almacenamos el id de la URL
    let idOrden = req.params.id;
    /*Llamamos al método que comprueba si el id de la URL concuerda con el id de pedido
    que tenemos almacenado*/
    modelOrder.fetch(idOrden, (err, row) => {
        if(err) return res.json(err);
        res.json(row);
    });
});

module.exports = router;