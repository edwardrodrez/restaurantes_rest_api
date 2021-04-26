import routerx from 'express-promise-router';

const app = routerx()

//post 
app.post('/add')
//get
app.get('/add', (req, res, next) =>{
    console.log('hola desde articulo');
});

export default app ;