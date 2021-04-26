import { Schema, model} from 'mongoose';

const UsuarioSchema = new Schema({
    rol: {type:String, maxlength:30, require:true},
    nombre: {type:String, maxlength:70, require:true},
    tipo_documento: {type:String, maxlength:30, require:true},
    num_documento: {type:String, maxlength:15, require:true, unique:true},
    direccion: {type:String, maxlength:60, require:true},
    telefono: {type:String, maxlength:12, require:true, unique:true},
    email: {type:String, maxlength:30, require:true, unique:true},
    password: {type:String, maxlength:100, require:true},
    estado: {type:Number, default:1},
    createAt:   {type:Date, default:Date.now}
})

const Usuario = model('usuarioschema',UsuarioSchema);

export default Usuario;