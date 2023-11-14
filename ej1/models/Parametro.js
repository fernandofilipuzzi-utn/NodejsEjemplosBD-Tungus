var tungus = require('tungus');
var mongoose = require('mongoose')
bson = require('bson');
const Schema = mongoose.Schema;

const ParametroSchema = new Schema({
    nombre:  String,
    valor:   String
    });

// export model
const Parametro = mongoose.model('Parametro', ParametroSchema);
module.exports = Parametro;
