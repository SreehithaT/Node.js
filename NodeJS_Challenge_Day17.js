const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

async function addUserToDatabase(user) {
  try {
    const newUser = new User(user);

    await newUser.save();

    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user', error.message);
  }
}

mongoose.connect('mongodb://localhost:27017/DemoDay17', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("connected to MongoDB");
}).catch(error => {
    console.error("Error connecting to MongoDB");
}
);
addUserToDatabase({ username: 'Sreehitha', email: 'sreehitha@gmail.com' });
