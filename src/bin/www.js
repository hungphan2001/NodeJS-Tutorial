const express = require('express');
const app = express();
const config = require('config');
app.use(express.urlencoded({extended:true}));
app.use(require(`${__dirname}/../apps/app.js`));
const server = app.listen(port=config.get('app.port'), (req,res)=>{
    console.log(`Server running on port ${port}`);
});