const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mernStackDB', {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log('Connected to MongoDB...') )
.catch(err => console.error('Could not connect to MongoDB : '+ JSON.stringify(err, undefined,2)));