/*Como no tenemos una base de datos a la que conectarnos,
simulamos la petición mediante una función fetch que contiene los datos del pedido 
y qye recibe como parámetro el id de la URL. Comprueba si el id de la URL y el id de nuestro
pedido concuerdan. Si son iguales, nos devuelve un objeto con los datos del pedido. Si son
diferentes, nos devuelve un objeto con un mensaje de error. Esta función es llamada desde api.js*/

exports.fetch = (idOrder, done) => {
    let orderData = {
        'idOrden': '12345',
        'buzon': '25',
        'letra':'N',
        'codigoActual': '4897',
        'codigoAnterior': '5341',
        'codigoMaestro': '17634985',
        'nombre': 'Marcos',
        'apellidos': 'Sanz Ruiz',
        'direccion': 'Calle Barca 25 1º D',
        'codigoPostal': '28011',
        'ciudad': 'Madrid',
        'provincia': 'Madrid',
        'telefono': '611999888',
        'email': 'marcossanz@gmail.com'
    };

    if(idOrder && idOrder===orderData.idOrden) {
        done(null, orderData);
    } else {
        err = {'error': 'Ha habido un problema'};
        done(err, null);
    }
};

