var express = require('express');
var router = express.Router();

/* GET home page. */
/*Cuando el usuario abre la URL de acceso, el servidor envía todos los datos
a la aplicación de front en un json. Lo hacemos de este modo con datos creados por nosotros
al no disponer de una conexión a una base de datos que nos provea con los datos. */
router.get('/nuevaorden', function(req, res, next) {
    let datosPedido = {
        'buzon': '25',
        'letra':'N',
        'codigoActual': '4897',
        'codigoAnterior': '5341',
        'codigoMaestro': '17634985'
    }
    let datosUsuario = {
        'nombre': 'Marcos',
        'apellidos': 'Sanz Ruiz',
        'direccion': 'Calle Barca 25 1º D',
        'codigoPostal': '28011',
        'ciudad': 'Madrid',
        'provincia': 'Madrid',
        'telefono': '611999888',
        'email': 'marcossanz@gmail.com'
    }
    res.json({
        pedido: datosPedido,
        usuario: datosUsuario
    })

  });


module.exports = router;