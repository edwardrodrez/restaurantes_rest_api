import routerx from 'express-promise-router';

const app = routerx()

//post 
app.post('/add')

//get
app.get('/query',);
app.get('/list', );

//put
app.put('/update',);
app.put('/activate', );
app.put('/desactivate', );

//remove
app.delete('/remove', );

export default app ;