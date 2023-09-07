import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
          email: {
                    type: String,
                    required: true,
                    unique: true
          },
          password: {
                    type: String,
                    reuqired: true,
          },
          name: {
                    type: String,
                    reuqired: true
          }
}, { timestamps: true });

userSchema.pre('save', function (next) {
          const user = this;
          const SALT = bcrypt.genSaltSync(9);
          const encryptedPassword = bcrypt.hashSync(user.password, SALT);
          user.password = encryptedPassword;
          next();
})

const User = mongoose.model('User', userSchema);

export default User;