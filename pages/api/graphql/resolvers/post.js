import Post from "../models/Post";
// functionName(parent, args, context, info)
// parent gives you what was the rsult of the input of the ast step
// (we use underline since were not using it)
// args is arguments
export default {
  Query: {
    async getPosts() {
      try {
        // createdAt -1 states to have it in descendant order
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
