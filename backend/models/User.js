import mangoose from 'mongoose';    

const userSchema = new mangoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});

const User = mangoose.model('User', userSchema);

export default User;