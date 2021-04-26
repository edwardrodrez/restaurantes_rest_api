import mongoose from 'mongoose';
import {database} from './keys';


mongoose.connect(database,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(data => console.log("DB Conectada"))
    .catch(err => console.log("Error con la conexion DB : " + err));