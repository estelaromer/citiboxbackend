/*Como no tenemos una base de datos a la que conectarnos,
simulamos la petición mediante una función fetch que contiene los datos del pedido 
y qye recibe como parámetro el id de la URL. Comprueba si el id de la URL y el id de nuestro
pedido concuerdan. Si son iguales, nos devuelve un objeto con los datos del pedido. Si son
diferentes, nos devuelve un objeto con un mensaje de error. Esta función es llamada desde api.js*/

let fs = require('fs')

 exports.fetch = (idOrder, done) => {
    fs.readFile('./data/data.json', 'UTF-8', (errLectura, content) => {
        if (errLectura) {
            err = {'error': 'problema leyendo fichero'}
            done(err, null)
        } else {
            let order = JSON.parse(content)
            console.log(order)
            if (idOrder && idOrder === order.idOrden) {
                if (order.estado === 'activo'){
                    done(null, order);
                } else if (order.estado === 'cerrado'){
                    err = {'error': 'transacción ya cerrada'}
                    done(err, null)
                }
            } else {
                    err = { 'error': 'ha habido un problema' };
                    done(err, null);
            }
        }
    })
};

exports.setStatus = (idOrder, data, done) => {
    fs.readFile('./data/data.json', 'UTF-8', (errLectura, content) => {
        if(errLectura) {
            err = {'error': 'problema leyendo fichero'}
            done(err, null)
        } else {
            let order = JSON.parse(content)
            console.log(order)
            if (idOrder.id && idOrder.id === order.idOrden) {
                order.estado = data.param2;
                if(order.estado === 'cerrado'){
                    order.estado = 'cerrado';
                    finalizado = {'exito': 'transacción cerrada'}
                    if(data.param1 === order.codigoMaestro){
                        //Llamar a la funcion que resetea la tabla de códigos
                    } else {
                        //Llamar a la funcion que mueve el puntero de la tabla de códigos al siguiente elemento
                    }
                } else {
                    order.estado = 'incidencia';
                    finalizado = {'incidencia': 'incidencia recibida'}
                }
                done(null, finalizado);
            } else {
                err = { 'error': 'Ha habido un problema' };
                done(err, null);
            }
            fs.writeFile('./data/data.json', JSON.stringify(order), (err) => {
                if (err) console.log (err.message);
                console.log('The file has been saved!');
              });
        }
    })
}

/*let orderData = {
    'idOrden': '12345',
    'buzon': '25',
    'letra': 'N',
    'codigoActual': '4897',
    'codigoAnterior': '5341',
    'codigoMaestro': '17634985',
    'estado': 'activo'
};

exports.fetch = (idOrder, done) => {
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
    if (idOrder.id && idOrder.id === orderData.idOrden) {
        orderData.estado = data.param2;
        if(orderData.estado === 'cerado'){
            finalizado = {'exito': 'transacción cerrada'}
            if(data.param1 === orderData.codigoMaestro){
                //Llamar a la funcion que resetea la tabla de códigos
            } else {
                //Llamar a la funcion que mueve el puntero de la tabla de códigos al siguiente elemento
            }
        } else {
            finalizado = {'incidencia': 'incidencia recibida'}
        }
        done(null, finalizado);
    } else {
        err = { 'error': 'Ha habido un problema' };
        done(err, null);
    }
}*/
