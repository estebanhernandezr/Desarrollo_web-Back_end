const database = require('../database/connection');

const show_registers = async function(req, res) {
    const connection = database.get_database();
    let collection_name = "sent_registers";

    connection.collection(collection_name).distinct('nombre_emisor')
    .then(emisores => {
        emisores.forEach(emisor => {
            const query = {
                nombre_emisor: emisor,
            };
            connection.collection(collection_name).find(query)
            .toArray()
            .then(items => {
                console.log(emisor);
                console.log(items);
            })
            .catch(err => console.error(`Failed to find documents: ${err}`));
        });
    });
    connection.collection(collection_name).distinct('nombre_receptor')
    .then(receptores => {
        receptores.forEach(receptor => {
            const query = {
                nombre_receptor: receptor,
            };
            connection.collection(collection_name).find(query)
            .toArray()
            .then(items => {
                console.log(receptor);
                console.log(items);
            })
            .catch(err => console.error(`Failed to find documents: ${err}`));
        });
    });
}

module.exports = {
    mostrar_registros: show_registers,
};