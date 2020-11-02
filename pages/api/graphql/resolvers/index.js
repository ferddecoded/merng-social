import postResolvers from "./post";

export default {
  Query: {
    ...postResolvers.Query,
  },
};
