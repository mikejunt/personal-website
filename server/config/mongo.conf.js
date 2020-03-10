const mongoose = require('mongoose');
mongoose.connect(process.env.MGDB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log(res), (err) => console.log(err));

const Cat = mongoose.model('project',  { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow')).catch(err=>console.log(err));

// module.exports