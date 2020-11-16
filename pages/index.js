import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";
import { FETCH_POSTS_QUERY } from "../utils/graphql";

import PostCard from "../components/PostCard";
// import PostForm from "../components/PostForm";
// import { AuthContext } from "../context/Auth";
import { ViewportContext } from "../context/Viewport";

const Home = () => {
  // const { user } = useContext(AuthContext);
  const { mobile } = useContext(ViewportContext);
  const { loading, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );
  return (
    <Grid columns={mobile ? 1 : 3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {/* {user && (
          <Grid.Column style={{ marginBottom: 20 }}>
            <PostForm />
          </Grid.Column>
        )} */}
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard {...post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
