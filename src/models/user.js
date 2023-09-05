import mongoose from "mongoose";

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

const User = mongoose.model('User', userSchema);

export default User;