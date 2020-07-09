const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types;

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },

  postedBy:{
    type:ObjectId,
    ref :"User"
  }
});

mongoose.model("Note", noteSchema);
