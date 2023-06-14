const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /.+\@.+\..+/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre(
  'save',
  async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
