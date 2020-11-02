// functionName(parent, args, context, info)
// parent gives you what was the rsult of the input of the ast step
// (we use underline since were not using it)
// args is arguments
export default {
  Query: {
    async getPosts(_parent, _args, { db }, _info) {
      try {
        // createdAt -1 states to have it in descendant order
        let posts = await db
          .collection("posts")
          .find()
          .sort({ createdAt: -1 })
          .toArray();
        posts = posts.map((post) => ({ ...post, id: post._id }));
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
