
const mysql = require('mysql');

let cnn;
async function getInstance_MYSQL() {
    var connection = mysql.createConnection(global.mysqlConnection);
    connection.connect(function (err) {
        if (err) {
            console.log(err);
            connection.end();
            process.exit(0);
        }
        console.log(`CONEXION EXITOSA A LA BASE DE DATOS DE MYSQL hacia ${global.mysqlConnection.host}:${global.mysqlConnection.port}`);
    });
    return connection;
}

async function getAll(sql, parametros) {
    // consulta retornando la lista
    cnn = await getInstance_MYSQL();

    return new Promise((resolve, reject) => {
        cnn.query(sql, (Array.isArray(parametros) ? parametros : []), function (err, results) {
            if (err) {
                throw err;
            }
            resolve(JSON.parse(JSON.stringify(results)));
        });
    })
}

async function getOne(sql, parametros) {
    let rows = await getAll(sql, parametros);
    return (rows && rows.length ? rows[0] : null);
}

module.exports = {
    getOne,
    getAll,
    getInstance_MYSQL
}
