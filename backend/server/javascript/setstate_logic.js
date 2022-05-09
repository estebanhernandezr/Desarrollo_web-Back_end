const database = require('../database/connection');

const set_state = async function(req, res) {
    const connection = database.get_database();
    let collection_name = "sent_registers";
    const query = {
        codigo_envio: req.params.codigo_envio,
    };
    const updates = {
        $set: {
            last_modified: new Date(),
            estado: req.params.estado,
        }
    };
    console.log(query);
    console.log(updates);
    connection.collection(collection_name).updateOne(query, updates, function(err, _result) {
        if (err) {
            res.status(400).send({ message: `Error updating item with code: ${query.codigo_envio}!`});
        } else {
            res.status(200).send({codigo: req.params.codigo_envio, estado: req.params.estado});
        }
    });
}


module.exports = {
    set_estado: set_state,
};