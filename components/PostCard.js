import React, { useContext } from "react";
import { Card, Icon, Label, Image, Button, Popup } from "semantic-ui-react";
import moment from "moment";
import Link from "next/link";
// import { AuthContext } from "../context/Auth";
// import LikeButton from "./LikeButton";
// import DeleteButton from "./DeleteButton";

const PostCard = ({
  body,
  createdAt,
  username,
  // likeCount,
  commentCount,
  // likes,
  id,
}) => {
  // const { user } = useContext(AuthContext);
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} href={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <LikeButton user={user} post={{ id, likes, likeCount }} /> */}
        {/* <Popup
          content="View and write comments for this post"
          inverted
          trigger={
            <Button as={Link} labelPosition="right" href={`/posts/${id}`}>
              <Button color="blue" basic>
                <Icon name="comments" />
              </Button>
              <Label basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          }
        /> */}
        hello
        {/* {user && user.username === username && <DeleteButton postId={id} />} */}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
