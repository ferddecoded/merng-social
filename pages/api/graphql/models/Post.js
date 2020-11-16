import { Schema } from "mongoose";
import schemaHandler from "../../../../utils/schema-handler";

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  // creating relations in our db
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export default schemaHandler("post", postSchema);
