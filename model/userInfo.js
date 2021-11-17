const  mongo  = require("mongoose");

const userInfoSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userInfoModel = mongo.model("userInfo", userInfoSchema);

module.exports = {
  userInfoModel,
};
