import { Schema, model} from 'mongoose';

const ReservaSchema = new Schema({
    usuario: {type:Schema.ObjectId, ref: 'usuarioschema'},
    lugar: {type:Schema.ObjectId, ref: 'restauranteschema'},
    momento:   {type:Date, require:true},
    cant_invitados:   {type:Number, require:true},
    estado: {type:Number, default:1},
    createAt:   {type:Date, default:Date.now}
})

const Reserva = model('reservaschema',ReservaSchema);

export default Reserva;