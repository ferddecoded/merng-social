import postResolvers from "./post";

export default {
  Post: {
    // parent represents the item returned, in this case the post
    likeCount(parent) {
      return parent.likes.length;
    },
    commentCount(parent) {
      return parent.comments.length;
    },
  },
  Query: {
    ...postResolvers.Query,
  },
};
