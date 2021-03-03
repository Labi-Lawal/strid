const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/strid', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', ()=>{
    console.log('****** CONNECTION TO DATABSE IS ESTABLISHED *******');
    console.log('***************************************************');
    console.log();
}).on('error', (error)=>{
    console.log('There was an error connecting to the database', error)
});