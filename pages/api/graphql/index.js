import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
// import { MongoClient } from "mongodb";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import connectDB from "../../../utils/mongoose-connect";

require("dotenv").config();

export const config = {
  api: {
    bodyParser: false,
  },
};

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// let db;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: async () => {
  //   if (!db) {
  //     try {
  //       const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //       });
  //       if (!dbClient.isConnected()) {
  //         await dbClient.connect();
  //       }
  //       db = dbClient.db("merng");
  //     } catch (error) {
  //       console.log(
  //         "----> error while connecting with graphql context (db)",
  //         error
  //       );
  //     }
  //   }
  //   return { db };
  // },
});
export default connectDB(apolloServer.createHandler({ path: "/api/graphql" }));
