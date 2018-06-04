/*Como no tenemos una base de datos a la que conectarnos,
simulamos la petición mediante una función fetch que contiene los datos del pedido 
y qye recibe como parámetro el id de la URL. Comprueba si el id de la URL y el id de nuestro
pedido concuerdan. Si son iguales, nos devuelve un objeto con los datos del pedido. Si son
diferentes, nos devuelve un objeto con un mensaje de error. Esta función es llamada desde api.js*/


exports.fetch = (idOrder, done) => {
    let orderData = {
        'idOrden': '12345',
        'buzon': '25',
        'letra': 'N',
        'codigoActual': '4897',
        'codigoAnterior': '5341',
        'codigoMaestro': '17634985',
        'estado': 'activo'
    };
    if (idOrder && idOrder === orderData.idOrden) {
        done(null, orderData);
    } else {
        err = { 'error': 'Ha habido un problema' };
        done(err, null);
    }
};

exports.setStatus = (idOrder, data, done) => {
    console.log(idOrder);
    console.log(data);
    let orderData = {
        'idOrden': '12345',
        'buzon': '25',
        'letra': 'N',
        'codigoActual': '4897',
        'codigoAnterior': '5341',
        'codigoMaestro': '17634985',
        'estado': 'activo'
    };
    if (idOrder.id && idOrder.id === orderData.idOrden) {
        orderData.estado === 'cerrado';
        console.log(orderData.estado);
        //LLamar a la función que pasa la tabla de códigos al siguiente
        finalizado = {'exito': 'transacción cerrada'}
        done(null, finalizado);
    } else {
        err = { 'error': 'Ha habido un problema' };
        done(err, null);
    }
}

