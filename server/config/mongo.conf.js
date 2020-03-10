const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
    keepAlive: true,
    autoIndex: false,
    keepAliveInitialDelay: 300000,
}

mongoose.connect(process.env.MGDB_URI, options).then(res => console.log("DB Connection established"), (err) => console.log(err));

const pool = mongoose.connection

// const Cat = mongoose.model('project',  { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow')).catch(err=>console.log(err));



module.exports.pool = pool