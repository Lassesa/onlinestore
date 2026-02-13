const express=require('express');
const app=express();
const PORT=3000;
const productsRouter=require('./routes/products');

app.use(express.json());

app.get('/', function(request, response){
    response.send("Verkkokauppa API");
});

app.use('/products',productsRouter);


app.listen(PORT, function(){
    console.log("Palvelin kuuntelee porttia: "+PORT);
});

module.exports=app;