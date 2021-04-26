import { Schema, model} from 'mongoose';

const RestauranteSchema = new Schema({
    propietario: {type:Schema.ObjectId, ref: 'usuarioschema'},
    reservas: {type:Schema.ObjectId, ref: 'reservaschema'},
    nombre: {type:String, maxlength:70, require:true},
    descripcion: {type:String, maxlength:30, require:true},
    direccion: {type:String, maxlength:60, require:true},
    estado: {type:Number, default:1},
    createAt:   {type:Date, default:Date.now}
})

const Restaurante = model('restauranteschema',RestauranteSchema);

export default Restaurante;