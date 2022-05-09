const database = require('../database/connection');

const consult_register = async function(req, res) {
    const connection = database.get_database();
    let collection_name = "sent_registers";
    let query = {
        codigo_envio: req.params.codigo_envio
    };

    connection.collection(collection_name).find(query)
    .toArray()
    .then(items => {
        res.status(200).send({
            coincidencias: items,
        });
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));
}


module.exports = {
    consult_envio: consult_register,
};