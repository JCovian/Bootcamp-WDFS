const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        // Not required if omitted
        type: String,
        default: "USER",
        enum: validRoles
    },
    active: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJSON = function() {
    // Queremos pasar a la base de datos todos los campos, pero cuando el post
    // nos devuelva los datos que no salga la contraseña
    const user = this;

    const userObject = user.toObject();

    delete userObject.password;
    delete userObject._v;

    return userObject;
}

userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("User", userSchema);