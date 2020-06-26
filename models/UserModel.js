const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    // enterpriseID: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    nickName: String,
    email: String,
    password: Number
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema) 
//NOTA: no es escalable crear modelos de este estilo si vamos a utilizar mas de una coneccion.
// en caso de utilizar mas de una coneccion, tenemos que mapear los modelos a las conecciones especificas.
// mongoose.model sirve para cuando generamos la coneccion a la db con mongoose.connect y no con mongoose.createConnection.

fix error